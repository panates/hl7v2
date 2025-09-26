import { HL7MessageDefinition } from '../../types.js';

export const MFN_M07: HL7MessageDefinition = {
  desc: 'Clinical study without phases but with schedules master file',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    MFI: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Master File Identification',
    },
    MF_CLIN_STUDY_SCHED: {
      idx: 4,
      min: 1,
      desc: 'Mf clin study sched',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master File Entry',
        },
        CM0: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Clinical Study Master',
        },
        CM2: {
          idx: 2,
          desc: 'Clinical Study Schedule',
        },
      },
    },
  },
};
