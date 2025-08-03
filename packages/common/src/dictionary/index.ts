import { HL7Dictionary } from '../hl7-dictionary.js';
import { HL7Version } from '../interfaces/index.js';
import dict_2_1 from './2.1/index.js';
import dict_2_2 from './2.2/index.js';
import dict_2_3_1 from './2.3.1/index.js';
import dict_2_3 from './2.3/index.js';
import dict_2_4 from './2.4/index.js';
import dict_2_5_1 from './2.5.1/index.js';
import dict_2_5 from './2.5/index.js';
import dict_2_6 from './2.6/index.js';
import dict_2_7_1 from './2.7.1/index.js';
import dict_2_7 from './2.7/index.js';
import dict_2_8 from './2.8/index.js';

export * from './segment-fields/index.js';
export * from './tables/index.js';
export * from './type-fields/index.js';

export const dictionaries: Record<HL7Version, HL7Dictionary> = {
  [HL7Version.v2_1]: dict_2_1,
  [HL7Version.v2_2]: dict_2_2,
  [HL7Version.v2_3]: dict_2_3,
  [HL7Version.v2_3_1]: dict_2_3_1,
  [HL7Version.v2_4]: dict_2_4,
  [HL7Version.v2_5]: dict_2_5,
  [HL7Version.v2_5_1]: dict_2_5_1,
  [HL7Version.v2_6]: dict_2_6,
  [HL7Version.v2_7]: dict_2_7,
  [HL7Version.v2_7_1]: dict_2_7_1,
  [HL7Version.v2_8]: dict_2_8,
};

export function findNearestHL7Version(version: HL7Version): HL7Version {
  const versions = (Object.keys(dictionaries) as HL7Version[]).reverse();
  const index = versions.findIndex(v => v <= version);
  return versions[index] || HL7Version.v2_1;
}
