import { HL7MessageDefinition } from '../../types.js';

export const RCI_I05: HL7MessageDefinition = {
  desc: 'Return Clinical Information',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgment',
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
    PROVIDER: {
      idx: 6,
      min: 1,
      desc: 'Provider',
      segments: {
        PRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Provider Data',
        },
        CTD: {
          idx: 1,
          desc: 'Contact Data',
        },
      },
    },
    PID: {
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    DG1: {
      idx: 8,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 9,
      desc: 'Diagnosis Related Group',
    },
    AL1: {
      idx: 10,
      desc: 'Allergy Information',
    },
    OBSERVATION: {
      idx: 11,
      max: 1,
      desc: 'Observation',
      segments: {
        OBR: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Observation Request',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and Comments',
        },
        RESULTS: {
          idx: 2,
          max: 1,
          desc: 'Results',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation/Result',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments',
            },
          },
        },
      },
    },
    NTE: {
      idx: 12,
      desc: 'Notes and Comments',
    },
  },
};
