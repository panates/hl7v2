import { HL7MessageDefinition } from '../../types.js';

export const SQM_S25: HL7MessageDefinition = {
  desc: 'Schedule query message and response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    QRD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'QRD - original-style query definition segment',
    },
    QRF: {
      idx: 2,
      max: 1,
      desc: 'QRF - original style query filter segment',
    },
    REQUEST: {
      idx: 3,
      max: 1,
      desc: 'Request',
      segments: {
        ARQ: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'ARQ - appointment request segment',
        },
        APR: {
          idx: 1,
          max: 1,
          desc: 'APR - appointment preferences segment',
        },
        PID: {
          idx: 2,
          max: 1,
          desc: 'PID - patient identification segment',
        },
        RESOURCES: {
          idx: 3,
          min: 1,
          desc: 'Resources',
          segments: {
            RGS: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'RGS - resource group segment',
            },
            SERVICE: {
              idx: 1,
              desc: 'Service',
              segments: {
                AIS: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'AIS - appointment information - service segment',
                },
                APR: {
                  idx: 1,
                  max: 1,
                  desc: 'APR - appointment preferences segment',
                },
              },
            },
            GENERAL_RESOURCE: {
              idx: 2,
              desc: 'General resource',
              segments: {
                AIG: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'AIG - appointment information - general resource segment',
                },
                APR: {
                  idx: 1,
                  max: 1,
                  desc: 'APR - appointment preferences segment',
                },
              },
            },
            PERSONNEL_RESOURCE: {
              idx: 3,
              desc: 'Personnel resource',
              segments: {
                AIP: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'AIP - appointment information - personnel resource segment',
                },
                APR: {
                  idx: 1,
                  max: 1,
                  desc: 'APR - appointment preferences segment',
                },
              },
            },
            LOCATION_RESOURCE: {
              idx: 4,
              desc: 'Location resource',
              segments: {
                AIL: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'AIL - appointment information - location resource segment',
                },
                APR: {
                  idx: 1,
                  max: 1,
                  desc: 'APR - appointment preferences segment',
                },
              },
            },
          },
        },
      },
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};
