import ca.uhn.hl7v2.AcknowledgmentCode;
import ca.uhn.hl7v2.DefaultHapiContext;
import ca.uhn.hl7v2.ErrorCode;
import ca.uhn.hl7v2.HL7Exception;
import ca.uhn.hl7v2.HapiContext;
import ca.uhn.hl7v2.Location;
import ca.uhn.hl7v2.model.Message;
import ca.uhn.hl7v2.parser.DefaultEscaping;
import ca.uhn.hl7v2.parser.EncodingCharacters;
import ca.uhn.hl7v2.parser.PipeParser;
import ca.uhn.hl7v2.util.Terser;
import ca.uhn.hl7v2.util.idgenerator.InMemoryIDGenerator;
import ca.uhn.hl7v2.validation.impl.ValidationContextFactory;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

/**
 * Runs the cases of packages/hl7v2/test/hapi/cases.json through HAPI HL7v2
 * and writes what HAPI gives, for the library's tests to compare with:
 *
 *   read      parse, then each path's value (Terser.get) and the message
 *             encoded again
 *   write     parse, set values by path (Terser.set), encode
 *   escape    DefaultEscaping.escape / unescape of values
 *   ack       generateACK(): the acknowledgment's MSH fields and MSA
 *   nak       generateACK(AE, HL7Exception): its MSA and ERR segments
 *
 * A path is the library's: one not starting with "/" is searched in the
 * whole message, which is Terser's "/.".
 */
public class Oracle {
  static final HapiContext context = new DefaultHapiContext();
  static PipeParser parser;

  public static void main(String[] args) throws Exception {
    context.setValidationContext(ValidationContextFactory.noValidation());
    /* Control IDs from memory: HAPI's default keeps them in ./id_file */
    context.getParserConfiguration().setIdGenerator(new InMemoryIDGenerator());
    parser = context.getPipeParser();
    Gson gson = new GsonBuilder().setPrettyPrinting().disableHtmlEscaping()
        .serializeNulls().create();
    JsonObject cases = gson.fromJson(
        Files.readString(Path.of(args[0]), StandardCharsets.UTF_8), JsonObject.class);
    JsonObject out = new JsonObject();
    out.addProperty("hapi", "2.6.0");
    out.add("read", each(cases, "read", Oracle::read));
    out.add("write", each(cases, "write", Oracle::write));
    out.add("escape", each(cases, "escape", Oracle::escape));
    out.add("ack", each(cases, "ack", Oracle::ack));
    out.add("nak", each(cases, "nak", Oracle::nak));
    Files.writeString(Path.of(args[1]), gson.toJson(out) + "\n", StandardCharsets.UTF_8);
  }

  interface Run { JsonElement apply(JsonObject c) throws Exception; }

  static JsonObject each(JsonObject cases, String kind, Run run) {
    JsonObject out = new JsonObject();
    if (!cases.has(kind)) return out;
    for (JsonElement e : cases.getAsJsonArray(kind)) {
      JsonObject c = e.getAsJsonObject();
      String name = c.get("name").getAsString();
      try {
        out.add(name, run.apply(c));
      } catch (Exception ex) {
        JsonObject err = new JsonObject();
        err.addProperty("error", ex.getClass().getSimpleName() + ": " + ex.getMessage());
        out.add(name, err);
      }
    }
    return out;
  }

  static String text(JsonObject c) {
    List<String> lines = new ArrayList<>();
    for (JsonElement l : c.getAsJsonArray("message")) lines.add(l.getAsString());
    return String.join("\r", lines);
  }

  static String terserPath(String path) {
    return path.startsWith("/") ? path : "/." + path;
  }

