import { HL7MessageDefinition } from '../../types.js';

export const SRR_S01: HL7MessageDefinition = {
  desc: 'Scheduled request response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'ERR - error segment',
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
          desc: 'SCH - schedule activity information segment',
        },
        NTE: {
          idx: 1,
          desc: 'NTE - notes and comments segment',
        },
        PATIENT: {
          idx: 2,
          desc: 'Patient',
          segments: {
            PID: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'PID - patient identification segment',
            },
            PV1: {
              idx: 1,
              max: 1,
              desc: 'PV1 - patient visit segment-',
            },
            PV2: {
              idx: 2,
              max: 1,
              desc: 'PV2 - patient visit - additional information segment',
            },
            DG1: {
              idx: 3,
              desc: 'DG1 - diagnosis segment',
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
                NTE: {
                  idx: 1,
                  desc: 'NTE - notes and comments segment',
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
                NTE: {
                  idx: 1,
                  desc: 'NTE - notes and comments segment',
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
                  desc: 'AIL - appointment information - location resource segment',
                },
                NTE: {
                  idx: 1,
                  desc: 'NTE - notes and comments segment',
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
                  desc: 'AIP - appointment information - personnel resource segment',
                },
                NTE: {
                  idx: 1,
                  desc: 'NTE - notes and comments segment',
                },
              },
            },
          },
        },
      },
    },
  },
};
