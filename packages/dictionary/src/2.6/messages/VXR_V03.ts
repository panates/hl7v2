import { HL7MessageDefinition } from '../../types.js';

export const VXR_V03: HL7MessageDefinition = {
  desc: 'Vaccination record response',
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
    SFT: {
      idx: 2,
      desc: 'Software',
    },
    UAC: {
      idx: 3,
      max: 1,
      desc: 'User Authentication Credential',
    },
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 5,
      max: 1,
      desc: 'Query Filter',
    },
    PID: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    PD1: {
      idx: 7,
      max: 1,
      desc: 'Additional Demographics',
    },
    NK1: {
      idx: 8,
      desc: 'Next of Kin/Associated Parties',
    },
    PATIENT_VISIT: {
      idx: 9,
      max: 1,
      desc: 'Patient visit',
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
      idx: 10,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 11,
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
      idx: 12,
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
          desc: 'Pharmacy Administration',
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
