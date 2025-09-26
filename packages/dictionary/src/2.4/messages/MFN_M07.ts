import { HL7MessageDefinition } from '../../types.js';

export const MFN_M07: HL7MessageDefinition = {
  desc: 'Clinical study without phases but with schedules master file',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MFI: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Master file identification',
    },
    MF_CLIN_STUDY_SCHED: {
      idx: 2,
      min: 1,
      desc: 'Mf clin study sched',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master file entry',
        },
        CM0: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Clinical study master',
        },
        CM2: {
          idx: 2,
          desc: 'Clinical study schedule master',
        },
      },
    },
  },
};
