import { HL7MessageDefinition } from '../../types.js';

export const ADT_A23: HL7MessageDefinition = {
  desc: 'Delete a patient record',
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
    PV1: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Patient Visit',
    },
    PV2: {
      idx: 7,
      max: 1,
      desc: 'Patient Visit - Additional Info',
    },
    DB1: {
      idx: 8,
      desc: 'Disability Information',
    },
    OBX: {
      idx: 9,
      desc: 'Observation/Result',
    },
  },
};
