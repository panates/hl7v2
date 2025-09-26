import { HL7MessageDefinition } from '../../types.js';

export const ORU_R31: HL7MessageDefinition = {
  desc: 'Unsolicited New Point-Of-Care Observation Message - Search for an Order',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software Segment',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    PID: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    PD1: {
      idx: 4,
      max: 1,
      desc: 'Additional Demographics',
    },
    PRT: {
      idx: 11,
      desc: 'Participation (for observation)',
    },
    PATIENT_OBSERVATION: {
      idx: 6,
      desc: 'Patient Observation',
      segments: {
        OBX: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Observation (for Patient ID)',
        },
        PRT: {
          idx: 1,
          desc: 'Participation (for Observation)',
        },
      },
    },
    VISIT: {
      idx: 7,
      max: 1,
      desc: 'Visit',
      segments: {
        PV1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Visit',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient Visit - Additional',
        },
        PRT: {
          idx: 2,
          desc: 'Participation (for Patient Visit)',
        },
      },
    },
    ORC: {
      idx: 8,
      min: 1,
      max: 1,
      desc: 'Common Order information',
    },
    OBR: {
      idx: 9,
      min: 1,
      max: 1,
      desc: 'Observation Request',
    },
    NTE: {
      idx: 10,
      desc: 'Notes or Comments for order/result',
    },
    TIMING_QTY: {
      idx: 12,
      desc: 'Timing Qty',
      segments: {
        TQ1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Timing/Quantity',
        },
        TQ2: {
          idx: 1,
          desc: 'Timing/Quantity Order Sequence',
        },
      },
    },
    OBSERVATION: {
      idx: 13,
      min: 1,
      desc: 'Observation',
      segments: {
        OBX: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Observation Results, one per reported value',
        },
        PRT: {
          idx: 1,
          desc: 'Participation (for Observation Results)',
        },
        NTE: {
          idx: 2,
          desc: 'Notes or Comments for individual result',
        },
      },
    },
  },
};
