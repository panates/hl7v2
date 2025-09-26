import { HL7MessageDefinition } from '../../types.js';

export const SRM_S03: HL7MessageDefinition = {
  desc: 'Request Appointment Modification',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    ARQ: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Appointment Request Information',
    },
    APR: {
      idx: 2,
      max: 1,
      desc: 'Appointment Preferences',
    },
    NTE: {
      idx: 3,
      desc: 'Notes and Comments for the ARQ',
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
        OBX: {
          idx: 3,
          desc: 'Observation/Result',
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
            NTE: {
              idx: 2,
              desc: 'Notes and Comments for the AIS',
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
            APR: {
              idx: 1,
              max: 1,
              desc: 'Appointment Preferences',
            },
            NTE: {
              idx: 2,
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
            APR: {
              idx: 1,
              max: 1,
              desc: 'Appointment Preferences',
            },
            NTE: {
              idx: 2,
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
            APR: {
              idx: 1,
              max: 1,
              desc: 'Appointment Preferences',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and Comments for the AIP',
            },
          },
        },
      },
    },
  },
};
