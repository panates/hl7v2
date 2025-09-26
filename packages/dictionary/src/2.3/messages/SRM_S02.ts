import { HL7MessageDefinition } from '../../types.js';

export const SRM_S02: HL7MessageDefinition = {
  desc: 'Request appointment rescheduling',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
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
      desc: 'Notes and comments segment',
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
          desc: 'Observation segment',
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
              desc: 'Appointment information - service',
            },
            APR: {
              idx: 1,
              max: 1,
              desc: 'Appointment preferences',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments segment',
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
            NTE: {
              idx: 2,
              desc: 'Notes and comments segment',
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
              desc: 'Appointment information - location resource',
            },
            APR: {
              idx: 1,
              max: 1,
              desc: 'Appointment preferences',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments segment',
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
              desc: 'Appointment information - personnel resource',
            },
            APR: {
              idx: 1,
              max: 1,
              desc: 'Appointment preferences',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments segment',
            },
          },
        },
      },
    },
  },
};
