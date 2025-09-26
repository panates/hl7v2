import { HL7MessageDefinition } from '../../types.js';

export const SMD_S32: HL7MessageDefinition = {
  desc: 'Sterilization anti-microbial device cycle data request',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential Segment',
    },
    ANTI_MICROBIAL_DEVICE_CYCLE_DATA: {
      idx: 3,
      min: 1,
      desc: 'Anti microbial device cycle data',
      segments: {
        SDD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Sterilization Device',
        },
        SCD: {
          idx: 1,
          desc: 'Sterilization Cycle',
        },
      },
    },
  },
};
