import { HL7MessageDefinition } from '../../types.js';

export const ADT_A18: HL7MessageDefinition = {
  desc: 'Merge patient information',
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
    EVN: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Event Type',
    },
    PID: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    PD1: {
      idx: 4,
      max: 1,
      desc: 'Additional Demographics',
    },
    MRG: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Merge Information',
    },
    PV1: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Patient Visit',
    },
  },
};
