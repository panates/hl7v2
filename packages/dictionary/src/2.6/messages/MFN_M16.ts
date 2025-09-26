import { HL7MessageDefinition } from '../../types.js';

export const MFN_M16: HL7MessageDefinition = {
  desc: 'Master File Notification',
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
      max: 1,
      desc: 'User Authentication Credential',
    },
    MFI: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Master File Identification',
    },
    MATERIAL_ITEM_RECORD: {
      idx: 4,
      min: 1,
      desc: 'Material item record',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master File Entry',
        },
        ITM: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Material Item',
        },
        NTE: {
          idx: 2,
          desc: 'Notes for ITM',
        },
        STERILIZATION: {
          idx: 3,
          desc: 'Sterilization',
          segments: {
            STZ: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Sterilization Parameters',
            },
            NTE: {
              idx: 1,
              desc: 'Notes for STZ',
            },
          },
        },
        PURCHASING_VENDOR: {
          idx: 4,
          desc: 'Purchasing vendor',
          segments: {
            VND: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Purchasing Vendor',
            },
            PACKAGING: {
              idx: 1,
              desc: 'Packaging',
              segments: {
                PKG: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Packaging',
                },
                PCE: {
                  idx: 1,
                  desc: 'Patient Charge Cost Center Exception',
                },
              },
            },
          },
        },
        MATERIAL_LOCATION: {
          idx: 5,
          desc: 'Material location',
          segments: {
            IVT: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Material Location',
            },
            ILT: {
              idx: 1,
              desc: 'Material Lot/Quantity',
            },
            NTE: {
              idx: 2,
              desc: 'Notes for IVT',
            },
          },
        },
      },
    },
  },
};
