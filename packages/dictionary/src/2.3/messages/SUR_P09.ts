import { HL7MessageDefinition } from '../../types.js';

export const SUR_P09: HL7MessageDefinition = {
  desc: 'Summary product experience report',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    FACILITY: {
      idx: 1,
      min: 1,
      desc: 'Facility',
      segments: {
        FAC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Facility',
        },
        PRODUCT: {
          idx: 1,
          min: 1,
          desc: 'Product',
          segments: {
            PSH: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Product summary header',
            },
            PDC: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Product detail country',
            },
          },
        },
        PSH: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Product summary header',
        },
        FACILITY_DETAIL: {
          idx: 3,
          min: 1,
          desc: 'Facility detail',
          segments: {
            FAC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Facility',
            },
            PDC: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Product detail country',
            },
            NTE: {
              idx: 2,
              min: 1,
              max: 1,
              desc: 'Notes and comments segment',
            },
          },
        },
      },
    },
  },
};
