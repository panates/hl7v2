import { HL7MessageDefinition } from '../../types.js';

export const EHC_E21: HL7MessageDefinition = {
  desc: 'Cancel Authorization Request',
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
    AUTHORIZATION_REQUEST: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Authorization Request',
      segments: {
        IVC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Invoice Header',
        },
        PSL_ITEM_INFO: {
          idx: 1,
          min: 1,
          desc: 'Psl Item Info',
          segments: {
            PSL: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Product/Service Line Item',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments',
            },
            AUT: {
              idx: 2,
              max: 1,
              desc: 'Authorization',
            },
          },
        },
      },
    },
  },
};
