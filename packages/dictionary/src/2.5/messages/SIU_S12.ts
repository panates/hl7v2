import { HL7MessageDefinition } from '../../types.js';

export const SIU_S12: HL7MessageDefinition = {
  desc: 'Notification of new appointment booking',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    SCH: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Scheduling activity information',
    },
    TQ1: {
      idx: 2,
      desc: 'Timing/quantity',
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
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Patient additional demographic',
        },
        PV1: {
          idx: 2,
          max: 1,
          desc: 'Patient visit',
        },
        PV2: {
          idx: 3,
          max: 1,
          desc: 'Patient visit - additional information',
        },
        OBX: {
          idx: 4,
          desc: 'Observation/result',
        },
        DG1: {
          idx: 5,
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
            NTE: {
              idx: 1,
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
            NTE: {
              idx: 1,
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
            NTE: {
              idx: 1,
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
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
          },
        },
      },
    },
  },
};
