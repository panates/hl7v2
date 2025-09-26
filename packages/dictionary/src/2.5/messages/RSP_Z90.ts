import { HL7MessageDefinition } from '../../types.js';

export const RSP_Z90: HL7MessageDefinition = {
  desc: 'Segment pattern response',
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
    ERR: {
      idx: 3,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query acknowledgment',
    },
    QPD: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query parameter definition',
    },
    RCP: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Response control parameter',
    },
    QUERY_RESPONSE: {
      idx: 7,
      min: 1,
      desc: 'Query response',
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
            NK1: {
              idx: 2,
              desc: 'Next of kin / associated parties',
            },
            NTE: {
              idx: 3,
              desc: 'Notes and comments',
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
        COMMON_ORDER: {
          idx: 1,
          min: 1,
          desc: 'Common order',
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
            OBR: {
              idx: 2,
              min: 1,
              max: 1,
              desc: 'Observation request',
            },
            NTE: {
              idx: 3,
              desc: 'Notes and comments',
            },
            CTD: {
              idx: 4,
              max: 1,
              desc: 'Contact data',
            },
            OBSERVATION: {
              idx: 5,
              min: 1,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
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
        SPECIMEN: {
          idx: 2,
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
    DSC: {
      idx: 8,
      min: 1,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};
