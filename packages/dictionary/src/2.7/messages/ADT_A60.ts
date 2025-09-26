import { HL7MessageDefinition } from '../../types.js';

export const ADT_A60: HL7MessageDefinition = {
  desc: 'ADT Message',
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
    EVN: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Event Type',
    },
    PID: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    ARV: {
      idx: 8,
      desc: 'Access Restrictions',
    },
    PV1: {
      idx: 6,
      max: 1,
      desc: 'Patient Visit',
    },
    PV2: {
      idx: 7,
      max: 1,
      desc: 'Patient Visit - Additional Info.',
    },
    ADVERSE_REACTION_GROUP: {
      idx: 9,
      desc: 'Adverse Reaction Group',
      segments: {
        IAM: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient adverse reaction information',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and Comments',
        },
        IAR: {
          idx: 2,
          desc: 'Allergy Reaction Segment',
        },
      },
    },
  },
};
