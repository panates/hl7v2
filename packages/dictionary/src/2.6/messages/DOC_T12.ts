import { HL7MessageDefinition } from '../../types.js';

export const DOC_T12: HL7MessageDefinition = {
  desc: 'Document response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgement',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error',
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
      desc: 'Query Definition',
    },
    RESULT: {
      idx: 5,
      min: 1,
      desc: 'Result',
      segments: {
        EVN: {
          idx: 0,
          max: 1,
          desc: 'Event Type',
        },
        PID: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Patient Identification',
        },
        PV1: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Patient Visit',
        },
        TXA: {
          idx: 3,
          min: 1,
          max: 1,
          desc: 'Document Notification',
        },
        OBX: {
          idx: 4,
          desc: 'Observation',
        },
      },
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};
