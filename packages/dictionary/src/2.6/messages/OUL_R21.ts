import { HL7MessageDefinition } from '../../types.js';

export const OUL_R21: HL7MessageDefinition = {
  desc: 'Unsolicited laboratory observation',
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
    NTE: {
      idx: 2,
      max: 1,
      desc: 'Notes and Comments',
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
        VISIT: {
          idx: 3,
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
    ORDER_OBSERVATION: {
      idx: 4,
      min: 1,
      desc: 'Order observation',
      segments: {
        CONTAINER: {
          idx: 0,
          max: 1,
          desc: 'Container',
          segments: {
            SAC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Specimen Container Details',
            },
            SID: {
              idx: 1,
              max: 1,
              desc: 'Substance Identifier',
            },
          },
        },
        ORC: {
          idx: 1,
          max: 1,
          desc: 'Common Order',
        },
        OBR: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Observation',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and Comments (for Detail)',
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
        OBSERVATION: {
          idx: 5,
          min: 1,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
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
              desc: 'Substance Identifier',
            },
            NTE: {
              idx: 3,
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
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};