  static JsonObject read(JsonObject c) throws Exception {
    Message msg = parser.parse(text(c));
    /* Encoded before reading: Terser.get() creates the repetitions it reads */
    String encoded = parser.encode(msg);
    Terser terser = new Terser(msg);
    JsonObject values = new JsonObject();
    if (c.has("paths")) {
      for (JsonElement p : c.getAsJsonArray("paths")) {
        String path = p.getAsString();
        try {
          values.addProperty(path, terser.get(terserPath(path)));
        } catch (Exception ex) {
          values.addProperty(path, "!error: " + ex.getMessage());
        }
      }
    }
    JsonObject out = new JsonObject();
    out.add("values", values);
    out.addProperty("encoded", encoded);
    return out;
  }

  static JsonObject write(JsonObject c) throws Exception {
    Message msg = parser.parse(text(c));
    Terser terser = new Terser(msg);
    for (JsonElement s : c.getAsJsonArray("set")) {
      JsonArray pair = s.getAsJsonArray();
      terser.set(terserPath(pair.get(0).getAsString()), pair.get(1).getAsString());
    }
    JsonObject out = new JsonObject();
    out.addProperty("encoded", parser.encode(msg));
    return out;
  }

  static JsonObject escape(JsonObject c) {
    DefaultEscaping escaping = new DefaultEscaping();
    EncodingCharacters enc = EncodingCharacters.defaultInstance();
    JsonArray escaped = new JsonArray();
    JsonArray unescaped = new JsonArray();
    for (JsonElement v : c.getAsJsonArray("values")) {
      escaped.add(escaping.escape(v.getAsString(), enc));
      unescaped.add(escaping.unescape(v.getAsString(), enc));
    }
    JsonObject out = new JsonObject();
    out.add("escaped", escaped);
    out.add("unescaped", unescaped);
    return out;
  }

  /* The acknowledgment's fields that do not change from run to run */
  static final String[] ACK_FIELDS = {
    "MSH-3", "MSH-4", "MSH-5", "MSH-6", "MSH-9-1", "MSH-9-2", "MSH-9-3",
    "MSH-11", "MSH-12", "MSH-15", "MSH-16", "MSH-18"
  };

  static JsonObject ackFields(Message ack) throws Exception {
    Terser terser = new Terser(ack);
    JsonObject fields = new JsonObject();
    for (String f : ACK_FIELDS) fields.addProperty(f, terser.get("/" + f));
    return fields;
  }

  /* The segments after MSH, as encoded */
  static JsonArray body(Message ack) throws Exception {
    JsonArray segments = new JsonArray();
    String[] lines = parser.encode(ack).split("\r");
    for (int i = 1; i < lines.length; i++) segments.add(lines[i]);
    return segments;
  }

  static JsonObject ack(JsonObject c) throws Exception {
    Message msg = parser.parse(text(c));
    Message ack = msg.generateACK();
    JsonObject out = new JsonObject();
    out.add("fields", ackFields(ack));
    out.add("segments", body(ack));
    return out;
  }

  static JsonObject nak(JsonObject c) throws Exception {
    Message msg = parser.parse(text(c));
    JsonObject e = c.getAsJsonObject("error");
    HL7Exception ex = new HL7Exception(
        e.get("text").getAsString(), ErrorCode.errorCodeFor(e.get("code").getAsInt()));
    Location location = new Location();
    if (e.has("segment")) location.withSegmentName(e.get("segment").getAsString());
    if (e.has("segmentRepetition")) location.withSegmentRepetition(e.get("segmentRepetition").getAsInt());
    if (e.has("field")) location.withField(e.get("field").getAsInt());
    if (e.has("fieldRepetition")) location.withFieldRepetition(e.get("fieldRepetition").getAsInt());
    if (e.has("component")) location.withComponent(e.get("component").getAsInt());
    if (e.has("subcomponent")) location.withSubcomponent(e.get("subcomponent").getAsInt());
    ex.setLocation(location);
    Message ack = msg.generateACK(
        e.has("ackCode") ? AcknowledgmentCode.valueOf(e.get("ackCode").getAsString())
                         : AcknowledgmentCode.AE, ex);
    JsonObject out = new JsonObject();
    out.add("fields", ackFields(ack));
    out.add("segments", body(ack));
    return out;
  }
}
