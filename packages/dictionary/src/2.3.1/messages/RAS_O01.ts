import { HL7MessageDefinition } from '../../types.js';

export const RAS_O01: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment administration message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    NTE: {
      idx: 1,
      desc: 'NTE - notes and comments segment',
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
          desc: 'PID - patient identification segment',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Patient Additional Demographic',
        },
        NTE: {
          idx: 2,
          desc: 'NTE - notes and comments segment',
        },
        AL1: {
          idx: 3,
          desc: 'AL1 - patient allergy information segment',
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
              desc: 'PV1 - patient visit segment-',
            },
            PV2: {
              idx: 1,
              max: 1,
              desc: 'PV2 - patient visit - additional information segment',
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
          desc: 'ORC - common order segment',
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
              desc: 'RXO - pharmacy/treatment order segment',
            },
            ORDER_DETAIL_SUPPLEMENT: {
              idx: 1,
              max: 1,
              desc: 'Order detail supplement',
              segments: {
                NTE: {
                  idx: 0,
                  min: 1,
                  desc: 'NTE - notes and comments segment',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  desc: 'RXR - pharmacy/treatment route segment',
                },
                COMPONENTS: {
                  idx: 2,
                  max: 1,
                  desc: 'Components',
                  segments: {
                    RXC: {
                      idx: 0,
                      min: 1,
                      desc: 'RXC - pharmacy/treatment component order segment',
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
        ENCODING: {
          idx: 2,
          max: 1,
          desc: 'Encoding',
          segments: {
            RXE: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'RXE - pharmacy/treatment encoded order segment',
            },
            RXR: {
              idx: 1,
              min: 1,
              desc: 'RXR - pharmacy/treatment route segment',
            },
            RXC: {
              idx: 2,
              desc: 'RXC - pharmacy/treatment component order segment',
            },
          },
        },
        RXA: {
          idx: 3,
          min: 1,
          desc: 'RXA - pharmacy/treatment administration segment',
        },
        RXR: {
          idx: 4,
          min: 1,
          max: 1,
          desc: 'RXR - pharmacy/treatment route segment',
        },
        OBSERVATION: {
          idx: 5,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'OBX - observation/result segment',
            },
            NTE: {
              idx: 1,
              desc: 'NTE - notes and comments segment',
            },
          },
        },
        CTI: {
          idx: 6,
          desc: 'CTI - clinical trial identification segment',
        },
      },
    },
  },
};
