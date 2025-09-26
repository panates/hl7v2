import { HL7MessageDefinition } from '../../types.js';

export const ADR_A19: HL7MessageDefinition = {
  desc: 'Patient query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Query definition',
    },
    QUERY_RESPONSE: {
      idx: 3,
      min: 1,
      desc: 'Query response',
      segments: {
        EVN: {
          idx: 0,
          max: 1,
          desc: 'Event type',
        },
        PID: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Patient identification',
        },
        PV1: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Patient visit',
        },
      },
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};
