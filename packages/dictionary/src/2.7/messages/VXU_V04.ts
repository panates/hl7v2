import { HL7MessageDefinition } from '../../types.js';

export const VXU_V04: HL7MessageDefinition = {
  desc: 'Unsolicited Vaccination Update',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header Segment',
    },
    SFT: {
      idx: 1,
      desc: 'Software',
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
      desc: 'Patient Identification Segment',
    },
    PD1: {
      idx: 4,
      max: 1,
      desc: 'Additional Demographics',
    },
    NK1: {
      idx: 5,
      desc: 'Next of Kin/Associated Parties',
    },
    PATIENT: {
      idx: 6,
      max: 1,
      desc: 'Patient',
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
          desc: 'Patient Visit - Additional Info',
        },
      },
    },
    GT1: {
      idx: 7,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 8,
      desc: 'Insurance',
      segments: {
        IN1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Insurance',
        },
        IN2: {
          idx: 1,
          max: 1,
          desc: 'Insurance Additional Information',
        },
        IN3: {
          idx: 2,
          max: 1,
          desc: 'Insurance Additional Information, Certification',
        },
      },
    },
    ORDER: {
      idx: 9,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common Order',
        },
        TIMING: {
          idx: 1,
          desc: 'Timing',
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
        RXA: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Pharmacy Administration Segment',
        },
        RXR: {
          idx: 3,
          max: 1,
          desc: 'Pharmacy Route',
        },
        OBSERVATION: {
          idx: 4,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation/Result',
            },
            NTE: {
              idx: 1,
              desc: 'Notes (Regarding Immunization)',
            },
          },
        },
      },
    },
  },
};
