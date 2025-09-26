import { HL7MessageDefinition } from '../../types.js';

export const ADT_A24: HL7MessageDefinition = {
  desc: 'Link Patient Information',
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
      idx: 8,
      min: 1,
      max: 1,
      desc: 'Patient (2) Identification',
    },
    PD1: {
      idx: 9,
      max: 1,
      desc: 'Patient (2) Additional Demographics',
    },
    PV1: {
      idx: 10,
      max: 1,
      desc: 'Patient (2) Visit',
    },
    DB1: {
      idx: 11,
      desc: 'Patient (2) Disability Information',
    },
  },
};
