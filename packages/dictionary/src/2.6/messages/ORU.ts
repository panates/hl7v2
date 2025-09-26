import { HL7MessageDefinition } from '../../types.js';

export const ORU: HL7MessageDefinition = {
  desc: 'Unsolicited transmission of an observation message',
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
    PATIENT_RESULT: {
      idx: 3,
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
              desc: 'Patient Identification',
            },
            PD1: {
              idx: 1,
              max: 1,
              desc: 'Additional Demographics',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and Comments',
            },
            NK1: {
              idx: 3,
              desc: 'Next of Kin/Associated Parties',
            },
            OBX: {
              idx: 4,
              desc: 'Observation (for Patient ID)',
            },
            VISIT: {
              idx: 5,
              max: 1,
              desc: 'Visit',
              segments: {
                PV1: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Patient Visit',
                },
                PV2: {
                  idx: 1,
                  max: 1,
                  desc: 'Patient Visit - Additional Info',
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
              desc: 'Order common',
            },
            OBR: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Observations Request',
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
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation related to OBR',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments',
                },
              },
            },
            FT1: {
              idx: 7,
              desc: 'Financial Transaction',
            },
            CTI: {
              idx: 8,
              desc: 'Clinical Trial Identification',
            },
            SPECIMEN: {
              idx: 9,
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
                  desc: 'Observation related to Specimen',
                },
              },
            },
          },
        },
      },
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};
