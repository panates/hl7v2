import { HL7MessageDefinition } from '../../types.js';

export const ADT_A45: HL7MessageDefinition = {
  desc: 'Move visit information - visit number',
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
    MERGE_INFO: {
      idx: 6,
      min: 1,
      desc: 'Merge info',
      segments: {
        MRG: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Merge Information',
        },
        PV1: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Patient Visit',
        },
      },
    },
  },
};
