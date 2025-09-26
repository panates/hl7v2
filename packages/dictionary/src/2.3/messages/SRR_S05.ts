import { HL7MessageDefinition } from '../../types.js';

export const SRR_S05: HL7MessageDefinition = {
  desc: 'Scheduled request response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error segment',
    },
    SCHEDULE: {
      idx: 3,
      max: 1,
      desc: 'Schedule',
      segments: {
        SCH: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Schedule activity information',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and comments segment',
        },
        PATIENT: {
          idx: 2,
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
            DG1: {
              idx: 3,
              desc: 'Diagnosis',
            },
          },
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
                NTE: {
                  idx: 1,
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
                NTE: {
                  idx: 1,
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
                NTE: {
                  idx: 1,
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
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments segment',
                },
              },
            },
          },
        },
      },
    },
  },
};
