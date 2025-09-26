import { HL7MessageDefinition } from '../../types.js';

export const VXU_V04: HL7MessageDefinition = {
  desc: 'Unsolicited vaccination record update',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    PID: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    PD1: {
      idx: 2,
      max: 1,
      desc: 'Patient Additional Demographic',
    },
    NK1: {
      idx: 3,
      desc: 'NK1 - next of kin / associated parties segment-',
    },
    PATIENT: {
      idx: 4,
      max: 1,
      desc: 'Patient',
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
    INSURANCE: {
      idx: 5,
      desc: 'Insurance',
      segments: {
        IN1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'IN1 - insurance segment',
        },
        IN2: {
          idx: 1,
          max: 1,
          desc: 'IN2 - insurance additional information segment',
        },
        IN3: {
          idx: 2,
          max: 1,
          desc: 'IN3 - insurance additional information, certification segment',
        },
      },
    },
    ORDER: {
      idx: 6,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          max: 1,
          desc: 'ORC - common order segment',
        },
        RXA: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'RXA - pharmacy/treatment administration segment',
        },
        RXR: {
          idx: 2,
          max: 1,
          desc: 'RXR - pharmacy/treatment route segment',
        },
        OBSERVATION: {
          idx: 3,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'OBX - observation/result segment',
            },
            NTE: {
              idx: 1,
              desc: 'NTE - notes and comments segment',
            },
          },
        },
      },
    },
  },
};
