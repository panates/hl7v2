import { HL7MessageDefinition } from '../../types.js';

export const EHC_E24: HL7MessageDefinition = {
  desc: 'Authorization Response',
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
    AUTHORIZATION_RESPONSE_INFO: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Authorization response info',
      segments: {
        IVC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Invoice',
        },
        PSL_ITEM_INFO: {
          idx: 1,
          min: 1,
          desc: 'Psl item info',
          segments: {
            PSL: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Product/Service Line Item',
            },
            AUT: {
              idx: 1,
              max: 1,
              desc: 'Authorization',
            },
            PAYER_ADJUSTMENT: {
              idx: 2,
              desc: 'Payer adjustment',
              segments: {
                ADJ: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Adjustment',
                },
              },
            },
          },
        },
      },
    },
  },
};
