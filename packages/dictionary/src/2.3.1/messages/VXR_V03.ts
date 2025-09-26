import { HL7MessageDefinition } from '../../types.js';

export const VXR_V03: HL7MessageDefinition = {
  desc: 'Vaccination record response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'QRD - original-style query definition segment',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'QRF - original style query filter segment',
    },
    PID: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    PD1: {
      idx: 5,
      max: 1,
      desc: 'Patient Additional Demographic',
    },
    NK1: {
      idx: 6,
      desc: 'NK1 - next of kin / associated parties segment-',
    },
    PATIENT_VISIT: {
      idx: 7,
      max: 1,
      desc: 'Patient visit',
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
      idx: 8,
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
      idx: 9,
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
