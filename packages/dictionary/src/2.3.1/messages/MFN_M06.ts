import { HL7MessageDefinition } from '../../types.js';

export const MFN_M06: HL7MessageDefinition = {
  desc: 'Clinical study with phases and schedules master file',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MFI: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MFI - master file identification segment',
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
          desc: 'MFE - master file entry segment',
        },
        CM0: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'CM0 - clinical study master segment',
        },
        MF_PHASE_SCHED_DETAIL: {
          idx: 2,
          desc: 'Mf phase sched detail',
          segments: {
            CM1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'CM1 - clinical study phase master segment',
            },
            CM2: {
              idx: 1,
              desc: 'CM2 - clinical study schedule master segment',
            },
          },
        },
      },
    },
  },
};
