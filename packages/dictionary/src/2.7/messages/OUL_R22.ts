import { HL7MessageDefinition } from '../../types.js';

export const OUL_R22: HL7MessageDefinition = {
  desc: 'Unsolicited Specimen Oriented Observation Message',
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
    NTE: {
      idx: 3,
      max: 1,
      desc: 'Notes and Comments',
    },
    PATIENT: {
      idx: 4,
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
          desc: 'Notes and Comments (for Patient ID)',
        },
        PATIENT_OBSERVATION: {
          idx: 4,
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
              desc: 'Participation (for Observation)',
            },
          },
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
              desc: 'Patient Visit - Additional Information',
            },
            PRT: {
              idx: 2,
              desc: 'Participation (for Patient Visit)',
            },
          },
        },
      },
    },
    NK1: {
      idx: 5,
      desc: 'Next of Kin',
    },
    SPECIMEN: {
      idx: 6,
      min: 1,
      desc: 'Specimen',
      segments: {
        SPM: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Specimen information',
        },
        SPECIMEN_OBSERVATION: {
          idx: 1,
          desc: 'Specimen Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation Result (for Specimen)',
            },
            PRT: {
              idx: 1,
              desc: 'Participation (for Specimen Observation)',
            },
          },
        },
        CONTAINER: {
          idx: 2,
          desc: 'Container',
          segments: {
            SAC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Container information',
            },
            INV: {
              idx: 1,
              max: 1,
              desc: 'Detailed Substance information (e.g., id, lot, manufacturer, ... of QC specimen)',
            },
          },
        },
        ORDER: {
          idx: 3,
          min: 1,
          desc: 'Order',
          segments: {
            OBR: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation Order',
            },
            ORC: {
              idx: 1,
              max: 1,
              desc: 'COMMON_ORDER',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and Comments (for Detail)',
            },
            PRT: {
              idx: 3,
              desc: 'Participation (for observation)',
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
            RESULT: {
              idx: 5,
              desc: 'Result',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation Result',
                },
                PRT: {
                  idx: 1,
                  desc: 'Participation (for Observation Result)',
                },
                TCD: {
                  idx: 2,
                  max: 1,
                  desc: 'Test Code Detail',
                },
                SID: {
                  idx: 3,
                  desc: 'Substance Identifier (e.g., reagents used for testing)',
                },
                NTE: {
                  idx: 4,
                  desc: 'Notes and Comments',
                },
              },
            },
            CTI: {
              idx: 6,
              desc: 'Clinical Trial Identification',
            },
          },
        },
      },
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};
