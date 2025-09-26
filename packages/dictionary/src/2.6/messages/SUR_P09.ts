import { HL7MessageDefinition } from '../../types.js';

export const SUR_P09: HL7MessageDefinition = {
  desc: 'Summary product experience report',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
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
              desc: 'Product Summary Header',
            },
            PDC: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Product Detail Country',
            },
          },
        },
        PSH: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Product Summary Header',
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
              desc: 'Product Detail Country',
            },
            NTE: {
              idx: 2,
              min: 1,
              max: 1,
              desc: 'Notes (for PCR)',
            },
          },
        },
      },
    },
  },
};
