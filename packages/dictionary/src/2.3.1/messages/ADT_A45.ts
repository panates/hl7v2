import { HL7MessageDefinition } from '../../types.js';

export const ADT_A45: HL7MessageDefinition = {
  desc: 'Move visit information - visit number',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'EVN - event type segment',
    },
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    PD1: {
      idx: 3,
      max: 1,
      desc: 'Patient Additional Demographic',
    },
    MERGE_INFO: {
      idx: 4,
      min: 1,
      desc: 'Merge info',
      segments: {
        MRG: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'MRG - merge patient information segment-',
        },
        PV1: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'PV1 - patient visit segment-',
        },
      },
    },
  },
};
