import { HL7MessageDefinition } from '../../types.js';

export const DOC_T12: HL7MessageDefinition = {
  desc: 'Document response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'ERR - error segment',
    },
    QAK: {
      idx: 3,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'QRD - original-style query definition segment',
    },
    RESULT: {
      idx: 5,
      min: 1,
      desc: 'Result',
      segments: {
        EVN: {
          idx: 0,
          max: 1,
          desc: 'EVN - event type segment',
        },
        PID: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'PID - patient identification segment',
        },
        PV1: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'PV1 - patient visit segment-',
        },
        TXA: {
          idx: 3,
          min: 1,
          max: 1,
          desc: 'Document notification segment',
        },
        OBX: {
          idx: 4,
          desc: 'OBX - observation/result segment',
        },
      },
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};
