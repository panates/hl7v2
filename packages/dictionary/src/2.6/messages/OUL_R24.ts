import { HL7MessageDefinition } from '../../types.js';

export const OUL_R24: HL7MessageDefinition = {
  desc: 'Unsolicited laboratory observation message',
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
        NTE: {
          idx: 2,
          desc: 'Notes and Comments (for Patient ID)',
        },
        OBX: {
          idx: 3,
          desc: 'Observation (for Patient ID)',
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
              desc: 'Patient Visit',
            },
            PV2: {
              idx: 1,
              max: 1,
              desc: 'Patient Visit - Additional Information',
            },
          },
        },
      },
    },
    NK1: {
      idx: 5,
      desc: 'Next of Kin',
    },
    ORDER: {
      idx: 6,
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
          desc: 'Common Order',
        },
        NTE: {
          idx: 2,
          desc: 'Notes and Comments (for Detail)',
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
        SPECIMEN: {
          idx: 5,
          desc: 'Specimen',
          segments: {
            SPM: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Specimen information',
            },
            OBX: {
              idx: 1,
              desc: 'Observation Result',
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
          },
        },
        RESULT: {
          idx: 6,
          desc: 'Result',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation Result',
            },
            TCD: {
              idx: 1,
              max: 1,
              desc: 'Test Code Detail',
            },
            SID: {
              idx: 2,
              desc: 'Substance Identifier (e.g., reagents used for testing)',
            },
            NTE: {
              idx: 3,
              desc: 'Notes and Comments',
            },
          },
        },
        CTI: {
          idx: 7,
          desc: 'Clinical Trial Identification',
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
