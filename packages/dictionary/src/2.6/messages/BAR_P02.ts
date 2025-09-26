import { HL7MessageDefinition } from '../../types.js';

export const BAR_P02: HL7MessageDefinition = {
  desc: 'Purge patient accounts',
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
    PATIENT: {
      idx: 4,
      min: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Identification',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Additional Demographics',
        },
        PV1: {
          idx: 2,
          max: 1,
          desc: 'Patient Visit',
        },
        DB1: {
          idx: 3,
          desc: 'Disability Information',
        },
      },
    },
  },
};
