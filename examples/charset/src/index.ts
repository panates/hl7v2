/*
 * Character sets and escaping. A message is text until it is sent or
 * stored: toBuffer() encodes it with the character set MSH-18 names, and
 * parse() of a Buffer decodes it the same way. Delimiters inside values are
 * escaped as they are written and unescaped as they are read.
 */
import { HL7_CHARSET_ENCODINGS, HL7Message, MSHSegment } from 'hl7v2';

function message(charset: string): HL7Message {
  const msg = new HL7Message('2.5');
  msg.header.field(MSHSegment.MessageType).fromHL7String('ADT^A08^ADT_A01');
  msg.header.field(MSHSegment.CharacterSet).setValue(charset);
  msg.set('PID-5-1', 'Şahin').set('PID-5-2', 'Gülşen Çağla');
  return msg;
}

/* 1. The same name in three character sets */
console.log('-- Encoding');
for (const charset of ['UNICODE UTF-8', '8859/9', 'ASCII']) {
  const bytes = message(charset).toBuffer();
  const at = bytes.indexOf('PID|||||') + 8;
  const surname = bytes.subarray(at, bytes.indexOf('^', at));
  console.log(
    charset.padEnd(14),
    `${bytes.length} bytes,`,
    'Şahin as',
    surname.toString('hex').replace(/(..)/g, '$1 ').trim(),
  );
}
/*
 * UTF-8 takes two bytes for Ş (c5 9e), 8859/9 - Latin-5, Turkish - one (de);
 * ASCII has no Ş at all, so it is transliterated: Sahin (53), not ?ahin.
 */

/* 2. Reading bytes: MSH-18 says how to decode them */
console.log('\n-- Decoding');
const latin5 = message('8859/9').toBuffer();
const read = HL7Message.parse(latin5);
console.log('MSH-18 :', read.charset); // 8859/9
console.log('Name   :', read.get('PID-5-2'), read.get('PID-5-1')); // Gülşen Çağla Şahin

/*
 * ANSI is not an HL7 value: senders on Windows write it for their code page.
 * Unknown, it is read with defaultCharset (UTF-8 unless given) - and a
 * Turkish Windows sender's bytes come out wrong - until you say what it is.
 */
const ansi = message('ANSI').toBuffer({ defaultCharset: 'windows-1254' });
console.log('ANSI   :', HL7Message.parse(ansi).get('PID-5-1'), '(as UTF-8)');
HL7_CHARSET_ENCODINGS['ANSI'] = 'windows-1254';
console.log(
  'ANSI   :',
  HL7Message.parse(ansi).get('PID-5-1'),
  '(as windows-1254)',
);

/* 3. Escaping: values may hold the delimiters | ^ & ~ \ */
console.log('\n-- Escaping');
const msg = message('UNICODE UTF-8');
msg.set('NTE-3', 'Dose: 5 mg | twice a day ^ after meals & water');
console.log('Written:', msg.getSegment('NTE')!.toHL7String());
console.log('Read   :', HL7Message.parse(msg.toHL7String()).get('NTE-3'));
/*
 * A line break travels as a hex escape, as HAPI writes it. Formatting
 * commands of FT fields - \.br\, \.sp\ - are not escapes: they are kept as
 * they are, for the receiver to render.
 */
msg.set('NTE(1)-3', 'First line\nSecond line');
console.log('Written:', msg.getSegment('NTE', 1)!.toHL7String());
