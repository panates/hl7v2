import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect } from 'expect';
import {
  dictionaries,
  findNearestHL7Version,
  type HL7Dictionary,
  type HL7MessageSegmentsDefinition,
  type HL7Version,
} from '../src/index.js';

const VERSIONS = [
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
  '2.8.1',
  '2.8.2',
  '2.9',
] as HL7Version[];

const schemasDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../../support/hl7-schemas',
);

type Structure = Record<string, HL7MessageSegmentsDefinition>;

function walk(
  structure: Structure,
  fn: (key: string, node: HL7MessageSegmentsDefinition) => void,
) {
  for (const [key, node] of Object.entries(structure)) {
    fn(key, node);
    if (node.segments) walk(node.segments, fn);
  }
}

describe('dictionary:dictionaries', () => {
  describe('consistency', () => {
    for (const version of VERSIONS) {
      describe(version, () => {
        const dict = () => dictionaries[version];

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

        it('should start every message structure with MSH', () => {
          const wrong = Object.entries(dict().messages)
            .filter(([, m]) => {
              const [first] = Object.entries(m.segments || {}).sort(
                ([, a], [, b]) => a.idx - b.idx,
              );
              return first?.[0] !== 'MSH';
            })
            .map(([name]) => name);
          expect(wrong).toEqual([]);
        });

        it('should name only defined segments in message structures', () => {
          const { segments, messages } = dict();
          const unknown = new Set<string>();
          for (const m of Object.values(messages)) {
            walk(m.segments || {}, (key, node) => {
              const seg = node.segment || key;
              /* the standard's placeholders: any segment, any Z segment */
              const placeholder = /^any(HL7|Z)Segment$/.test(seg);
              if (!node.segments && !segments[seg] && !placeholder) {
                unknown.add(seg);
              }
            });
          }
          expect([...unknown]).toEqual([]);
        });

        it('should serve a trigger event with its structure definition', () => {
          const { messages } = dict();
          const shared = Object.keys(messages).filter(name =>
            Object.keys(messages).find(
              other => other !== name && messages[other] === messages[name],
            ),
          );
          /* every version maps at least some events to a shared structure */
          expect(shared.length).toBeGreaterThan(0);
        });
      });
    }
  });

  describe('content (from the HL7 v2 XML schemas)', () => {
    it('should define fields as the standard does', () => {
      const pid = dictionaries['2.5'].segments.PID.fields;
      expect(pid['3']).toMatchObject({
        type: 'CX',
        desc: 'Patient Identifier List',
        opt: 'R',
        rep: 'infinite',
        len: 250,
      });
      /* MSH-7 became a DTM in 2.6 */
      expect(dictionaries['2.5'].segments.MSH.fields['7'].type).toEqual('TS');
      expect(dictionaries['2.6'].segments.MSH.fields['7'].type).toEqual('DTM');
    });

    it('should leave out a field the version withdrew', () => {
      /* DG1-2 (Diagnosis Coding Method) is withdrawn in 2.6 */
      expect(dictionaries['2.5'].segments.DG1.fields['2']).toBeDefined();
      expect(dictionaries['2.6'].segments.DG1.fields['2']).toBeUndefined();
      /* and the fields after it keep their numbers */
      expect(dictionaries['2.6'].segments.DG1.fields['3'].type).toEqual('CWE');
    });

    it('should hold a choice as one, of its alternatives', () => {
      const choices: string[][] = [];
      walk(dictionaries['2.5'].messages.ORM_O01.segments!, (key, node) => {
        if (node.choice) choices.push(Object.keys(node.segments!));
      });
      expect(choices).toEqual([['OBR', 'RQD', 'RQ1', 'RXO', 'ODS', 'ODT']]);
    });

    it('should serve an event by the structure it uses', () => {
      const d = dictionaries['2.5'];
      expect(d.messages.ADT_A04).toBe(d.messages.ADT_A01);
      expect(d.messages.ADT_A08).toBe(d.messages.ADT_A01);
      expect(d.messages.ADT_A01.segments!.SFT).toBeDefined();
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

  describe('against the HL7 v2 XML schemas', function () {
    /* The schemas are licensed by HL7 and not in the repository; see
       support/hl7-sources.mts. Without them these checks are skipped. */
    let readSchemas: (version: string) => any;
    let normalizeType: (type: string) => string;
    before(async function () {
      if (!fs.existsSync(schemasDir)) return this.skip();
      ({ readSchemas, normalizeType } = await import(
        '../../../support/hl7-sources.mts' as string
      ));
    });

    for (const version of VERSIONS) {
      it(`${version} should match the schemas`, () => {
        const schemas = readSchemas(version);
        const dict = dictionaries[version];
        const diffs: string[] = [];
        for (const [name, list] of Object.entries<any[]>(schemas.segments)) {
          const ours = dict.segments[name]?.fields;
          if (!ours) {
            diffs.push(`segment ${name} missing`);
            continue;
          }
          list.forEach((f, i) => {
            if (!f) return;
            const o = ours[String(i + 1)];
            const at = `${name}.${i + 1}`;
            /* Sun's early schemas write every composite CM_* type as CM */
            const type =
              f.type === 'CM' && o?.type.startsWith('CM') ? o.type : f.type;
            if (o?.type !== normalizeType(type)) {
              diffs.push(`${at} type ${o?.type} / ${type}`);
            }
            if ((o?.opt === 'R') !== f.min >= 1) {
              diffs.push(`${at} opt ${o?.opt} / min ${f.min}`);
            }
            const rep = f.max === 0 ? 'infinite' : f.max;
            if (o?.rep !== rep) diffs.push(`${at} rep ${o?.rep} / ${rep}`);
            if (f.table !== undefined && o?.table !== f.table) {
              diffs.push(`${at} table ${o?.table} / ${f.table}`);
            }
          });
        }
        for (const name of Object.keys(schemas.structures)) {
          if (!dict.messages[name]) diffs.push(`message ${name} missing`);
        }
        expect(diffs).toEqual([]);
      });
    }
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
      expect(Object.keys(dictionaries)).toEqual(VERSIONS);
    });
  });

  describe('findNearestHL7Version()', () => {
    it('should pick the newest version not newer than the given one', () => {
      expect(findNearestHL7Version('2.5' as HL7Version)).toEqual('2.5');
      expect(findNearestHL7Version('2.5.2' as HL7Version)).toEqual('2.5.1');
      expect(findNearestHL7Version('2.3.2' as HL7Version)).toEqual('2.3.1');
      expect(findNearestHL7Version('2.8.3' as HL7Version)).toEqual('2.8.2');
      /* compared as numbers: 2.10 is newer than 2.9 */
      expect(findNearestHL7Version('2.10' as HL7Version)).toEqual('2.9');
    });

    it('should read a version with debris after it', () => {
      expect(findNearestHL7Version('2.6\n' as HL7Version)).toEqual('2.6');
    });

    it('should fall back to the oldest version', () => {
      expect(findNearestHL7Version('2.0' as HL7Version)).toEqual('2.1');
    });
  });
});
