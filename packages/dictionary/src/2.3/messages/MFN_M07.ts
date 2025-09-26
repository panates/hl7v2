import { HL7MessageDefinition } from '../../types.js';

export const MFN_M07: HL7MessageDefinition = {
  desc: 'Clinical study without phases but with schedules master file',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MFI: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Master file identification segment',
    },
    MF_CLIN_STUDY: {
      idx: 2,
      min: 1,
      desc: 'Mf clin study',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master file entry segment',
        },
        CM0: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Clinical study master',
        },
        MF_PHASE_SCHED_DETAIL: {
          idx: 2,
          desc: 'Mf phase sched detail',
          segments: {
            CM1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Clinical study phase master',
            },
            CM2: {
              idx: 1,
              desc: 'Clinical study schedule master',
            },
          },
        },
      },
    },
  },
};
