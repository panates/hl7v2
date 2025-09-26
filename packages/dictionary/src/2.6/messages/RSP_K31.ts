import { HL7MessageDefinition } from '../../types.js';

export const RSP_K31: HL7MessageDefinition = {
  desc: 'Segment pattern response',
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
      desc: 'Message Acknowledgement',
    },
    ERR: {
      idx: 2,
      desc: 'Error',
    },
    SFT: {
      idx: 3,
      desc: 'Software',
    },
    UAC: {
      idx: 4,
      max: 1,
      desc: 'User Authentication Credential',
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
    RESPONSE: {
      idx: 8,
      min: 1,
      desc: 'Response',
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
            AL1: {
              idx: 3,
              desc: 'Allergy Information',
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
        ORDER: {
          idx: 1,
          min: 1,
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
            ORDER_DETAIL: {
              idx: 2,
              max: 1,
              desc: 'Order detail',
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
                COMPONENTS: {
                  idx: 3,
                  desc: 'Components',
                  segments: {
                    RXC: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Pharmacy/Treatment Component',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes and Comments (for each RXC)',
                    },
                  },
                },
              },
            },
            ENCODING: {
              idx: 3,
              max: 1,
              desc: 'Encoding',
              segments: {
                RXE: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/Treatment Encoded Order',
                },
                TIMING_ENCODED: {
                  idx: 1,
                  min: 1,
                  desc: 'Timing encoded',
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
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};
