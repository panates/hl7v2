import { HL7MessageDefinition } from '../../types.js';

export const SIU_S26: HL7MessageDefinition = {
  desc: 'Notification That Patient Did Not Show Up for Scheduled Appointment',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SCH: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Schedule Activity Information',
    },
    TQ1: {
      idx: 2,
      desc: 'Timing/Quantity',
    },
    NTE: {
      idx: 3,
      desc: 'Notes and Comments for the SCH',
    },
    PATIENT: {
      idx: 4,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Identification',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Additional Demographics',
        },
        PV1: {
          idx: 2,
          max: 1,
          desc: 'Patient Visit',
        },
        PV2: {
          idx: 3,
          max: 1,
          desc: 'Patient Visit - Additional Info',
        },
        OBX: {
          idx: 4,
          desc: 'Observation/Result',
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
              desc: 'Notes and Comments for the AIS',
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
            NTE: {
              idx: 1,
              desc: 'Notes and Comments for the AIG',
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
          desc: 'Personnel resource',
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
};
