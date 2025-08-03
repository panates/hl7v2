import { vg } from 'valgen';

export const decodeHL7Date = vg.isDateString({
  precisionMin: 'year',
  trim: 'day',
  coerce: true,
});

export const decodeHL7DateTime = vg.isDateString({
  precisionMin: 'year',
  coerce: true,
});

export const decodeHL7Time = vg.isTime({
  coerce: true,
});

export function encodeHL7Date(value: Date): string {
  return decodeHL7Date(value).replace(/[-T:]/g, '');
}

export function encodeHL7DateTime(value: Date): string {
  return decodeHL7DateTime(value).replace(/[-T:]/g, '');
}

export function encodeHL7Time(value: Date | string): string {
  return decodeHL7Time(value).replace(/:/g, '');
}
