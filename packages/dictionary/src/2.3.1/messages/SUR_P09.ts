import { HL7MessageDefinition } from '../../types.js';

export const SUR_P09: HL7MessageDefinition = {
  desc: 'Summary product experience report',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
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
          desc: 'FAC - facility segment',
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
              desc: 'PSH - product summary header segment',
            },
            PDC: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'PDC - product detail country segment',
            },
          },
        },
        PSH: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'PSH - product summary header segment',
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
              desc: 'FAC - facility segment',
            },
            PDC: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'PDC - product detail country segment',
            },
            NTE: {
              idx: 2,
              min: 1,
              max: 1,
              desc: 'NTE - notes and comments segment',
            },
          },
        },
      },
    },
  },
};
