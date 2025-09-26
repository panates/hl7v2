import { HL7MessageDefinition } from '../../types.js';

export const EHC_E13: HL7MessageDefinition = {
  desc: 'Additional Information Response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software',
    },
    UAC: {
      idx: 2,
      desc: 'User Authentication Credential',
    },
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgement',
    },
    ERR: {
      idx: 4,
      desc: 'Error',
    },
    RFI: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Request for Information',
    },
    CTD: {
      idx: 6,
      desc: 'Contact Data',
    },
    IVC: {
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Invoice',
    },
    PSS: {
      idx: 8,
      min: 1,
      max: 1,
      desc: 'Product/Service Section',
    },
    PSG: {
      idx: 9,
      min: 1,
      max: 1,
      desc: 'Product/Service Group',
    },
    PID: {
      idx: 10,
      max: 1,
      desc: 'Person Identification',
    },
    PSL: {
      idx: 11,
      max: 1,
      desc: 'Product/Service Line Item',
    },
    REQUEST: {
      idx: 12,
      min: 1,
      desc: 'Request',
      segments: {
        CTD: {
          idx: 0,
          max: 1,
          desc: 'Contact Data',
        },
        OBR: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Observation Request',
        },
        NTE: {
          idx: 2,
          max: 1,
          desc: 'Notes and Comments',
        },
        RESPONSE: {
          idx: 3,
          min: 1,
          desc: 'Response',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation Result',
            },
            NTE: {
              idx: 1,
              max: 1,
              desc: 'Notes and Comments',
            },
            TXA: {
              idx: 2,
              max: 1,
              desc: 'Transcription Document Header',
            },
          },
        },
      },
    },
  },
};
