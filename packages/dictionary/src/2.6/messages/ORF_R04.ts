import { HL7MessageDefinition } from '../../types.js';

export const ORF_R04: HL7MessageDefinition = {
  desc: 'Response to query transmission of requested observation',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software Segment',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgment',
    },
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 5,
      max: 1,
      desc: 'Query Filter',
    },
    QUERY_RESPONSE: {
      idx: 6,
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
              desc: 'Patient ID',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments',
            },
            OBX: {
              idx: 2,
              desc: 'Observation (for Patient ID)',
            },
          },
        },
        ORDER: {
          idx: 1,
          min: 1,
          desc: 'Order',
          segments: {
            ORC: {
              idx: 0,
              max: 1,
              desc: 'Order common',
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
            ROL: {
              idx: 3,
              desc: 'Role (for observation)',
            },
            TIMING_QTY: {
              idx: 4,
              desc: 'Timing qty',
              segments: {
                TQ1: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Timing/Quantity',
                },
                TQ2: {
                  idx: 1,
                  desc: 'Timing/Quantity Order Sequence',
                },
              },
            },
            CTD: {
              idx: 5,
              max: 1,
              desc: 'Contact Data',
            },
            OBSERVATION: {
              idx: 6,
              min: 1,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  max: 1,
                  desc: 'Observation/Result',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments',
                },
              },
            },
            CTI: {
              idx: 7,
              desc: 'Clinical Trial Identification',
            },
          },
        },
      },
    },
    ERR: {
      idx: 7,
      desc: 'Error',
    },
    QAK: {
      idx: 8,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    DSC: {
      idx: 9,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};
