import { HL7MessageDefinition } from '../../types.js';

export const ADT_A35: HL7MessageDefinition = {
  desc: 'Merge patient information - account number only',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    MRG: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Merge patient information',
    },
  },
};
