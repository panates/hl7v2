import { HL7MessageDefinition } from '../../types.js';

export const OPU_R25: HL7MessageDefinition = {
  desc: 'Unsolicited Population/Location-Based Laboratory Observation',
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
      idx: 7,
      desc: 'Notes and Comments on Visit',
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
    OBX: {
      idx: 6,
      desc: 'Observation on the Visit',
    },
    ROL: {
      idx: 8,
      min: 1,
      desc: 'Role',
    },
    ACCESSION_DETAIL: {
      idx: 9,
      min: 1,
      desc: 'Accession detail',
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
            PATIENT_OBSERVATION: {
              idx: 2,
              desc: 'Patient observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observations on Patient',
                },
                NTE: {
                  idx: 1,
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
              desc: 'Specimen observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation on Specimen',
                },
                NTE: {
                  idx: 1,
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
                  desc: 'Common Order',
                },
                NTE: {
                  idx: 2,
                  desc: 'Notes and Comments (for Detail)',
                },
                ROL: {
                  idx: 3,
                  desc: 'Role (for observation)',
                },
                TIMING_QTY: {
                  idx: 4,
                  desc: 'Timing qty',
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
                    NTE: {
                      idx: 1,
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
