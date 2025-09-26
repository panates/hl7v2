import { HL7MessageDefinition } from '../../types.js';

export const RDS_O13: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment dispense',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    NTE: {
      idx: 1,
      desc: 'Notes and comments',
    },
    PATIENT: {
      idx: 2,
      max: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient identification',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Patient additional demographic',
        },
        NTE: {
          idx: 2,
          desc: 'Notes and comments',
        },
        AL1: {
          idx: 3,
          desc: 'Patient allergy information',
        },
        PATIENT_VISIT: {
          idx: 4,
          max: 1,
          desc: 'Patient visit',
          segments: {
            PV1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Patient visit',
            },
            PV2: {
              idx: 1,
              max: 1,
              desc: 'Patient visit - additional information',
            },
          },
        },
      },
    },
    ORDER: {
      idx: 3,
      min: 1,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common order',
        },
        ORDER_DETAIL: {
          idx: 1,
          max: 1,
          desc: 'Order detail',
          segments: {
            RXO: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy/treatment order',
            },
            ORDER_DETAIL_SUPPLEMENT: {
              idx: 1,
              max: 1,
              desc: 'Order detail supplement',
              segments: {
                NTE: {
                  idx: 0,
                  min: 1,
                  desc: 'Notes and comments',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  desc: 'Pharmacy/treatment route',
                },
                COMPONENT: {
                  idx: 2,
                  max: 1,
                  desc: 'Component',
                  segments: {
                    RXC: {
                      idx: 0,
                      min: 1,
                      desc: 'Pharmacy/treatment component order',
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
        ENCODING: {
          idx: 2,
          max: 1,
          desc: 'Encoding',
          segments: {
            RXE: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy/treatment encoded order',
            },
            RXR: {
              idx: 1,
              min: 1,
              desc: 'Pharmacy/treatment route',
            },
            RXC: {
              idx: 2,
              desc: 'Pharmacy/treatment component order',
            },
          },
        },
        RXD: {
          idx: 3,
          min: 1,
          max: 1,
          desc: 'Pharmacy/treatment dispense',
        },
        RXR: {
          idx: 4,
          min: 1,
          desc: 'Pharmacy/treatment route',
        },
        RXC: {
          idx: 5,
          desc: 'Pharmacy/treatment component order',
        },
        OBSERVATION: {
          idx: 6,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation/result',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
          },
        },
        FT1: {
          idx: 7,
          desc: 'Financial transaction',
        },
      },
    },
  },
};
