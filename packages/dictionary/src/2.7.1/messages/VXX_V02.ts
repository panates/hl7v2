import { HL7MessageDefinition } from '../../types.js';

export const VXX_V02: HL7MessageDefinition = {
  desc: 'Response to Vaccination Query',
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
      desc: 'Message Acknowledgment',
    },
    SFT: {
      idx: 2,
      desc: 'Software',
    },
    UAC: {
      idx: 3,
      max: 1,
      desc: 'User Authentication Credential',
    },
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 5,
      max: 1,
      desc: 'Query Filter',
    },
    PATIENT: {
      idx: 6,
      min: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Identification',
        },
        NK1: {
          idx: 1,
          desc: 'Next of Kin/Associated Parties',
        },
      },
    },
  },
};
