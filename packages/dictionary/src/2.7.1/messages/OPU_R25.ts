import { HL7MessageDefinition } from '../../types.js';

export const OPU_R25: HL7MessageDefinition = {
  desc: 'Unsolicited Population/Location-Based Laboratory Observation Message',
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
    NTE: {
      idx: 3,
      max: 1,
      desc: 'Notes and Comments',
    },
    PV1: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient Visit',
    },
    PV2: {
      idx: 5,
      max: 1,
      desc: 'Patient Visit - Additional Information',
    },
    PRT: {
      idx: 6,
      desc: 'Participation (for Patient Visit)',
    },
    PATIENT_VISIT_OBSERVATION: {
      idx: 7,
      desc: 'Patient Visit Observation',
      segments: {
        OBX: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Observation on the Visit',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and Comments on Visit',
        },
        PRT: {
          idx: 2,
          desc: 'Participation',
        },
      },
    },
    ACCESSION_DETAIL: {
      idx: 8,
      min: 1,
      desc: 'Accession Detail',
      segments: {
        NK1: {
          idx: 0,
          min: 1,
          desc: 'Next of Kin',
        },
        PATIENT: {
          idx: 1,
          max: 1,
          desc: 'Patient',
          segments: {
            PID: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Patient',
            },
            PD1: {
              idx: 1,
              max: 1,
              desc: 'Additional Demographics',
            },
            PRT: {
              idx: 2,
              desc: 'Participation (for Patient)',
            },
            PATIENT_OBSERVATION: {
              idx: 3,
              desc: 'Patient Observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observations on Patient',
                },
                PRT: {
                  idx: 1,
                  desc: 'Participation (for Observation on Patient)',
                },
                NTE: {
                  idx: 2,
                  desc: 'Notes and Comments for Observation on Patient',
                },
              },
            },
          },
        },
        SPECIMEN: {
          idx: 2,
          min: 1,
          desc: 'Specimen',
          segments: {
            SPM: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Specimen',
            },
            SPECIMEN_OBSERVATION: {
              idx: 1,
              desc: 'Specimen Observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation on Specimen',
                },
                PRT: {
                  idx: 1,
                  desc: 'Participation (for Observation)',
                },
                NTE: {
                  idx: 2,
                  desc: 'Notes and Comments for Observation on Specimen',
                },
              },
            },
            CONTAINER: {
              idx: 2,
              desc: 'Container',
              segments: {
                SAC: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Container information',
                },
                INV: {
                  idx: 1,
                  max: 1,
                  desc: 'Detailed Substance information (e.g., id, lot, manufacturer, ... of QC specimen)',
                },
              },
            },
            ORDER: {
              idx: 3,
              min: 1,
              desc: 'Order',
              segments: {
                OBR: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation Order',
                },
                ORC: {
                  idx: 1,
                  max: 1,
                  desc: 'COMMON_ORDER',
                },
                NTE: {
                  idx: 2,
                  desc: 'Notes and Comments (for Detail)',
                },
                PRT: {
                  idx: 3,
                  desc: 'Participation (for observation)',
                },
                TIMING_QTY: {
                  idx: 4,
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
                RESULT: {
                  idx: 5,
                  min: 1,
                  desc: 'Result',
                  segments: {
                    OBX: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation Result',
                    },
                    PRT: {
                      idx: 1,
                      desc: 'Participation',
                    },
                    NTE: {
                      idx: 2,
                      desc: 'Notes and Comments',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
