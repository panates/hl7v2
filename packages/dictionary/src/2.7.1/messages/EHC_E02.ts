import { HL7MessageDefinition } from '../../types.js';

export const EHC_E02: HL7MessageDefinition = {
  desc: 'Cancel HealthCare Services Invoice',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Secondary Header',
    },
    UAC: {
      idx: 2,
      desc: 'User Authentication Credential',
    },
    INVOICE_INFORMATION: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Invoice Information',
      segments: {
        IVC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Invoice',
        },
        PYE: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Payee Information',
        },
        CTD: {
          idx: 2,
          desc: 'Contact Data',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and Comments',
        },
        PRODUCT_SERVICE_SECTION: {
          idx: 4,
          desc: 'Product Service Section',
          segments: {
            PSS: {
              idx: 0,
              min: 1,
              max: 1,
            },
            PSG: {
              idx: 1,
              desc: 'Psg',
              segments: {
                PSG: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Product/Service Group',
                },
                PSL: {
                  idx: 1,
                  desc: 'Product/Service Line Item',
                },
              },
            },
          },
        },
      },
    },
  },
};
