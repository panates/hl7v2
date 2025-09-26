import { HL7MessageDefinition } from '../../types.js';

export const MFN_M06: HL7MessageDefinition = {
  desc: 'Clinical study with phases and schedules master file',
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
    MF_CLIN_STUDY: {
      idx: 2,
      min: 1,
      desc: 'Mf clin study',
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
