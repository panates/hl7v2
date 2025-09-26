import { HL7MessageDefinition } from '../../types.js';

export const SQM_S25: HL7MessageDefinition = {
  desc: 'Schedule query message and response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    QRD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 2,
      max: 1,
      desc: 'Query Filter',
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
          desc: 'Appointment Request',
        },
        APR: {
          idx: 1,
          max: 1,
          desc: 'Appointment Preferences',
        },
        PID: {
          idx: 2,
          max: 1,
          desc: 'Patient Identification',
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
              desc: 'Resource Group Segment',
            },
            SERVICE: {
              idx: 1,
              desc: 'Service',
              segments: {
                AIS: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Appointment Information - Service',
                },
                APR: {
                  idx: 1,
                  max: 1,
                  desc: 'Appointment Preferences',
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
                  desc: 'Appointment Information - General Resource',
                },
                APR: {
                  idx: 1,
                  max: 1,
                  desc: 'Appointment Preferences',
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
                  desc: 'Appointment Information - Personnel Resource',
                },
                APR: {
                  idx: 1,
                  max: 1,
                  desc: 'Appointment Preferences',
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
                  desc: 'Appointment Information - Location Resource',
                },
                APR: {
                  idx: 1,
                  max: 1,
                  desc: 'Appointment Preferences',
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
      desc: 'Continuation Pointer',
    },
  },
};
