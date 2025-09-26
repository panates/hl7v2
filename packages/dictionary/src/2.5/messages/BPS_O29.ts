import { HL7MessageDefinition } from '../../types.js';

export const BPS_O29: HL7MessageDefinition = {
  desc: 'Bps message',
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
    NTE: {
      idx: 2,
      desc: 'Notes and comments',
    },
    PATIENT: {
      idx: 3,
      max: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient identification',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Patient additional demographic',
        },
        NTE: {
          idx: 2,
          desc: 'Notes and comments',
        },
        PATIENT_VISIT: {
          idx: 3,
          max: 1,
          desc: 'Patient visit',
          segments: {
            PV1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Patient visit',
            },
            PV2: {
              idx: 1,
              max: 1,
              desc: 'Patient visit - additional information',
            },
          },
        },
      },
    },
    ORDER: {
      idx: 4,
      min: 1,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common order',
        },
        TIMING: {
          idx: 1,
          desc: 'Timing',
          segments: {
            TQ1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Timing/quantity',
            },
            TQ2: {
              idx: 1,
              desc: 'Timing/quantity relationship',
            },
          },
        },
        BPO: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Blood product order',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and comments',
        },
        PRODUCT: {
          idx: 4,
          desc: 'Product',
          segments: {
            BPX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Blood product dispense status',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
          },
        },
      },
    },
  },
};
