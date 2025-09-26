import { HL7MessageDefinition } from '../../types.js';

export const OUL_R21: HL7MessageDefinition = {
  desc: 'Unsolicited laboratory observation',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    NTE: {
      idx: 1,
      max: 1,
      desc: 'Notes and comments',
    },
    PATIENT: {
      idx: 2,
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
      },
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
          desc: 'Patient visit',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient visit - additional information',
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
              desc: 'Specimen and container detail',
            },
            SID: {
              idx: 1,
              max: 1,
              desc: 'Substance identifier',
            },
            OBX: {
              idx: 2,
              desc: 'Observation/result',
            },
          },
        },
        ORC: {
          idx: 1,
          max: 1,
          desc: 'Common order',
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
        OBSERVATION: {
          idx: 4,
          min: 1,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              max: 1,
              desc: 'Observation/result',
            },
            TCD: {
              idx: 1,
              max: 1,
              desc: 'Test code detail',
            },
            SID: {
              idx: 2,
              desc: 'Substance identifier',
            },
            NTE: {
              idx: 3,
              desc: 'Notes and comments',
            },
          },
        },
        CTI: {
          idx: 5,
          desc: 'Clinical trial identification',
        },
      },
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};
