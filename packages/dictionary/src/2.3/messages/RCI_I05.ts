import { HL7MessageDefinition } from '../../types.js';

export const RCI_I05: HL7MessageDefinition = {
  desc: 'Return clinical information',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Query definition segment',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'Query filter segment',
    },
    PROVIDER: {
      idx: 4,
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
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    DG1: {
      idx: 6,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 7,
      desc: 'Diagnosis related group',
    },
    AL1: {
      idx: 8,
      desc: 'Patient allergy information',
    },
    OBSERVATION: {
      idx: 9,
      desc: 'Observation',
      segments: {
        OBR: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Observation request segment',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and comments segment',
        },
        RESULTS: {
          idx: 2,
          desc: 'Results',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation segment',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments segment',
            },
          },
        },
      },
    },
    NTE: {
      idx: 10,
      desc: 'Notes and comments segment',
    },
  },
};
