import { HL7MessageDefinition } from '../../types.js';

export const DOC_T12: HL7MessageDefinition = {
  desc: 'Document response',
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
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 3,
      max: 1,
      desc: 'Query acknowledgment',
    },
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    RESULT: {
      idx: 5,
      min: 1,
      desc: 'Result',
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
        TXA: {
          idx: 3,
          min: 1,
          max: 1,
          desc: 'Transcription document header',
        },
        OBX: {
          idx: 4,
          desc: 'Observation/result',
        },
      },
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};
