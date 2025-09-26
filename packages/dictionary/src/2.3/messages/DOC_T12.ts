import { HL7MessageDefinition } from '../../types.js';

export const DOC_T12: HL7MessageDefinition = {
  desc: 'Document response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error segment',
    },
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query definition segment',
    },
    RESULT: {
      idx: 4,
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
          desc: 'Document notification segment',
        },
        OBX: {
          idx: 4,
          desc: 'Observation segment',
        },
      },
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};
