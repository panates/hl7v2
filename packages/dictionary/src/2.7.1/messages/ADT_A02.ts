import { HL7MessageDefinition } from '../../types.js';

export const ADT_A02: HL7MessageDefinition = {
  desc: 'Transfer a Patient',
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
    PD1: {
      idx: 5,
      max: 1,
      desc: 'Additional Demographics',
    },
    ARV: {
      idx: 10,
      desc: 'Access Restrictions',
    },
    ROL: {
      idx: 11,
      desc: 'Role',
    },
    PV1: {
      idx: 8,
      min: 1,
      max: 1,
      desc: 'Patient Visit',
    },
    PV2: {
      idx: 9,
      max: 1,
      desc: 'Patient Visit - Additional Info.',
    },
    DB1: {
      idx: 12,
      desc: 'Disability Information',
    },
    OBX: {
      idx: 13,
      desc: 'Observation/Result',
    },
    PDA: {
      idx: 14,
      max: 1,
      desc: 'Patient Death and Autopsy',
    },
  },
};
