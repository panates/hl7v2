import { HL7MessageDefinition } from '../../types.js';

export const VXU_V04: HL7MessageDefinition = {
  desc: 'Unsolicited vaccination record update',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    PID: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PD1: {
      idx: 2,
      max: 1,
      desc: 'Patient additional demographic',
    },
    NK1: {
      idx: 3,
      desc: 'Next of kin / associated parties',
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
          desc: 'Patient visit',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient visit - additional information',
        },
      },
    },
    GT1: {
      idx: 5,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 6,
      desc: 'Insurance',
      segments: {
        IN1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Insurance',
        },
        IN2: {
          idx: 1,
          max: 1,
          desc: 'Insurance additional information',
        },
        IN3: {
          idx: 2,
          max: 1,
          desc: 'Insurance additional information, certification',
        },
      },
    },
    ORDER: {
      idx: 7,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          max: 1,
          desc: 'Common order',
        },
        RXA: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Pharmacy/treatment administration',
        },
        RXR: {
          idx: 2,
          max: 1,
          desc: 'Pharmacy/treatment route',
        },
        OBSERVATION: {
          idx: 3,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation/result',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
          },
        },
      },
    },
  },
};
