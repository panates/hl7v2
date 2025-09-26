import { HL7MessageDefinition } from '../../types.js';

export const EHC_E12: HL7MessageDefinition = {
  desc: 'Request Additional Information',
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
    RFI: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Request for Information',
    },
    CTD: {
      idx: 4,
      desc: 'Contact Data',
    },
    IVC: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Invoice',
    },
    PSS: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Product/Service Section',
    },
    PSG: {
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Product/Service Group',
    },
    PID: {
      idx: 8,
      max: 1,
      desc: 'Person Identification',
    },
    PSL: {
      idx: 9,
      desc: 'Product/Service Line Item',
    },
    REQUEST: {
      idx: 10,
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
        OBX: {
          idx: 3,
          desc: 'Observation Results',
        },
      },
    },
  },
};
