const segments = {
  ACC: {
    desc: 'Accident',
    fields: [
      {
        dt: 'TS',
        desc: 'Accident date / time',
        opt: 'R',
        rep: 1,
        len: 26
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
        desc: 'Addendum Continuation Pointer',
        opt: 'R',
        rep: 1,
        len: 65536
      }
    ]
  },
  AL1: {
    desc: 'Patient allergy information',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - Allergy',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Allergy Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 127
      },
      {
        dt: 'CE',
        desc: 'Allergy code / mnemonic / description',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Allergy Severity',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 128
      },
      {
        dt: 'ST',
        desc: 'Allergy Reaction',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'DT',
        desc: 'Identification Date',
        opt: 'R',
        rep: 1,
        len: 8
      }
    ]
  },
  BHS: {
    desc: 'Batch header',
    fields: [
      {
        dt: 'ST',
        desc: 'Batch Field Separator',
        opt: 'C',
        rep: 1,
        len: 1
      },
      {
        dt: 'ST',
        desc: 'Batch Encoding Characters',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Batch Sending Application',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Batch Sending Facility',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Batch Receiving Application',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Batch Receiving Facility',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'TS',
        desc: 'Batch creation date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ST',
        desc: 'Batch Security',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Batch name / ID / type',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Batch Comment',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'ST',
        desc: 'Batch Control ID',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Reference Batch Control ID',
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
        dt: 'CM_CCD',
        desc: 'When to Charge',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ID',
        desc: 'Charge Type',
        opt: 'R',
        rep: 1,
        len: 50,
        table: 122
      },
      {
        dt: 'CK',
        desc: 'Account ID',
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
        desc: 'Batch Message Count',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ST',
        desc: 'Batch Comment',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CM_BATCH_TOTAL',
        desc: 'Batch Totals',
        opt: 'R',
        rep: 0,
        len: 100
      }
    ]
  },
  DG1: {
    desc: 'Diagnosis',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - diagnosis',
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
        desc: 'Diagnosis date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Diagnosis / DRG type',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 52
      },
      {
        dt: 'CE',
        desc: 'Major diagnostic category',
        opt: 'R',
        rep: 1,
        len: 60
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
        desc: 'DRG approval indicator',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'DRG grouper review code',
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
        len: 60,
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
      },
      {
        dt: 'NM',
        desc: 'Diagnosis / DRG priority',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'CN',
        desc: 'Diagnosing clinician',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  DSC: {
    desc: 'Continuation pointer',
    fields: [
      {
        dt: 'ST',
        desc: 'Continuation Pointer',
        opt: 'R',
        rep: 1,
        len: 180
      }
    ]
  },
  DSP: {
    desc: 'Display data',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - Display Data',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'SI',
        desc: 'Display Level',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'TX',
        desc: 'Data Line',
        opt: 'C',
        rep: 1,
        len: 300
      },
      {
        dt: 'ST',
        desc: 'Logical Break Point',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'TX',
        desc: 'Result ID',
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
        dt: 'CM_ELD',
        desc: 'Error Code and Location',
        opt: 'C',
        rep: 0,
        len: 80
      }
    ]
  },
  EVN: {
    desc: 'Event type',
    fields: [
      {
        dt: 'ID',
        desc: 'Event Type Code',
        opt: 'C',
        rep: 1,
        len: 3,
        table: 3
      },
      {
        dt: 'TS',
        desc: 'Date / time of event',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Date / time planned event',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Event Reason Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 62
      },
      {
        dt: 'ID',
        desc: 'Operator ID',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 188
      }
    ]
  },
  FHS: {
    desc: 'File header',
    fields: [
      {
        dt: 'ST',
        desc: 'File Field Separator',
        opt: 'C',
        rep: 1,
        len: 1
      },
      {
        dt: 'ST',
        desc: 'File Encoding Characters',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'File Sending Application',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'File Sending Facility',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'File Receiving Application',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'File Receiving Facility',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'TS',
        desc: 'File creation date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ST',
        desc: 'File Security',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'File name / ID',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'File Header Comment',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'ST',
        desc: 'File Control ID',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Reference File Control ID',
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
        desc: 'Set ID - financial transaction',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Transaction ID',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Transaction batch ID',
        opt: 'R',
        rep: 1,
        len: 10
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
        dt: 'CE',
        desc: 'Transaction code',
        opt: 'C',
        rep: 1,
        len: 20
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
        desc: 'Transaction description - alternate',
        opt: 'R',
        rep: 1,
        len: 40
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
        desc: 'Transaction amount - extended',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Transaction amount - unit',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CE',
        desc: 'Department code',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Insurance plan ID',
        opt: 'C',
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
        dt: 'CM_INTERNAL_LOCATION',
        desc: 'Assigned Patient Location',
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
        dt: 'CE',
        desc: 'Diagnosis code',
        opt: 'R',
        rep: 0,
        len: 8
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
      },
      {
        dt: 'CM_FILLER',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 1,
        len: 75
      }
    ]
  },
  FTS: {
    desc: 'File trailer',
    fields: [
      {
        dt: 'NM',
        desc: 'File Batch Count',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ST',
        desc: 'File Trailer Comment',
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
        desc: 'Set ID - guarantor',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CK',
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
        desc: 'Guarantor phone number - home',
        opt: 'R',
        rep: 3,
        len: 40
      },
      {
        dt: 'TN',
        desc: 'Guarantor phone number - business',
        opt: 'R',
        rep: 3,
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
        desc: 'Guarantor social security number',
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
        desc: 'Guarantor employ phone number',
        opt: 'R',
        rep: 3,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Guarantor employee ID number',
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
      },
      {
        dt: 'ST',
        desc: 'Guarantor organization',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  IN1: {
    desc: 'Insurance',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - insurance',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Insurance plan ID',
        opt: 'C',
        rep: 1,
        len: 8,
        table: 72
      },
      {
        dt: 'ST',
        desc: 'Insurance company ID',
        opt: 'C',
        rep: 1,
        len: 9
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
        desc: 'Insurance company contact pers',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'TN',
        desc: 'Insurance company phone number',
        opt: 'R',
        rep: 3,
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
        desc: 'Insured\'s group employer ID',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Insured\'s group employer name',
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
        dt: 'CM_AUI',
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
        len: 5,
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
        len: 2,
        table: 135
      },
      {
        dt: 'ID',
        desc: 'Coordination of benefits',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 173
      },
      {
        dt: 'ST',
        desc: 'Coordination of benefits - priority',
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
        table: 136
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
        desc: 'Report of eligibility code',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'DT',
        desc: 'Report of eligibility date',
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
        desc: 'Pre-admit certification',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'TS',
        desc: 'Verification date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CN',
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
        desc: 'Delay before lifetime reserve days',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Company plan code',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 42
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
        dt: 'CE',
        desc: 'Insured\'s employment status',
        opt: 'R',
        rep: 1,
        len: 60
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
      },
      {
        dt: 'ST',
        desc: 'Verification status',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'Prior insurance plan ID',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 72
      }
    ]
  },
  IN2: {
    desc: 'Insurance additional info',
    fields: [
      {
        dt: 'ST',
        desc: 'Insured\'s employee ID',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Insured\'s social security number',
        opt: 'R',
        rep: 1,
        len: 9
      },
      {
        dt: 'CN',
        desc: 'Insured\'s employer name',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Employer information data',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 139
      },
      {
        dt: 'ID',
        desc: 'Mail claim party',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 137
      },
      {
        dt: 'NM',
        desc: 'Medicare health insurance card number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'PN',
        desc: 'Medicaid case name',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'NM',
        desc: 'Medicaid case number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'PN',
        desc: 'Champus sponsor name',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'NM',
        desc: 'Champus ID number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Dependent of champus recipient',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'ST',
        desc: 'Champus organization',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'ST',
        desc: 'Champus station',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'ID',
        desc: 'Champus service',
        opt: 'R',
        rep: 1,
        len: 14,
        table: 140
      },
      {
        dt: 'ID',
        desc: 'Champus rank / grade',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 141
      },
      {
        dt: 'ID',
        desc: 'Champus status',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 142
      },
      {
        dt: 'DT',
        desc: 'Champus retire date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Champus non-availability certification on file',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Baby coverage',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Combine baby bill',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'NM',
        desc: 'Blood deductible',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'PN',
        desc: 'Special coverage approval name',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'ST',
        desc: 'Special coverage approval title',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ID',
        desc: 'Non-covered insurance code',
        opt: 'R',
        rep: 0,
        len: 8,
        table: 143
      },
      {
        dt: 'ST',
        desc: 'Payor ID',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'ST',
        desc: 'Payor subscriber ID',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'ID',
        desc: 'Eligibility source',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 144
      },
      {
        dt: 'CM_RMC',
        desc: 'Room coverage type / amount',
        opt: 'R',
        rep: 0,
        len: 25
      },
      {
        dt: 'CM_PTA',
        desc: 'Policy type / amount',
        opt: 'R',
        rep: 0,
        len: 25
      },
      {
        dt: 'CM_DDI',
        desc: 'Daily deductible',
        opt: 'R',
        rep: 1,
        len: 25
      }
    ]
  },
  IN3: {
    desc: 'Insurance additional info-certification',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - insurance certification',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Certification number',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'CN',
        desc: 'Certified by',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Certification required',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CM_PEN',
        desc: 'Penalty',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'TS',
        desc: 'Certification date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Certification modify date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CN',
        desc: 'Operator',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'DT',
        desc: 'Certification begin date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Certification end date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'CM_DTN',
        desc: 'Days',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'CE',
        desc: 'Non-concur code / description',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Non-concur effective date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CN',
        desc: 'Physician reviewer',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Certification contact',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'TN',
        desc: 'Certification contact phone number',
        opt: 'R',
        rep: 3,
        len: 40
      },
      {
        dt: 'CE',
        desc: 'Appeal reason',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Certification agency',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'TN',
        desc: 'Certification agency phone number',
        opt: 'R',
        rep: 3,
        len: 40
      },
      {
        dt: 'CM_PCF',
        desc: 'Pre-certification required / window',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Case manager',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'DT',
        desc: 'Second opinion date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Second opinion status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 151
      },
      {
        dt: 'ID',
        desc: 'Second opinion documentation received',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 152
      },
      {
        dt: 'CN',
        desc: 'Second opinion practitioner',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  MFA: {
    desc: 'Master file acknowledgement',
    fields: [
      {
        dt: 'ID',
        desc: 'Record-level event code',
        opt: 'C',
        rep: 1,
        len: 3,
        table: 180
      },
      {
        dt: 'ST',
        desc: 'MFN control ID',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Event completion date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Error return code and/or text',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Primary key value',
        opt: 'C',
        rep: 0,
        len: 60
      }
    ]
  },
  MFE: {
    desc: 'Master file entry',
    fields: [
      {
        dt: 'ID',
        desc: 'Record-level event code',
        opt: 'C',
        rep: 1,
        len: 3,
        table: 180
      },
      {
        dt: 'ST',
        desc: 'MFN control ID',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Effective date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Primary key value',
        opt: 'C',
        rep: 0,
        len: 60
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
        dt: 'CM_PAT_ID',
        desc: 'Prior Patient ID - Internal',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'CM_PAT_ID',
        desc: 'Prior Alternate Patient ID',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'CK',
        desc: 'Prior Patient Account Number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CK',
        desc: 'Prior Patient ID - External',
        opt: 'R',
        rep: 1,
        len: 16
      }
    ]
  },
  MSA: {
    desc: 'Message acknowledgment',
    fields: [
      {
        dt: 'ID',
        desc: 'Acknowledgement code',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 8
      },
      {
        dt: 'ST',
        desc: 'Message Control ID',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Text Message',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'NM',
        desc: 'Expected Sequence Number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ID',
        desc: 'Delayed Acknowledgement type',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 102
      },
      {
        dt: 'CE',
        desc: 'Error Condition',
        opt: 'R',
        rep: 1,
        len: 100
      }
    ]
  },
  MSH: {
    desc: 'Message header',
    fields: [
      {
        dt: 'ST',
        desc: 'Field Separator',
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
        len: 30
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
        desc: 'Date / Time of message',
        opt: 'R',
        rep: 1,
        len: 26
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
        desc: 'Message Control ID',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Processing ID',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 103
      },
      {
        dt: 'ID',
        desc: 'Version ID',
        opt: 'C',
        rep: 1,
        len: 8,
        table: 104
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
      },
      {
        dt: 'ID',
        desc: 'Accept acknowledgement type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 155
      },
      {
        dt: 'ID',
        desc: 'Application acknowledgement type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 155
      },
      {
        dt: 'ID',
        desc: 'Country code',
        opt: 'R',
        rep: 1,
        len: 2
      }
    ]
  },
  NCK: {
    desc: 'System clock',
    fields: [
      {
        dt: 'TS',
        desc: 'System Date/Time',
        opt: 'C',
        rep: 1,
        len: 26
      }
    ]
  },
  NK1: {
    desc: 'Next of kin',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - Next of Kin',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'PN',
        desc: 'NK Name',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'CE',
        desc: 'Relationship',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'AD',
        desc: 'Address',
        opt: 'R',
        rep: 1,
        len: 106
      },
      {
        dt: 'TN',
        desc: 'Phone Number',
        opt: 'R',
        rep: 3,
        len: 40
      },
      {
        dt: 'TN',
        desc: 'Business Phone Number',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'CE',
        desc: 'Contact Role',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'DT',
        desc: 'Start Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'End Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Next of Kin',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CM_JOB_CODE',
        desc: 'Next of kin job code / class',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Next of Kin Employee Number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Organization Name',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  NPU: {
    desc: 'Bed status update',
    fields: [
      {
        dt: 'CM_INTERNAL_LOCATION',
        desc: 'Bed Location',
        opt: 'C',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Bed Status',
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
        desc: 'Network Change Type',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Current CPU',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Current Fileserver',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Current Application',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Current Facility',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'New CPU',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'New Fileserver',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'New Application',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'New Facility',
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
        desc: 'Statistics Available',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ST',
        desc: 'Source Identifier',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ID',
        desc: 'Source Type',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'TS',
        desc: 'Statistics Start',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Statistics End',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Receive Character Count',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Send Character Count',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Message Received',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Message Sent',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Checksum Errors Received',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Length Errors Received',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Other Errors Received',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Connect Timeouts',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Receive Timeouts',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Network Errors',
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
        desc: 'Set ID - Notes and Comments',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Source of Comment',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 105
      },
      {
        dt: 'FT',
        desc: 'Comment',
        opt: 'R',
        rep: 0,
        len: 65536
      }
    ]
  },
  OBR: {
    desc: 'Observation request',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - Observation Request',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CM_PLACER',
        desc: 'Placer Order Number',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'CM_FILLER',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'CE',
        desc: 'Universal Service ID',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Priority',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'TS',
        desc: 'Requested date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Observation date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Observation end date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CQ_QUANTITY',
        desc: 'Collection Volume',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CN',
        desc: 'Collector Identifier',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Specimen action code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 65
      },
      {
        dt: 'CE',
        desc: 'Danger Code',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Relevant clinical information',
        opt: 'R',
        rep: 1,
        len: 300
      },
      {
        dt: 'TS',
        desc: 'Specimen received date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CM_SPS',
        desc: 'Specimen source',
        opt: 'R',
        rep: 1,
        len: 300
      },
      {
        dt: 'CN',
        desc: 'Ordering Provider',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'TN',
        desc: 'Order Callback Phone Number',
        opt: 'R',
        rep: 2,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Placer field 1',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Placer field 2',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Filler Field 1',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Filler Field 2',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Results report / status change - date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CM_MOC',
        desc: 'Charge to Practice',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'ID',
        desc: 'Diagnostic service section ID',
        opt: 'R',
        rep: 1,
        len: 10,
        table: 74
      },
      {
        dt: 'ID',
        desc: 'Result Status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 123
      },
      {
        dt: 'CM_PARENT_RESULT',
        desc: 'Parent Result',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'TQ',
        desc: 'Quantity / timing',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CN',
        desc: 'Result Copies To',
        opt: 'R',
        rep: 5,
        len: 150
      },
      {
        dt: 'CM_EIP',
        desc: 'Parent Number',
        opt: 'R',
        rep: 1,
        len: 150
      },
      {
        dt: 'ID',
        desc: 'Transportation Mode',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 124
      },
      {
        dt: 'CE',
        desc: 'Reason for Study',
        opt: 'R',
        rep: 0,
        len: 300
      },
      {
        dt: 'CM_NDL',
        desc: 'Principal Result Interpreter',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CM_NDL',
        desc: 'Assistant Result Interpreter',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'CM_NDL',
        desc: 'Technician',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'CM_NDL',
        desc: 'Transcriptionist',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Scheduled date / time',
        opt: 'R',
        rep: 1,
        len: 26
      }
    ]
  },
  OBX: {
    desc: 'Observation result',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - Observational Simple',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Value Type',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 125
      },
      {
        dt: 'CE',
        desc: 'Observation Identifier',
        opt: 'C',
        rep: 1,
        len: 80
      },
      {
        dt: 'ST',
        desc: 'Observation Sub-ID',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'VARIES',
        desc: 'Observation Value',
        opt: 'R',
        rep: 1,
        len: 65536
      },
      {
        dt: 'CE',
        desc: 'Units',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'References Range',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Abnormal Flags',
        opt: 'R',
        rep: 5,
        len: 10,
        table: 78
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
        desc: 'Nature of Abnormal Test',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 80
      },
      {
        dt: 'ID',
        desc: 'Observation result status',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 85
      },
      {
        dt: 'TS',
        desc: 'Effective date last observation normal values',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ST',
        desc: 'User Defined Access Checks',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Date / time of the observation',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Producer\'s ID',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Responsible Observer',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  ODS: {
    desc: 'Dietary orders, supplements, and preferences',
    fields: [
      {
        dt: 'ID',
        desc: 'Type',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 159
      },
      {
        dt: 'CE',
        desc: 'Service Period',
        opt: 'R',
        rep: 10,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Diet, Supplement, or Preference Code',
        opt: 'C',
        rep: 20,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Text Instruction',
        opt: 'R',
        rep: 2,
        len: 80
      }
    ]
  },
  ODT: {
    desc: 'Diet tray instruction',
    fields: [
      {
        dt: 'CE',
        desc: 'Tray Type',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Service Period',
        opt: 'R',
        rep: 10,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Text Instruction',
        opt: 'R',
        rep: 2,
        len: 80
      }
    ]
  },
  OM1: {
    desc: 'General - fields that apply to most observations',
    fields: [
      {
        dt: 'ST',
        desc: 'Segment Type ID',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/ Observation Master File',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Producer\'s test / observation ID',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Permitted Data Types',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 125
      },
      {
        dt: 'ID',
        desc: 'Specimen Required',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Producer ID',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'TX',
        desc: 'Observation Description',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Other test / observation IDs for the observation',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Other Names',
        opt: 'C',
        rep: 0,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Preferred Report Name for the Observation',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Preferred Short Name or Mnemonic for Observation',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Preferred Long Name for the Observation',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Orderability',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Identity of instrument used to perform this study',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Coded Representation of Method',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Portable',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Observation producing department / section',
        opt: 'R',
        rep: 0,
        len: 1
      },
      {
        dt: 'TN',
        desc: 'Telephone Number of Section',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'ID',
        desc: 'Nature of test / observation',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 174
      },
      {
        dt: 'CE',
        desc: 'Report Subheader',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Report Display Order',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Date / time stamp for any change in definition for obs',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Effective date / time of change',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Typical Turn-around Time',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Processing Time',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Processing Priority',
        opt: 'R',
        rep: 0,
        len: 40,
        table: 168
      },
      {
        dt: 'ID',
        desc: 'Reporting Priority',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 169
      },
      {
        dt: 'CE',
        desc: 'Outside Site',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'AD',
        desc: 'Address of Outside Site',
        opt: 'R',
        rep: 0,
        len: 1000
      },
      {
        dt: 'TN',
        desc: 'Phone Number of Outside Site',
        opt: 'R',
        rep: 0,
        len: 400
      },
      {
        dt: 'ID',
        desc: 'Confidentiality Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 177
      },
      {
        dt: 'CE',
        desc: 'Observations required to interpret the observation',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'TX',
        desc: 'Interpretation of Observations',
        opt: 'R',
        rep: 1,
        len: 65536
      },
      {
        dt: 'CE',
        desc: 'Contraindications to Observations',
        opt: 'R',
        rep: 0,
        len: 65536
      },
      {
        dt: 'CE',
        desc: 'Reflex tests / observations',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Rules that Trigger Reflex Testing',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Fixed Canned Message',
        opt: 'R',
        rep: 0,
        len: 65536
      },
      {
        dt: 'TX',
        desc: 'Patient Preparation',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Procedure Medication',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'TX',
        desc: 'Factors that may affect the observation',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Test / observation performance schedule',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'TX',
        desc: 'Description of Test Methods',
        opt: 'R',
        rep: 1,
        len: 65536
      }
    ]
  },
  OM2: {
    desc: 'Numeric observation',
    fields: [
      {
        dt: 'ST',
        desc: 'Segment Type ID',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/ Observation Master File',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Units of Measure',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'NM',
        desc: 'Range of Decimal Precision',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'CE',
        desc: 'Corresponding SI Units of Measure',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'TX',
        desc: 'SI Conversion Factor',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'CM_RFR',
        desc: 'Reference',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CM_RANGE',
        desc: 'Critical range for ordinal and continuous observations',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CM_ABS_RANGE',
        desc: 'Absolute range for ordinal and continuous observations',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CM_DLT',
        desc: 'Delta Check Criteria',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'NM',
        desc: 'Minimum Meaningful Increments',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  OM3: {
    desc: 'Categorical test/observation',
    fields: [
      {
        dt: 'ST',
        desc: 'Segment Type ID',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/ Observation Master File',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Preferred Coding System',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CE',
        desc: 'Valid coded answers',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Normal test codes for categorical observations',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Abnormal test codes for categorical observations',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Critical test codes for categorical observations',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Data Type',
        opt: 'R',
        rep: 1,
        len: 2
      }
    ]
  },
  OM4: {
    desc: 'Observation that require specimens',
    fields: [
      {
        dt: 'ST',
        desc: 'Segment Type ID',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/ Observation Master File',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Derived Specimen',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 170
      },
      {
        dt: 'TX',
        desc: 'Container Description',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'NM',
        desc: 'Container Volume',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Container Units',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Specimen',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Additive',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'TX',
        desc: 'Preparation',
        opt: 'R',
        rep: 1,
        len: 10240
      },
      {
        dt: 'TX',
        desc: 'Special Handling Requirements',
        opt: 'R',
        rep: 1,
        len: 10240
      },
      {
        dt: 'CQ_QUANTITY',
        desc: 'Normal Collection Volume',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CQ_QUANTITY',
        desc: 'Minimum Collection Volume',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TX',
        desc: 'Specimen Requirements',
        opt: 'R',
        rep: 1,
        len: 10240
      },
      {
        dt: 'ID',
        desc: 'Specimen Priorities',
        opt: 'R',
        rep: 0,
        len: 60,
        table: 27
      },
      {
        dt: 'CQ_QUANTITY',
        desc: 'Specimen Retention Time',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  OM5: {
    desc: 'Observation batteries',
    fields: [
      {
        dt: 'ST',
        desc: 'Segment Type ID',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/ Observation Master File',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Tests / observations included within an ordered test battery',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Observation ID Suffixes',
        opt: 'R',
        rep: 1,
        len: 200
      }
    ]
  },
  OM6: {
    desc: 'Observations that are calculated from other obersvations',
    fields: [
      {
        dt: 'ST',
        desc: 'Segment Type ID',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/ Observation Master File',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'TX',
        desc: 'Derivation Rule',
        opt: 'R',
        rep: 1,
        len: 10240
      }
    ]
  },
  ORC: {
    desc: 'Commom order',
    fields: [
      {
        dt: 'ID',
        desc: 'Order Control',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 119
      },
      {
        dt: 'CM_PLACER',
        desc: 'Placer Order Number',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'CM_FILLER',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'CM_GROUP_ID',
        desc: 'Placer Group Number',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'ID',
        desc: 'Order Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 38
      },
      {
        dt: 'ID',
        desc: 'Response Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 121
      },
      {
        dt: 'TQ',
        desc: 'Quantity / timing',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CM_EIP',
        desc: 'Parent Order',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'TS',
        desc: 'Date / time of transaction',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CN',
        desc: 'Entered By',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CN',
        desc: 'Verified By',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CN',
        desc: 'Ordering Provider',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CM_PARENT_RESULT',
        desc: 'Enterer\'s Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'TN',
        desc: 'Call Back Phone Number',
        opt: 'R',
        rep: 2,
        len: 40
      },
      {
        dt: 'TS',
        desc: 'Order effective date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Order Control Code Reason',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Entering Organization',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Entering Device',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Action by',
        opt: 'R',
        rep: 1,
        len: 80
      }
    ]
  },
  PID: {
    desc: 'Patient identification',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - Patient ID',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CK',
        desc: 'Patient ID External',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'CM_PAT_ID',
        desc: 'Patient ID Internal',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Alternate Patient ID',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'PN',
        desc: 'Patient Name',
        opt: 'C',
        rep: 1,
        len: 48
      },
      {
        dt: 'ST',
        desc: 'Mother\'s Maiden Name',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'TS',
        desc: 'Date of Birth',
        opt: 'R',
        rep: 1,
        len: 26
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
        desc: 'Patient Alias',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'ID',
        desc: 'Race',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 5
      },
      {
        dt: 'AD',
        desc: 'Patient Address',
        opt: 'R',
        rep: 3,
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
        desc: 'Phone Number - Home',
        opt: 'R',
        rep: 3,
        len: 40
      },
      {
        dt: 'TN',
        desc: 'Phone Number - Business',
        opt: 'R',
        rep: 3,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Language - Patient',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'ID',
        desc: 'Marital Status',
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
        desc: 'Patient Account Number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Social security number - patient',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'CM_LICENSE_NO',
        desc: 'Driver\'s license number - patient',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'CK',
        desc: 'Mother\'s Identifier',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 189
      },
      {
        dt: 'ST',
        desc: 'Birth Place',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'ID',
        desc: 'Multiple Birth Indicator',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Birth Order',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'Citizenship',
        opt: 'R',
        rep: 0,
        len: 3,
        table: 171
      },
      {
        dt: 'ST',
        desc: 'Veterans Military Status',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  PR1: {
    desc: 'Procedures',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - procedure',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Procedure coding method',
        opt: 'C',
        rep: 0,
        len: 2,
        table: 89
      },
      {
        dt: 'ID',
        desc: 'Procedure code',
        opt: 'C',
        rep: 0,
        len: 10,
        table: 88
      },
      {
        dt: 'ST',
        desc: 'Procedure description',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'TS',
        desc: 'Procedure date / time',
        opt: 'C',
        rep: 1,
        len: 26
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
        dt: 'CM_PRACTITIONER',
        desc: 'Procedure Practitioner',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Consent code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 59
      },
      {
        dt: 'NM',
        desc: 'Procedure priority',
        opt: 'R',
        rep: 1,
        len: 2
      }
    ]
  },
  PRA: {
    desc: 'Practitioner detail',
    fields: [
      {
        dt: 'ST',
        desc: 'PRA - primary key value',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Practitioner group',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Practitioner Category',
        opt: 'R',
        rep: 0,
        len: 3,
        table: 186
      },
      {
        dt: 'ID',
        desc: 'Provider Billing',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 187
      },
      {
        dt: 'CM_SPD',
        desc: 'Specialty',
        opt: 'R',
        rep: 0,
        len: 100
      },
      {
        dt: 'CM_PLN',
        desc: 'Practitioner ID Numbers',
        opt: 'R',
        rep: 0,
        len: 100
      },
      {
        dt: 'CM_PIP',
        desc: 'Privileges',
        opt: 'R',
        rep: 0,
        len: 20
      }
    ]
  },
  PV1: {
    desc: 'Patient visit',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - Patient Visit',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Patient Class',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 4
      },
      {
        dt: 'CM_INTERNAL_LOCATION',
        desc: 'Assigned Patient Location',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Admission Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 7
      },
      {
        dt: 'ST',
        desc: 'Preadmit Number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CM_INTERNAL_LOCATION',
        desc: 'Prior Patient Location',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CN',
        desc: 'Attending Doctor',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Referring Doctor',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Consulting Doctor',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Hospital Service',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 69
      },
      {
        dt: 'CM_INTERNAL_LOCATION',
        desc: 'Temporary Location',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Preadmit Test Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 87
      },
      {
        dt: 'ID',
        desc: 'Readmission indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 92
      },
      {
        dt: 'ID',
        desc: 'Admit Source',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 23
      },
      {
        dt: 'ID',
        desc: 'Ambulatory Status',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 9
      },
      {
        dt: 'ID',
        desc: 'VIP Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 99
      },
      {
        dt: 'CN',
        desc: 'Admitting Doctor',
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
        dt: 'CM_PAT_ID',
        desc: 'Visit Number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'CM_FINANCE',
        desc: 'Financial Class',
        opt: 'R',
        rep: 4,
        len: 50
      },
      {
        dt: 'ID',
        desc: 'Charge Price Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 32
      },
      {
        dt: 'ID',
        desc: 'Courtesy Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 45
      },
      {
        dt: 'ID',
        desc: 'Credit Rating',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 46
      },
      {
        dt: 'ID',
        desc: 'Contract Code',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 44
      },
      {
        dt: 'DT',
        desc: 'Contract Effective Date',
        opt: 'R',
        rep: 0,
        len: 8
      },
      {
        dt: 'NM',
        desc: 'Contract Amount',
        opt: 'R',
        rep: 0,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Contract Period',
        opt: 'R',
        rep: 0,
        len: 3
      },
      {
        dt: 'ID',
        desc: 'Interest Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 73
      },
      {
        dt: 'ID',
        desc: 'Transfer to bad debt - code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 110
      },
      {
        dt: 'DT',
        desc: 'Transfer to bad debt - date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Bad Debt Agency Code',
        opt: 'R',
        rep: 1,
        len: 10,
        table: 21
      },
      {
        dt: 'NM',
        desc: 'Bad Debt Transfer Amount',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Bad Debt Recovery Amount',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Delete Account Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 111
      },
      {
        dt: 'DT',
        desc: 'Delete Account Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Discharge Disposition',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 112
      },
      {
        dt: 'CM_DLD',
        desc: 'Discharged to Location',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'ID',
        desc: 'Diet Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 114
      },
      {
        dt: 'ID',
        desc: 'Servicing Facility',
        opt: 'R',
        rep: 1,
        len: 4,
        table: 115
      },
      {
        dt: 'ID',
        desc: 'Bed Status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 116
      },
      {
        dt: 'ID',
        desc: 'Account Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 117
      },
      {
        dt: 'CM_INTERNAL_LOCATION',
        desc: 'Pending Location',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CM_INTERNAL_LOCATION',
        desc: 'Prior Temporary Location',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'TS',
        desc: 'Admit date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Discharge date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Current Patient Balance',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Total Charges',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Total Adjustments',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Total Payments',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CM_PAT_ID_0192',
        desc: 'Alternate Visit ID',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  PV2: {
    desc: 'Patient visit - additional information',
    fields: [
      {
        dt: 'CM_INTERNAL_LOCATION',
        desc: 'Prior Pending Location',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CE',
        desc: 'Accommodation Code',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Admit Reason',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Transfer Reason',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Patient Valuables',
        opt: 'R',
        rep: 0,
        len: 25
      },
      {
        dt: 'ST',
        desc: 'Patient Valuables Location',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'ID',
        desc: 'Visit User Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 130
      },
      {
        dt: 'DT',
        desc: 'Expected Admit Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Expected Discharge Date',
        opt: 'R',
        rep: 1,
        len: 8
      }
    ]
  },
  QRD: {
    desc: 'Query definition',
    fields: [
      {
        dt: 'TS',
        desc: 'Query date / time',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Query Format Code',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 106
      },
      {
        dt: 'ID',
        desc: 'Query Priority',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 91
      },
      {
        dt: 'ST',
        desc: 'Query ID',
        opt: 'C',
        rep: 1,
        len: 10
      },
      {
        dt: 'ID',
        desc: 'Deferred Response Type',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 107
      },
      {
        dt: 'TS',
        desc: 'Deferred response date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CQ_QUANTITY',
        desc: 'Quantity Limited Request',
        opt: 'C',
        rep: 1,
        len: 10
      },
      {
        dt: 'ST',
        desc: 'Who Subject Filter',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'What Subject Filter',
        opt: 'C',
        rep: 0,
        len: 3,
        table: 48
      },
      {
        dt: 'ST',
        desc: 'What Department Data Code',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'CM_VR',
        desc: 'What data code value qualifier',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Query Results Level',
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
        desc: 'Where Subject Filter',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'When data start date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'When data end date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ST',
        desc: 'What User Qualifier',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Other QRY Subject Filter',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Which date / time qualifier',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 156
      },
      {
        dt: 'ID',
        desc: 'Which date / time status qualifier',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 157
      },
      {
        dt: 'ID',
        desc: 'Date / time selection qualifier',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 158
      }
    ]
  },
  RQ1: {
    desc: 'Requisition detail- ',
    fields: [
      {
        dt: 'SI',
        desc: 'Anticipated Price',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'CE',
        desc: 'Manufacturer ID',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Manufacturer\'s Catalog',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'CE',
        desc: 'Vendor ID',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Vendor Catalog',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'ID',
        desc: 'Taxable',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Substitute Allowed',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      }
    ]
  },
  RQD: {
    desc: 'Requisition detail',
    fields: [
      {
        dt: 'SI',
        desc: 'Requisition Line Number',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Item Code - Internal',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Item Code - External',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Hospital Item Code',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'NM',
        desc: 'Requisition Quantity',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'CE',
        desc: 'Requisition Unit of measure',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Department cost center',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ID',
        desc: 'Item Natural Account Code',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'CE',
        desc: 'Deliver-to ID',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'DT',
        desc: 'Date Needed',
        opt: 'R',
        rep: 1,
        len: 8
      }
    ]
  },
  RXA: {
    desc: 'Pharmacy aadministration',
    fields: [
      {
        dt: 'NM',
        desc: 'Give Sub-ID Counter',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'NM',
        desc: 'Administration Sub-ID Counter',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'TS',
        desc: 'Date / time start of administration',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Date / time end of administration',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Administered Code',
        opt: 'C',
        rep: 1,
        len: 100
      },
      {
        dt: 'NM',
        desc: 'Administered Amount',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Administered Units',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Administered Dosage Form',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Administration Notes',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CN',
        desc: 'Administering Provider',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CM_LA1',
        desc: 'Administered-at Location',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Administered Per',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  RXC: {
    desc: 'Pharmacy component order',
    fields: [
      {
        dt: 'ID',
        desc: 'RX Component Type',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 166
      },
      {
        dt: 'CE',
        desc: 'Component Code',
        opt: 'C',
        rep: 1,
        len: 100
      },
      {
        dt: 'NM',
        desc: 'Component Amount',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Component Units',
        opt: 'C',
        rep: 1,
        len: 20
      }
    ]
  },
  RXD: {
    desc: 'Pharmacy dispense',
    fields: [
      {
        dt: 'NM',
        desc: 'Dispense Sub-ID Counter',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Dispense / give code',
        opt: 'C',
        rep: 1,
        len: 100
      },
      {
        dt: 'TS',
        desc: 'Date / time dispensed',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Actual Dispense Amount',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Actual Dispense Units',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Actual Dosage Form',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Prescription Number',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Number of Refills Remaining',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Dispense Notes',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CN',
        desc: 'Dispensing Provider',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Substitution Status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 167
      },
      {
        dt: 'CQ_QUANTITY',
        desc: 'Total Daily Dose',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'CM_LA1',
        desc: 'Deliver-to location',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Needs Human Review',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'CE',
        desc: 'Pharmacy Special Dispensing Instructions',
        opt: 'R',
        rep: 1,
        len: 200
      }
    ]
  },
  RXE: {
    desc: 'Pharmacy encoded order',
    fields: [
      {
        dt: 'TQ',
        desc: 'Quantity / timing',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Give Code',
        opt: 'C',
        rep: 1,
        len: 100
      },
      {
        dt: 'NM',
        desc: 'Give Amount - Minimum',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Give Amount - Maximum',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Give Units',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Give Dosage Form',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Provider\'s Administration Instructions',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CM_LA1',
        desc: 'Deliver-to location',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Substitution Status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 167
      },
      {
        dt: 'NM',
        desc: 'Dispense Amount',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Dispense Units',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'NM',
        desc: 'Number of Refills',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'CN',
        desc: 'Ordering Provider\'s DEA Number',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Pharmacist Verifier ID',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Prescription Number',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Number of Refills Remaining',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Number of refills / doses dispensed',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Date / time of most recent refill or dose dispensed',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CQ_QUANTITY',
        desc: 'Total Daily Dose',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ID',
        desc: 'Needs Human Review',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'CE',
        desc: 'Pharmacy Special Dispensing Instructions',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Give Per',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Give Rate Amount',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'CE',
        desc: 'Give Rate Units',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  RXG: {
    desc: 'Pharmacy give',
    fields: [
      {
        dt: 'NM',
        desc: 'Give Sub-ID Counter',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'NM',
        desc: 'Dispense Sub-ID Counter',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'TQ',
        desc: 'Quantity / timing',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Give Code',
        opt: 'C',
        rep: 1,
        len: 100
      },
      {
        dt: 'NM',
        desc: 'Give Amount - Minimum',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Give Amount - Maximum',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Give Units',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Give Dosage Form',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Administration Notes',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Substitution Status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 167
      },
      {
        dt: 'CM_LA1',
        desc: 'Deliver-to location',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Needs Human Review',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'CE',
        desc: 'Pharmacy Special Administration Instructions',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Give Per',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Give Rate Amount',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'CE',
        desc: 'Give Rate Units',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  RXO: {
    desc: 'Pharmacy prescription order',
    fields: [
      {
        dt: 'CE',
        desc: 'Requested Give Code',
        opt: 'C',
        rep: 1,
        len: 100
      },
      {
        dt: 'NM',
        desc: 'Requested Give Amount - Minimum',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Requested Give Amount - Maximum',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Requested Give Units',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Requested Dosage Form',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Provider\'s Pharmacy Instructions',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Provider\'s Administration Instructions',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CM_LA1',
        desc: 'Deliver-to location',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Allow Substitutions',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 161
      },
      {
        dt: 'CE',
        desc: 'Requested Dispense Code',
        opt: 'R',
        rep: 1,
        len: 100
      },
      {
        dt: 'NM',
        desc: 'Requested Dispense Amount',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Requested Dispense Units',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'NM',
        desc: 'Number of Refills',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'CN',
        desc: 'Ordering Provider\'s DEA Number',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CN',
        desc: 'Pharmacist Verifier ID',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Needs Human Review',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'ST',
        desc: 'Requested Give Per',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  RXR: {
    desc: 'Pharmacy route',
    fields: [
      {
        dt: 'CE',
        desc: 'Route',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Site',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Administration Device',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Administration Method',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  STF: {
    desc: 'Staff identification segment',
    fields: [
      {
        dt: 'CE',
        desc: 'STF - primary key value',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Staff ID Code',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'PN',
        desc: 'Staff Name',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'ID',
        desc: 'Staff Type',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 182
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
        dt: 'TS',
        desc: 'Date of Birth',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Active / inactive',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 183
      },
      {
        dt: 'CE',
        desc: 'Department',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Service',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'TN',
        desc: 'Phone',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'AD',
        desc: 'Office / home address',
        opt: 'R',
        rep: 2,
        len: 106
      },
      {
        dt: 'CM_DIN',
        desc: 'Activation Date',
        opt: 'R',
        rep: 0,
        len: 19
      },
      {
        dt: 'CM_DIN',
        desc: 'Inactivation Date',
        opt: 'R',
        rep: 0,
        len: 19
      },
      {
        dt: 'CE',
        desc: 'Backup Person ID',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'E-mail Address',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'ID',
        desc: 'Preferred method of Contact',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 185
      }
    ]
  },
  UB1: {
    desc: 'Ub82 data',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - UB82',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'NM',
        desc: 'Blood deductible',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'NM',
        desc: 'Blood furnished pints of',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Blood replaced pints',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Blood not replaced pints',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
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
        dt: 'NM',
        desc: 'Covered days',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Non-covered days',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'CM_UVC',
        desc: 'Value amount and code',
        opt: 'R',
        rep: 8,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Number of grace days',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'Special program indicator',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'PSRO / UR approval indicator',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'DT',
        desc: 'PSRO / UR approved stay - from',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'PSRO / UR approved stay - to',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'CM_OCD',
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
        desc: 'Occurrence span end date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'UB-82 locator 2',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'UB-82 locator 9',
        opt: 'R',
        rep: 1,
        len: 7
      },
      {
        dt: 'ST',
        desc: 'UB-82 locator 27',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'UB-82 locator 45',
        opt: 'R',
        rep: 1,
        len: 17
      }
    ]
  },
  UB2: {
    desc: 'Ub92 data',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - UB92',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Co-insurance days',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'ID',
        desc: 'Condition code',
        opt: 'R',
        rep: 7,
        len: 2,
        table: 43
      },
      {
        dt: 'ST',
        desc: 'Covered days',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'ST',
        desc: 'Non-covered days',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CM_UVC',
        desc: 'Value amount and code',
        opt: 'R',
        rep: 12,
        len: 11
      },
      {
        dt: 'CM_OCD',
        desc: 'Occurrence code and date',
        opt: 'R',
        rep: 8,
        len: 11
      },
      {
        dt: 'CM_OSP',
        desc: 'Occurrence span code / dates',
        opt: 'R',
        rep: 2,
        len: 28
      },
      {
        dt: 'ST',
        desc: 'UB92 locator 2',
        opt: 'R',
        rep: 2,
        len: 29
      },
      {
        dt: 'ST',
        desc: 'UB92 locator 11',
        opt: 'R',
        rep: 2,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'UB92 locator 31',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'ST',
        desc: 'Document control number',
        opt: 'R',
        rep: 3,
        len: 23
      },
      {
        dt: 'ST',
        desc: 'UB92 locator 49',
        opt: 'R',
        rep: 23,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'UB92 locator 56',
        opt: 'R',
        rep: 5,
        len: 14
      },
      {
        dt: 'ST',
        desc: 'UB92 locator 57',
        opt: 'R',
        rep: 1,
        len: 27
      },
      {
        dt: 'ST',
        desc: 'UB92 Locator 78',
        opt: 'R',
        rep: 2,
        len: 2
      }
    ]
  },
  URD: {
    desc: 'Results/update definition',
    fields: [
      {
        dt: 'TS',
        desc: 'R/U date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Report Priority',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 109
      },
      {
        dt: 'ST',
        desc: 'R/U Who Subject Definition',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'R/U What Subject Definition',
        opt: 'R',
        rep: 0,
        len: 3,
        table: 48
      },
      {
        dt: 'ST',
        desc: 'R/U What Department Code',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'R/U display / print locations',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'R/U Results Level',
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
        desc: 'R/U Where Subject Definition',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'R/U when data start date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'R/U when data end date / time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ST',
        desc: 'R/U What User Qualifier',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'R/U Other Results Subject Definition',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'R/U which date / time qualifier',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 156
      },
      {
        dt: 'ID',
        desc: 'R/U which date / time status qualifier',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 157
      },
      {
        dt: 'ID',
        desc: 'R/U date / time selection qualifier',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 158
      }
    ]
  }
};

module.exports = segments;
