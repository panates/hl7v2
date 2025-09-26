import { HL7MessageDefinition } from '../../types.js';

export const ORU_R01: HL7MessageDefinition = {
  desc: 'Unsolicited transmission of an observation message',
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
    PATIENT_RESULT: {
      idx: 2,
      min: 1,
      desc: 'Patient result',
      segments: {
        PATIENT: {
          idx: 0,
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
            NK1: {
              idx: 3,
              desc: 'Next of kin / associated parties',
            },
            VISIT: {
              idx: 4,
              max: 1,
              desc: 'Visit',
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
        ORDER_OBSERVATION: {
          idx: 1,
          min: 1,
          desc: 'Order observation',
          segments: {
            ORC: {
              idx: 0,
              max: 1,
              desc: 'Common order',
            },
            OBR: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Observation request',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments',
            },
            TIMING_QTY: {
              idx: 3,
              desc: 'Timing qty',
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
            CTD: {
              idx: 4,
              max: 1,
              desc: 'Contact data',
            },
            OBSERVATION: {
              idx: 5,
              desc: 'Observation',
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
            FT1: {
              idx: 6,
              desc: 'Financial transaction',
            },
            CTI: {
              idx: 7,
              desc: 'Clinical trial identification',
            },
            SPECIMEN: {
              idx: 8,
              desc: 'Specimen',
              segments: {
                SPM: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Specimen',
                },
                OBX: {
                  idx: 1,
                  desc: 'Observation/result',
                },
              },
            },
          },
        },
      },
    },
    DSC: {
      idx: 3,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};
