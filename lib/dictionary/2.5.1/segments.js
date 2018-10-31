const segments = {
  ABS: {
    desc: 'Abstract',
    fields: [
      {
        dt: 'XCN',
        desc: 'Discharge Care Provider',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 10
      },
      {
        dt: 'CE',
        desc: 'Transfer Medical Service Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 69
      },
      {
        dt: 'CE',
        desc: 'Severity of Illness Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 421
      },
      {
        dt: 'TS',
        desc: 'Date/Time of Attestation',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'Attested By',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Triage Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 422
      },
      {
        dt: 'TS',
        desc: 'Abstract Completion Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'Abstracted By',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Case Category Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 423
      },
      {
        dt: 'ID',
        desc: 'Caesarian Section Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Gestation Category Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 424
      },
      {
        dt: 'NM',
        desc: 'Gestation Period - Weeks',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'CE',
        desc: 'Newborn Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 425
      },
      {
        dt: 'ID',
        desc: 'Stillborn Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      }
    ]
  },
  ACC: {
    desc: 'Accident',
    fields: [
      {
        dt: 'TS',
        desc: 'Accident Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Accident Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 50
      },
      {
        dt: 'ST',
        desc: 'Accident Location',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'CE',
        desc: 'Auto Accident State',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 347
      },
      {
        dt: 'ID',
        desc: 'Accident Job Related Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Accident Death Indicator',
        opt: 'R',
        rep: 1,
        len: 12,
        table: 136
      },
      {
        dt: 'XCN',
        desc: 'Entered By',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Accident Description',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'ST',
        desc: 'Brought In By',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'ID',
        desc: 'Police Notified Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'XAD',
        desc: 'Accident Address',
        opt: 'R',
        rep: 1,
        len: 250
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
  AFF: {
    desc: 'Professional Affiliation',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID _ AFF',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'XON',
        desc: 'Professional Organization',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Professional Organization Address',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'DR',
        desc: 'Professional Organization Affiliation Date Range',
        opt: 'R',
        rep: 0,
        len: 52
      },
      {
        dt: 'ST',
        desc: 'Professional Affiliation Additional Information',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  AIG: {
    desc: 'Appointment Information - General Resource',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - AIG',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Segment Action Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 206
      },
      {
        dt: 'CE',
        desc: 'Resource ID',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Resource Type',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Resource Group',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Resource Quantity',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CE',
        desc: 'Resource Quantity Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Start Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Start Date/Time Offset',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Start Date/Time Offset Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Duration',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Duration Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Allow Substitution Code',
        opt: 'R',
        rep: 1,
        len: 10,
        table: 279
      },
      {
        dt: 'CE',
        desc: 'Filler Status Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 278
      }
    ]
  },
  AIL: {
    desc: 'Appointment Information - Location Resource',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - AIL',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Segment Action Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 206
      },
      {
        dt: 'PL',
        desc: 'Location Resource ID',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Location Type-AIL',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 305
      },
      {
        dt: 'CE',
        desc: 'Location Group',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Start Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Start Date/Time Offset',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Start Date/Time Offset Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Duration',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Duration Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Allow Substitution Code',
        opt: 'R',
        rep: 1,
        len: 10,
        table: 279
      },
      {
        dt: 'CE',
        desc: 'Filler Status Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 278
      }
    ]
  },
  AIP: {
    desc: 'Appointment Information - Personnel Resource',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - AIP',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Segment Action Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 206
      },
      {
        dt: 'XCN',
        desc: 'Personnel Resource ID',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Resource Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 182
      },
      {
        dt: 'CE',
        desc: 'Resource Group',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Start Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Start Date/Time Offset',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Start Date/Time Offset Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Duration',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Duration Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Allow Substitution Code',
        opt: 'R',
        rep: 1,
        len: 10,
        table: 279
      },
      {
        dt: 'CE',
        desc: 'Filler Status Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 278
      }
    ]
  },
  AIS: {
    desc: 'Appointment Information',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - AIS',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Segment Action Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 206
      },
      {
        dt: 'CE',
        desc: 'Universal Service Identifier',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Start Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Start Date/Time Offset',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Start Date/Time Offset Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Duration',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Duration Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Allow Substitution Code',
        opt: 'R',
        rep: 1,
        len: 10,
        table: 279
      },
      {
        dt: 'CE',
        desc: 'Filler Status Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 278
      },
      {
        dt: 'CE',
        desc: 'Placer Supplemental Service Information',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 411
      },
      {
        dt: 'CE',
        desc: 'Filler Supplemental Service Information',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 411
      }
    ]
  },
  AL1: {
    desc: 'Patient Allergy Information',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - AL1',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Allergen Type Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 127
      },
      {
        dt: 'CE',
        desc: 'Allergen Code/Mnemonic/Description',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Allergy Severity Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 128
      },
      {
        dt: 'ST',
        desc: 'Allergy Reaction Code',
        opt: 'R',
        rep: 0,
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
  APR: {
    desc: 'Appointment Preferences',
    fields: [
      {
        dt: 'SCV',
        desc: 'Time Selection Criteria',
        opt: 'R',
        rep: 0,
        len: 80,
        table: 294
      },
      {
        dt: 'SCV',
        desc: 'Resource Selection Criteria',
        opt: 'R',
        rep: 0,
        len: 80,
        table: 294
      },
      {
        dt: 'SCV',
        desc: 'Location Selection Criteria',
        opt: 'R',
        rep: 0,
        len: 80,
        table: 294
      },
      {
        dt: 'NM',
        desc: 'Slot Spacing Criteria',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'SCV',
        desc: 'Filler Override Criteria',
        opt: 'R',
        rep: 0,
        len: 80
      }
    ]
  },
  ARQ: {
    desc: 'Appointment Request',
    fields: [
      {
        dt: 'EI',
        desc: 'Placer Appointment ID',
        opt: 'C',
        rep: 1,
        len: 75
      },
      {
        dt: 'EI',
        desc: 'Filler Appointment ID',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'NM',
        desc: 'Occurrence Number',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'EI',
        desc: 'Placer Group Number',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'CE',
        desc: 'Schedule ID',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Request Event Reason',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Appointment Reason',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 276
      },
      {
        dt: 'CE',
        desc: 'Appointment Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 277
      },
      {
        dt: 'NM',
        desc: 'Appointment Duration',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Appointment Duration Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'DR',
        desc: 'Requested Start Date/Time Range',
        opt: 'R',
        rep: 0,
        len: 53
      },
      {
        dt: 'ST',
        desc: 'Priority-ARQ',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'RI',
        desc: 'Repeating Interval',
        opt: 'R',
        rep: 1,
        len: 100
      },
      {
        dt: 'ST',
        desc: 'Repeating Interval Duration',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'XCN',
        desc: 'Placer Contact Person',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Placer Contact Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Placer Contact Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Placer Contact Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XCN',
        desc: 'Entered By Person',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Entered By Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Entered By Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'EI',
        desc: 'Parent Placer Appointment ID',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'EI',
        desc: 'Parent Filler Appointment ID',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'EI',
        desc: 'Placer Order Number',
        opt: 'R',
        rep: 0,
        len: 22
      },
      {
        dt: 'EI',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 0,
        len: 22
      }
    ]
  },
  AUT: {
    desc: 'Authorization Information',
    fields: [
      {
        dt: 'CE',
        desc: 'Authorizing Payor, Plan ID',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 72
      },
      {
        dt: 'CE',
        desc: 'Authorizing Payor, Company ID',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 285
      },
      {
        dt: 'ST',
        desc: 'Authorizing Payor, Company Name',
        opt: 'R',
        rep: 1,
        len: 45
      },
      {
        dt: 'TS',
        desc: 'Authorization Effective Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Authorization Expiration Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'EI',
        desc: 'Authorization Identifier',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'CP',
        desc: 'Reimbursement Limit',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'NM',
        desc: 'Requested Number of Treatments',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Authorized Number of Treatments',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'TS',
        desc: 'Process Date',
        opt: 'R',
        rep: 1,
        len: 26
      }
    ]
  },
  BHS: {
    desc: 'Batch Header',
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
        dt: 'HD',
        desc: 'Batch Sending Application',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'HD',
        desc: 'Batch Sending Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'HD',
        desc: 'Batch Receiving Application',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'HD',
        desc: 'Batch Receiving Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'TS',
        desc: 'Batch Creation Date/Time',
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
        desc: 'Batch Name/ID/Type',
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
  BLC: {
    desc: 'Blood Code',
    fields: [
      {
        dt: 'CE',
        desc: 'Blood Product Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 426
      },
      {
        dt: 'CQ',
        desc: 'Blood Amount',
        opt: 'R',
        rep: 1,
        len: 267
      }
    ]
  },
  BLG: {
    desc: 'Billing',
    fields: [
      {
        dt: 'CCD',
        desc: 'When to Charge',
        opt: 'R',
        rep: 1,
        len: 40,
        table: 100
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
        dt: 'CX',
        desc: 'Account ID',
        opt: 'R',
        rep: 1,
        len: 100
      },
      {
        dt: 'CWE',
        desc: 'Charge Type Reason',
        opt: 'R',
        rep: 1,
        len: 60,
        table: 475
      }
    ]
  },
  BPO: {
    desc: 'Blood product order',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID _ BPO',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'BP Universal Service ID',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'BP  Processing Requirements',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 508
      },
      {
        dt: 'NM',
        desc: 'BP Quantity',
        opt: 'C',
        rep: 1,
        len: 5
      },
      {
        dt: 'NM',
        desc: 'BP Amount',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CE',
        desc: 'BP Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'BP Intended Use Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'PL',
        desc: 'BP Intended Dispense From Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XAD',
        desc: 'BP Intended Dispense From Address',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'BP Requested Dispense Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'PL',
        desc: 'BP Requested Dispense To Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XAD',
        desc: 'BP Requested Dispense To Address',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'BP Indication for Use',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 509
      },
      {
        dt: 'ID',
        desc: 'BP Informed Consent Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      }
    ]
  },
  BPX: {
    desc: 'Blood product dispense status',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID _ BPX',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'BP Dispense Status',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 510
      },
      {
        dt: 'ID',
        desc: 'BP Status',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 511
      },
      {
        dt: 'TS',
        desc: 'BP Date/Time of Status',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'EI',
        desc: 'BC Donation ID',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'CNE',
        desc: 'BC Component',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CNE',
        desc: 'BC Donation Type / Intended Use',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'CP Commercial Product',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 512
      },
      {
        dt: 'XON',
        desc: 'CP Manufacturer',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'EI',
        desc: 'CP Lot Number',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'CNE',
        desc: 'BP Blood Group',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CNE',
        desc: 'BC Special Testing',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'BP Expiration Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'BP Quantity',
        opt: 'C',
        rep: 1,
        len: 5
      },
      {
        dt: 'NM',
        desc: 'BP Amount',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CE',
        desc: 'BP Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'EI',
        desc: 'BP Unique ID',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'PL',
        desc: 'BP Actual Dispensed To Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XAD',
        desc: 'BP Actual Dispensed To Address',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'BP Dispensed to Receiver',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'BP Dispensing Individual',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  BTS: {
    desc: 'Batch Trailer',
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
        dt: 'NM',
        desc: 'Batch Totals',
        opt: 'R',
        rep: 0,
        len: 100
      }
    ]
  },
  BTX: {
    desc: 'Blood Product Transfusion/Disposition',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID _ BTX',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'EI',
        desc: 'BC Donation ID',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'CNE',
        desc: 'BC Component',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CNE',
        desc: 'BC Blood Group',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'CP Commercial Product',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 512
      },
      {
        dt: 'XON',
        desc: 'CP Manufacturer',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'EI',
        desc: 'CP Lot Number',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'NM',
        desc: 'BP Quantity',
        opt: 'C',
        rep: 1,
        len: 5
      },
      {
        dt: 'NM',
        desc: 'BP Amount',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CE',
        desc: 'BP Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'BP Transfusion/Disposition Status',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 513
      },
      {
        dt: 'ID',
        desc: 'BP Message Status',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 511
      },
      {
        dt: 'TS',
        desc: 'BP Date/Time of Status',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'BP Administrator',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'BP Verifier',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'BP Transfusion Start Date/Time of Status',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'BP Transfusion End Date/Time of Status',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CWE',
        desc: 'BP Adverse Reaction Type',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 514
      },
      {
        dt: 'CWE',
        desc: 'BP Transfusion Interrupted Reason',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 515
      }
    ]
  },
  CDM: {
    desc: 'Charge Description Master',
    fields: [
      {
        dt: 'CE',
        desc: 'Primary Key Value - CDM',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 132
      },
      {
        dt: 'CE',
        desc: 'Charge Code Alias',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Charge Description Short',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Charge Description Long',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Description Override Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 268
      },
      {
        dt: 'CE',
        desc: 'Exploding Charges',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Procedure Code',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 88
      },
      {
        dt: 'ID',
        desc: 'Active/Inactive Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 183
      },
      {
        dt: 'CE',
        desc: 'Inventory Number',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 463
      },
      {
        dt: 'NM',
        desc: 'Resource Load',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CX',
        desc: 'Contract Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XON',
        desc: 'Contract Organization',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Room Fee Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      }
    ]
  },
  CER: {
    desc: 'Certificate Detail',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID _ CER',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Serial Number',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'ST',
        desc: 'Version',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XON',
        desc: 'Granting Authority',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Issuing Authority',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ED',
        desc: 'Signature of Issuing Authority',
        opt: 'R',
        rep: 1,
        len: 65536
      },
      {
        dt: 'ID',
        desc: 'Granting Country',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 399
      },
      {
        dt: 'CWE',
        desc: 'Granting State/Province',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 347
      },
      {
        dt: 'CWE',
        desc: 'Granting County/Parish',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 289
      },
      {
        dt: 'CWE',
        desc: 'Certificate Type',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Certificate Domain',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Subject ID',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Subject Name',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Subject Directory Attribute Extension',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Subject Public Key Info',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Authority Key Identifier',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Basic Constraint',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 136
      },
      {
        dt: 'CWE',
        desc: 'CRL Distribution Point',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Jurisdiction Country',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 399
      },
      {
        dt: 'CWE',
        desc: 'Jurisdiction State/Province',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 347
      },
      {
        dt: 'CWE',
        desc: 'Jurisdiction County/Parish',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 289
      },
      {
        dt: 'CWE',
        desc: 'Jurisdiction Breadth',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 547
      },
      {
        dt: 'TS',
        desc: 'Granting Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Issuing Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Activation Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Inactivation Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Expiration Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Renewal Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Revocation Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Revocation Reason Code',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Certificate Status',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 536
      }
    ]
  },
  CM0: {
    desc: 'Clinical Study Master',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - CM0',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'EI',
        desc: 'Sponsor Study ID',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'EI',
        desc: 'Alternate Study ID',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Title of Study',
        opt: 'C',
        rep: 1,
        len: 300
      },
      {
        dt: 'XCN',
        desc: 'Chairman of Study',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'DT',
        desc: 'Last IRB Approval Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'NM',
        desc: 'Total Accrual to Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Last Accrual Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'XCN',
        desc: 'Contact for Study',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Contact\'s Telephone Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Contact\'s Address',
        opt: 'R',
        rep: 0,
        len: 250
      }
    ]
  },
  CM1: {
    desc: 'Clinical Study Phase Master',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - CM1',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Study Phase Identifier',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Description of Study Phase',
        opt: 'C',
        rep: 1,
        len: 300
      }
    ]
  },
  CM2: {
    desc: 'Clinical Study Schedule Master',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - CM2',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Scheduled Time Point',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Description of Time Point',
        opt: 'R',
        rep: 1,
        len: 300
      },
      {
        dt: 'CE',
        desc: 'Events Scheduled This Time Point',
        opt: 'C',
        rep: 0,
        len: 250
      }
    ]
  },
  CNS: {
    desc: 'Clear Notification',
    fields: [
      {
        dt: 'NM',
        desc: 'Starting Notification Reference Number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Ending Notification Reference Number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Starting Notification Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Ending Notification Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Starting Notification Code',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Ending Notification Code',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  CSP: {
    desc: 'Clinical Study Phase',
    fields: [
      {
        dt: 'CE',
        desc: 'Study Phase Identifier',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Date/time Study Phase Began',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Date/time Study Phase Ended',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Study Phase Evaluability',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  CSR: {
    desc: 'Clinical Study Registration',
    fields: [
      {
        dt: 'EI',
        desc: 'Sponsor Study ID',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'EI',
        desc: 'Alternate Study ID',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Institution Registering the Patient',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CX',
        desc: 'Sponsor Patient ID',
        opt: 'C',
        rep: 1,
        len: 30
      },
      {
        dt: 'CX',
        desc: 'Alternate Patient ID - CSR',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'TS',
        desc: 'Date/Time Of Patient Study Registration',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'Person Performing Study Registration',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Study Authorizing Provider',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Date/time Patient Study Consent Signed',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Patient Study Eligibility Status',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Study Randomization Date/time',
        opt: 'R',
        rep: 0,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Randomized Study Arm',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Stratum for Study Randomization',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Patient Evaluability Status',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Date/time Ended Study',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Reason Ended Study',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  CSS: {
    desc: 'Clinical Study Data Schedule Segment',
    fields: [
      {
        dt: 'CE',
        desc: 'Study Scheduled Time Point',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Study Scheduled Patient Time Point',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Study Quality Control Codes',
        opt: 'R',
        rep: 0,
        len: 250
      }
    ]
  },
  CTD: {
    desc: 'Contact Data',
    fields: [
      {
        dt: 'CE',
        desc: 'Contact Role',
        opt: 'C',
        rep: 0,
        len: 250,
        table: 131
      },
      {
        dt: 'XPN',
        desc: 'Contact Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Contact Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Contact Location',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'XTN',
        desc: 'Contact Communication Information',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Preferred Method of Contact',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 185
      },
      {
        dt: 'PLN',
        desc: 'Contact Identifiers',
        opt: 'R',
        rep: 0,
        len: 100
      }
    ]
  },
  CTI: {
    desc: 'Clinical Trial Identification',
    fields: [
      {
        dt: 'EI',
        desc: 'Sponsor Study ID',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Study Phase Identifier',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Study Scheduled Time Point',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  DB1: {
    desc: 'Disability',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - DB1',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'IS',
        desc: 'Disabled Person Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 334
      },
      {
        dt: 'CX',
        desc: 'Disabled Person Identifier',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Disabled Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'DT',
        desc: 'Disability Start Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Disability End Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Disability Return to Work Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Disability Unable to Work Date',
        opt: 'R',
        rep: 1,
        len: 8
      }
    ]
  },
  DG1: {
    desc: 'Diagnosis',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - DG1',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Diagnosis Coding Method',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 53
      },
      {
        dt: 'CE',
        desc: 'Diagnosis Code - DG1',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 51
      },
      {
        dt: 'ST',
        desc: 'Diagnosis Description',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'TS',
        desc: 'Diagnosis Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'IS',
        desc: 'Diagnosis Type',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 52
      },
      {
        dt: 'CE',
        desc: 'Major Diagnostic Category',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 118
      },
      {
        dt: 'CE',
        desc: 'Diagnostic Related Group',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 55
      },
      {
        dt: 'ID',
        desc: 'DRG Approval Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'IS',
        desc: 'DRG Grouper Review Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 56
      },
      {
        dt: 'CE',
        desc: 'Outlier Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 83
      },
      {
        dt: 'NM',
        desc: 'Outlier Days',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'CP',
        desc: 'Outlier Cost',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Grouper Version And Type',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Diagnosis Priority',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 359
      },
      {
        dt: 'XCN',
        desc: 'Diagnosing Clinician',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Diagnosis Classification',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 228
      },
      {
        dt: 'ID',
        desc: 'Confidential Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'TS',
        desc: 'Attestation Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'EI',
        desc: 'Diagnosis Identifier',
        opt: 'R',
        rep: 1,
        len: 427
      },
      {
        dt: 'ID',
        desc: 'Diagnosis Action Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 206
      }
    ]
  },
  DRG: {
    desc: 'Diagnosis Related Group',
    fields: [
      {
        dt: 'CE',
        desc: 'Diagnostic Related Group',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 55
      },
      {
        dt: 'TS',
        desc: 'DRG Assigned Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'DRG Approval Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'IS',
        desc: 'DRG Grouper Review Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 56
      },
      {
        dt: 'CE',
        desc: 'Outlier Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 83
      },
      {
        dt: 'NM',
        desc: 'Outlier Days',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'CP',
        desc: 'Outlier Cost',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'IS',
        desc: 'DRG Payor',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 229
      },
      {
        dt: 'CP',
        desc: 'Outlier Reimbursement',
        opt: 'R',
        rep: 1,
        len: 9
      },
      {
        dt: 'ID',
        desc: 'Confidential Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'IS',
        desc: 'DRG Transfer Type',
        opt: 'R',
        rep: 1,
        len: 21,
        table: 415
      }
    ]
  },
  DSC: {
    desc: 'Continuation Pointer',
    fields: [
      {
        dt: 'ST',
        desc: 'Continuation Pointer',
        opt: 'R',
        rep: 1,
        len: 180
      },
      {
        dt: 'ID',
        desc: 'Continuation Style',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 398
      }
    ]
  },
  DSP: {
    desc: 'Display Data',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - DSP',
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
  ECD: {
    desc: 'Equipment Command',
    fields: [
      {
        dt: 'NM',
        desc: 'Reference Command Number',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Remote Control Command',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 368
      },
      {
        dt: 'ID',
        desc: 'Response Required',
        opt: 'R',
        rep: 1,
        len: 80,
        table: 136
      },
      {
        dt: 'TQ',
        desc: 'Requested Completion Time',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'TX',
        desc: 'Parameters',
        opt: 'R',
        rep: 0,
        len: 65536
      }
    ]
  },
  ECR: {
    desc: 'Equipment Command Response',
    fields: [
      {
        dt: 'CE',
        desc: 'Command Response',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 387
      },
      {
        dt: 'TS',
        desc: 'Date/Time Completed',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'TX',
        desc: 'Command Response Parameters',
        opt: 'R',
        rep: 0,
        len: 65536
      }
    ]
  },
  EDU: {
    desc: 'Educational Detail',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID _ EDU',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'IS',
        desc: 'Academic Degree',
        opt: 'R',
        rep: 1,
        len: 10,
        table: 360
      },
      {
        dt: 'DR',
        desc: 'Academic Degree Program Date Range',
        opt: 'R',
        rep: 1,
        len: 52
      },
      {
        dt: 'DR',
        desc: 'Academic Degree Program Participation Date Range',
        opt: 'R',
        rep: 1,
        len: 52
      },
      {
        dt: 'DT',
        desc: 'Academic Degree Granted Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'XON',
        desc: 'School',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'School Type Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 402
      },
      {
        dt: 'XAD',
        desc: 'School Address',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Major Field of Study',
        opt: 'R',
        rep: 0,
        len: 250
      }
    ]
  },
  EQL: {
    desc: 'Embedded Query Language',
    fields: [
      {
        dt: 'ST',
        desc: 'Query Tag',
        opt: 'R',
        rep: 1,
        len: 32
      },
      {
        dt: 'ID',
        desc: 'Query/Response Format Code',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 106
      },
      {
        dt: 'CE',
        desc: 'EQL Query Name',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'EQL Query Statement',
        opt: 'C',
        rep: 1,
        len: 4096
      }
    ]
  },
  EQP: {
    desc: 'Equipment/log Service',
    fields: [
      {
        dt: 'CE',
        desc: 'Event type',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 450
      },
      {
        dt: 'ST',
        desc: 'File Name',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Start Date/Time',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'End Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'FT',
        desc: 'Transaction Data',
        opt: 'C',
        rep: 1,
        len: 65536
      }
    ]
  },
  EQU: {
    desc: 'Equipment Detail',
    fields: [
      {
        dt: 'EI',
        desc: 'Equipment Instance Identifier',
        opt: 'C',
        rep: 1,
        len: 22
      },
      {
        dt: 'TS',
        desc: 'Event Date/Time',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Equipment State',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 365
      },
      {
        dt: 'CE',
        desc: 'Local/Remote Control State',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 366
      },
      {
        dt: 'CE',
        desc: 'Alert Level',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 367
      }
    ]
  },
  ERQ: {
    desc: 'Event replay query',
    fields: [
      {
        dt: 'ST',
        desc: 'Query Tag',
        opt: 'R',
        rep: 1,
        len: 32
      },
      {
        dt: 'CE',
        desc: 'Event Identifier',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'QIP',
        desc: 'Input Parameter List',
        opt: 'R',
        rep: 0,
        len: 256
      }
    ]
  },
  ERR: {
    desc: 'Error',
    fields: [
      {
        dt: 'ELD',
        desc: 'Error Code and Location',
        opt: 'R',
        rep: 0,
        len: 493
      },
      {
        dt: 'ERL',
        desc: 'Error Location',
        opt: 'R',
        rep: 0,
        len: 18
      },
      {
        dt: 'CWE',
        desc: 'HL7 Error Code',
        opt: 'C',
        rep: 1,
        len: 705,
        table: 357
      },
      {
        dt: 'ID',
        desc: 'Severity',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 516
      },
      {
        dt: 'CWE',
        desc: 'Application Error Code',
        opt: 'R',
        rep: 1,
        len: 705,
        table: 533
      },
      {
        dt: 'ST',
        desc: 'Application Error Parameter',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'TX',
        desc: 'Diagnostic Information',
        opt: 'R',
        rep: 1,
        len: 2048
      },
      {
        dt: 'TX',
        desc: 'User Message',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Inform Person Indicator',
        opt: 'R',
        rep: 0,
        len: 20,
        table: 517
      },
      {
        dt: 'CWE',
        desc: 'Override Type',
        opt: 'R',
        rep: 1,
        len: 705,
        table: 518
      },
      {
        dt: 'CWE',
        desc: 'Override Reason Code',
        opt: 'R',
        rep: 0,
        len: 705,
        table: 519
      },
      {
        dt: 'XTN',
        desc: 'Help Desk Contact Point',
        opt: 'R',
        rep: 0,
        len: 652
      }
    ]
  },
  EVN: {
    desc: 'Event Type',
    fields: [
      {
        dt: 'ID',
        desc: 'Event Type Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 3
      },
      {
        dt: 'TS',
        desc: 'Recorded Date/Time',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Date/Time Planned Event',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'IS',
        desc: 'Event Reason Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 62
      },
      {
        dt: 'XCN',
        desc: 'Operator ID',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 188
      },
      {
        dt: 'TS',
        desc: 'Event Occurred',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'HD',
        desc: 'Event Facility',
        opt: 'R',
        rep: 1,
        len: 241
      }
    ]
  },
  FAC: {
    desc: 'Facility',
    fields: [
      {
        dt: 'EI',
        desc: 'Facility ID-FAC',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Facility Type',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 331
      },
      {
        dt: 'XAD',
        desc: 'Facility Address',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Facility Telecommunication',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Contact Person',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Contact Title',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'XAD',
        desc: 'Contact Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Contact Telecommunication',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Signature Authority',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Signature Authority Title',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'XAD',
        desc: 'Signature Authority Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Signature Authority Telecommunication',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  FHS: {
    desc: 'File Header',
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
        dt: 'HD',
        desc: 'File Sending Application',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'HD',
        desc: 'File Sending Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'HD',
        desc: 'File Receiving Application',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'HD',
        desc: 'File Receiving Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'TS',
        desc: 'File Creation Date/Time',
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
        desc: 'File Name/ID',
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
    desc: 'Financial Transaction',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - FT1',
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
        desc: 'Transaction Batch ID',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'DR',
        desc: 'Transaction Date',
        opt: 'C',
        rep: 1,
        len: 53
      },
      {
        dt: 'TS',
        desc: 'Transaction Posting Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'IS',
        desc: 'Transaction Type',
        opt: 'C',
        rep: 1,
        len: 8,
        table: 17
      },
      {
        dt: 'CE',
        desc: 'Transaction Code',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 132
      },
      {
        dt: 'ST',
        desc: 'Transaction Description',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Transaction Description - Alt',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'NM',
        desc: 'Transaction Quantity',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'CP',
        desc: 'Transaction Amount - Extended',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CP',
        desc: 'Transaction Amount - Unit',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CE',
        desc: 'Department Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 49
      },
      {
        dt: 'CE',
        desc: 'Insurance Plan ID',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 72
      },
      {
        dt: 'CP',
        desc: 'Insurance Amount',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'PL',
        desc: 'Assigned Patient Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'IS',
        desc: 'Fee Schedule',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 24
      },
      {
        dt: 'IS',
        desc: 'Patient Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 18
      },
      {
        dt: 'CE',
        desc: 'Diagnosis Code - FT1',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 51
      },
      {
        dt: 'XCN',
        desc: 'Performed By Code',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 84
      },
      {
        dt: 'XCN',
        desc: 'Ordered By Code',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CP',
        desc: 'Unit Cost',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'EI',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'XCN',
        desc: 'Entered By Code',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Procedure Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 88
      },
      {
        dt: 'CE',
        desc: 'Procedure Code Modifier',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 340
      },
      {
        dt: 'CE',
        desc: 'Advanced Beneficiary Notice Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 339
      },
      {
        dt: 'CWE',
        desc: 'Medically Necessary Duplicate Procedure Reason.',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 476
      },
      {
        dt: 'CNE',
        desc: 'NDC Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 549
      },
      {
        dt: 'CX',
        desc: 'Payment Reference ID',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'SI',
        desc: 'Transaction Reference Key',
        opt: 'R',
        rep: 0,
        len: 4
      }
    ]
  },
  FTS: {
    desc: 'File Trailer',
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
  GOL: {
    desc: 'Goal Detail',
    fields: [
      {
        dt: 'ID',
        desc: 'Action Code',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 287
      },
      {
        dt: 'TS',
        desc: 'Action Date/Time',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Goal ID',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'EI',
        desc: 'Goal Instance ID',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'EI',
        desc: 'Episode of Care ID',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'NM',
        desc: 'Goal List Priority',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Goal Established Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Expected Goal Achieve Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Goal Classification',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Goal Management Discipline',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Current Goal Review Status',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Current Goal Review Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Next Goal Review Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Previous Goal Review Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TQ',
        desc: 'Goal Review Interval',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Goal Evaluation',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Goal Evaluation Comment',
        opt: 'R',
        rep: 0,
        len: 300
      },
      {
        dt: 'CE',
        desc: 'Goal Life Cycle Status',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Goal Life Cycle Status Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Goal Target Type',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XPN',
        desc: 'Goal Target Name',
        opt: 'R',
        rep: 0,
        len: 250
      }
    ]
  },
  GP1: {
    desc: 'Grouping/Reimbursement - Visit',
    fields: [
      {
        dt: 'IS',
        desc: 'Type of Bill Code',
        opt: 'C',
        rep: 1,
        len: 3,
        table: 455
      },
      {
        dt: 'IS',
        desc: 'Revenue Code',
        opt: 'R',
        rep: 0,
        len: 3,
        table: 456
      },
      {
        dt: 'IS',
        desc: 'Overall Claim Disposition Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 457
      },
      {
        dt: 'IS',
        desc: 'OCE Edits per Visit Code',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 458
      },
      {
        dt: 'CP',
        desc: 'Outlier Cost',
        opt: 'R',
        rep: 1,
        len: 12
      }
    ]
  },
  GP2: {
    desc: 'Grouping/Reimbursement - Procedure Line Item',
    fields: [
      {
        dt: 'IS',
        desc: 'Revenue Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 456
      },
      {
        dt: 'NM',
        desc: 'Number of Service Units',
        opt: 'R',
        rep: 1,
        len: 7
      },
      {
        dt: 'CP',
        desc: 'Charge',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'IS',
        desc: 'Reimbursement Action Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 459
      },
      {
        dt: 'IS',
        desc: 'Denial or Rejection Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 460
      },
      {
        dt: 'IS',
        desc: 'OCE Edit Code',
        opt: 'R',
        rep: 0,
        len: 3,
        table: 458
      },
      {
        dt: 'CE',
        desc: 'Ambulatory Payment Classification Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 466
      },
      {
        dt: 'IS',
        desc: 'Modifier Edit Code',
        opt: 'R',
        rep: 0,
        len: 1,
        table: 467
      },
      {
        dt: 'IS',
        desc: 'Payment Adjustment Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 468
      },
      {
        dt: 'IS',
        desc: 'Packaging Status Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 469
      },
      {
        dt: 'CP',
        desc: 'Expected CMS Payment Amount',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'IS',
        desc: 'Reimbursement Type Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 470
      },
      {
        dt: 'CP',
        desc: 'Co-Pay Amount',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Pay Rate per Service Unit',
        opt: 'R',
        rep: 1,
        len: 4
      }
    ]
  },
  GT1: {
    desc: 'Guarantor',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - GT1',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CX',
        desc: 'Guarantor Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XPN',
        desc: 'Guarantor Name',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'XPN',
        desc: 'Guarantor Spouse Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Guarantor Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Guarantor Ph Num - Home',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Guarantor Ph Num - Business',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Guarantor Date/Time Of Birth',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'IS',
        desc: 'Guarantor Administrative Sex',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 1
      },
      {
        dt: 'IS',
        desc: 'Guarantor Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 68
      },
      {
        dt: 'CE',
        desc: 'Guarantor Relationship',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 63
      },
      {
        dt: 'ST',
        desc: 'Guarantor SSN',
        opt: 'R',
        rep: 1,
        len: 11
      },
      {
        dt: 'DT',
        desc: 'Guarantor Date - Begin',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Guarantor Date - End',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'NM',
        desc: 'Guarantor Priority',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'XPN',
        desc: 'Guarantor Employer Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Guarantor Employer Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Guarantor Employer Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CX',
        desc: 'Guarantor Employee ID Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Guarantor Employment Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 66
      },
      {
        dt: 'XON',
        desc: 'Guarantor Organization Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Guarantor Billing Hold Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Guarantor Credit Rating Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 341
      },
      {
        dt: 'TS',
        desc: 'Guarantor Death Date And Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Guarantor Death Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Guarantor Charge Adjustment Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 218
      },
      {
        dt: 'CP',
        desc: 'Guarantor Household Annual Income',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Guarantor Household Size',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'CX',
        desc: 'Guarantor Employer ID Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Guarantor Marital Status Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 2
      },
      {
        dt: 'DT',
        desc: 'Guarantor Hire Effective Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Employment Stop Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'IS',
        desc: 'Living Dependency',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 223
      },
      {
        dt: 'IS',
        desc: 'Ambulatory Status',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 9
      },
      {
        dt: 'CE',
        desc: 'Citizenship',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 171
      },
      {
        dt: 'CE',
        desc: 'Primary Language',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 296
      },
      {
        dt: 'IS',
        desc: 'Living Arrangement',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 220
      },
      {
        dt: 'CE',
        desc: 'Publicity Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 215
      },
      {
        dt: 'ID',
        desc: 'Protection Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'IS',
        desc: 'Student Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 231
      },
      {
        dt: 'CE',
        desc: 'Religion',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 6
      },
      {
        dt: 'XPN',
        desc: 'Mother\'s Maiden Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Nationality',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 212
      },
      {
        dt: 'CE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 189
      },
      {
        dt: 'XPN',
        desc: 'Contact Person\'s Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Contact Person\'s Telephone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Contact Reason',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 222
      },
      {
        dt: 'IS',
        desc: 'Contact Relationship',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 63
      },
      {
        dt: 'ST',
        desc: 'Job Title',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'JCC',
        desc: 'Job Code/Class',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'XON',
        desc: 'Guarantor Employer\'s Organization Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Handicap',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 295
      },
      {
        dt: 'IS',
        desc: 'Job Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 311
      },
      {
        dt: 'FC',
        desc: 'Guarantor Financial Class',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'CE',
        desc: 'Guarantor Race',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 5
      },
      {
        dt: 'ST',
        desc: 'Guarantor Birth Place',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'VIP Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 99
      }
    ]
  },
  IAM: {
    desc: 'Patient Adverse Reaction Information',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - IAM',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Allergen Type Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 127
      },
      {
        dt: 'CE',
        desc: 'Allergen Code/Mnemonic/Description',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Allergy Severity Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 128
      },
      {
        dt: 'ST',
        desc: 'Allergy Reaction Code',
        opt: 'R',
        rep: 0,
        len: 15
      },
      {
        dt: 'CNE',
        desc: 'Allergy Action Code',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 323
      },
      {
        dt: 'EI',
        desc: 'Allergy Unique Identifier',
        opt: 'R',
        rep: 1,
        len: 427
      },
      {
        dt: 'ST',
        desc: 'Action Reason',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Sensitivity to Causative Agent Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 436
      },
      {
        dt: 'CE',
        desc: 'Allergen Group Code/Mnemonic/Description',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'DT',
        desc: 'Onset Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Onset Date Text',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Reported Date/Time',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'XPN',
        desc: 'Reported By',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Relationship to Patient Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 63
      },
      {
        dt: 'CE',
        desc: 'Alert Device Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 437
      },
      {
        dt: 'CE',
        desc: 'Allergy Clinical Status Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 438
      },
      {
        dt: 'XCN',
        desc: 'Statused by Person',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XON',
        desc: 'Statused by Organization',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Statused at Date/Time',
        opt: 'R',
        rep: 1,
        len: 8
      }
    ]
  },
  IIM: {
    desc: 'Inventory Item Master',
    fields: [
      {
        dt: 'CWE',
        desc: 'Primary Key Value - IIM',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Service Item Code',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Inventory Lot Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Inventory Expiration Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CWE',
        desc: 'Inventory Manufacturer Name',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Inventory Location',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Inventory Received Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Inventory Received Quantity',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CWE',
        desc: 'Inventory Received Quantity Unit',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'MO',
        desc: 'Inventory Received Item Cost',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'TS',
        desc: 'Inventory On Hand Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Inventory On Hand Quantity',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CWE',
        desc: 'Inventory On Hand Quantity Unit',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Procedure Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 88
      },
      {
        dt: 'CE',
        desc: 'Procedure Code Modifier',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 340
      }
    ]
  },
  IN1: {
    desc: 'Insurance',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - IN1',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Insurance Plan ID',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 72
      },
      {
        dt: 'CX',
        desc: 'Insurance Company ID',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'XON',
        desc: 'Insurance Company Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Insurance Company Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XPN',
        desc: 'Insurance Co Contact Person',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Insurance Co Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Group Number',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'XON',
        desc: 'Group Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CX',
        desc: 'Insured\'s Group Emp ID',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XON',
        desc: 'Insured\'s Group Emp Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'DT',
        desc: 'Plan Effective Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Plan Expiration Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'AUI',
        desc: 'Authorization Information',
        opt: 'R',
        rep: 1,
        len: 239
      },
      {
        dt: 'IS',
        desc: 'Plan Type',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 86
      },
      {
        dt: 'XPN',
        desc: 'Name Of Insured',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Insured\'s Relationship To Patient',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 63
      },
      {
        dt: 'TS',
        desc: 'Insured\'s Date Of Birth',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XAD',
        desc: 'Insured\'s Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Assignment Of Benefits',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 135
      },
      {
        dt: 'IS',
        desc: 'Coordination Of Benefits',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 173
      },
      {
        dt: 'ST',
        desc: 'Coord Of Ben. Priority',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'ID',
        desc: 'Notice Of Admission Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'DT',
        desc: 'Notice Of Admission Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Report Of Eligibility Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'DT',
        desc: 'Report Of Eligibility Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'IS',
        desc: 'Release Information Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 93
      },
      {
        dt: 'ST',
        desc: 'Pre-Admit Cert',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'TS',
        desc: 'Verification Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'Verification By',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Type Of Agreement Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 98
      },
      {
        dt: 'IS',
        desc: 'Billing Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 22
      },
      {
        dt: 'NM',
        desc: 'Lifetime Reserve Days',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'NM',
        desc: 'Delay Before L.R. Day',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'IS',
        desc: 'Company Plan Code',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 42
      },
      {
        dt: 'ST',
        desc: 'Policy Number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'CP',
        desc: 'Policy Deductible',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CP',
        desc: 'Policy Limit - Amount',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Policy Limit - Days',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CP',
        desc: 'Room Rate - Semi-Private',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CP',
        desc: 'Room Rate - Private',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CE',
        desc: 'Insured\'s Employment Status',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 66
      },
      {
        dt: 'IS',
        desc: 'Insured\'s Administrative Sex',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 1
      },
      {
        dt: 'XAD',
        desc: 'Insured\'s Employer\'s Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Verification Status',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'IS',
        desc: 'Prior Insurance Plan ID',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 72
      },
      {
        dt: 'IS',
        desc: 'Coverage Type',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 309
      },
      {
        dt: 'IS',
        desc: 'Handicap',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 295
      },
      {
        dt: 'CX',
        desc: 'Insured\'s ID Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Signature Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 535
      },
      {
        dt: 'DT',
        desc: 'Signature Code Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Insured_s Birth Place',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'VIP Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 99
      }
    ]
  },
  IN2: {
    desc: 'Insurance Additional Information',
    fields: [
      {
        dt: 'CX',
        desc: 'Insured\'s Employee ID',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Insured\'s Social Security Number',
        opt: 'R',
        rep: 1,
        len: 11
      },
      {
        dt: 'XCN',
        desc: 'Insured\'s Employer\'s Name and ID',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Employer Information Data',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 139
      },
      {
        dt: 'IS',
        desc: 'Mail Claim Party',
        opt: 'R',
        rep: 0,
        len: 1,
        table: 137
      },
      {
        dt: 'ST',
        desc: 'Medicare Health Ins Card Number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'XPN',
        desc: 'Medicaid Case Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Medicaid Case Number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'XPN',
        desc: 'Military Sponsor Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Military ID Number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Dependent Of Military Recipient',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 342
      },
      {
        dt: 'ST',
        desc: 'Military Organization',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'ST',
        desc: 'Military Station',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'IS',
        desc: 'Military Service',
        opt: 'R',
        rep: 1,
        len: 14,
        table: 140
      },
      {
        dt: 'IS',
        desc: 'Military Rank/Grade',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 141
      },
      {
        dt: 'IS',
        desc: 'Military Status',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 142
      },
      {
        dt: 'DT',
        desc: 'Military Retire Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Military Non-Avail Cert On File',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Baby Coverage',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Combine Baby Bill',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ST',
        desc: 'Blood Deductible',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'XPN',
        desc: 'Special Coverage Approval Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Special Coverage Approval Title',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'IS',
        desc: 'Non-Covered Insurance Code',
        opt: 'R',
        rep: 0,
        len: 8,
        table: 143
      },
      {
        dt: 'CX',
        desc: 'Payor ID',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CX',
        desc: 'Payor Subscriber ID',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Eligibility Source',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 144
      },
      {
        dt: 'RMC',
        desc: 'Room Coverage Type/Amount',
        opt: 'R',
        rep: 0,
        len: 82
      },
      {
        dt: 'PTA',
        desc: 'Policy Type/Amount',
        opt: 'R',
        rep: 0,
        len: 56
      },
      {
        dt: 'DDI',
        desc: 'Daily Deductible',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'IS',
        desc: 'Living Dependency',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 223
      },
      {
        dt: 'IS',
        desc: 'Ambulatory Status',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 9
      },
      {
        dt: 'CE',
        desc: 'Citizenship',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 171
      },
      {
        dt: 'CE',
        desc: 'Primary Language',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 296
      },
      {
        dt: 'IS',
        desc: 'Living Arrangement',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 220
      },
      {
        dt: 'CE',
        desc: 'Publicity Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 215
      },
      {
        dt: 'ID',
        desc: 'Protection Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'IS',
        desc: 'Student Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 231
      },
      {
        dt: 'CE',
        desc: 'Religion',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 6
      },
      {
        dt: 'XPN',
        desc: 'Mother\'s Maiden Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Nationality',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 212
      },
      {
        dt: 'CE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 189
      },
      {
        dt: 'CE',
        desc: 'Marital Status',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 2
      },
      {
        dt: 'DT',
        desc: 'Insured\'s Employment Start Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Employment Stop Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Job Title',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'JCC',
        desc: 'Job Code/Class',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'IS',
        desc: 'Job Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 311
      },
      {
        dt: 'XPN',
        desc: 'Employer Contact Person Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Employer Contact Person Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Employer Contact Reason',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 222
      },
      {
        dt: 'XPN',
        desc: 'Insured\'s Contact Person\'s Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Insured\'s Contact Person Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Insured\'s Contact Person Reason',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 222
      },
      {
        dt: 'DT',
        desc: 'Relationship to the Patient Start Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Relationship to the Patient Stop Date',
        opt: 'R',
        rep: 0,
        len: 8
      },
      {
        dt: 'IS',
        desc: 'Insurance Co. Contact Reason',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 232
      },
      {
        dt: 'XTN',
        desc: 'Insurance Co Contact Phone Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Policy Scope',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 312
      },
      {
        dt: 'IS',
        desc: 'Policy Source',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 313
      },
      {
        dt: 'CX',
        desc: 'Patient Member Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Guarantor\'s Relationship To Insured',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 63
      },
      {
        dt: 'XTN',
        desc: 'Insured\'s Phone Number - Home',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Insured\'s Employer Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Military Handicapped Program',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 343
      },
      {
        dt: 'ID',
        desc: 'Suspend Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Copay Limit Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Stoploss Limit Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'XON',
        desc: 'Insured Organization Name and ID',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XON',
        desc: 'Insured Employer Organization Name and ID',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Race',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 5
      },
      {
        dt: 'CE',
        desc: 'CMS Patient_s Relationship to Insured',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 344
      }
    ]
  },
  IN3: {
    desc: 'Insurance Additional Information, Certification',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - IN3',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CX',
        desc: 'Certification Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Certified By',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Certification Required',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'MOP',
        desc: 'Penalty',
        opt: 'R',
        rep: 1,
        len: 23
      },
      {
        dt: 'TS',
        desc: 'Certification Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Certification Modify Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'Operator',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'DT',
        desc: 'Certification Begin Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Certification End Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DTN',
        desc: 'Days',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'CE',
        desc: 'Non-Concur Code/Description',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 233
      },
      {
        dt: 'TS',
        desc: 'Non-Concur Effective Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'Physician Reviewer',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 10
      },
      {
        dt: 'ST',
        desc: 'Certification Contact',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'XTN',
        desc: 'Certification Contact Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Appeal Reason',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 345
      },
      {
        dt: 'CE',
        desc: 'Certification Agency',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 346
      },
      {
        dt: 'XTN',
        desc: 'Certification Agency Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ICD',
        desc: 'Pre-Certification Requirement',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'ST',
        desc: 'Case Manager',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'DT',
        desc: 'Second Opinion Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'IS',
        desc: 'Second Opinion Status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 151
      },
      {
        dt: 'IS',
        desc: 'Second Opinion Documentation Received',
        opt: 'R',
        rep: 0,
        len: 1,
        table: 152
      },
      {
        dt: 'XCN',
        desc: 'Second Opinion Physician',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 10
      }
    ]
  },
  INV: {
    desc: 'Inventory Detail',
    fields: [
      {
        dt: 'CE',
        desc: 'Substance Identifier',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 451
      },
      {
        dt: 'CE',
        desc: 'Substance Status',
        opt: 'C',
        rep: 0,
        len: 250,
        table: 383
      },
      {
        dt: 'CE',
        desc: 'Substance Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 384
      },
      {
        dt: 'CE',
        desc: 'Inventory Container Identifier',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Container Carrier Identifier',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Position on Carrier',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Initial Quantity',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Current Quantity',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Available Quantity',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Consumption Quantity',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Quantity Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Expiration Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'First Used Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TQ',
        desc: 'On Board Stability Duration',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Test/Fluid Identifier',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Manufacturer Lot Number',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Manufacturer Identifier',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 385
      },
      {
        dt: 'CE',
        desc: 'Supplier Identifier',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 386
      },
      {
        dt: 'CQ',
        desc: 'On Board Stability Time',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CQ',
        desc: 'Target Value',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  IPC: {
    desc: 'Imaging Procedure Control Segment',
    fields: [
      {
        dt: 'EI',
        desc: 'Accession Identifier',
        opt: 'C',
        rep: 1,
        len: 80
      },
      {
        dt: 'EI',
        desc: 'Requested Procedure ID',
        opt: 'C',
        rep: 1,
        len: 22
      },
      {
        dt: 'EI',
        desc: 'Study Instance UID',
        opt: 'C',
        rep: 1,
        len: 70
      },
      {
        dt: 'EI',
        desc: 'Scheduled Procedure Step ID',
        opt: 'C',
        rep: 1,
        len: 22
      },
      {
        dt: 'CE',
        desc: 'Modality',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'CE',
        desc: 'Protocol Code',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'EI',
        desc: 'Scheduled Station Name',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'CE',
        desc: 'Scheduled Procedure Step Location',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Scheduled AE Title',
        opt: 'R',
        rep: 1,
        len: 16
      }
    ]
  },
  ISD: {
    desc: 'Interaction Status Detail',
    fields: [
      {
        dt: 'NM',
        desc: 'Reference Interaction Number',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Interaction Type Identifier',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 368
      },
      {
        dt: 'CE',
        desc: 'Interaction Active State',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 387
      }
    ]
  },
  LAN: {
    desc: 'Language Detail',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - LAN',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Language Code',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 296
      },
      {
        dt: 'CE',
        desc: 'Language Ability Code',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 403
      },
      {
        dt: 'CE',
        desc: 'Language Proficiency Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 404
      }
    ]
  },
  LCC: {
    desc: 'Location Charge Code',
    fields: [
      {
        dt: 'PL',
        desc: 'Primary Key Value - LCC',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Location Department',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 264
      },
      {
        dt: 'CE',
        desc: 'Accommodation Type',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 129
      },
      {
        dt: 'CE',
        desc: 'Charge Code',
        opt: 'C',
        rep: 0,
        len: 250,
        table: 132
      }
    ]
  },
  LCH: {
    desc: 'Location Characteristic',
    fields: [
      {
        dt: 'PL',
        desc: 'Primary Key Value - LCH',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Segment Action Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 206
      },
      {
        dt: 'EI',
        desc: 'Segment Unique Key',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Location Characteristic ID',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 324
      },
      {
        dt: 'CE',
        desc: 'Location Characteristic Value-LCH',
        opt: 'C',
        rep: 1,
        len: 250
      }
    ]
  },
  LDP: {
    desc: 'Location Department',
    fields: [
      {
        dt: 'PL',
        desc: 'Primary Key Value - LDP',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Location Department',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 264
      },
      {
        dt: 'IS',
        desc: 'Location Service',
        opt: 'R',
        rep: 0,
        len: 3,
        table: 69
      },
      {
        dt: 'CE',
        desc: 'Specialty Type',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 265
      },
      {
        dt: 'IS',
        desc: 'Valid Patient Classes',
        opt: 'R',
        rep: 0,
        len: 1,
        table: 4
      },
      {
        dt: 'ID',
        desc: 'Active/Inactive Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 183
      },
      {
        dt: 'TS',
        desc: 'Activation Date  LDP',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Inactivation Date - LDP',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ST',
        desc: 'Inactivated Reason',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'VH',
        desc: 'Visiting Hours',
        opt: 'R',
        rep: 0,
        len: 80,
        table: 267
      },
      {
        dt: 'XTN',
        desc: 'Contact Phone',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Location Cost Center',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 462
      }
    ]
  },
  LOC: {
    desc: 'Location Identification',
    fields: [
      {
        dt: 'PL',
        desc: 'Primary Key Value - LOC',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Location Description',
        opt: 'R',
        rep: 1,
        len: 48
      },
      {
        dt: 'IS',
        desc: 'Location Type - LOC',
        opt: 'C',
        rep: 0,
        len: 2,
        table: 260
      },
      {
        dt: 'XON',
        desc: 'Organization Name - LOC',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Location Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Location Phone',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'License Number',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 461
      },
      {
        dt: 'IS',
        desc: 'Location Equipment',
        opt: 'R',
        rep: 0,
        len: 3,
        table: 261
      },
      {
        dt: 'IS',
        desc: 'Location Service Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 442
      }
    ]
  },
  LRL: {
    desc: 'Location Relationship',
    fields: [
      {
        dt: 'PL',
        desc: 'Primary Key Value - LRL',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Segment Action Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 206
      },
      {
        dt: 'EI',
        desc: 'Segment Unique Key',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Location Relationship ID',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 325
      },
      {
        dt: 'XON',
        desc: 'Organizational Location Relationship Value',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Patient Location Relationship Value',
        opt: 'R',
        rep: 1,
        len: 80
      }
    ]
  },
  MFA: {
    desc: 'Master File Acknowledgment',
    fields: [
      {
        dt: 'ID',
        desc: 'Record-Level Event Code',
        opt: 'C',
        rep: 1,
        len: 3,
        table: 180
      },
      {
        dt: 'ST',
        desc: 'MFN Control ID',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Event Completion Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'MFN Record Level Error Return',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 181
      },
      {
        dt: 'VARIES',
        desc: 'Primary Key Value - MFA',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Primary Key Value Type - MFA',
        opt: 'C',
        rep: 0,
        len: 3,
        table: 355
      }
    ]
  },
  MFE: {
    desc: 'Master File Entry',
    fields: [
      {
        dt: 'ID',
        desc: 'Record-Level Event Code',
        opt: 'C',
        rep: 1,
        len: 3,
        table: 180
      },
      {
        dt: 'ST',
        desc: 'MFN Control ID',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Effective Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'VARIES',
        desc: 'Primary Key Value - MFE',
        opt: 'C',
        rep: 0,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Primary Key Value Type',
        opt: 'C',
        rep: 0,
        len: 3,
        table: 355
      }
    ]
  },
  MFI: {
    desc: 'Master File Identification',
    fields: [
      {
        dt: 'CE',
        desc: 'Master File Identifier',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 175
      },
      {
        dt: 'HD',
        desc: 'Master File Application Identifier',
        opt: 'R',
        rep: 1,
        len: 180,
        table: 361
      },
      {
        dt: 'ID',
        desc: 'File-Level Event Code',
        opt: 'C',
        rep: 1,
        len: 3,
        table: 178
      },
      {
        dt: 'TS',
        desc: 'Entered Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Effective Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Response Level Code',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 179
      }
    ]
  },
  MRG: {
    desc: 'Merge Patient Information',
    fields: [
      {
        dt: 'CX',
        desc: 'Prior Patient Identifier List',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'CX',
        desc: 'Prior Alternate Patient ID',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CX',
        desc: 'Prior Patient Account Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CX',
        desc: 'Prior Patient ID',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CX',
        desc: 'Prior Visit Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CX',
        desc: 'Prior Alternate Visit ID',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XPN',
        desc: 'Prior Patient Name',
        opt: 'R',
        rep: 0,
        len: 250
      }
    ]
  },
  MSA: {
    desc: 'Message Acknowledgment',
    fields: [
      {
        dt: 'ID',
        desc: 'Acknowledgment Code',
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
        desc: 'Delayed Acknowledgment Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Error Condition',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 357
      }
    ]
  },
  MSH: {
    desc: 'Message Header',
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
        desc: 'Encoding Characters',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'HD',
        desc: 'Sending Application',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'HD',
        desc: 'Sending Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'HD',
        desc: 'Receiving Application',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'HD',
        desc: 'Receiving Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'TS',
        desc: 'Date/Time Of Message',
        opt: 'C',
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
        dt: 'MSG',
        desc: 'Message Type',
        opt: 'C',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Message Control ID',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'PT',
        desc: 'Processing ID',
        opt: 'C',
        rep: 1,
        len: 3
      },
      {
        dt: 'VID',
        desc: 'Version ID',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'NM',
        desc: 'Sequence Number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Continuation Pointer',
        opt: 'R',
        rep: 1,
        len: 180
      },
      {
        dt: 'ID',
        desc: 'Accept Acknowledgment Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 155
      },
      {
        dt: 'ID',
        desc: 'Application Acknowledgment Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 155
      },
      {
        dt: 'ID',
        desc: 'Country Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 399
      },
      {
        dt: 'ID',
        desc: 'Character Set',
        opt: 'R',
        rep: 0,
        len: 16,
        table: 211
      },
      {
        dt: 'CE',
        desc: 'Principal Language Of Message',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Alternate Character Set Handling Scheme',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 356
      },
      {
        dt: 'EI',
        desc: 'Message Profile Identifier',
        opt: 'R',
        rep: 0,
        len: 427
      }
    ]
  },
  NCK: {
    desc: 'System Clock',
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
  NDS: {
    desc: 'Notification Detail',
    fields: [
      {
        dt: 'NM',
        desc: 'Notification Reference Number',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Notification Date/Time',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Notification Alert Severity',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 367
      },
      {
        dt: 'CE',
        desc: 'Notification Code',
        opt: 'C',
        rep: 1,
        len: 250
      }
    ]
  },
  NK1: {
    desc: 'Next of Kin / Associated Parties',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - NK1',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'XPN',
        desc: 'NK Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Relationship',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 63
      },
      {
        dt: 'XAD',
        desc: 'Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Business Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Contact Role',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 131
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
        desc: 'Next of Kin / Associated Parties Job Title',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'JCC',
        desc: 'Next of Kin / Associated Parties Job Code/Class',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CX',
        desc: 'Next of Kin / Associated Parties Employee Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XON',
        desc: 'Organization Name - NK1',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Marital Status',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 2
      },
      {
        dt: 'IS',
        desc: 'Administrative Sex',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 1
      },
      {
        dt: 'TS',
        desc: 'Date/Time of Birth',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'IS',
        desc: 'Living Dependency',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 223
      },
      {
        dt: 'IS',
        desc: 'Ambulatory Status',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 9
      },
      {
        dt: 'CE',
        desc: 'Citizenship',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 171
      },
      {
        dt: 'CE',
        desc: 'Primary Language',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 296
      },
      {
        dt: 'IS',
        desc: 'Living Arrangement',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 220
      },
      {
        dt: 'CE',
        desc: 'Publicity Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 215
      },
      {
        dt: 'ID',
        desc: 'Protection Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'IS',
        desc: 'Student Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 231
      },
      {
        dt: 'CE',
        desc: 'Religion',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 6
      },
      {
        dt: 'XPN',
        desc: 'Mother\'s Maiden Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Nationality',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 212
      },
      {
        dt: 'CE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 189
      },
      {
        dt: 'CE',
        desc: 'Contact Reason',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 222
      },
      {
        dt: 'XPN',
        desc: 'Contact Person\'s Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Contact Person\'s Telephone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Contact Person\'s Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CX',
        desc: 'Next of Kin/Associated Party\'s Identifiers',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Job Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 311
      },
      {
        dt: 'CE',
        desc: 'Race',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 5
      },
      {
        dt: 'IS',
        desc: 'Handicap',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 295
      },
      {
        dt: 'ST',
        desc: 'Contact Person Social Security Number',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'ST',
        desc: 'Next of Kin Birth Place',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'VIP Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 99
      }
    ]
  },
  NPU: {
    desc: 'Bed Status Update',
    fields: [
      {
        dt: 'PL',
        desc: 'Bed Location',
        opt: 'C',
        rep: 1,
        len: 80
      },
      {
        dt: 'IS',
        desc: 'Bed Status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 116
      }
    ]
  },
  NSC: {
    desc: 'Application Status Change',
    fields: [
      {
        dt: 'IS',
        desc: 'Application Change Type',
        opt: 'C',
        rep: 1,
        len: 4,
        table: 409
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
        dt: 'HD',
        desc: 'Current Application',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'HD',
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
        dt: 'HD',
        desc: 'New Application',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'HD',
        desc: 'New Facility',
        opt: 'R',
        rep: 1,
        len: 30
      }
    ]
  },
  NST: {
    desc: 'Application control level statistics',
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
        len: 3,
        table: 332
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
        desc: 'Messages Received',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Messages Sent',
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
        desc: 'Application control-level Errors',
        opt: 'R',
        rep: 1,
        len: 10
      }
    ]
  },
  NTE: {
    desc: 'Notes and Comments',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - NTE',
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
      },
      {
        dt: 'CE',
        desc: 'Comment Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 364
      }
    ]
  },
  OBR: {
    desc: 'Observation Request',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - OBR',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'EI',
        desc: 'Placer Order Number',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'EI',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'CE',
        desc: 'Universal Service Identifier',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Priority _ OBR',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'TS',
        desc: 'Requested Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Observation Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Observation End Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CQ',
        desc: 'Collection Volume',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'XCN',
        desc: 'Collector Identifier',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Specimen Action Code',
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
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Relevant Clinical Information',
        opt: 'R',
        rep: 1,
        len: 300
      },
      {
        dt: 'TS',
        desc: 'Specimen Received Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'SPS',
        desc: 'Specimen Source',
        opt: 'R',
        rep: 1,
        len: 300
      },
      {
        dt: 'XCN',
        desc: 'Ordering Provider',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Order Callback Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Placer Field 1',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Placer Field 2',
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
        desc: 'Results Rpt/Status Chng - Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'MOC',
        desc: 'Charge to Practice',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'ID',
        desc: 'Diagnostic Serv Sect ID',
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
        dt: 'PRL',
        desc: 'Parent Result',
        opt: 'R',
        rep: 1,
        len: 400
      },
      {
        dt: 'TQ',
        desc: 'Quantity/Timing',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'XCN',
        desc: 'Result Copies To',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'EIP',
        desc: 'Parent Number',
        opt: 'R',
        rep: 1,
        len: 200
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
        len: 250
      },
      {
        dt: 'NDL',
        desc: 'Principal Result Interpreter',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'NDL',
        desc: 'Assistant Result Interpreter',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'NDL',
        desc: 'Technician',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'NDL',
        desc: 'Transcriptionist',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'TS',
        desc: 'Scheduled Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Number of Sample Containers *',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Transport Logistics of Collected Sample',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Collector\'s Comment *',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Transport Arrangement Responsibility',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Transport Arranged',
        opt: 'R',
        rep: 1,
        len: 30,
        table: 224
      },
      {
        dt: 'ID',
        desc: 'Escort Required',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 225
      },
      {
        dt: 'CE',
        desc: 'Planned Patient Transport Comment',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Procedure Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 88
      },
      {
        dt: 'CE',
        desc: 'Procedure Code Modifier',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 340
      },
      {
        dt: 'CE',
        desc: 'Placer Supplemental Service Information',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 411
      },
      {
        dt: 'CE',
        desc: 'Filler Supplemental Service Information',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 411
      },
      {
        dt: 'CWE',
        desc: 'Medically Necessary Duplicate Procedure Reason.',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 476
      },
      {
        dt: 'IS',
        desc: 'Result Handling',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 507
      },
      {
        dt: 'CWE',
        desc: 'Parent Universal Service Identifier',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  OBX: {
    desc: 'Observation/Result',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - OBX',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Value Type',
        opt: 'R',
        rep: 125,
        len: 2,
        table: 125
      },
      {
        dt: 'CE',
        desc: 'Observation Identifier',
        opt: 'C',
        rep: 1,
        len: 250
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
        rep: 0,
        len: 99999
      },
      {
        dt: 'CE',
        desc: 'Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'References Range',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'IS',
        desc: 'Abnormal Flags',
        opt: 'R',
        rep: 0,
        len: 5,
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
        rep: 0,
        len: 2,
        table: 80
      },
      {
        dt: 'ID',
        desc: 'Observation Result Status',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 85
      },
      {
        dt: 'TS',
        desc: 'Effective Date of Reference Range',
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
        desc: 'Date/Time of the Observation',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Producer\'s ID',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Responsible Observer',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Observation Method',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'EI',
        desc: 'Equipment Instance Identifier',
        opt: 'R',
        rep: 0,
        len: 22
      },
      {
        dt: 'TS',
        desc: 'Date/Time of the Analysis',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ST',
        desc: 'Reserved for v2.6',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Reserved for v2.6',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Reserved for v2.6',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Performing Organization Name',
        opt: 'R',
        rep: 1,
        len: 567
      },
      {
        dt: 'XAD',
        desc: 'Performing Organization Address',
        opt: 'R',
        rep: 1,
        len: 631
      },
      {
        dt: 'XCN',
        desc: 'Performing Organization Medical Director',
        opt: 'R',
        rep: 1,
        len: 3002
      }
    ]
  },
  ODS: {
    desc: 'Dietary Orders, Supplements, and Preferences',
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
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Diet, Supplement, or Preference Code',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Text Instruction',
        opt: 'R',
        rep: 0,
        len: 80
      }
    ]
  },
  ODT: {
    desc: 'Diet Tray Instructions',
    fields: [
      {
        dt: 'CE',
        desc: 'Tray Type',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 160
      },
      {
        dt: 'CE',
        desc: 'Service Period',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Text Instruction',
        opt: 'R',
        rep: 1,
        len: 80
      }
    ]
  },
  OM1: {
    desc: 'General Segment',
    fields: [
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/Observation Master File',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Producer\'s Service/Test/Observation ID',
        opt: 'C',
        rep: 1,
        len: 250
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
        len: 250
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
        desc: 'Other Service/Test/Observation IDs for the Observation',
        opt: 'R',
        rep: 1,
        len: 250
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
        desc: 'Identity of Instrument Used to Perform this Study',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Coded Representation of Method',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Portable Device Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Observation Producing Department/Section',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Telephone Number of Section',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Nature of Service/Test/Observation',
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
        len: 250
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
        desc:
            'Date/Time Stamp for any change in Definition for the Observation',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Effective Date/Time of Change',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Typical Turn-Around Time',
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
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Address of Outside Site',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Phone Number of Outside Site',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Confidentiality Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 177
      },
      {
        dt: 'CE',
        desc: 'Observations Required to Interpret the Observation',
        opt: 'R',
        rep: 1,
        len: 250
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
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Reflex Tests/Observations',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'TX',
        desc: 'Rules that Trigger Reflex Testing',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Fixed Canned Message',
        opt: 'R',
        rep: 1,
        len: 250
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
        len: 250
      },
      {
        dt: 'TX',
        desc: 'Factors that may Affect the Observation',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Service/Test/Observation Performance Schedule',
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
      },
      {
        dt: 'CE',
        desc: 'Kind of Quantity Observed',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 254
      },
      {
        dt: 'CE',
        desc: 'Point Versus Interval',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 255
      },
      {
        dt: 'TX',
        desc: 'Challenge Information',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Relationship Modifier',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 258
      },
      {
        dt: 'CE',
        desc: 'Target Anatomic Site Of Test',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Modality Of Imaging Measurement',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 259
      }
    ]
  },
  OM2: {
    desc: 'Numeric Observation',
    fields: [
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/Observation Master File',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Units of Measure',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Range of Decimal Precision',
        opt: 'R',
        rep: 0,
        len: 10
      },
      {
        dt: 'CE',
        desc: 'Corresponding SI Units of Measure',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TX',
        desc: 'SI Conversion Factor',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'RFR',
        desc: 'Reference',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'RFR',
        desc: 'Critical Range for Ordinal and Continuous Observations',
        opt: 'R',
        rep: 0,
        len: 205
      },
      {
        dt: 'RFR',
        desc: 'Absolute Range for Ordinal and Continuous Observations',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'DLT',
        desc: 'Delta Check Criteria',
        opt: 'R',
        rep: 0,
        len: 250
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
    desc: 'Categorical Service/Test/Observation',
    fields: [
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/Observation Master File',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Preferred Coding System',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Valid Coded \'Answers\'',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Normal Text/Codes for Categorical Observations',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Abnormal Text/Codes for Categorical Observations',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Critical Text/Codes for Categorical Observations',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Value Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 125
      }
    ]
  },
  OM4: {
    desc: 'Observations that Require Specimens',
    fields: [
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/Observation Master File',
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
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Specimen',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Additive',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 371
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
        dt: 'CQ',
        desc: 'Normal Collection Volume',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CQ',
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
        len: 1,
        table: 27
      },
      {
        dt: 'CQ',
        desc: 'Specimen Retention Time',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  OM5: {
    desc: 'Observation Batteries (Sets',
    fields: [
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/Observation Master File',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Test/Observations Included within an Ordered Test Battery',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Observation ID Suffixes',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  OM6: {
    desc: 'Observations that are Calculated from Other Observations',
    fields: [
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/Observation Master File',
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
  OM7: {
    desc: 'Additional Basic Attributes',
    fields: [
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/Observation Master File',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Universal Service Identifier',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Category Identifier',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 412
      },
      {
        dt: 'TX',
        desc: 'Category Description',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Category Synonym',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'TS',
        desc: 'Effective Test/Service Start Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Effective Test/Service End Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Test/Service Default Duration Quantity',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CE',
        desc: 'Test/Service Default Duration Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Test/Service Default Frequency',
        opt: 'R',
        rep: 1,
        len: 60,
        table: 335
      },
      {
        dt: 'ID',
        desc: 'Consent Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Consent Identifier',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 413
      },
      {
        dt: 'TS',
        desc: 'Consent Effective Start Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Consent Effective End Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Consent Interval Quantity',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CE',
        desc: 'Consent Interval Units',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 414
      },
      {
        dt: 'NM',
        desc: 'Consent Waiting Period Quantity',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CE',
        desc: 'Consent Waiting Period Units',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 414
      },
      {
        dt: 'TS',
        desc: 'Effective Date/Time of Change',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'Entered By',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Orderable-at Location',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'IS',
        desc: 'Formulary Status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 473
      },
      {
        dt: 'ID',
        desc: 'Special Order Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Primary Key Value - CDM',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 132
      }
    ]
  },
  ORC: {
    desc: 'Common Order',
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
        dt: 'EI',
        desc: 'Placer Order Number',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'EI',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'EI',
        desc: 'Placer Group Number',
        opt: 'R',
        rep: 1,
        len: 22
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
        desc: 'Quantity/Timing',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'EIP',
        desc: 'Parent Order',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'TS',
        desc: 'Date/Time of Transaction',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'Entered By',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Verified By',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Ordering Provider',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Enterer\'s Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XTN',
        desc: 'Call Back Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Order Effective Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Order Control Code Reason',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Entering Organization',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Entering Device',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Action By',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Advanced Beneficiary Notice Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 339
      },
      {
        dt: 'XON',
        desc: 'Ordering Facility Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Ordering Facility Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Ordering Facility Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Ordering Provider Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Order Status Modifier',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Advanced Beneficiary Notice Override Reason',
        opt: 'R',
        rep: 1,
        len: 60,
        table: 552
      },
      {
        dt: 'TS',
        desc: 'Filler\'s Expected Availability Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CWE',
        desc: 'Confidentiality Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 177
      },
      {
        dt: 'CWE',
        desc: 'Order Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 482
      },
      {
        dt: 'CNE',
        desc: 'Enterer Authorization Mode',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 483
      },
      {
        dt: 'CWE',
        desc: 'Parent Universal Service Identifier',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  ORG: {
    desc: 'Practitioner Organization Unit',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID _ ORG',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Organization Unit Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 405
      },
      {
        dt: 'CE',
        desc: 'Organization Unit Type Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 474
      },
      {
        dt: 'ID',
        desc: 'Primary Org Unit Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CX',
        desc: 'Practitioner Org Unit Identifier',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Health Care Provider Type Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 452
      },
      {
        dt: 'CE',
        desc: 'Health Care Provider Classification Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 453
      },
      {
        dt: 'CE',
        desc: 'Health Care Provider Area of Specialization Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 454
      },
      {
        dt: 'DR',
        desc: 'Effective Date Range',
        opt: 'R',
        rep: 1,
        len: 52
      },
      {
        dt: 'CE',
        desc: 'Employment Status Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 66
      },
      {
        dt: 'ID',
        desc: 'Board Approval Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Primary Care Physician Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      }
    ]
  },
  OVR: {
    desc: 'Override Segment',
    fields: [
      {
        dt: 'CWE',
        desc: 'Business Rule Override Type',
        opt: 'R',
        rep: 1,
        len: 705,
        table: 518
      },
      {
        dt: 'CWE',
        desc: 'Business Rule Override Code',
        opt: 'R',
        rep: 1,
        len: 705,
        table: 521
      },
      {
        dt: 'TX',
        desc: 'Override Comments',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'XCN',
        desc: 'Override Entered By',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Override Authorized By',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  PCR: {
    desc: 'Possible Causal Relationship',
    fields: [
      {
        dt: 'CE',
        desc: 'Implicated Product',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Generic Product',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 249
      },
      {
        dt: 'CE',
        desc: 'Product Class',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CQ',
        desc: 'Total Duration Of Therapy',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'TS',
        desc: 'Product Manufacture Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Product Expiration Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Product Implantation Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Product Explantation Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'IS',
        desc: 'Single Use Device',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 244
      },
      {
        dt: 'CE',
        desc: 'Indication For Product Use',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Product Problem',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 245
      },
      {
        dt: 'ST',
        desc: 'Product Serial/Lot Number',
        opt: 'R',
        rep: 0,
        len: 30
      },
      {
        dt: 'IS',
        desc: 'Product Available For Inspection',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 246
      },
      {
        dt: 'CE',
        desc: 'Product Evaluation Performed',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Product Evaluation Status',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 247
      },
      {
        dt: 'CE',
        desc: 'Product Evaluation Results',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Evaluated Product Source',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 248
      },
      {
        dt: 'TS',
        desc: 'Date Product Returned To Manufacturer',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Device Operator Qualifications',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 242
      },
      {
        dt: 'ID',
        desc: 'Relatedness Assessment',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 250
      },
      {
        dt: 'ID',
        desc: 'Action Taken In Response To The Event',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 251
      },
      {
        dt: 'ID',
        desc: 'Event Causality Observations',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 252
      },
      {
        dt: 'ID',
        desc: 'Indirect Exposure Mechanism',
        opt: 'R',
        rep: 0,
        len: 1,
        table: 253
      }
    ]
  },
  PD1: {
    desc: 'Patient Additional Demographic',
    fields: [
      {
        dt: 'IS',
        desc: 'Living Dependency',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 223
      },
      {
        dt: 'IS',
        desc: 'Living Arrangement',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 220
      },
      {
        dt: 'XON',
        desc: 'Patient Primary Facility',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Patient Primary Care Provider Name and ID No.',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Student Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 231
      },
      {
        dt: 'IS',
        desc: 'Handicap',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 295
      },
      {
        dt: 'IS',
        desc: 'Living Will Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 315
      },
      {
        dt: 'IS',
        desc: 'Organ Donor Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 316
      },
      {
        dt: 'ID',
        desc: 'Separate Bill',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CX',
        desc: 'Duplicate Patient',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Publicity Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 215
      },
      {
        dt: 'ID',
        desc: 'Protection Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'DT',
        desc: 'Protection Indicator Effective Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'XON',
        desc: 'Place of Worship',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Advance Directive Code',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 435
      },
      {
        dt: 'IS',
        desc: 'Immunization Registry Status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 441
      },
      {
        dt: 'DT',
        desc: 'Immunization Registry Status Effective Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Publicity Code Effective Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'IS',
        desc: 'Military Branch',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 140
      },
      {
        dt: 'IS',
        desc: 'Military Rank/Grade',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 141
      },
      {
        dt: 'IS',
        desc: 'Military Status',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 142
      }
    ]
  },
  PDA: {
    desc: 'Patient Death and Autopsy',
    fields: [
      {
        dt: 'CE',
        desc: 'Death Cause Code',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Death Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'ID',
        desc: 'Death Certified Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'TS',
        desc: 'Death Certificate Signed Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'Death Certified By',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Autopsy Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'DR',
        desc: 'Autopsy Start and End Date/Time',
        opt: 'R',
        rep: 1,
        len: 53
      },
      {
        dt: 'XCN',
        desc: 'Autopsy Performed By',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Coroner Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      }
    ]
  },
  PDC: {
    desc: 'Product Detail Country',
    fields: [
      {
        dt: 'XON',
        desc: 'Manufacturer/Distributor',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Country',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Brand Name',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Device Family Name',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Generic Name',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Model Identifier',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Catalogue Identifier',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Other Identifier',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Product Code',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Marketing Basis',
        opt: 'R',
        rep: 1,
        len: 4,
        table: 330
      },
      {
        dt: 'ST',
        desc: 'Marketing Approval ID',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CQ',
        desc: 'Labeled Shelf Life',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CQ',
        desc: 'Expected Shelf Life',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'TS',
        desc: 'Date First Marketed',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Date Last Marketed',
        opt: 'R',
        rep: 1,
        len: 26
      }
    ]
  },
  PEO: {
    desc: 'Product Experience Observation',
    fields: [
      {
        dt: 'CE',
        desc: 'Event Identifiers Used',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Event Symptom/Diagnosis Code',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Event Onset Date/Time',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Event Exacerbation Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Event Improved Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Event Ended Data/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XAD',
        desc: 'Event Location Occurred Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Event Qualification',
        opt: 'R',
        rep: 0,
        len: 1,
        table: 237
      },
      {
        dt: 'ID',
        desc: 'Event Serious',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 238
      },
      {
        dt: 'ID',
        desc: 'Event Expected',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 239
      },
      {
        dt: 'ID',
        desc: 'Event Outcome',
        opt: 'R',
        rep: 0,
        len: 1,
        table: 240
      },
      {
        dt: 'ID',
        desc: 'Patient Outcome',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 241
      },
      {
        dt: 'FT',
        desc: 'Event Description From Others',
        opt: 'R',
        rep: 0,
        len: 600
      },
      {
        dt: 'FT',
        desc: 'Event From Original Reporter',
        opt: 'R',
        rep: 0,
        len: 600
      },
      {
        dt: 'FT',
        desc: 'Event Description From Patient',
        opt: 'R',
        rep: 0,
        len: 600
      },
      {
        dt: 'FT',
        desc: 'Event Description From Practitioner',
        opt: 'R',
        rep: 0,
        len: 600
      },
      {
        dt: 'FT',
        desc: 'Event Description From Autopsy',
        opt: 'R',
        rep: 0,
        len: 600
      },
      {
        dt: 'CE',
        desc: 'Cause Of Death',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XPN',
        desc: 'Primary Observer Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Primary Observer Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Primary Observer Telephone',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Primary Observer\'s Qualification',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 242
      },
      {
        dt: 'ID',
        desc: 'Confirmation Provided By',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 242
      },
      {
        dt: 'TS',
        desc: 'Primary Observer Aware Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Primary Observer\'s identity May Be Divulged',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 243
      }
    ]
  },
  PES: {
    desc: 'Product Experience Sender',
    fields: [
      {
        dt: 'XON',
        desc: 'Sender Organization Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Sender Individual Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Sender Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Sender Telephone',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'EI',
        desc: 'Sender Event Identifier',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'NM',
        desc: 'Sender Sequence Number',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'FT',
        desc: 'Sender Event Description',
        opt: 'R',
        rep: 0,
        len: 600
      },
      {
        dt: 'FT',
        desc: 'Sender Comment',
        opt: 'R',
        rep: 1,
        len: 600
      },
      {
        dt: 'TS',
        desc: 'Sender Aware Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Event Report Date',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Event Report Timing/Type',
        opt: 'R',
        rep: 0,
        len: 3,
        table: 234
      },
      {
        dt: 'ID',
        desc: 'Event Report Source',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 235
      },
      {
        dt: 'ID',
        desc: 'Event Reported To',
        opt: 'R',
        rep: 0,
        len: 1,
        table: 236
      }
    ]
  },
  PID: {
    desc: 'Patient Identification',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - PID',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CX',
        desc: 'Patient ID',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CX',
        desc: 'Patient Identifier List',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'CX',
        desc: 'Alternate Patient ID - PID',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'XPN',
        desc: 'Patient Name',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'XPN',
        desc: 'Mother\'s Maiden Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Date/Time of Birth',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'IS',
        desc: 'Administrative Sex',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 1
      },
      {
        dt: 'XPN',
        desc: 'Patient Alias',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Race',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 5
      },
      {
        dt: 'XAD',
        desc: 'Patient Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'County Code',
        opt: 'R',
        rep: 1,
        len: 4,
        table: 289
      },
      {
        dt: 'XTN',
        desc: 'Phone Number - Home',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Phone Number - Business',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Primary Language',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 296
      },
      {
        dt: 'CE',
        desc: 'Marital Status',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 2
      },
      {
        dt: 'CE',
        desc: 'Religion',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 6
      },
      {
        dt: 'CX',
        desc: 'Patient Account Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'SSN Number - Patient',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'DLN',
        desc: 'Driver\'s License Number - Patient',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'CX',
        desc: 'Mother\'s Identifier',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 189
      },
      {
        dt: 'ST',
        desc: 'Birth Place',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Multiple Birth Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'NM',
        desc: 'Birth Order',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'CE',
        desc: 'Citizenship',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 171
      },
      {
        dt: 'CE',
        desc: 'Veterans Military Status',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 172
      },
      {
        dt: 'CE',
        desc: 'Nationality',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 212
      },
      {
        dt: 'TS',
        desc: 'Patient Death Date and Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Patient Death Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Identity Unknown Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'IS',
        desc: 'Identity Reliability Code',
        opt: 'R',
        rep: 0,
        len: 20,
        table: 445
      },
      {
        dt: 'TS',
        desc: 'Last Update Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'HD',
        desc: 'Last Update Facility',
        opt: 'R',
        rep: 1,
        len: 241
      },
      {
        dt: 'CE',
        desc: 'Species Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 446
      },
      {
        dt: 'CE',
        desc: 'Breed Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 447
      },
      {
        dt: 'ST',
        desc: 'Strain',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Production Class Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 429
      },
      {
        dt: 'CWE',
        desc: 'Tribal Citizenship',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 171
      }
    ]
  },
  PR1: {
    desc: 'Procedures',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - PR1',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'IS',
        desc: 'Procedure Coding Method',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 89
      },
      {
        dt: 'CE',
        desc: 'Procedure Code',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 88
      },
      {
        dt: 'ST',
        desc: 'Procedure Description',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'TS',
        desc: 'Procedure Date/Time',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'IS',
        desc: 'Procedure Functional Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 230
      },
      {
        dt: 'NM',
        desc: 'Procedure Minutes',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'XCN',
        desc: 'Anesthesiologist',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 10
      },
      {
        dt: 'IS',
        desc: 'Anesthesia Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 19
      },
      {
        dt: 'NM',
        desc: 'Anesthesia Minutes',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'XCN',
        desc: 'Surgeon',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 10
      },
      {
        dt: 'XCN',
        desc: 'Procedure Practitioner',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 10
      },
      {
        dt: 'CE',
        desc: 'Consent Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 59
      },
      {
        dt: 'ID',
        desc: 'Procedure Priority',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 418
      },
      {
        dt: 'CE',
        desc: 'Associated Diagnosis Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 51
      },
      {
        dt: 'CE',
        desc: 'Procedure Code Modifier',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 340
      },
      {
        dt: 'IS',
        desc: 'Procedure DRG Type',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 416
      },
      {
        dt: 'CE',
        desc: 'Tissue Type Code',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 417
      },
      {
        dt: 'EI',
        desc: 'Procedure Identifier',
        opt: 'R',
        rep: 1,
        len: 427
      },
      {
        dt: 'ID',
        desc: 'Procedure Action Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 206
      }
    ]
  },
  PRA: {
    desc: 'Practitioner Detail',
    fields: [
      {
        dt: 'CE',
        desc: 'Primary Key Value - PRA',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Practitioner Group',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 358
      },
      {
        dt: 'IS',
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
        dt: 'SPD',
        desc: 'Specialty',
        opt: 'R',
        rep: 0,
        len: 112,
        table: 337
      },
      {
        dt: 'PLN',
        desc: 'Practitioner ID Numbers',
        opt: 'R',
        rep: 0,
        len: 99,
        table: 338
      },
      {
        dt: 'PIP',
        desc: 'Privileges',
        opt: 'R',
        rep: 0,
        len: 770
      },
      {
        dt: 'DT',
        desc: 'Date Entered Practice',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'CE',
        desc: 'Institution',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 537
      },
      {
        dt: 'DT',
        desc: 'Date Left Practice',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'CE',
        desc: 'Government Reimbursement Billing Eligibility',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 401
      },
      {
        dt: 'SI',
        desc: 'Set ID - PRA',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  PRB: {
    desc: 'Problem Details',
    fields: [
      {
        dt: 'ID',
        desc: 'Action Code',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 287
      },
      {
        dt: 'TS',
        desc: 'Action Date/Time',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Problem ID',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'EI',
        desc: 'Problem Instance ID',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'EI',
        desc: 'Episode of Care ID',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'NM',
        desc: 'Problem List Priority',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Problem Established Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Anticipated Problem Resolution Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Actual Problem Resolution Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Problem Classification',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Problem Management Discipline',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Problem Persistence',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Problem Confirmation Status',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Problem Life Cycle Status',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Problem Life Cycle Status Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Problem Date of Onset',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ST',
        desc: 'Problem Onset Text',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Problem Ranking',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Certainty of Problem',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Probability of Problem',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CE',
        desc: 'Individual Awareness of Problem',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Problem Prognosis',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Individual Awareness of Prognosis',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Family/Significant Other Awareness of Problem/Prognosis',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Security/Sensitivity',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  PRC: {
    desc: 'Pricing',
    fields: [
      {
        dt: 'CE',
        desc: 'Primary Key Value - PRC',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 132
      },
      {
        dt: 'CE',
        desc: 'Facility ID - PRC',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 464
      },
      {
        dt: 'CE',
        desc: 'Department',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 184
      },
      {
        dt: 'IS',
        desc: 'Valid Patient Classes',
        opt: 'R',
        rep: 0,
        len: 1,
        table: 4
      },
      {
        dt: 'CP',
        desc: 'Price',
        opt: 'R',
        rep: 0,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Formula',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'NM',
        desc: 'Minimum Quantity',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'NM',
        desc: 'Maximum Quantity',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'MO',
        desc: 'Minimum Price',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'MO',
        desc: 'Maximum Price',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'TS',
        desc: 'Effective Start Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Effective End Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'IS',
        desc: 'Price Override Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 268
      },
      {
        dt: 'CE',
        desc: 'Billing Category',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 293
      },
      {
        dt: 'ID',
        desc: 'Chargeable Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Active/Inactive Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 183
      },
      {
        dt: 'MO',
        desc: 'Cost',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'IS',
        desc: 'Charge On Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 269
      }
    ]
  },
  PRD: {
    desc: 'Provider Data',
    fields: [
      {
        dt: 'CE',
        desc: 'Provider Role',
        opt: 'C',
        rep: 0,
        len: 250,
        table: 286
      },
      {
        dt: 'XPN',
        desc: 'Provider Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Provider Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Provider Location',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'XTN',
        desc: 'Provider Communication Information',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Preferred Method of Contact',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 185
      },
      {
        dt: 'PLN',
        desc: 'Provider Identifiers',
        opt: 'R',
        rep: 0,
        len: 100
      },
      {
        dt: 'TS',
        desc: 'Effective Start Date of Provider Role',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Effective End Date of Provider Role',
        opt: 'R',
        rep: 1,
        len: 26
      }
    ]
  },
  PSH: {
    desc: 'Product Summary Header',
    fields: [
      {
        dt: 'ST',
        desc: 'Report Type',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Report Form Identifier',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Report Date',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Report Interval Start Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Report Interval End Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CQ',
        desc: 'Quantity Manufactured',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CQ',
        desc: 'Quantity Distributed',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Quantity Distributed Method',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 329
      },
      {
        dt: 'FT',
        desc: 'Quantity Distributed Comment',
        opt: 'R',
        rep: 1,
        len: 600
      },
      {
        dt: 'CQ',
        desc: 'Quantity in Use',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Quantity in Use Method',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 329
      },
      {
        dt: 'FT',
        desc: 'Quantity in Use Comment',
        opt: 'R',
        rep: 1,
        len: 600
      },
      {
        dt: 'NM',
        desc: 'Number of Product Experience Reports Filed by Facility',
        opt: 'R',
        rep: 0,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Number of Product Experience Reports Filed by Distributor',
        opt: 'R',
        rep: 0,
        len: 2
      }
    ]
  },
  PTH: {
    desc: 'Pathway',
    fields: [
      {
        dt: 'ID',
        desc: 'Action Code',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 287
      },
      {
        dt: 'CE',
        desc: 'Pathway ID',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'EI',
        desc: 'Pathway Instance ID',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Pathway Established Date/Time',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Pathway Life Cycle Status',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Change Pathway Life Cycle Status Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      }
    ]
  },
  PV1: {
    desc: 'Patient Visit',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - PV1',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'IS',
        desc: 'Patient Class',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 4
      },
      {
        dt: 'PL',
        desc: 'Assigned Patient Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'IS',
        desc: 'Admission Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 7
      },
      {
        dt: 'CX',
        desc: 'Preadmit Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Prior Patient Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XCN',
        desc: 'Attending Doctor',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 10
      },
      {
        dt: 'XCN',
        desc: 'Referring Doctor',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 10
      },
      {
        dt: 'XCN',
        desc: 'Consulting Doctor',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 10
      },
      {
        dt: 'IS',
        desc: 'Hospital Service',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 69
      },
      {
        dt: 'PL',
        desc: 'Temporary Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'IS',
        desc: 'Preadmit Test Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 87
      },
      {
        dt: 'IS',
        desc: 'Re-admission Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 92
      },
      {
        dt: 'IS',
        desc: 'Admit Source',
        opt: 'R',
        rep: 1,
        len: 6,
        table: 23
      },
      {
        dt: 'IS',
        desc: 'Ambulatory Status',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 9
      },
      {
        dt: 'IS',
        desc: 'VIP Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 99
      },
      {
        dt: 'XCN',
        desc: 'Admitting Doctor',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 10
      },
      {
        dt: 'IS',
        desc: 'Patient Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 18
      },
      {
        dt: 'CX',
        desc: 'Visit Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'FC',
        desc: 'Financial Class',
        opt: 'R',
        rep: 0,
        len: 50,
        table: 64
      },
      {
        dt: 'IS',
        desc: 'Charge Price Indicator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 32
      },
      {
        dt: 'IS',
        desc: 'Courtesy Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 45
      },
      {
        dt: 'IS',
        desc: 'Credit Rating',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 46
      },
      {
        dt: 'IS',
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
        dt: 'IS',
        desc: 'Interest Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 73
      },
      {
        dt: 'IS',
        desc: 'Transfer to Bad Debt Code',
        opt: 'R',
        rep: 1,
        len: 4,
        table: 110
      },
      {
        dt: 'DT',
        desc: 'Transfer to Bad Debt Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'IS',
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
        dt: 'IS',
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
        dt: 'IS',
        desc: 'Discharge Disposition',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 112
      },
      {
        dt: 'DLD',
        desc: 'Discharged to Location',
        opt: 'R',
        rep: 1,
        len: 47,
        table: 113
      },
      {
        dt: 'CE',
        desc: 'Diet Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 114
      },
      {
        dt: 'IS',
        desc: 'Servicing Facility',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 115
      },
      {
        dt: 'IS',
        desc: 'Bed Status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 116
      },
      {
        dt: 'IS',
        desc: 'Account Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 117
      },
      {
        dt: 'PL',
        desc: 'Pending Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'PL',
        desc: 'Prior Temporary Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'TS',
        desc: 'Admit Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Discharge Date/Time',
        opt: 'R',
        rep: 0,
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
        dt: 'CX',
        desc: 'Alternate Visit ID',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Visit Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 326
      },
      {
        dt: 'XCN',
        desc: 'Other Healthcare Provider',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 10
      }
    ]
  },
  PV2: {
    desc: 'Patient Visit - Additional Information',
    fields: [
      {
        dt: 'PL',
        desc: 'Prior Pending Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Accommodation Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 129
      },
      {
        dt: 'CE',
        desc: 'Admit Reason',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Transfer Reason',
        opt: 'R',
        rep: 1,
        len: 250
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
        dt: 'IS',
        desc: 'Visit User Code',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 130
      },
      {
        dt: 'TS',
        desc: 'Expected Admit Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Expected Discharge Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Estimated Length of Inpatient Stay',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Actual Length of Inpatient Stay',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'ST',
        desc: 'Visit Description',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'XCN',
        desc: 'Referral Source Code',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'DT',
        desc: 'Previous Service Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Employment Illness Related Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'IS',
        desc: 'Purge Status Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 213
      },
      {
        dt: 'DT',
        desc: 'Purge Status Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'IS',
        desc: 'Special Program Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 214
      },
      {
        dt: 'ID',
        desc: 'Retention Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'NM',
        desc: 'Expected Number of Insurance Plans',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'IS',
        desc: 'Visit Publicity Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 215
      },
      {
        dt: 'ID',
        desc: 'Visit Protection Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'XON',
        desc: 'Clinic Organization Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Patient Status Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 216
      },
      {
        dt: 'IS',
        desc: 'Visit Priority Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 217
      },
      {
        dt: 'DT',
        desc: 'Previous Treatment Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'IS',
        desc: 'Expected Discharge Disposition',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 112
      },
      {
        dt: 'DT',
        desc: 'Signature on File Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'First Similar Illness Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'CE',
        desc: 'Patient Charge Adjustment Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 218
      },
      {
        dt: 'IS',
        desc: 'Recurring Service Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 219
      },
      {
        dt: 'ID',
        desc: 'Billing Media Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'TS',
        desc: 'Expected Surgery Date and Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Military Partnership Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Military Non-Availability Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Newborn Baby Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Baby Detained Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Mode of Arrival Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 430
      },
      {
        dt: 'CE',
        desc: 'Recreational Drug Use Code',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 431
      },
      {
        dt: 'CE',
        desc: 'Admission Level of Care Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 432
      },
      {
        dt: 'CE',
        desc: 'Precaution Code',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 433
      },
      {
        dt: 'CE',
        desc: 'Patient Condition Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 434
      },
      {
        dt: 'IS',
        desc: 'Living Will Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 315
      },
      {
        dt: 'IS',
        desc: 'Organ Donor Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 316
      },
      {
        dt: 'CE',
        desc: 'Advance Directive Code',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 435
      },
      {
        dt: 'DT',
        desc: 'Patient Status Effective Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'TS',
        desc: 'Expected LOA Return Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Expected Pre-admission Testing Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'IS',
        desc: 'Notify Clergy Code',
        opt: 'R',
        rep: 0,
        len: 20,
        table: 534
      }
    ]
  },
  QAK: {
    desc: 'Query Acknowledgment',
    fields: [
      {
        dt: 'ST',
        desc: 'Query Tag',
        opt: 'R',
        rep: 1,
        len: 32
      },
      {
        dt: 'ID',
        desc: 'Query Response Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 208
      },
      {
        dt: 'CE',
        desc: 'Message Query Name',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 471
      },
      {
        dt: 'NM',
        desc: 'Hit Count',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'This payload',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Hits remaining',
        opt: 'R',
        rep: 1,
        len: 10
      }
    ]
  },
  QID: {
    desc: 'Query Identification',
    fields: [
      {
        dt: 'ST',
        desc: 'Query Tag',
        opt: 'C',
        rep: 1,
        len: 32
      },
      {
        dt: 'CE',
        desc: 'Message Query Name',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 471
      }
    ]
  },
  QPD: {
    desc: 'Query Parameter Definition',
    fields: [
      {
        dt: 'CE',
        desc: 'Message Query Name',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 471
      },
      {
        dt: 'ST',
        desc: 'Query Tag',
        opt: 'R',
        rep: 1,
        len: 32
      },
      {
        dt: 'VARIES',
        desc: 'User Parameters',
        opt: 'R',
        rep: 1,
        len: 256
      }
    ]
  },
  QRD: {
    desc: 'Original-Style Query Definition',
    fields: [
      {
        dt: 'TS',
        desc: 'Query Date/Time',
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
        desc: 'Deferred Response Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CQ',
        desc: 'Quantity Limited Request',
        opt: 'C',
        rep: 1,
        len: 10,
        table: 126
      },
      {
        dt: 'XCN',
        desc: 'Who Subject Filter',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'What Subject Filter',
        opt: 'C',
        rep: 0,
        len: 250,
        table: 48
      },
      {
        dt: 'CE',
        desc: 'What Department Data Code',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'VR',
        desc: 'What Data Code Value Qual.',
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
    desc: 'Original style query filter',
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
        desc: 'When Data Start Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'When Data End Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ST',
        desc: 'What User Qualifier',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Other QRY Subject Filter',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Which Date/Time Qualifier',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 156
      },
      {
        dt: 'ID',
        desc: 'Which Date/Time Status Qualifier',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 157
      },
      {
        dt: 'ID',
        desc: 'Date/Time Selection Qualifier',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 158
      },
      {
        dt: 'TQ',
        desc: 'When Quantity/Timing Qualifier',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'NM',
        desc: 'Search Confidence Threshold',
        opt: 'R',
        rep: 1,
        len: 10
      }
    ]
  },
  QRI: {
    desc: 'Query Response Instance',
    fields: [
      {
        dt: 'NM',
        desc: 'Candidate Confidence',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'IS',
        desc: 'Match Reason Code',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 392
      },
      {
        dt: 'CE',
        desc: 'Algorithm Descriptor',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 393
      }
    ]
  },
  RCP: {
    desc: 'Response Control Parameter',
    fields: [
      {
        dt: 'ID',
        desc: 'Query Priority',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 91
      },
      {
        dt: 'CQ',
        desc: 'Quantity Limited Request',
        opt: 'R',
        rep: 1,
        len: 10,
        table: 126
      },
      {
        dt: 'CE',
        desc: 'Response Modality',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 394
      },
      {
        dt: 'TS',
        desc: 'Execution and Delivery Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Modify Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 395
      },
      {
        dt: 'SRT',
        desc: 'Sort-by Field',
        opt: 'R',
        rep: 0,
        len: 512
      },
      {
        dt: 'ID',
        desc: 'Segment group inclusion',
        opt: 'R',
        rep: 0,
        len: 256
      }
    ]
  },
  RDF: {
    desc: 'Table Row Definition',
    fields: [
      {
        dt: 'NM',
        desc: 'Number of Columns per Row',
        opt: 'C',
        rep: 1,
        len: 3
      },
      {
        dt: 'RCD',
        desc: 'Column Description',
        opt: 'C',
        rep: 0,
        len: 40,
        table: 440
      }
    ]
  },
  RDT: {
    desc: 'Table Row Data',
    fields: [
      {
        dt: 'VARIES',
        desc: 'Column Value',
        opt: 'C',
        rep: 1,
        len: 99999
      }
    ]
  },
  RF1: {
    desc: 'Referral Information',
    fields: [
      {
        dt: 'CE',
        desc: 'Referral Status',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 283
      },
      {
        dt: 'CE',
        desc: 'Referral Priority',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 280
      },
      {
        dt: 'CE',
        desc: 'Referral Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 281
      },
      {
        dt: 'CE',
        desc: 'Referral Disposition',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 282
      },
      {
        dt: 'CE',
        desc: 'Referral Category',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 284
      },
      {
        dt: 'EI',
        desc: 'Originating Referral Identifier',
        opt: 'C',
        rep: 1,
        len: 30
      },
      {
        dt: 'TS',
        desc: 'Effective Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Expiration Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Process Date',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Referral Reason',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 336
      },
      {
        dt: 'EI',
        desc: 'External Referral Identifier',
        opt: 'R',
        rep: 0,
        len: 30
      }
    ]
  },
  RGS: {
    desc: 'Resource Group',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - RGS',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Segment Action Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 206
      },
      {
        dt: 'CE',
        desc: 'Resource Group ID',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  RMI: {
    desc: 'Risk Management Incident',
    fields: [
      {
        dt: 'CE',
        desc: 'Risk Management Incident Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 427
      },
      {
        dt: 'TS',
        desc: 'Date/Time Incident',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Incident Type Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 428
      }
    ]
  },
  ROL: {
    desc: 'Role',
    fields: [
      {
        dt: 'EI',
        desc: 'Role Instance ID',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Action Code',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 287
      },
      {
        dt: 'CE',
        desc: 'Role-ROL',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 443
      },
      {
        dt: 'XCN',
        desc: 'Role Person',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Role Begin Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Role End Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Role Duration',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Role Action Reason',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Provider Type',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Organization Unit Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 406
      },
      {
        dt: 'XAD',
        desc: 'Office/Home Address/Birthplace',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Phone',
        opt: 'R',
        rep: 0,
        len: 250
      }
    ]
  },
  RQ1: {
    desc: 'Requisition Detail-1',
    fields: [
      {
        dt: 'ST',
        desc: 'Anticipated Price',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'CE',
        desc: 'Manufacturer Identifier',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 385
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
        len: 250
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
    desc: 'Requisition Detail',
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
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Item Code - External',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Hospital Item Code',
        opt: 'R',
        rep: 1,
        len: 250
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
        desc: 'Requisition Unit of Measure',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Dept. Cost Center',
        opt: 'R',
        rep: 1,
        len: 30,
        table: 319
      },
      {
        dt: 'IS',
        desc: 'Item Natural Account Code',
        opt: 'R',
        rep: 1,
        len: 30,
        table: 320
      },
      {
        dt: 'CE',
        desc: 'Deliver To ID',
        opt: 'R',
        rep: 1,
        len: 250
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
    desc: 'Pharmacy/Treatment Administration',
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
        desc: 'Date/Time Start of Administration',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Date/Time End of Administration',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Administered Code',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 292
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
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Administered Dosage Form',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Administration Notes',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Administering Provider',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'LA2',
        desc: 'Administered-at Location',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Administered Per',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Administered Strength',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Administered Strength Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Substance Lot Number',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Substance Expiration Date',
        opt: 'R',
        rep: 0,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Substance Manufacturer Name',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 227
      },
      {
        dt: 'CE',
        desc: 'Substance/Treatment Refusal Reason',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Indication',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Completion Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 322
      },
      {
        dt: 'ID',
        desc: 'Action Code - RXA',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 323
      },
      {
        dt: 'TS',
        desc: 'System Entry Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Administered Drug Strength Volume',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CWE',
        desc: 'Administered Drug Strength Volume Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Administered Barcode Identifier',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Pharmacy Order Type',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 480
      }
    ]
  },
  RXC: {
    desc: 'Pharmacy/Treatment Component Order',
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
        len: 250
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
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Component Strength',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Component Strength Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Supplementary Code',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Component Drug Strength Volume',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CWE',
        desc: 'Component Drug Strength Volume Units',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  RXD: {
    desc: 'Pharmacy/Treatment Dispense',
    fields: [
      {
        dt: 'NM',
        desc: 'Dispense Sub-ID Counter',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CE',
        desc: 'Dispense/Give Code',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 292
      },
      {
        dt: 'TS',
        desc: 'Date/Time Dispensed',
        opt: 'C',
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
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Actual Dosage Form',
        opt: 'R',
        rep: 1,
        len: 250
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
        dt: 'XCN',
        desc: 'Dispensing Provider',
        opt: 'R',
        rep: 0,
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
        dt: 'CQ',
        desc: 'Total Daily Dose',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'LA2',
        desc: 'Dispense-to Location',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Needs Human Review',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Pharmacy/Treatment Supplier\'s Special Dispensing Instructions',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Actual Strength',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Actual Strength Unit',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Substance Lot Number',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Substance Expiration Date',
        opt: 'R',
        rep: 0,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Substance Manufacturer Name',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 227
      },
      {
        dt: 'CE',
        desc: 'Indication',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Dispense Package Size',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Dispense Package Size Unit',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Dispense Package Method',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 321
      },
      {
        dt: 'CE',
        desc: 'Supplementary Code',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Initiating Location',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Packaging/Assembly Location',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Actual Drug Strength Volume',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CWE',
        desc: 'Actual Drug Strength Volume Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Dispense to Pharmacy',
        opt: 'R',
        rep: 1,
        len: 180
      },
      {
        dt: 'XAD',
        desc: 'Dispense to Pharmacy Address',
        opt: 'R',
        rep: 1,
        len: 106
      },
      {
        dt: 'ID',
        desc: 'Pharmacy Order Type',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 480
      },
      {
        dt: 'CWE',
        desc: 'Dispense Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 484
      }
    ]
  },
  RXE: {
    desc: 'Pharmacy/Treatment Encoded Order',
    fields: [
      {
        dt: 'TQ',
        desc: 'Quantity/Timing',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Give Code',
        opt: 'C',
        rep: 1,
        len: 250
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
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Give Dosage Form',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Provider\'s Administration Instructions',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'LA1',
        desc: 'Deliver-To Location',
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
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Number Of Refills',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'XCN',
        desc: 'Ordering Provider\'s DEA Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Pharmacist/Treatment Supplier\'s Verifier ID',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Prescription Number',
        opt: 'R',
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
        desc: 'Number of Refills/Doses Dispensed',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'D/T of Most Recent Refill or Dose Dispensed',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CQ',
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
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Pharmacy/Treatment Supplier\'s Special Dispensing Instructions',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Give Per',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
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
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Give Strength',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Give Strength Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Give Indication',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Dispense Package Size',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Dispense Package Size Unit',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Dispense Package Method',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 321
      },
      {
        dt: 'CE',
        desc: 'Supplementary Code',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Original Order Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'NM',
        desc: 'Give Drug Strength Volume',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CWE',
        desc: 'Give Drug Strength Volume Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Controlled Substance Schedule',
        opt: 'R',
        rep: 1,
        len: 60,
        table: 477
      },
      {
        dt: 'ID',
        desc: 'Formulary Status',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 478
      },
      {
        dt: 'CWE',
        desc: 'Pharmaceutical Substance Alternative',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'CWE',
        desc: 'Pharmacy of Most Recent Fill',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Initial Dispense Amount',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Dispensing Pharmacy',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Dispensing Pharmacy Address',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Deliver-to Patient Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XAD',
        desc: 'Deliver-to Address',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Pharmacy Order Type',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 480
      }
    ]
  },
  RXG: {
    desc: 'Pharmacy/Treatment Give',
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
        desc: 'Quantity/Timing',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Give Code',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 292
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
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Give Dosage Form',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Administration Notes',
        opt: 'R',
        rep: 0,
        len: 250
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
        dt: 'LA2',
        desc: 'Dispense-to Location',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Needs Human Review',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc:
            'Pharmacy/Treatment Supplier\'s Special Administration Instructions',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Give Per',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
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
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Give Strength',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Give Strength Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Substance Lot Number',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Substance Expiration Date',
        opt: 'R',
        rep: 0,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Substance Manufacturer Name',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 227
      },
      {
        dt: 'CE',
        desc: 'Indication',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Give Drug Strength Volume',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CWE',
        desc: 'Give Drug Strength Volume Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Give Barcode Identifier',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Pharmacy Order Type',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 480
      }
    ]
  },
  RXO: {
    desc: 'Pharmacy/Treatment Order',
    fields: [
      {
        dt: 'CE',
        desc: 'Requested Give Code',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Requested Give Amount - Minimum',
        opt: 'R',
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
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Requested Dosage Form',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Provider\'s Pharmacy/Treatment Instructions',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Provider\'s Administration Instructions',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'LA1',
        desc: 'Deliver-To Location',
        opt: 'R',
        rep: 1,
        len: 200
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
        len: 250
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
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Number Of Refills',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'XCN',
        desc: 'Ordering Provider\'s DEA Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Pharmacist/Treatment Supplier\'s Verifier ID',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Needs Human Review',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ST',
        desc: 'Requested Give Per',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Requested Give Strength',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Requested Give Strength Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Indication',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Requested Give Rate Amount',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'CE',
        desc: 'Requested Give Rate Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CQ',
        desc: 'Total Daily Dose',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'CE',
        desc: 'Supplementary Code',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Requested Drug Strength Volume',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'CWE',
        desc: 'Requested Drug Strength Volume Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Pharmacy Order Type',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 480
      },
      {
        dt: 'NM',
        desc: 'Dispensing Interval',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  RXR: {
    desc: 'Pharmacy/Treatment Route',
    fields: [
      {
        dt: 'CE',
        desc: 'Route',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 162
      },
      {
        dt: 'CWE',
        desc: 'Administration Site',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 163
      },
      {
        dt: 'CE',
        desc: 'Administration Device',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 164
      },
      {
        dt: 'CWE',
        desc: 'Administration Method',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 165
      },
      {
        dt: 'CE',
        desc: 'Routing Instruction',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Administration Site Modifier',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 495
      }
    ]
  },
  SAC: {
    desc: 'Specimen Container detail',
    fields: [
      {
        dt: 'EI',
        desc: 'External Accession Identifier',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'EI',
        desc: 'Accession Identifier',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'EI',
        desc: 'Container Identifier',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'EI',
        desc: 'Primary',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'EI',
        desc: 'Equipment Container Identifier',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'SPS',
        desc: 'Specimen Source',
        opt: 'R',
        rep: 1,
        len: 300
      },
      {
        dt: 'TS',
        desc: 'Registration Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Container Status',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 370
      },
      {
        dt: 'CE',
        desc: 'Carrier Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 378
      },
      {
        dt: 'EI',
        desc: 'Carrier Identifier',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'NA',
        desc: 'Position in Carrier',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Tray Type - SAC',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 379
      },
      {
        dt: 'EI',
        desc: 'Tray Identifier',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'NA',
        desc: 'Position in Tray',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Location',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Container Height',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Container Diameter',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Barrier Delta',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Bottom Delta',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Container Height/Diameter/Delta Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Container Volume',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Available Specimen Volume',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Initial Specimen Volume',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Volume Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Separator Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 380
      },
      {
        dt: 'CE',
        desc: 'Cap Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 381
      },
      {
        dt: 'CWE',
        desc: 'Additive',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 371
      },
      {
        dt: 'CE',
        desc: 'Specimen Component',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'SN',
        desc: 'Dilution Factor',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Treatment',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 373
      },
      {
        dt: 'SN',
        desc: 'Temperature',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Hemolysis Index',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Hemolysis Index Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Lipemia Index',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Lipemia Index Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Icterus Index',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Icterus Index Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'NM',
        desc: 'Fibrin Index',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Fibrin Index Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'System Induced Contaminants',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 374
      },
      {
        dt: 'CE',
        desc: 'Drug Interference',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 382
      },
      {
        dt: 'CE',
        desc: 'Artificial Blood',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 375
      },
      {
        dt: 'CWE',
        desc: 'Special Handling Code',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 376
      },
      {
        dt: 'CE',
        desc: 'Other Environmental Factors',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 377
      }
    ]
  },
  SCH: {
    desc: 'Scheduling Activity Information',
    fields: [
      {
        dt: 'EI',
        desc: 'Placer Appointment ID',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'EI',
        desc: 'Filler Appointment ID',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'NM',
        desc: 'Occurrence Number',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'EI',
        desc: 'Placer Group Number',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'CE',
        desc: 'Schedule ID',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Event Reason',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Appointment Reason',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 276
      },
      {
        dt: 'CE',
        desc: 'Appointment Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 277
      },
      {
        dt: 'NM',
        desc: 'Appointment Duration',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Appointment Duration Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TQ',
        desc: 'Appointment Timing Quantity',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'XCN',
        desc: 'Placer Contact Person',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Placer Contact Phone Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Placer Contact Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Placer Contact Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XCN',
        desc: 'Filler Contact Person',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Filler Contact Phone Number',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Filler Contact Address',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Filler Contact Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XCN',
        desc: 'Entered By Person',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'XTN',
        desc: 'Entered By Phone Number',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'PL',
        desc: 'Entered By Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'EI',
        desc: 'Parent Placer Appointment ID',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'EI',
        desc: 'Parent Filler Appointment ID',
        opt: 'R',
        rep: 1,
        len: 75
      },
      {
        dt: 'CE',
        desc: 'Filler Status Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 278
      },
      {
        dt: 'EI',
        desc: 'Placer Order Number',
        opt: 'R',
        rep: 0,
        len: 22
      },
      {
        dt: 'EI',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 0,
        len: 22
      }
    ]
  },
  SFT: {
    desc: 'Software Segment',
    fields: [
      {
        dt: 'XON',
        desc: 'Software Vendor Organization',
        opt: 'C',
        rep: 1,
        len: 567
      },
      {
        dt: 'ST',
        desc: 'Software Certified Version or Release Number',
        opt: 'C',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Software Product Name',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Software Binary ID',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'TX',
        desc: 'Software Product Information',
        opt: 'R',
        rep: 1,
        len: 1024
      },
      {
        dt: 'TS',
        desc: 'Software Install Date',
        opt: 'R',
        rep: 1,
        len: 26
      }
    ]
  },
  SID: {
    desc: 'Substance Identifier',
    fields: [
      {
        dt: 'CE',
        desc: 'Application / Method Identifier',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Substance Lot Number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Substance Container Identifier',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Substance Manufacturer Identifier',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 385
      }
    ]
  },
  SPM: {
    desc: 'Specimen',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID _ SPM',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'EIP',
        desc: 'Specimen ID',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'EIP',
        desc: 'Specimen Parent IDs',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'CWE',
        desc: 'Specimen Type',
        opt: 'C',
        rep: 1,
        len: 250,
        table: 487
      },
      {
        dt: 'CWE',
        desc: 'Specimen Type Modifier',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 541
      },
      {
        dt: 'CWE',
        desc: 'Specimen Additives',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 371
      },
      {
        dt: 'CWE',
        desc: 'Specimen Collection Method',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 488
      },
      {
        dt: 'CWE',
        desc: 'Specimen Source Site',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Specimen Source Site Modifier',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 542
      },
      {
        dt: 'CWE',
        desc: 'Specimen Collection Site',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 543
      },
      {
        dt: 'CWE',
        desc: 'Specimen Role',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 369
      },
      {
        dt: 'CQ',
        desc: 'Specimen Collection Amount',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Grouped Specimen Count',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'ST',
        desc: 'Specimen Description',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Specimen Handling Code',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 376
      },
      {
        dt: 'CWE',
        desc: 'Specimen Risk Code',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 489
      },
      {
        dt: 'DR',
        desc: 'Specimen Collection Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Specimen Received Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Specimen Expiration Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Specimen Availability',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CWE',
        desc: 'Specimen Reject Reason',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 490
      },
      {
        dt: 'CWE',
        desc: 'Specimen Quality',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 491
      },
      {
        dt: 'CWE',
        desc: 'Specimen Appropriateness',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 492
      },
      {
        dt: 'CWE',
        desc: 'Specimen Condition',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 493
      },
      {
        dt: 'CQ',
        desc: 'Specimen Current Quantity',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Number of Specimen Containers',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'Container Type',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CWE',
        desc: 'Container Condition',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 544
      },
      {
        dt: 'CWE',
        desc: 'Specimen Child Role',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 494
      }
    ]
  },
  SPR: {
    desc: 'Stored Procedure Request Definition',
    fields: [
      {
        dt: 'ST',
        desc: 'Query Tag',
        opt: 'R',
        rep: 1,
        len: 32
      },
      {
        dt: 'ID',
        desc: 'Query/Response Format Code',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 106
      },
      {
        dt: 'CE',
        desc: 'Stored Procedure Name',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'QIP',
        desc: 'Input Parameter List',
        opt: 'R',
        rep: 0,
        len: 256
      }
    ]
  },
  STF: {
    desc: 'Staff Identification',
    fields: [
      {
        dt: 'CE',
        desc: 'Primary Key Value - STF',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CX',
        desc: 'Staff Identifier List',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XPN',
        desc: 'Staff Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'IS',
        desc: 'Staff Type',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 182
      },
      {
        dt: 'IS',
        desc: 'Administrative Sex',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 1
      },
      {
        dt: 'TS',
        desc: 'Date/Time of Birth',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Active/Inactive Flag',
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
        len: 250,
        table: 184
      },
      {
        dt: 'CE',
        desc: 'Hospital Service - STF',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 69
      },
      {
        dt: 'XTN',
        desc: 'Phone',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XAD',
        desc: 'Office/Home Address/Birthplace',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'DIN',
        desc: 'Institution Activation Date',
        opt: 'R',
        rep: 0,
        len: 276,
        table: 537
      },
      {
        dt: 'DIN',
        desc: 'Institution Inactivation Date',
        opt: 'R',
        rep: 0,
        len: 276,
        table: 537
      },
      {
        dt: 'CE',
        desc: 'Backup Person ID',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'E-Mail Address',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'CE',
        desc: 'Preferred Method of Contact',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 185
      },
      {
        dt: 'CE',
        desc: 'Marital Status',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 2
      },
      {
        dt: 'ST',
        desc: 'Job Title',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'JCC',
        desc: 'Job Code/Class',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Employment Status Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 66
      },
      {
        dt: 'ID',
        desc: 'Additional Insured on Auto',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'DLN',
        desc: 'Driver\'s License Number - Staff',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'ID',
        desc: 'Copy Auto Ins',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'DT',
        desc: 'Auto Ins. Expires',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Date Last DMV Review',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Date Next DMV Review',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'CE',
        desc: 'Race',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 5
      },
      {
        dt: 'CE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 189
      },
      {
        dt: 'ID',
        desc: 'Re-activation Approval Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Citizenship',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 171
      },
      {
        dt: 'TS',
        desc: 'Death Date and Time',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ID',
        desc: 'Death Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CWE',
        desc: 'Institution Relationship Type Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 538
      },
      {
        dt: 'DR',
        desc: 'Institution Relationship Period',
        opt: 'R',
        rep: 1,
        len: 52
      },
      {
        dt: 'DT',
        desc: 'Expected Return Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'CWE',
        desc: 'Cost Center Code',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 539
      },
      {
        dt: 'ID',
        desc: 'Generic Classification Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CWE',
        desc: 'Inactive Reason Code',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 540
      }
    ]
  },
  TCC: {
    desc: 'Test Code Configuration',
    fields: [
      {
        dt: 'CE',
        desc: 'Universal Service Identifier',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'EI',
        desc: 'Test Application Identifier',
        opt: 'C',
        rep: 1,
        len: 80
      },
      {
        dt: 'SPS',
        desc: 'Specimen Source',
        opt: 'R',
        rep: 1,
        len: 300
      },
      {
        dt: 'SN',
        desc: 'Auto-Dilution Factor Default',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'SN',
        desc: 'Rerun Dilution Factor Default',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'SN',
        desc: 'Pre-Dilution Factor Default',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'SN',
        desc: 'Endogenous Content of Pre-Dilution Diluent',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Inventory Limits Warning Level',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ID',
        desc: 'Automatic Rerun Allowed',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Automatic Repeat Allowed',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Automatic Reflex Allowed',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'SN',
        desc: 'Equipment Dynamic Range',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Units',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Processing Type',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 388
      }
    ]
  },
  TCD: {
    desc: 'Test Code Detail',
    fields: [
      {
        dt: 'CE',
        desc: 'Universal Service Identifier',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'SN',
        desc: 'Auto-Dilution Factor',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'SN',
        desc: 'Rerun Dilution Factor',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'SN',
        desc: 'Pre-Dilution Factor',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'SN',
        desc: 'Endogenous Content of Pre-Dilution Diluent',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Automatic Repeat Allowed',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Reflex Allowed',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Analyte Repeat Status',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 389
      }
    ]
  },
  TQ1: {
    desc: 'Timing/Quantity',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - TQ1',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CQ',
        desc: 'Quantity',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'RPT',
        desc: 'Repeat Pattern',
        opt: 'R',
        rep: 0,
        len: 540,
        table: 335
      },
      {
        dt: 'TM',
        desc: 'Explicit Time',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'CQ',
        desc: 'Relative Time and Units',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'CQ',
        desc: 'Service Duration',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TS',
        desc: 'Start date/time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'End date/time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CWE',
        desc: 'Priority',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 485
      },
      {
        dt: 'TX',
        desc: 'Condition text',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'TX',
        desc: 'Text instruction',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ID',
        desc: 'Conjunction',
        opt: 'R',
        rep: 1,
        len: 10,
        table: 427
      },
      {
        dt: 'CQ',
        desc: 'Occurrence duration',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Total occurrence\'s',
        opt: 'R',
        rep: 1,
        len: 10
      }
    ]
  },
  TQ2: {
    desc: 'Timing/Quantity Relationship',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - TQ2',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Sequence/Results Flag',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 503
      },
      {
        dt: 'EI',
        desc: 'Related Placer Number',
        opt: 'R',
        rep: 0,
        len: 22
      },
      {
        dt: 'EI',
        desc: 'Related Filler Number',
        opt: 'R',
        rep: 0,
        len: 22
      },
      {
        dt: 'EI',
        desc: 'Related Placer Group Number',
        opt: 'R',
        rep: 0,
        len: 22
      },
      {
        dt: 'ID',
        desc: 'Sequence Condition Code',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 504
      },
      {
        dt: 'ID',
        desc: 'Cyclic Entry/Exit Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 505
      },
      {
        dt: 'CQ',
        desc: 'Sequence Condition Time Interval',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Cyclic Group Maximum Number of Repeats',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ID',
        desc: 'Special Service Request Relationship',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 506
      }
    ]
  },
  TXA: {
    desc: 'Transcription Document Header',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID- TXA',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'IS',
        desc: 'Document Type',
        opt: 'C',
        rep: 1,
        len: 30,
        table: 270
      },
      {
        dt: 'ID',
        desc: 'Document Content Presentation',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 191
      },
      {
        dt: 'TS',
        desc: 'Activity Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'Primary Activity Provider Code/Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'TS',
        desc: 'Origination Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Transcription Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Edit Date/Time',
        opt: 'R',
        rep: 0,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'Originator Code/Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Assigned Document Authenticator',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Transcriptionist Code/Name',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'EI',
        desc: 'Unique Document Number',
        opt: 'C',
        rep: 1,
        len: 30
      },
      {
        dt: 'EI',
        desc: 'Parent Document Number',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'EI',
        desc: 'Placer Order Number',
        opt: 'R',
        rep: 0,
        len: 22
      },
      {
        dt: 'EI',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'ST',
        desc: 'Unique Document File Name',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ID',
        desc: 'Document Completion Status',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 271
      },
      {
        dt: 'ID',
        desc: 'Document Confidentiality Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 272
      },
      {
        dt: 'ID',
        desc: 'Document Availability Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 273
      },
      {
        dt: 'ID',
        desc: 'Document Storage Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 275
      },
      {
        dt: 'ST',
        desc: 'Document Change Reason',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'PPN',
        desc: 'Authentication Person, Time Stamp',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'XCN',
        desc: 'Distributed Copies',
        opt: 'R',
        rep: 0,
        len: 250
      }
    ]
  },
  UB1: {
    desc: 'UB82',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - UB1',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'NM',
        desc: 'Blood Deductible',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'NM',
        desc: 'Blood Furnished-Pints Of',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Blood Replaced-Pints',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Blood Not Replaced-Pints',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Co-Insurance Days',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'IS',
        desc: 'Condition Code',
        opt: 'R',
        rep: 0,
        len: 14,
        table: 43
      },
      {
        dt: 'NM',
        desc: 'Covered Days -',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Non Covered Days -',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'UVC',
        desc: 'Value Amount and Code',
        opt: 'R',
        rep: 0,
        len: 41
      },
      {
        dt: 'NM',
        desc: 'Number Of Grace Days',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'CE',
        desc: 'Special Program Indicator',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 348
      },
      {
        dt: 'CE',
        desc: 'PSRO/UR Approval Indicator',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 349
      },
      {
        dt: 'DT',
        desc: 'PSRO/UR Approved Stay-Fm',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'PSRO/UR Approved Stay-To',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'OCD',
        desc: 'Occurrence',
        opt: 'R',
        rep: 0,
        len: 259
      },
      {
        dt: 'CE',
        desc: 'Occurrence Span',
        opt: 'R',
        rep: 1,
        len: 250,
        table: 351
      },
      {
        dt: 'DT',
        desc: 'Occur Span Start Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Occur Span End Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'UB-82 Locator 2',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'UB-82 Locator 9',
        opt: 'R',
        rep: 1,
        len: 7
      },
      {
        dt: 'ST',
        desc: 'UB-82 Locator 27',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'UB-82 Locator 45',
        opt: 'R',
        rep: 1,
        len: 17
      }
    ]
  },
  UB2: {
    desc: 'UB92 Data',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - UB2',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Co-Insurance Days',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'IS',
        desc: 'Condition Code',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 43
      },
      {
        dt: 'ST',
        desc: 'Covered Days',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'ST',
        desc: 'Non-Covered Days',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'UVC',
        desc: 'Value Amount and Code',
        opt: 'R',
        rep: 0,
        len: 41
      },
      {
        dt: 'OCD',
        desc: 'Occurrence Code and Date',
        opt: 'R',
        rep: 0,
        len: 259
      },
      {
        dt: 'OSP',
        desc: 'Occurrence Span Code/Dates',
        opt: 'R',
        rep: 0,
        len: 268
      },
      {
        dt: 'ST',
        desc: 'UB92 Locator 2',
        opt: 'R',
        rep: 0,
        len: 29
      },
      {
        dt: 'ST',
        desc: 'UB92 Locator 11',
        opt: 'R',
        rep: 0,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'UB92 Locator 31',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'ST',
        desc: 'Document Control Number',
        opt: 'R',
        rep: 0,
        len: 23
      },
      {
        dt: 'ST',
        desc: 'UB92 Locator 49',
        opt: 'R',
        rep: 0,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'UB92 Locator 56',
        opt: 'R',
        rep: 0,
        len: 14
      },
      {
        dt: 'ST',
        desc: 'UB92 Locator 57',
        opt: 'R',
        rep: 1,
        len: 27
      },
      {
        dt: 'ST',
        desc: 'UB92 Locator 78',
        opt: 'R',
        rep: 0,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Special Visit Count',
        opt: 'R',
        rep: 1,
        len: 3
      }
    ]
  },
  URD: {
    desc: 'Results/update Definition',
    fields: [
      {
        dt: 'TS',
        desc: 'R/U Date/Time',
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
        dt: 'XCN',
        desc: 'R/U Who Subject Definition',
        opt: 'C',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'R/U What Subject Definition',
        opt: 'R',
        rep: 0,
        len: 250,
        table: 48
      },
      {
        dt: 'CE',
        desc: 'R/U What Department Code',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'R/U Display/Print Locations',
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
    desc: 'Unsolicited Selection',
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
        desc: 'R/U When Data Start Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'R/U When Data End Date/Time',
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
        desc: 'R/U Which Date/Time Qualifier',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 156
      },
      {
        dt: 'ID',
        desc: 'R/U Which Date/Time Status Qualifier',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 157
      },
      {
        dt: 'ID',
        desc: 'R/U Date/Time Selection Qualifier',
        opt: 'R',
        rep: 0,
        len: 12,
        table: 158
      },
      {
        dt: 'TQ',
        desc: 'R/U Quantity/Timing Qualifier',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  VAR: {
    desc: 'Variance',
    fields: [
      {
        dt: 'EI',
        desc: 'Variance Instance ID',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Documented Date/Time',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Stated Variance Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XCN',
        desc: 'Variance Originator',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Variance Classification',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Variance Description',
        opt: 'R',
        rep: 0,
        len: 512
      }
    ]
  },
  VTQ: {
    desc: 'Virtual Table Query Request',
    fields: [
      {
        dt: 'ST',
        desc: 'Query Tag',
        opt: 'R',
        rep: 1,
        len: 32
      },
      {
        dt: 'ID',
        desc: 'Query/Response Format Code',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 106
      },
      {
        dt: 'CE',
        desc: 'VT Query Name',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Virtual Table Name',
        opt: 'C',
        rep: 1,
        len: 250
      },
      {
        dt: 'QSC',
        desc: 'Selection Criteria',
        opt: 'R',
        rep: 0,
        len: 256
      }
    ]
  }
};

module.exports = segments;
