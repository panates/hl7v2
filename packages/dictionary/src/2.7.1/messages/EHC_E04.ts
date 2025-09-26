import { HL7MessageDefinition } from '../../types.js';

export const EHC_E04: HL7MessageDefinition = {
  desc: 'Re-Assess HealthCare Services Invoice Request',
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
    REASSESSMENT_REQUEST_INFO: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Reassessment Request Info',
      segments: {
        IVC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Invoice',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and Comments',
        },
        PRODUCT_SERVICE_SECTION: {
          idx: 2,
          desc: 'Product Service Section',
          segments: {
            PSS: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Product/Service Section',
            },
            PRODUCT_SERVICE_GROUP: {
              idx: 1,
              desc: 'Product Service Group',
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
