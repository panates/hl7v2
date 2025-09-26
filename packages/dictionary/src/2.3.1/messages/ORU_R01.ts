import { HL7MessageDefinition } from '../../types.js';

export const ORU_R01: HL7MessageDefinition = {
  desc: 'Unsolicited transmission of an observation message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    PATIENT_RESULT: {
      idx: 1,
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
              desc: 'PID - patient identification segment',
            },
            PD1: {
              idx: 1,
              max: 1,
              desc: 'Patient Additional Demographic',
            },
            NK1: {
              idx: 2,
              desc: 'NK1 - next of kin / associated parties segment-',
            },
            NTE: {
              idx: 3,
              desc: 'NTE - notes and comments segment',
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
                  desc: 'PV1 - patient visit segment-',
                },
                PV2: {
                  idx: 1,
                  max: 1,
                  desc: 'PV2 - patient visit - additional information segment',
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
              desc: 'ORC - common order segment',
            },
            OBR: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'OBR - observation request segment',
            },
            NTE: {
              idx: 2,
              desc: 'NTE - notes and comments segment',
            },
            OBSERVATION: {
              idx: 3,
              min: 1,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  max: 1,
                  desc: 'OBX - observation/result segment',
                },
                NTE: {
                  idx: 1,
                  desc: 'NTE - notes and comments segment',
                },
              },
            },
            CTI: {
              idx: 4,
              desc: 'CTI - clinical trial identification segment',
            },
          },
        },
      },
    },
    DSC: {
      idx: 2,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};
