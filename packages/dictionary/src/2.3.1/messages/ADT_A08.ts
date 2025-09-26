import { HL7MessageDefinition } from '../../types.js';

export const ADT_A08: HL7MessageDefinition = {
  desc: 'Update patient information',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'EVN - event type segment',
    },
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    PD1: {
      idx: 3,
      max: 1,
      desc: 'Patient Additional Demographic',
    },
    NK1: {
      idx: 4,
      desc: 'NK1 - next of kin / associated parties segment-',
    },
    PV1: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'PV1 - patient visit segment-',
    },
    PV2: {
      idx: 6,
      max: 1,
      desc: 'PV2 - patient visit - additional information segment',
    },
    DB1: {
      idx: 7,
      desc: 'DB1 - Disability segment',
    },
    OBX: {
      idx: 8,
      desc: 'OBX - observation/result segment',
    },
    AL1: {
      idx: 9,
      desc: 'AL1 - patient allergy information segment',
    },
    DG1: {
      idx: 10,
      desc: 'DG1 - diagnosis segment',
    },
    DRG: {
      idx: 11,
      max: 1,
      desc: 'DRG - diagnosis related group segment',
    },
    PROCEDURE: {
      idx: 12,
      desc: 'Procedure',
      segments: {
        PR1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'PR1 - procedures segment',
        },
        ROL: {
          idx: 1,
          desc: 'Role',
        },
      },
    },
    GT1: {
      idx: 13,
      desc: 'GT1 - guarantor segment',
    },
    INSURANCE: {
      idx: 14,
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
          desc: 'IN3 - insurance additional information, certification segment',
        },
      },
    },
    ACC: {
      idx: 15,
      max: 1,
      desc: 'ACC - accident segment',
    },
    UB1: {
      idx: 16,
      max: 1,
      desc: 'UB1 - UB82 data segment',
    },
    UB2: {
      idx: 17,
      max: 1,
      desc: 'UB2 - UB92 data segment',
    },
  },
};
