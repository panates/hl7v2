import { HL7MessageDefinition } from '../../types.js';

export const RSP_Z88: HL7MessageDefinition = {
  desc: 'Response Grammar:  Pharmacy Information Comprehensive',
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
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgement',
    },
    ERR: {
      idx: 4,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    QPD: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Query Parameter Definition',
    },
    RCP: {
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Response Control Parameter',
    },
    QUERY_RESPONSE: {
      idx: 8,
      min: 1,
      desc: 'Query Response',
      segments: {
        PATIENT: {
          idx: 0,
          max: 1,
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
            NTE: {
              idx: 2,
              desc: 'Notes and Comments (for PID)',
            },
            ALLERGY: {
              idx: 3,
              max: 1,
              desc: 'Allergy',
              segments: {
                AL1: {
                  idx: 0,
                  min: 1,
                  desc: 'Allergy Information',
                },
                VISIT: {
                  idx: 1,
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
                      desc: 'Patient Visit - Additional Info',
                    },
                  },
                },
              },
            },
          },
        },
        COMMON_ORDER: {
          idx: 1,
          min: 1,
          desc: 'Common Order',
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
            ORDER_DETAIL: {
              idx: 2,
              max: 1,
              desc: 'Order Detail',
              segments: {
                RXO: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/Treatment Order',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments (for RXO)',
                },
                RXR: {
                  idx: 2,
                  min: 1,
                  desc: 'Pharmacy/Treatment Route',
                },
                COMPONENT: {
                  idx: 3,
                  max: 1,
                  desc: 'Component',
                  segments: {
                    RXC: {
                      idx: 0,
                      min: 1,
                      desc: 'Pharmacy/Treatment Component',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes and Comments (for RXC)',
                    },
                  },
                },
              },
            },
            ORDER_ENCODED: {
              idx: 3,
              max: 1,
              desc: 'Order Encoded',
              segments: {
                RXE: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/Treatment Encoded Order',
                },
                TIMING_ENCODED: {
                  idx: 1,
                  desc: 'Timing Encoded',
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
                RXR: {
                  idx: 2,
                  min: 1,
                  desc: 'Pharmacy/Treatment Route',
                },
                RXC: {
                  idx: 3,
                  desc: 'Pharmacy/Treatment Component',
                },
              },
            },
            RXD: {
              idx: 4,
              min: 1,
              max: 1,
              desc: 'Pharmacy/Treatment Dispense',
            },
            RXR: {
              idx: 5,
              min: 1,
              desc: 'Pharmacy/Treatment Route',
            },
            RXC: {
              idx: 6,
              desc: 'Pharmacy/Treatment Component',
            },
            OBSERVATION: {
              idx: 7,
              min: 1,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  max: 1,
                  desc: 'Results',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments (for OBX)',
                },
              },
            },
          },
        },
      },
    },
    DSC: {
      idx: 9,
      min: 1,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};
