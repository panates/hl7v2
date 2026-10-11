# Character sets and escaping

A message is text until it is sent or stored. Two things decide how it becomes bytes: **MSH-18**, the character set, and the **escape sequences** that let a value hold the message's own delimiters.

## Character sets

MSH-18 names the character set, with HL7 table 0211's values:

| MSH-18                       | Encoding                                       |
| ---------------------------- | ---------------------------------------------- |
| `ASCII`, `ISO IR6`           | ASCII                                          |
| `8859/1` ... `8859/9`, `8859/15` | ISO 8859-1 ... 8859-9 (Latin-5, Turkish), 8859-15 |
| `UNICODE UTF-8`              | UTF-8                                          |
| `UNICODE`                    | UTF-8 - deprecated in the table; read as UTF-8, as other HL7 systems read it |
| `UNICODE UTF-16`             | UTF-16, big-endian after a byte order mark (`FE FF`), as Java writes it |
| `UNICODE UTF-32`             | UTF-32, with a byte order mark                 |
| `ISO IR14`, `ISO IR87`, `ISO IR159`, `GB 18030-2000`, `KS X 1001`, `CNS 11643-1992`, `BIG-5` | the Japanese, Chinese and Korean sets |

A new message (2.3 and later) gets `UNICODE UTF-8`. MSH-18 may repeat; the first non-empty repetition counts (`~UNICODE UTF-8` is UTF-8).

### Writing bytes

```typescript
msg.header.field(MSHSegment.CharacterSet).setValue('8859/9');
const bytes = msg.toBuffer(); // Latin-5
```

A character the set cannot hold is **transliterated** to its closest ASCII form - `Şahin Gül` goes out as `Sahin Gul` in ASCII; in 8859/1 only `Ş` is replaced - rather than becoming `?`. A transliteration never produces a delimiter, so the message structure cannot change.

### Reading bytes

```typescript
const msg = HL7Message.parse(bytes);
msg.charset; // '8859/9'
```

A byte order mark (UTF-8, UTF-16, UTF-32) is looked for first - after an MLLP start block - since a UTF-16 message cannot be read otherwise. Then the header is read as ASCII, MSH-18 found, and the whole decoded in it.

### Unknown character sets

A value the library does not know - `ANSI`, which is not in the standard and means whatever code page the sender's Windows uses - is read and written with `defaultCharset` (UTF-8 unless given), and on the network a `warning` event reports it. Say what it means when you know:

```typescript
import { HL7_CHARSET_ENCODINGS } from 'hl7v2';

HL7_CHARSET_ENCODINGS['ANSI'] = 'windows-1254'; // a Turkish Windows sender
HL7Message.parse(bytes, { defaultCharset: 'windows-1254' }); // or only for this message
```

UTF-8 is the default because it reads ASCII as well, and does not garble what is not. Any iconv-lite encoding name works as a value too.

Helpers: `charsetFromMSH18()`, `resolveHL7Encoding()`, `findHL7Encoding()`, `encodeHL7String()`, `detectByteOrderMark()` - see the [API reference](api/hl7v2.md).

## Escape sequences

A value holding one of the message's delimiters is written with an escape sequence, and read back:

| Sequence    | Stands for                                  |
| ----------- | ------------------------------------------- |
| `\F\`       | the field separator, `\|`                   |
| `\S\`       | the component separator, `^`                |
| `\T\`       | the sub-component separator, `&`            |
| `\R\`       | the repetition separator, `~`               |
| `\E\`       | the escape character, `\`                   |
| `\Xdddd\`   | hexadecimal data: bytes, in the message's character set |

```typescript
msg.set('NTE-3', 'Dose: 5 mg | twice a day ^ after meals & water');
msg.getSegment('NTE')!.toHL7String(); // NTE|||Dose: 5 mg \F\ twice a day \S\ after meals \T\ water
msg.get('NTE-3'); // the value as set
```

The message's own delimiters are used: a message declaring `MSH#$*@%` escapes `#`, `$`, `@` ... and not `|`.

Sequences that are instructions to the receiver, not data, are **kept as written** and written back unchanged:

| Sequence                     | Meaning                                       |
| ---------------------------- | --------------------------------------------- |
| `\H\`, `\N\`                 | highlighting on, off                          |
| `\.br\`, `\.sp\`, `\.in\` ...| formatting commands of FT fields              |
| `\Cxxyy\`, `\Mxxyyzz\`       | character set switches (ISO 2022)             |
| `\Zxx\`                      | locally defined                               |

A value that is hexadecimal data as a whole (`\X0A0B\`) is binary data: `getValue()` gives a `Buffer`, and a `Buffer` set is written so.

## Line breaks in values

| Character | Written as  | Why                                                                   |
| --------- | ----------- | --------------------------------------------------------------------- |
| CR        | `\X000d\`   | the form HL7 systems commonly read as a carriage return; raw, a CR would end the segment |
| LF, tab   | as it is    | they end nothing in a message                                         |
| VT, FS and other control characters | `\Xhh\` | raw, a VT or FS would end the MLLP frame              |

Reading, `\X000d\`, `\X0D\` and every other hexadecimal sequence are taken. A text field's line break is often written by senders as the formatting command `\.br\`, which is kept as written.
