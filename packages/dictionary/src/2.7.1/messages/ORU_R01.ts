import { HL7MessageDefinition } from '../../types.js';

export const ORU_R01: HL7MessageDefinition = {
  desc: 'Observation Message',
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
      desc: 'Patient Result',
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
            PRT: {
              idx: 2,
              desc: 'Participation (for Patient)',
            },
            NTE: {
              idx: 3,
              desc: 'Notes and Comments',
            },
            NK1: {
              idx: 4,
              desc: 'Next of Kin/Associated Parties',
            },
            PATIENT_OBSERVATION: {
              idx: 5,
              desc: 'Patient Observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation (for Patient ID)',
                },
                PRT: {
                  idx: 1,
                  desc: 'Participation (Observation Participation)',
                },
              },
            },
            VISIT: {
              idx: 6,
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
                PRT: {
                  idx: 2,
                  desc: 'Participation (for Patient Visit)',
                },
              },
            },
          },
        },
        ORDER_OBSERVATION: {
          idx: 1,
          min: 1,
          desc: 'Order Observation',
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
            PRT: {
              idx: 3,
              desc: 'Participation (for Observation)',
            },
            TIMING_QTY: {
              idx: 4,
              desc: 'Timing Qty',
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
                PRT: {
                  idx: 1,
                  desc: 'Participation (Observation Participation)',
                },
                NTE: {
                  idx: 2,
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
                SPECIMEN_OBSERVATION: {
                  idx: 1,
                  desc: 'Specimen Observation',
                  segments: {
                    OBX: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation (for Patient ID)',
                    },
                    PRT: {
                      idx: 1,
                      desc: 'Participation (Observation Participation)',
                    },
                  },
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
