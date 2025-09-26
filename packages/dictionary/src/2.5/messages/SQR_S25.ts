import { HL7MessageDefinition } from '../../types.js';

export const SQR_S25: HL7MessageDefinition = {
  desc: 'Schedule query message and response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 2,
      desc: 'Error',
    },
    QAK: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query acknowledgment',
    },
    SCHEDULE: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Schedule',
      segments: {
        SCH: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Scheduling activity information',
        },
        TQ1: {
          idx: 1,
          desc: 'Timing/quantity',
        },
        NTE: {
          idx: 2,
          desc: 'Notes and comments',
        },
        PATIENT: {
          idx: 3,
          max: 1,
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
              max: 1,
              desc: 'Diagnosis',
            },
          },
        },
        RESOURCES: {
          idx: 4,
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
            PERSONNEL_RESOURCE: {
              idx: 3,
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
            LOCATION_RESOURCE: {
              idx: 4,
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
          },
        },
      },
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};
