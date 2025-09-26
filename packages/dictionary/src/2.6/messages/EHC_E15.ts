import { HL7MessageDefinition } from '../../types.js';

export const EHC_E15: HL7MessageDefinition = {
  desc: 'Payment/Remittance Advice',
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
    PAYMENT_REMITTANCE_HEADER_INFO: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Payment remittance header info',
      segments: {
        PMT: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Payment Information',
        },
        PYE: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Payee Information',
        },
      },
    },
    PAYMENT_REMITTANCE_DETAIL_INFO: {
      idx: 4,
      desc: 'Payment remittance detail info',
      segments: {
        IPR: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Invoice Processing Results',
        },
        IVC: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Invoice',
        },
        PRODUCT_SERVICE_SECTION: {
          idx: 2,
          min: 1,
          desc: 'Product service section',
          segments: {
            PSS: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Product/Service Section',
            },
            PRODUCT_SERVICE_GROUP: {
              idx: 1,
              min: 1,
              desc: 'Product service group',
              segments: {
                PSG: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Product/Service Group',
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
                    ADJ: {
                      idx: 1,
                      desc: 'Adjustment',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    ADJUSTMENT_PAYEE: {
      idx: 5,
      desc: 'Adjustment payee',
      segments: {
        ADJ: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Adjustment',
        },
        ROL: {
          idx: 1,
          max: 1,
          desc: 'Role',
        },
      },
    },
  },
};
