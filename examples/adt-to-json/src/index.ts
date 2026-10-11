/*
 * Mapping HL7 to an application's own model and back. The typed segment
 * objects do the reading and writing; the mapping is plain code the
 * compiler checks against the version's definitions.
 */
import { readFileSync } from 'node:fs';
import { HL7Message, type HL7SegmentObject, MSHSegment } from 'hl7v2';

/* The application's model of a patient */
interface Patient {
  identifiers: { value: string; type?: string; assigner?: string }[];
  family?: string;
  given: string[];
  prefix?: string;
  gender: 'female' | 'male' | 'other' | 'unknown';
  /** YYYY-MM-DD */
  birthDate?: string;
  address?: {
    line?: string;
    city?: string;
    postalCode?: string;
    country?: string;
  };
  phone?: string;
}

type PID = HL7SegmentObject<'2.5', 'PID'>;

/* HL7 table 0001 (Administrative Sex) to the model's genders */
const GENDERS: Record<string, Patient['gender']> = {
  F: 'female',
  M: 'male',
  O: 'other',
  A: 'other',
  U: 'unknown',
};

/* An HL7 date/time's date, as written: 19800512 -> 1980-05-12. Read as text
 * rather than as a Date, so no time zone moves it a day */
const isoDate = (hl7?: string | null) =>
  hl7 && hl7.length >= 8
    ? `${hl7.slice(0, 4)}-${hl7.slice(4, 6)}-${hl7.slice(6, 8)}`
    : undefined;

function fromHL7(pid: PID): Patient {
  const name = pid.PatientName?.[0];
  const address = pid.PatientAddress?.[0];
  const phone = pid.PhoneNumberHome?.[0];
  return {
    identifiers: (pid.PatientIdentifierList ?? []).map(id => ({
      value: String(id.IDNumber),
      type: id.IdentifierTypeCode ?? undefined,
      assigner: id.AssigningAuthority?.NamespaceID ?? undefined,
    })),
    family: name?.FamilyName?.Surname ?? undefined,
    given: [
      name?.GivenName,
      name?.SecondAndFurtherGivenNamesOrInitialsThereof,
    ].filter((n): n is string => !!n),
    prefix: name?.Prefix ?? undefined,
    gender: GENDERS[pid.AdministrativeSex ?? ''] ?? 'unknown',
    birthDate: isoDate(pid.DateTimeOfBirth?.Time),
    address: address && {
      line: address.StreetAddress?.StreetOrMailingAddress ?? undefined,
      city: address.City ?? undefined,
      postalCode: address.ZipOrPostalCode ?? undefined,
      country: address.Country ?? undefined,
    },
    phone: phone
      ? [phone.CountryCode, phone.AreaCityCode, phone.LocalNumber].join(' ')
      : undefined,
  };
}

function toHL7(patient: Patient): HL7Message<'2.5'> {
  const msg = new HL7Message('2.5');
  msg.header.field(MSHSegment.SendingApplication).setValue('MY-APP');
  msg.header.field(MSHSegment.MessageType).fromHL7String('ADT^A08^ADT_A01');
  msg.set('EVN-1', 'A08').set('EVN-2', new Date());
  /* assign() takes 2.5's PID: a misspelt name is a compile error */
  msg.addSegment('PID').assign({
    SetID: 1,
    PatientIdentifierList: patient.identifiers.map(id => ({
      IDNumber: id.value,
      IdentifierTypeCode: id.type,
      AssigningAuthority: id.assigner
        ? { NamespaceID: id.assigner }
        : undefined,
    })),
    PatientName: [
      {
        FamilyName: { Surname: patient.family },
        GivenName: patient.given[0],
        SecondAndFurtherGivenNamesOrInitialsThereof: patient.given[1],
        Prefix: patient.prefix,
      },
    ],
    DateTimeOfBirth: { Time: patient.birthDate?.replace(/-/g, '') },
    AdministrativeSex:
      Object.keys(GENDERS).find(k => GENDERS[k] === patient.gender) ?? 'U',
  });
  msg.addSegment('PV1').assign({ SetID: 1, PatientClass: 'N' });
  return msg;
}

/* HL7 -> model */
const text = readFileSync(
  new URL('../../messages/adt-a01.hl7', import.meta.url),
  'utf8',
);
const received = HL7Message.parse(text, { version: '2.5' });
const patient = fromHL7(received.getSegmentObject('PID')!);
console.log(JSON.stringify(patient, null, 2));

/* The application changes it ... */
patient.given = ['Ayşe'];
patient.identifiers.push({ value: 'P-778899', type: 'PPN', assigner: 'TUR' });

/* ... model -> HL7: an update (A08) for the other systems */
const update = toHL7(patient);
console.log('\n' + update.toHL7String().replace(/\r/g, '\n'));
console.log(
  'Valid:',
  update.validate().map(e => e.message),
  '\nRound trip:',
  JSON.stringify(fromHL7(update.getSegmentObject('PID')!)) ===
    JSON.stringify({ ...patient, address: undefined, phone: undefined }),
);
