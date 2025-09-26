import { HL7MessageDefinition } from '../../types.js';

export const EHC_E20: HL7MessageDefinition = {
  desc: 'Submit Authorization Request',
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
      desc: 'Authorization request',
      segments: {
        IVC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Invoice Header',
        },
        CTD: {
          idx: 1,
          min: 1,
          desc: 'Contact Data',
        },
        LOC: {
          idx: 2,
          desc: 'Location Identification',
        },
        ROL: {
          idx: 3,
          desc: 'Provider Identification',
        },
        PAT_INFO: {
          idx: 4,
          min: 1,
          desc: 'Pat info',
          segments: {
            PID: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Person Identification',
            },
            ACC: {
              idx: 1,
              desc: 'Accident',
            },
            INSURANCE: {
              idx: 2,
              min: 1,
              desc: 'Insurance',
              segments: {
                IN1: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Insurance',
                },
                IN2: {
                  idx: 1,
                  max: 1,
                  desc: 'Insurance Additional Info',
                },
              },
            },
            DIAGNOSIS: {
              idx: 3,
              desc: 'Diagnosis',
              segments: {
                DG1: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Diagnosis',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments',
                },
              },
            },
            OBX: {
              idx: 4,
              desc: 'Observation',
            },
          },
        },
        PSL_ITEM_INFO: {
          idx: 5,
          min: 1,
          desc: 'Psl item info',
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
            ADJ: {
              idx: 2,
              desc: 'Adjustment',
            },
            LOC: {
              idx: 3,
              desc: 'Location Identification',
            },
            ROL: {
              idx: 4,
              desc: 'Role',
            },
          },
        },
      },
    },
  },
};
