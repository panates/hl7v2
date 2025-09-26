import { HL7MessageDefinition } from '../../types.js';

export const SRR_S03: HL7MessageDefinition = {
  desc: 'Response to Appointment Modification Request',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgment',
    },
    ERR: {
      idx: 2,
      desc: 'Error Information',
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
          desc: 'Schedule Activity Information',
        },
        TQ1: {
          idx: 1,
          desc: 'Timing/Quantity',
        },
        NTE: {
          idx: 2,
          desc: 'Notes and Comments for the SCH',
        },
        PATIENT: {
          idx: 3,
          desc: 'Patient',
          segments: {
            PID: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Patient Identification',
            },
            PV1: {
              idx: 1,
              max: 1,
              desc: 'Patient Visit',
            },
            PV2: {
              idx: 2,
              max: 1,
              desc: 'Patient Visit - Additional Info',
            },
            DG1: {
              idx: 3,
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
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments for the RGS',
                },
              },
            },
            GENERAL_RESOURCE: {
              idx: 2,
              desc: 'General Resource',
              segments: {
                AIG: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Appointment Information - GENERAL_RESOURCE',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments for the AIG',
                },
              },
            },
            LOCATION_RESOURCE: {
              idx: 3,
              desc: 'Location Resource',
              segments: {
                AIL: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Appointment Information - Location Resource',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments for the AIL',
                },
              },
            },
            PERSONNEL_RESOURCE: {
              idx: 4,
              desc: 'Personnel Resource',
              segments: {
                AIP: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Appointment Information - Personnel Resource',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments for the AIP',
                },
              },
            },
          },
        },
      },
    },
  },
};
