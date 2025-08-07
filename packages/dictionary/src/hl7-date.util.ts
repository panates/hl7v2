import { vg } from 'valgen';

export function toHL7Date(value: Date | string): string {
  return _toHL7Date(value).replace(/[-T:]/g, '');
}

export function toHL7DateTime(value: Date | string): string {
  const v = _toHL7DateTime(value).replace(/[-T:]/g, '');
  if (v.length > 8 && v.endsWith('000000')) return v.substring(0, 8);
  if (v.length === 14 && v.endsWith('00')) return v.substring(0, 12);
  return v;
}

export function toHL7Time(value: Date | string): string {
  return _toHL7Time(value).replace(/:/g, '');
}

const _toHL7Date = vg.isDateString({
  precisionMin: 'year',
  trim: 'day',
  coerce: true,
});

const _toHL7DateTime = vg.isDateString({
  precisionMin: 'year',
  coerce: true,
});

const _toHL7Time = vg.isTime({
  coerce: true,
});
