const segments = {
  ACC: {
    desc: 'Accident',
    fields: [
      {
        dt: 'TS',
        desc: 'Accident date/time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'ID',
        desc: 'Accident code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 50
      },
      {
        dt: 'ST',
        desc: 'Accident location',
        opt: 'R',
        rep: 1,
        len: 25
      }
    ]
  },
  ADD: {
    desc: 'Addendum',
    fields: [
      {
        dt: 'ST',
        desc: 'Addendum continuation pointer',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  BHS: {
    desc: 'Batch header',
    fields: [
      {
        dt: 'ST',
        desc: 'Batch field separator',
        opt: 'C',
        rep: 1,
        len: 1
      },
      {
        dt: 'ST',
        desc: 'Batch encoding characters',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Batch sending application',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Batch sending facility',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Batch receiving application',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Batch receiving facility',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Batch creation date/time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'ST',
        desc: 'Batch security',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Batch name/id/type',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Batch comment',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'ST',
        desc: 'Batch control id',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Reference batch control id',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  BLG: {
    desc: 'Billing',
    fields: [
      {
        dt: 'CM',
        desc: 'When to charge',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ID',
        desc: 'Charge type',
        opt: 'R',
        rep: 1,
        len: 50,
        table: 122
      },
      {
        dt: 'CM',
        desc: 'Account id',
        opt: 'R',
        rep: 1,
        len: 100
      }
    ]
  },
  BTS: {
    desc: 'Batch trailer',
    fields: [
      {
        dt: 'ST',
        desc: 'Batch message count',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ST',
        desc: 'Batch comment',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CM',
        desc: 'Batch totals',
        opt: 'R',
        rep: 1,
        len: 100
      }
    ]
  },
  DG1: {
    desc: 'Diagnosis',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - diagnosis',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Diagnosis coding method',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 53
      },
      {
        dt: 'ID',
        desc: 'Diagnosis code',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 51
      },
      {
        dt: 'ST',
        desc: 'Diagnosis description',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'TS',
        desc: 'Diagnosis date/time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'ID',
        desc: 'Diagnosis/drg type',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 52
      },
      {
        dt: 'ST',
        desc: 'Major diagnostic category',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Diagnostic related group',
        opt: 'R',
        rep: 1,
        len: 4,
        table: 55
      },
      {
        dt: 'ID',
        desc: 'Drg approval indicator',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'Drg grouper review code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 56
      },
      {
        dt: 'ID',
        desc: 'Outlier type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 83
      },
      {
        dt: 'NM',
        desc: 'Outlier days',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Outlier cost',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Grouper version and type',
        opt: 'R',
        rep: 1,
        len: 4
      }
    ]
  },
  DSC: {
    desc: 'Continuation pointer',
    fields: [
      {
        dt: 'ST',
        desc: 'Continuation pointer',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  DSP: {
    desc: 'Display data',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - display data',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'SI',
        desc: 'Display level',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'TX',
        desc: 'Data line',
        opt: 'C',
        rep: 1,
        len: 300
      },
      {
        dt: 'ST',
        desc: 'Logical break point',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'TX',
        desc: 'Result id',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  ERR: {
    desc: 'Error',
    fields: [
      {
        dt: 'ID',
        desc: 'Error code and location',
        opt: 'C',
        rep: 0,
        len: 80,
        table: 60
      }
    ]
  },
  EVN: {
    desc: 'Event type',
    fields: [
      {
        dt: 'ID',
        desc: 'Event type code',
        opt: 'C',
        rep: 1,
        len: 3,
        table: 3
      },
      {
        dt: 'TS',
        desc: 'Date/time of event',
        opt: 'C',
        rep: 1,
        len: 19
      },
      {
        dt: 'TS',
        desc: 'Date/time planned event',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'ID',
        desc: 'Event reason code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 62
      }
    ]
  },
  FHS: {
    desc: 'File header',
    fields: [
      {
        dt: 'ST',
        desc: 'File field separator',
        opt: 'C',
        rep: 1,
        len: 1
      },
      {
        dt: 'ST',
        desc: 'File encoding characters',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'File sending application',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'File sending facility',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'File receiving application',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'File receiving facility',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Date/time of file creation',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'ST',
        desc: 'File security',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'File name/id',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'File header comment',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'ST',
        desc: 'File control id',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Reference file control id',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  FT1: {
    desc: 'Financial transaction',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - financial transaction',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Transaction id',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Transaction batch id',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'DT',
        desc: 'Transaction date',
        opt: 'C',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Transaction posting date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Transaction type',
        opt: 'C',
        rep: 1,
        len: 8,
        table: 17
      },
      {
        dt: 'ID',
        desc: 'Transaction code',
        opt: 'C',
        rep: 1,
        len: 20,
        table: 96
      },
      {
        dt: 'ST',
        desc: 'Transaction description',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Transaction description - alt',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'NM',
        desc: 'Transaction amount - extended',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Transaction quantity',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'NM',
        desc: 'Transaction amount - unit',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Department code',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'ID',
        desc: 'Insurance plan id',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 72
      },
      {
        dt: 'NM',
        desc: 'Insurance amount',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Patient location',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Fee schedule',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 24
      },
      {
        dt: 'ID',
        desc: 'Patient type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 18
      },
      {
        dt: 'ID',
        desc: 'Diagnosis code',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 51
      },
      {
        dt: 'CN',
        desc: 'Performed by code',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Ordered by code',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'NM',
        desc: 'Unit cost',
        opt: 'R',
        rep: 1,
        len: 12
      }
    ]
  },
  FTS: {
    desc: 'File trailer',
    fields: [
      {
        dt: 'ST',
        desc: 'File batch count',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ST',
        desc: 'File trailer comment',
        opt: 'R',
        rep: 1,
        len: 80
      }
    ]
  },
  GT1: {
    desc: 'Guarantor',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - guarantor',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Guarantor number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'PN',
        desc: 'Guarantor name',
        opt: 'C',
        rep: 1,
        len: 48
      },
      {
        dt: 'PN',
        desc: 'Guarantor spouse name',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'AD',
        desc: 'Guarantor address',
        opt: 'R',
        rep: 1,
        len: 106
      },
      {
        dt: 'TN',
        desc: 'Guarantor ph. num.- home',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'TN',
        desc: 'Guarantor ph. num-business',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'DT',
        desc: 'Guarantor date of birth',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Guarantor sex',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 1
      },
      {
        dt: 'ID',
        desc: 'Guarantor type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 68
      },
      {
        dt: 'ID',
        desc: 'Guarantor relationship',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 63
      },
      {
        dt: 'ST',
        desc: 'Guarantor ssn',
        opt: 'R',
        rep: 1,
        len: 11
      },
      {
        dt: 'DT',
        desc: 'Guarantor date - begin',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Guarantor date - end',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'NM',
        desc: 'Guarantor priority',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ST',
        desc: 'Guarantor employer name',
        opt: 'R',
        rep: 1,
        len: 45
      },
      {
        dt: 'AD',
        desc: 'Guarantor employer address',
        opt: 'R',
        rep: 1,
        len: 106
      },
      {
        dt: 'TN',
        desc: 'Guarantor employ phone  ',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Guarantor employee id num',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Guarantor employment status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 66
      }
    ]
  },
  IN1: {
    desc: 'Insurance',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - insurance',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Insurance plan id',
        opt: 'C',
        rep: 1,
        len: 8,
        table: 72
      },
      {
        dt: 'ST',
        desc: 'Insurance company id',
        opt: 'C',
        rep: 1,
        len: 6
      },
      {
        dt: 'ST',
        desc: 'Insurance company name',
        opt: 'R',
        rep: 1,
        len: 45
      },
      {
        dt: 'AD',
        desc: 'Insurance company address',
        opt: 'R',
        rep: 1,
        len: 106
      },
      {
        dt: 'PN',
        desc: 'Insurance co. contact pers',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'TN',
        desc: 'Insurance co phone number',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Group number',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Group name',
        opt: 'R',
        rep: 1,
        len: 35
      },
      {
        dt: 'ST',
        desc: 'Insured\'s group emp. id',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Insured\'s group emp. name',
        opt: 'R',
        rep: 1,
        len: 45
      },
      {
        dt: 'DT',
        desc: 'Plan effective date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Plan expiration date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Authorization information',
        opt: 'R',
        rep: 1,
        len: 55
      },
      {
        dt: 'ID',
        desc: 'Plan type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 86
      },
      {
        dt: 'PN',
        desc: 'Name of insured',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'ID',
        desc: 'Insured\'s relationship to patient',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 63
      },
      {
        dt: 'DT',
        desc: 'Insured\'s date of birth',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'AD',
        desc: 'Insured\'s address',
        opt: 'R',
        rep: 1,
        len: 106
      },
      {
        dt: 'ID',
        desc: 'Assignment of benefits',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'Coordination of benefits',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ST',
        desc: 'Coord of ben. priority',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'Notice of admission code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 81
      },
      {
        dt: 'DT',
        desc: 'Notice of admission date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Rpt of eligibility code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 94
      },
      {
        dt: 'DT',
        desc: 'Rpt of eligibility date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Release information code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 93
      },
      {
        dt: 'ST',
        desc: 'Pre-admit cert.',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'DT',
        desc: 'Verification date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'CM',
        desc: 'Verification by',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Type of agreement code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 98
      },
      {
        dt: 'ID',
        desc: 'Billing status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 22
      },
      {
        dt: 'NM',
        desc: 'Lifetime reserve days',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'NM',
        desc: 'Delay before l. r. day',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Company plan code',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Policy number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'NM',
        desc: 'Policy deductible',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Policy limit - amount',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Policy limit - days',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'NM',
        desc: 'Room rate - semi-private',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Room rate - private',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Insured\'s employment status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 66
      },
      {
        dt: 'ID',
        desc: 'Insured\'s sex',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 1
      },
      {
        dt: 'AD',
        desc: 'Insured\'s employer address',
        opt: 'R',
        rep: 1,
        len: 106
      }
    ]
  },
  MFI: {
    desc: 'Master file identification',
    fields: [
      {
        dt: 'CE',
        desc: 'Master file identifier',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Master file application identifier',
        opt: 'R',
        rep: 1,
        len: 6,
        table: 176
      },
      {
        dt: 'ID',
        desc: 'File-level event code',
        opt: 'C',
        rep: 1,
        len: 3,
        table: 178
      },
      {
        dt: 'TS',
        desc: 'Entered date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Effective date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Response level code',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 179
      }
    ]
  },
  MRG: {
    desc: 'Merge patient information',
    fields: [
      {
        dt: 'CK',
        desc: 'Prior patient id - internal',
        opt: 'C',
        rep: 1,
        len: 16
      },
      {
        dt: 'CK',
        desc: 'Prior alternate patient id',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'CK',
        desc: 'Prior patient account number',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  MSA: {
    desc: 'Message acknowledgment',
    fields: [
      {
        dt: 'ID',
        desc: 'Acknowledgment code',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 8
      },
      {
        dt: 'ST',
        desc: 'Message control id',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Text message',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'NM',
        desc: 'Expected sequence number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ID',
        desc: 'Delayed acknowledgment type',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 102
      }
    ]
  },
  MSH: {
    desc: 'Message header',
    fields: [
      {
        dt: 'ST',
        desc: 'Field separator',
        opt: 'C',
        rep: 1,
        len: 1
      },
      {
        dt: 'ST',
        desc: 'Encoding characters',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Sending application',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Sending facility',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Receiving application',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Receiving facility',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'TS',
        desc: 'Date/time of message',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'ST',
        desc: 'Security',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'CM_MSG',
        desc: 'Message type',
        opt: 'C',
        rep: 1,
        len: 7
      },
      {
        dt: 'ST',
        desc: 'Message control id',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Processing id',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 103
      },
      {
        dt: 'NM',
        desc: 'Version id',
        opt: 'C',
        rep: 1,
        len: 8
      },
      {
        dt: 'NM',
        desc: 'Sequence number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Continuation pointer',
        opt: 'R',
        rep: 1,
        len: 180
      }
    ]
  },
  NCK: {
    desc: 'System clock',
    fields: [
      {
        dt: 'TS',
        desc: 'System date/time',
        opt: 'C',
        rep: 1,
        len: 19
      }
    ]
  },
  NK1: {
    desc: 'Next of kin',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - next of kin',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'PN',
        desc: 'Next of kin name',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'ST',
        desc: 'Next of kin relationship',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'AD',
        desc: 'Next of kin - address',
        opt: 'R',
        rep: 1,
        len: 106
      },
      {
        dt: 'TN',
        desc: 'Next of kin - phone number',
        opt: 'R',
        rep: 0,
        len: 40
      }
    ]
  },
  NPU: {
    desc: 'Non-patient update',
    fields: [
      {
        dt: 'ID',
        desc: 'Bed location',
        opt: 'C',
        rep: 1,
        len: 12,
        table: 79
      },
      {
        dt: 'ID',
        desc: 'Bed status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 116
      }
    ]
  },
  NSC: {
    desc: 'Status change',
    fields: [
      {
        dt: 'ID',
        desc: 'Network change type',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Current cpu',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Current fileserver',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Current application',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Current facility',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'New cpu',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'New fileserver',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'New application',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'New facility',
        opt: 'R',
        rep: 1,
        len: 30
      }
    ]
  },
  NST: {
    desc: 'Statistics',
    fields: [
      {
        dt: 'ID',
        desc: 'Statistics available',
        opt: 'C',
        rep: 1,
        len: 1
      },
      {
        dt: 'ST',
        desc: 'Source identifier',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ID',
        desc: 'Source type',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'TS',
        desc: 'Statistics start',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'TS',
        desc: 'Statistics end',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'NM',
        desc: 'Receive character count',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Send character count',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Messages received',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Messages sent',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Checksum errors received',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Length errors received',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Other errors received',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Connect timeouts',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Receive timeouts',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Network errors',
        opt: 'R',
        rep: 1,
        len: 10
      }
    ]
  },
  NTE: {
    desc: 'Notes and comments',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - notes and comments',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Source of comment',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 105
      },
      {
        dt: 'TX',
        desc: 'Comment',
        opt: 'C',
        rep: 0,
        len: 120
      }
    ]
  },
  OBR: {
    desc: 'Observation request',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - observation request',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CM',
        desc: 'Placer order  ',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'CM',
        desc: 'Filler order  ',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'CE',
        desc: 'Universal service ident.',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Priority',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'TS',
        desc: 'Requested date-time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'TS',
        desc: 'Observation date/time',
        opt: 'C',
        rep: 1,
        len: 19
      },
      {
        dt: 'TS',
        desc: 'Observation end date/time',
        opt: 'C',
        rep: 1,
        len: 19
      },
      {
        dt: 'CQ',
        desc: 'Collection volume',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'CN',
        desc: 'Collector identifier',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Specimen action code',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'CM',
        desc: 'Danger code',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Relevant clinical info.',
        opt: 'R',
        rep: 1,
        len: 300
      },
      {
        dt: 'TS',
        desc: 'Specimen received date/time',
        opt: 'C',
        rep: 1,
        len: 19
      },
      {
        dt: 'CM',
        desc: 'Specimen source',
        opt: 'R',
        rep: 1,
        len: 300
      },
      {
        dt: 'CN',
        desc: 'Ordering provider',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'TN',
        desc: 'Order call-back phone num',
        opt: 'R',
        rep: 2,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Placers field  1',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Placers field  2',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Fillers field  1',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Fillers field  2',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Results rpt/status chng - date/t',
        opt: 'C',
        rep: 1,
        len: 19
      },
      {
        dt: 'CM',
        desc: 'Charge to practice',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'ID',
        desc: 'Diagnostic serv sect id',
        opt: 'R',
        rep: 1,
        len: 10,
        table: 74
      },
      {
        dt: 'ID',
        desc: 'Result status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 123
      },
      {
        dt: 'CE',
        desc: 'Linked results',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CM',
        desc: 'Quantity/timing',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CN',
        desc: 'Result copies to',
        opt: 'R',
        rep: 5,
        len: 80
      },
      {
        dt: 'CM',
        desc: 'Parent accession  ',
        opt: 'R',
        rep: 1,
        len: 150
      },
      {
        dt: 'ID',
        desc: 'Transportation mode',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 124
      },
      {
        dt: 'CE',
        desc: 'Reason for study',
        opt: 'R',
        rep: 0,
        len: 300
      },
      {
        dt: 'CN',
        desc: 'Principal result interpreter',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Assistant result interpreter',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Technician',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Transcriptionist',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Scheduled - date/time',
        opt: 'R',
        rep: 1,
        len: 19
      }
    ]
  },
  OBX: {
    desc: 'Result',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - observation simple',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Value type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 125
      },
      {
        dt: 'CE',
        desc: 'Observation identifier',
        opt: 'C',
        rep: 1,
        len: 80
      },
      {
        dt: 'NM',
        desc: 'Observation sub-id',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'VARIES',
        desc: 'Observation results',
        opt: 'C',
        rep: 1,
        len: 65
      },
      {
        dt: 'ID',
        desc: 'Units',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'References range',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Abnormal flags',
        opt: 'R',
        rep: 5,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Probability',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'ID',
        desc: 'Nature of abnormal test',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 80
      },
      {
        dt: 'ID',
        desc: 'Observ result status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 85
      },
      {
        dt: 'TS',
        desc: 'Date last obs normal values',
        opt: 'R',
        rep: 1,
        len: 19
      }
    ]
  },
  ORC: {
    desc: 'Common order',
    fields: [
      {
        dt: 'ST',
        desc: 'Order control',
        opt: 'C',
        rep: 1,
        len: 2
      },
      {
        dt: 'CM',
        desc: 'Placer order  ',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'CM',
        desc: 'Filler order  ',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'CM',
        desc: 'Placer group  ',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'ST',
        desc: 'Order status',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ST',
        desc: 'Response flag',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'CM',
        desc: 'Timing/quantity',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CM',
        desc: 'Parent',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'TS',
        desc: 'Date/time of transaction',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'CN',
        desc: 'Entered by',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CN',
        desc: 'Verified by',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CN',
        desc: 'Ordering provider',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CM',
        desc: 'Enterer\'s location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'TN',
        desc: 'Call back phone number',
        opt: 'R',
        rep: 2,
        len: 40
      }
    ]
  },
  ORO: {
    desc: 'Order other',
    fields: [
      {
        dt: 'CE',
        desc: 'Order item id',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Substitute allowed',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'CN',
        desc: 'Results copies to',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'ID',
        desc: 'Stock location',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 12
      }
    ]
  },
  PID: {
    desc: 'Patient identification',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - patient id',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CK',
        desc: 'Patient id external',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'CK',
        desc: 'Patient id internal',
        opt: 'C',
        rep: 1,
        len: 16
      },
      {
        dt: 'ST',
        desc: 'Alternate patient id',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'PN',
        desc: 'Patient name',
        opt: 'C',
        rep: 1,
        len: 48
      },
      {
        dt: 'ST',
        desc: 'Mother\'s maiden name',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'DT',
        desc: 'Date of birth',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Sex',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 1
      },
      {
        dt: 'PN',
        desc: 'Patient alias',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'ID',
        desc: 'Ethnic group',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 5
      },
      {
        dt: 'AD',
        desc: 'Patient address',
        opt: 'R',
        rep: 1,
        len: 106
      },
      {
        dt: 'ID',
        desc: 'County code',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'TN',
        desc: 'Phone number - home',
        opt: 'R',
        rep: 3,
        len: 40
      },
      {
        dt: 'TN',
        desc: 'Phone number - business',
        opt: 'R',
        rep: 3,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Language - patient',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'ID',
        desc: 'Marital status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 2
      },
      {
        dt: 'ID',
        desc: 'Religion',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 6
      },
      {
        dt: 'CK',
        desc: 'Patient account number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Ssn number - patient',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'CM',
        desc: 'Driver\'s lic num - patient',
        opt: 'R',
        rep: 1,
        len: 25
      }
    ]
  },
  PR1: {
    desc: 'Procedures',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - procedure',
        opt: 'C',
        rep: 0,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Procedure coding method.',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 89
      },
      {
        dt: 'ID',
        desc: 'Procedure code',
        opt: 'C',
        rep: 1,
        len: 10,
        table: 88
      },
      {
        dt: 'ST',
        desc: 'Procedure description',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'TS',
        desc: 'Procedure date/time',
        opt: 'C',
        rep: 1,
        len: 19
      },
      {
        dt: 'ID',
        desc: 'Procedure type',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 90
      },
      {
        dt: 'NM',
        desc: 'Procedure minutes',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CN',
        desc: 'Anesthesiologist',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Anesthesia code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 19
      },
      {
        dt: 'NM',
        desc: 'Anesthesia minutes',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CN',
        desc: 'Surgeon',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Resident code',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Consent code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 59
      }
    ]
  },
  PV1: {
    desc: 'Patient visit',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - patient visit',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Patient class',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 4
      },
      {
        dt: 'ID',
        desc: 'Assigned patient location',
        opt: 'C',
        rep: 1,
        len: 12,
        table: 79
      },
      {
        dt: 'ID',
        desc: 'Admission type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 7
      },
      {
        dt: 'ST',
        desc: 'Pre-admit number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Prior patient location',
        opt: 'R',
        rep: 1,
        len: 12,
        table: 79
      },
      {
        dt: 'CN',
        desc: 'Attending doctor',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Referring doctor',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Consulting doctor',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Hospital service',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 69
      },
      {
        dt: 'ID',
        desc: 'Temporary location',
        opt: 'R',
        rep: 1,
        len: 12,
        table: 79
      },
      {
        dt: 'ID',
        desc: 'Pre-admit test indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 87
      },
      {
        dt: 'ID',
        desc: 'Re-admission indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 92
      },
      {
        dt: 'ID',
        desc: 'Admit source',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 23
      },
      {
        dt: 'ID',
        desc: 'Ambulatory status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 9
      },
      {
        dt: 'ID',
        desc: 'Vip indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 99
      },
      {
        dt: 'CN',
        desc: 'Admitting doctor',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Patient type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 18
      },
      {
        dt: 'NM',
        desc: 'Visit number',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Financial class',
        opt: 'R',
        rep: 4,
        len: 11,
        table: 64
      },
      {
        dt: 'ID',
        desc: 'Charge price indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 32
      },
      {
        dt: 'ID',
        desc: 'Courtesy code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 45
      },
      {
        dt: 'ID',
        desc: 'Credit rating',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 46
      },
      {
        dt: 'ID',
        desc: 'Contract code',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 44
      },
      {
        dt: 'DT',
        desc: 'Contract effective date',
        opt: 'R',
        rep: 0,
        len: 8
      },
      {
        dt: 'NM',
        desc: 'Contract amount',
        opt: 'R',
        rep: 0,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Contract period',
        opt: 'R',
        rep: 0,
        len: 3
      },
      {
        dt: 'ID',
        desc: 'Interest code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 73
      },
      {
        dt: 'ID',
        desc: 'Transfer to bad debt code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 110
      },
      {
        dt: 'DT',
        desc: 'Transfer to bad debt date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Bad debt agency code',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Bad debt transfer amount',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Bad debt recovery amount',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Delete account indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 111
      },
      {
        dt: 'DT',
        desc: 'Delete account date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Discharge disposition',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 112
      },
      {
        dt: 'ID',
        desc: 'Discharged to location',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 113
      },
      {
        dt: 'ID',
        desc: 'Diet type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 114
      },
      {
        dt: 'ID',
        desc: 'Servicing facility',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 115
      },
      {
        dt: 'ID',
        desc: 'Bed status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 116
      },
      {
        dt: 'ID',
        desc: 'Account status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 117
      },
      {
        dt: 'ID',
        desc: 'Pending location',
        opt: 'R',
        rep: 1,
        len: 12,
        table: 79
      },
      {
        dt: 'ID',
        desc: 'Prior temporary location',
        opt: 'R',
        rep: 1,
        len: 12,
        table: 79
      },
      {
        dt: 'TS',
        desc: 'Admit date/time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'TS',
        desc: 'Discharge date/time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'NM',
        desc: 'Current patient balance',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Total charges',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Total adjustments',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Total payments',
        opt: 'R',
        rep: 1,
        len: 12
      }
    ]
  },
  QRD: {
    desc: 'Query definition',
    fields: [
      {
        dt: 'TS',
        desc: 'Query date/time',
        opt: 'C',
        rep: 1,
        len: 19
      },
      {
        dt: 'ID',
        desc: 'Query format code',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 106
      },
      {
        dt: 'ID',
        desc: 'Query priority',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 91
      },
      {
        dt: 'ST',
        desc: 'Query id',
        opt: 'C',
        rep: 1,
        len: 10
      },
      {
        dt: 'ID',
        desc: 'Deferred response type',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 107
      },
      {
        dt: 'TS',
        desc: 'Deferred response date/time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'CQ',
        desc: 'Quantity limited request',
        opt: 'C',
        rep: 1,
        len: 5
      },
      {
        dt: 'ST',
        desc: 'Who subject filter',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'What subject filter',
        opt: 'C',
        rep: 0,
        len: 3,
        table: 48
      },
      {
        dt: 'ST',
        desc: 'What department data code',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'What data code value qual.',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Query results level',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 108
      }
    ]
  },
  QRF: {
    desc: 'Query filter',
    fields: [
      {
        dt: 'ST',
        desc: 'Where subject filter',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'When data start date/time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'TS',
        desc: 'When data end date/time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'ST',
        desc: 'What user qualifier',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Other qry subject filter',
        opt: 'R',
        rep: 0,
        len: 20
      }
    ]
  },
  RX1: {
    desc: 'Pharmacy order',
    fields: [
      {
        dt: 'ST',
        desc: 'Unused',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Unused',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Route',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Site administered',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CQ',
        desc: 'Iv solution rate',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'CQ',
        desc: 'Drug strength',
        opt: 'R',
        rep: 1,
        len: 14
      },
      {
        dt: 'NM',
        desc: 'Final concentration',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Final volume in ml.',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'CM',
        desc: 'Drug dose',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ID',
        desc: 'Drug role',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'NM',
        desc: 'Prescription sequence  ',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'CQ',
        desc: 'Quantity dispensed',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Unused',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Drug id',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'ID',
        desc: 'Component drug ids',
        opt: 'R',
        rep: 5,
        len: 5
      },
      {
        dt: 'ID',
        desc: 'Prescription type',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'Substitution status',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'ID',
        desc: 'Rx order status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 38
      },
      {
        dt: 'NM',
        desc: 'Number of refills',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'ST',
        desc: 'Unused',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Refills remaining',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'ID',
        desc: 'Dea class',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'NM',
        desc: 'Ordering md\'s dea number',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ST',
        desc: 'Unused',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TS',
        desc: 'Last refill date/time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'ST',
        desc: 'Rx number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Prn status',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'TX',
        desc: 'Pharmacy instructions',
        opt: 'R',
        rep: 5,
        len: 80
      },
      {
        dt: 'TX',
        desc: 'Patient instructions',
        opt: 'R',
        rep: 5,
        len: 80
      },
      {
        dt: 'TX',
        desc: 'Instructions',
        opt: 'R',
        rep: 0,
        len: 500
      }
    ]
  },
  UB1: {
    desc: 'Ub82 data',
    fields: [
      {
        dt: 'SI',
        desc: 'Set id - ub82',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Blood deductible',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'ST',
        desc: 'Blood furn.-pints of',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ST',
        desc: 'Blood replaced-pints',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ST',
        desc: 'Blood not rplcd-pints',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ST',
        desc: 'Co-insurance days',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'Condition code',
        opt: 'R',
        rep: 5,
        len: 2,
        table: 43
      },
      {
        dt: 'ST',
        desc: 'Covered days -',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'ST',
        desc: 'Non covered days -',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'CM',
        desc: 'Value amount & code',
        opt: 'R',
        rep: 8,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Number of grace days',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'Spec. prog. indicator',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'Psro/ur approval ind.',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'DT',
        desc: 'Psro/ur aprvd stay-fm',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Psro/ur aprvd stay-to',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Occurrence',
        opt: 'R',
        rep: 5,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Occurrence span',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'DT',
        desc: 'Occurrence span start date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Occur. span end date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Ub-82 locator 2',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Ub-82 locator 9',
        opt: 'R',
        rep: 1,
        len: 7
      },
      {
        dt: 'ST',
        desc: 'Ub-82 locator 27',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Ub-82 locator 45',
        opt: 'R',
        rep: 1,
        len: 17
      }
    ]
  },
  URD: {
    desc: 'Results/update definition',
    fields: [
      {
        dt: 'TS',
        desc: 'R/u date/time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'ID',
        desc: 'Report priority',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 109
      },
      {
        dt: 'ST',
        desc: 'R/u who subject definition',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'R/u what subject definition',
        opt: 'R',
        rep: 0,
        len: 3,
        table: 48
      },
      {
        dt: 'ST',
        desc: 'R/u what department code',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'R/u display/print locations',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'R/u results level',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 108
      }
    ]
  },
  URS: {
    desc: 'Unsolicited selection',
    fields: [
      {
        dt: 'ST',
        desc: 'R/u where subject definition',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'R/u when data start date/time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'TS',
        desc: 'R/u when data end date/time',
        opt: 'R',
        rep: 1,
        len: 19
      },
      {
        dt: 'ST',
        desc: 'R/u what user qualifier',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'R/u other results subject defini',
        opt: 'R',
        rep: 0,
        len: 20
      }
    ]
  }
};

module.exports = segments;
