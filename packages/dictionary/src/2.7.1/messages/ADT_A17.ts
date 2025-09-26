import { HL7MessageDefinition } from '../../types.js';

export const ADT_A17: HL7MessageDefinition = {
  desc: 'Swap Patients',
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
      idx: 10,
      min: 1,
      max: 1,
      desc: 'Patient (2) Identification',
    },
    PD1: {
      idx: 11,
      max: 1,
      desc: 'Additional Demographics',
    },
    PV1: {
      idx: 12,
      min: 1,
      max: 1,
      desc: 'Patient (2) Visit',
    },
    PV2: {
      idx: 13,
      max: 1,
      desc: 'Patient (2) Visit - Additional Info.',
    },
    DB1: {
      idx: 14,
      desc: 'Disability Information',
    },
    OBX: {
      idx: 15,
      desc: 'Observation/Result (2)',
    },
  },
};
