import { HL7MessageDefinition } from '../../types.js';

export const RCI_I05: HL7MessageDefinition = {
  desc: 'Return clinical information',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 4,
      max: 1,
      desc: 'Original style query filter',
    },
    PROVIDER: {
      idx: 5,
      min: 1,
      desc: 'Provider',
      segments: {
        PRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Provider data',
        },
        CTD: {
          idx: 1,
          desc: 'Contact data',
        },
      },
    },
    PID: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    DG1: {
      idx: 7,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 8,
      desc: 'Diagnosis related group',
    },
    AL1: {
      idx: 9,
      desc: 'Patient allergy information',
    },
    OBSERVATION: {
      idx: 10,
      desc: 'Observation',
      segments: {
        OBR: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Observation request',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and comments',
        },
        RESULTS: {
          idx: 2,
          desc: 'Results',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation/result',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
          },
        },
      },
    },
    NTE: {
      idx: 11,
      desc: 'Notes and comments',
    },
  },
};
