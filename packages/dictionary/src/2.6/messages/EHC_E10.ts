import { HL7MessageDefinition } from '../../types.js';

export const EHC_E10: HL7MessageDefinition = {
  desc: 'Edit/Adjudication Results',
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
    INVOICE_PROCESSING_RESULTS_INFO: {
      idx: 5,
      min: 1,
      desc: 'Invoice processing results info',
      segments: {
        IPR: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Invoice Processing Results',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and Comments',
        },
        PYE: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Payee',
        },
        IN1: {
          idx: 3,
          min: 1,
          max: 1,
          desc: 'Insurance',
        },
        IN2: {
          idx: 4,
          max: 1,
          desc: 'Insurance Additional Info',
        },
        IVC: {
          idx: 5,
          min: 1,
          max: 1,
          desc: 'Invoice',
        },
        PRODUCT_SERVICE_SECTION: {
          idx: 6,
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
                PRODUCT_SERVICE_LINE_INFO: {
                  idx: 1,
                  min: 1,
                  desc: 'Product service line info',
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
  },
};
