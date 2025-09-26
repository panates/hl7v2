import { HL7MessageDefinition } from '../../types.js';

export const SRM_S01: HL7MessageDefinition = {
  desc: 'Request new appointment booking',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    ARQ: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Appointment request',
    },
    APR: {
      idx: 2,
      max: 1,
      desc: 'Appointment preferences',
    },
    NTE: {
      idx: 3,
      desc: 'Notes and comments',
    },
    PATIENT: {
      idx: 4,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient identification',
        },
        PV1: {
          idx: 1,
          max: 1,
          desc: 'Patient visit',
        },
        PV2: {
          idx: 2,
          max: 1,
          desc: 'Patient visit - additional information',
        },
        OBX: {
          idx: 3,
          desc: 'Observation/result',
        },
        DG1: {
          idx: 4,
          desc: 'Diagnosis',
        },
      },
    },
    RESOURCES: {
      idx: 5,
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
              desc: 'Appointment information',
            },
            APR: {
              idx: 1,
              max: 1,
              desc: 'Appointment preferences',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments',
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
              desc: 'Appointment information _ general resource',
            },
            APR: {
              idx: 1,
              max: 1,
              desc: 'Appointment preferences',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments',
            },
          },
        },
        LOCATION_RESOURCE: {
          idx: 3,
          desc: 'Location resource',
          segments: {
            AIL: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Appointment information _ location resource',
            },
            APR: {
              idx: 1,
              max: 1,
              desc: 'Appointment preferences',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments',
            },
          },
        },
        PERSONNEL_RESOURCE: {
          idx: 4,
          desc: 'Personnel resource',
          segments: {
            AIP: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Appointment information _ personnel resource',
            },
            APR: {
              idx: 1,
              max: 1,
              desc: 'Appointment preferences',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments',
            },
          },
        },
      },
    },
  },
};
