import { createRequire } from 'node:module';
import { expect } from 'expect';
import {
  dictionaries,
  findNearestHL7Version,
  type HL7Dictionary,
  type HL7Version,
} from '../src/index.js';

const require = createRequire(import.meta.url);
/** The source the data is generated from (support/build-dictionary.mts) */
const source: Record<string, any> = require('hl7-dictionary').definitions;

const OPTIONALITY: Record<number, string> = { 1: 'O', 2: 'R', 3: 'C', 4: 'B' };

function expectedField(f: any) {
  const d: any = { type: f.datatype };
  if (f.desc != null) d.desc = f.desc;
  if (OPTIONALITY[f.opt]) d.opt = OPTIONALITY[f.opt];
  if (f.rep != null) d.rep = f.rep === 0 ? 'infinite' : f.rep;
  if (f.len != null) d.len = f.len;
  if (f.table != null) d.table = f.table;
  return d;
}

/** A definition without the value conversions attached to it */
function dataOf(fields: Record<string, any> = {}) {
  return Object.values(fields).map(f => {
    const d = { ...f };
    delete d.decode;
    delete d.encode;
    return d;
  });
}

describe('dictionary:dictionaries', () => {
  describe('content', () => {
    for (const version of Object.keys(source)) {
      describe(version, () => {
        const dict = () => dictionaries[version as HL7Version];
        const src = source[version];

        it('should hold exactly the segments of its version', () => {
          expect(Object.keys(dict().segments).sort()).toEqual(
            Object.keys(src.segments).sort(),
          );
          for (const [name, seg] of Object.entries<any>(src.segments)) {
            expect([name, dataOf(dict().segments[name].fields)]).toEqual([
              name,
              seg.fields.map(expectedField),
            ]);
          }
        });

        it('should hold exactly the data types of its version', () => {
          expect(Object.keys(dict().types).sort()).toEqual(
            Object.keys(src.fields).sort(),
          );
          for (const [name, type] of Object.entries<any>(src.fields)) {
            expect([name, dataOf(dict().types[name].fields)]).toEqual([
              name,
              (type.subfields || []).map(expectedField),
            ]);
          }
        });

        it('should hold exactly the message structures of its version', () => {
          expect(Object.keys(dict().messages).sort()).toEqual(
            Object.keys(src.messages || {}).sort(),
          );
        });

        it('should define every data type a field refers to', () => {
          const { segments, types } = dict();
          const missing: string[] = [];
          for (const [name, def] of [
            ...Object.entries(segments),
            ...Object.entries(types),
          ]) {
            for (const [pos, f] of Object.entries<any>(def.fields || {})) {
              if (!types[f.type]) missing.push(`${name}.${pos}: ${f.type}`);
            }
          }
          expect(missing).toEqual([]);
        });
      });
    }

    it('should keep every element of a message structure', () => {
      /* Siblings sharing a name used to overwrite each other (320 in the source) */
      const kids = (n: any): any[] => n.segments?.segments || n.children || [];
      const count = (n: any): number =>
        kids(n).reduce((sum: number, c: any) => sum + 1 + count(c), 0);
      const countOurs = (n: any): number =>
        Object.values<any>(n.segments || {}).reduce(
          (sum: number, c: any) => sum + 1 + countOurs(c),
          0,
        );
      for (const [version, def] of Object.entries<any>(source)) {
        for (const [name, msg] of Object.entries<any>(def.messages || {})) {
          const ours = dictionaries[version as HL7Version].messages[name];
          expect([version, name, countOurs(ours)]).toEqual([
            version,
            name,
            count(msg),
          ]);
        }
      }
    });

    it('should key repeated segments as HAPI does, naming their type', () => {
      const a17 = dictionaries['2.5'].messages.ADT_A17.segments!;
      expect(a17.PID.segment).toBeUndefined();
      expect(a17.PID2).toMatchObject({ segment: 'PID', min: 1, max: 1 });
      expect(a17.PID2.idx).toBeGreaterThan(a17.PID.idx);
    });

    it('should keep standard group names and list the others as aliases', () => {
      const oru23 = dictionaries['2.3'].messages.ORU_R01.segments!;
      expect(Object.keys(oru23)).toEqual(['MSH', 'RESPONSE', 'DSC']);
      expect(oru23.RESPONSE.aliases).toEqual(['PATIENT_RESULT']);
      const oru25 = dictionaries['2.5'].messages.ORU_R01.segments!;
      expect(oru25.PATIENT_RESULT.aliases).toEqual(['RESPONSE']);
      /* renamed in 2.4, renamed back in 2.6 */
      expect(
        dictionaries['2.4'].messages.ADT_A40.segments!.PATIENT_ID.aliases,
      ).toEqual(['PATIENT']);
      expect(
        dictionaries['2.6'].messages.ADT_A40.segments!.PATIENT.aliases,
      ).toEqual(['PATIENT_ID']);
      /* a typo in one version still finds the group */
      const oml26 = dictionaries['2.6'].messages.OML_O21;
      const timing = JSON.stringify(oml26).includes('"TIIMING"');
      expect(timing).toBe(true);
      expect(JSON.stringify(oml26)).toContain('"aliases":["TIMING"]');
    });

    it('should attach value conversions to the types that have them', () => {
      const d25 = dictionaries['2.5'];
      expect(d25.types.DT.decode).toBeInstanceOf(Function);
      expect(d25.types.NM.decode!('12.5')).toEqual(12.5);
      expect(d25.types.SI.decode!('7')).toEqual(7);
      expect(d25.types.TM.decode).toBeInstanceOf(Function);
      expect(d25.types.DTM.decode).toBeInstanceOf(Function);
      expect(d25.types.TS.fields!['1'].decode).toBeInstanceOf(Function);
      /* TS was withdrawn in 2.7; DTM carries the conversion there */
      expect(dictionaries['2.7'].types.TS).toBeUndefined();
      expect(dictionaries['2.7'].types.DTM.decode).toBeInstanceOf(Function);
    });
  });

  describe('sharing', () => {
    it('should share a definition that is identical in two versions', () => {
      expect(dictionaries['2.5.1'].segments.MSH).toBe(
        dictionaries['2.5'].segments.MSH,
      );
    });

    it('should freeze shared definitions', () => {
      const msh = dictionaries['2.5'].segments.MSH;
      expect(Object.isFrozen(msh)).toBe(true);
      expect(Object.isFrozen(msh.fields)).toBe(true);
      expect(Object.isFrozen(msh.fields['1'])).toBe(true);
      expect(() => {
        (msh.fields['1'] as any).len = 99;
      }).toThrow();
    });

    it('should change one version only through overwriteSegments()', () => {
      const base = dictionaries['2.5'];
      const copy: HL7Dictionary = base.extend({});
      copy.overwriteSegments({ MSH: { fields: { '3': { len: 999 } } } });
      expect(copy.segments.MSH.fields['3'].len).toEqual(999);
      /* the rest of the field is kept */
      expect(copy.segments.MSH.fields['3'].type).toEqual(
        base.segments.MSH.fields['3'].type,
      );
      expect(base.segments.MSH.fields['3'].len).not.toEqual(999);
      expect(dictionaries['2.5.1'].segments.MSH.fields['3'].len).not.toEqual(
        999,
      );
    });

    it('should extend with new definitions and keep the others shared', () => {
      const base = dictionaries['2.5'];
      const ext = base.extend({
        segments: { ZZZ: { desc: 'Custom', fields: { '1': { type: 'ST' } } } },
        messages: { ZZZ_Z01: { desc: 'Custom message' } },
      });
      expect(ext.segments.ZZZ.fields['1'].type).toEqual('ST');
      expect(ext.segments.PID).toBe(base.segments.PID);
      /* messages are merged, not replaced */
      expect(ext.messages.ZZZ_Z01.desc).toEqual('Custom message');
      expect(ext.messages.ADT_A01).toBe(base.messages.ADT_A01);
      expect(base.segments.ZZZ).toBeUndefined();
      expect(base.messages.ZZZ_Z01).toBeUndefined();
    });
  });

  describe('loading', () => {
    it('should build a version on first access and keep it', () => {
      const first = dictionaries['2.4'];
      expect(dictionaries['2.4']).toBe(first);
      expect(Object.getOwnPropertyDescriptor(dictionaries, '2.4')!.value).toBe(
        first,
      );
    });

    it('should accept a replacement dictionary', () => {
      const original = dictionaries['2.2'];
      try {
        const custom = original.extend({});
        dictionaries['2.2'] = custom;
        expect(dictionaries['2.2']).toBe(custom);
      } finally {
        dictionaries['2.2'] = original;
      }
    });

    it('should list every version in order', () => {
      expect(Object.keys(dictionaries)).toEqual([
        '2.1',
        '2.2',
        '2.3',
        '2.3.1',
        '2.4',
        '2.5',
        '2.5.1',
        '2.6',
        '2.7',
        '2.7.1',
        '2.8',
      ]);
    });

    it('should serve 2.8 with the 2.7.1 definitions under its own number', () => {
      expect(dictionaries['2.8'].version).toEqual('2.8');
      expect(dictionaries['2.8'].segments.PID).toBe(
        dictionaries['2.7.1'].segments.PID,
      );
    });
  });

  describe('findNearestHL7Version()', () => {
    it('should pick the newest version not newer than the given one', () => {
      expect(findNearestHL7Version('2.5' as HL7Version)).toEqual('2.5');
      expect(findNearestHL7Version('2.5.2' as HL7Version)).toEqual('2.5.1');
      expect(findNearestHL7Version('2.3.2' as HL7Version)).toEqual('2.3.1');
      expect(findNearestHL7Version('2.9' as HL7Version)).toEqual('2.8');
      /* compared as numbers: 2.10 is newer than 2.9 */
      expect(findNearestHL7Version('2.10' as HL7Version)).toEqual('2.8');
    });

    it('should fall back to the oldest version', () => {
      expect(findNearestHL7Version('2.0' as HL7Version)).toEqual('2.1');
    });
  });
});
