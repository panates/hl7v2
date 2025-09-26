import { HL7MessageDefinition } from '../../types.js';

export const SQM_S25: HL7MessageDefinition = {
  desc: 'Schedule query message and response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    QRD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 2,
      max: 1,
      desc: 'Original style query filter',
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
          desc: 'Appointment request',
        },
        APR: {
          idx: 1,
          max: 1,
          desc: 'Appointment preferences',
        },
        PID: {
          idx: 2,
          max: 1,
          desc: 'Patient identification',
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
              desc: 'Resource group',
            },
            SERVICE: {
              idx: 1,
              desc: 'Service',
              segments: {
                AIS: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Appointment information - service',
                },
                APR: {
                  idx: 1,
                  max: 1,
                  desc: 'Appointment preferences',
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
                  desc: 'Appointment information - general resource',
                },
                APR: {
                  idx: 1,
                  max: 1,
                  desc: 'Appointment preferences',
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
                  desc: 'Appointment information - personnel resource',
                },
                APR: {
                  idx: 1,
                  max: 1,
                  desc: 'Appointment preferences',
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
                  desc: 'Appointment information - location resource',
                },
                APR: {
                  idx: 1,
                  max: 1,
                  desc: 'Appointment preferences',
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
      desc: 'Continuation pointer',
    },
  },
};
