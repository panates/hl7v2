export type HL7Version =
  | `${number}.${number}`
  | `${number}.${number}.${number}`;

export namespace HL7Version {
  export const v2_1: HL7Version = '2.1';
  export const v2_2 = '2.2';
  export const v2_3 = '2.3';
  export const v2_3_1 = '2.3.1';
  export const v2_4 = '2.4';
  export const v2_5 = '2.5';
  export const v2_5_1 = '2.5.1';
  export const v2_6 = '2.6';
  export const v2_7 = '2.7';
  export const v2_7_1 = '2.7.1';
  export const v2_8 = '2.8';
}
