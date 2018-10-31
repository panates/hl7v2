const segments = {
  ABS: {
    desc: 'Abstract',
    fields: [
      {
        dt: 'XCN',
        desc: 'Discharge Care Provider',
        opt: 'R',
        rep: 1,
        table: 10
      },
      {
        dt: 'CWE',
        desc: 'Transfer Medical Service Code',
        opt: 'R',
        rep: 1,
        table: 69
      },
      {
        dt: 'CWE',
        desc: 'Severity of Illness Code',
        opt: 'R',
        rep: 1,
        table: 421
      },
      {
        dt: 'DTM',
        desc: 'Date/Time of Attestation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Attested By',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Triage Code',
        opt: 'R',
        rep: 1,
        table: 422
      },
      {
        dt: 'DTM',
        desc: 'Abstract Completion Date/Time ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Abstracted By',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Case Category Code',
        opt: 'R',
        rep: 1,
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
        dt: 'CWE',
        desc: 'Gestation Category Code',
        opt: 'R',
        rep: 1,
        table: 424
      },
      {
        dt: 'NM',
        desc: 'Gestation Period - Weeks',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Newborn Code',
        opt: 'R',
        rep: 1,
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
        dt: 'DTM',
        desc: 'Accident Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Accident Code',
        opt: 'R',
        rep: 1,
        table: 50
      },
      {
        dt: 'ST',
        desc: 'Accident Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Auto Accident State',
        opt: 'R',
        rep: 1,
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
        len: 1,
        table: 136
      },
      {
        dt: 'XCN',
        desc: 'Entered By',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Accident Description',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Brought In By',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Degree of patient liability',
        opt: 'R',
        rep: 1
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
        rep: 1
      }
    ]
  },
  ADJ: {
    desc: 'Adjustment',
    fields: [
      {
        dt: 'EI',
        desc: 'Provider Adjustment Number',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Payer Adjustment Number',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'SI',
        desc: 'Adjustment Sequence Number',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'Adjustment Category',
        opt: 'C',
        rep: 1,
        table: 564
      },
      {
        dt: 'CP',
        desc: 'Adjustment Amount',
        opt: 'R',
        rep: 5
      },
      {
        dt: 'CQ',
        desc: 'Adjustment Quantity',
        opt: 'R',
        rep: 1,
        table: 560
      },
      {
        dt: 'CWE',
        desc: 'Adjustment Reason PA',
        opt: 'R',
        rep: 1,
        table: 565
      },
      {
        dt: 'ST',
        desc: 'Adjustment Description',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Original Value',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Substitute Value',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Adjustment Action',
        opt: 'R',
        rep: 1,
        table: 569
      },
      {
        dt: 'EI',
        desc: 'Provider Adjustment Number Cross Reference',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Provider Product/Service Line Item Number Cross Reference',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Adjustment Date',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Responsible Organization ',
        opt: 'R',
        rep: 1
      }
    ]
  },
  AFF: {
    desc: 'Professional Affiliation',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - AFF',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'XON',
        desc: 'Professional Organization',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Professional Organization Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DR',
        desc: 'Professional Organization Affiliation Date Range',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Professional Affiliation Additional Information',
        opt: 'R',
        rep: 1
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
        len: 1,
        table: 206
      },
      {
        dt: 'CWE',
        desc: 'Resource ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Resource Type',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Resource Group',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Resource Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Resource Quantity Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Start Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Start Date/Time Offset',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Start Date/Time Offset Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Duration',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Duration Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Allow Substitution Code',
        opt: 'R',
        rep: 1,
        table: 279
      },
      {
        dt: 'CWE',
        desc: 'Filler Status Code',
        opt: 'R',
        rep: 1,
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
        len: 1,
        table: 206
      },
      {
        dt: 'PL',
        desc: 'Location Resource ID',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Location Type - AIL',
        opt: 'R',
        rep: 1,
        table: 305
      },
      {
        dt: 'CWE',
        desc: 'Location Group',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Start Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Start Date/Time Offset',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Start Date/Time Offset Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Duration',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Duration Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Allow Substitution Code',
        opt: 'R',
        rep: 1,
        table: 279
      },
      {
        dt: 'CWE',
        desc: 'Filler Status Code',
        opt: 'R',
        rep: 1,
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
        desc: 'Segment Action code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 206
      },
      {
        dt: 'XCN',
        desc: 'Personnel Resource ID',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Resource Type',
        opt: 'R',
        rep: 1,
        table: 182
      },
      {
        dt: 'CWE',
        desc: 'Resource Group',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Start Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Start Date/Time Offset',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Start Date/Time Offset Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Duration',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Duration Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Allow Substitution Code',
        opt: 'R',
        rep: 1,
        table: 279
      },
      {
        dt: 'CWE',
        desc: 'Filler Status Code',
        opt: 'R',
        rep: 1,
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
        len: 1,
        table: 206
      },
      {
        dt: 'CWE',
        desc: 'Universal Service Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Start Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Start Date/Time Offset',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Start Date/Time Offset Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Duration',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Duration Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Allow Substitution Code',
        opt: 'R',
        rep: 1,
        table: 279
      },
      {
        dt: 'CWE',
        desc: 'Filler Status Code',
        opt: 'R',
        rep: 1,
        table: 278
      },
      {
        dt: 'CWE',
        desc: 'Placer Supplemental Service Information',
        opt: 'R',
        rep: 0,
        table: 411
      },
      {
        dt: 'CWE',
        desc: 'Filler Supplemental Service Information',
        opt: 'R',
        rep: 0,
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
        dt: 'CWE',
        desc: 'Allergen Type Code',
        opt: 'R',
        rep: 1,
        table: 127
      },
      {
        dt: 'CWE',
        desc: 'Allergen Code/Mnemonic/Description',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Allergy Severity Code',
        opt: 'R',
        rep: 1,
        table: 128
      },
      {
        dt: 'ST',
        desc: 'Allergy Reaction Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Identification Date',
        opt: 'W',
        rep: 1
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
        table: 294
      },
      {
        dt: 'SCV',
        desc: 'Resource Selection Criteria',
        opt: 'R',
        rep: 0,
        table: 294
      },
      {
        dt: 'SCV',
        desc: 'Location Selection Criteria',
        opt: 'R',
        rep: 0,
        table: 294
      },
      {
        dt: 'NM',
        desc: 'Slot Spacing Criteria',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'SCV',
        desc: 'Filler Override Criteria',
        opt: 'R',
        rep: 0
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
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Filler Appointment ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Occurrence Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Placer Group Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Schedule ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Request Event Reason',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Appointment Reason',
        opt: 'R',
        rep: 1,
        table: 276
      },
      {
        dt: 'CWE',
        desc: 'Appointment Type',
        opt: 'R',
        rep: 1,
        table: 277
      },
      {
        dt: 'NM',
        desc: 'Appointment Duration',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Appointment Duration Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DR',
        desc: 'Requested Start Date/Time Range',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Priority-ARQ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'RI',
        desc: 'Repeating Interval',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Repeating Interval Duration',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Placer Contact Person',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Placer Contact Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Placer Contact Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Placer Contact Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Entered By Person',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Entered By Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Entered By Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Parent Placer Appointment ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Parent Filler Appointment ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Placer Order Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EI',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 0
      }
    ]
  },
  ARV: {
    desc: 'Access Restriction',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CNE',
        desc: 'Access Restriction Action Code',
        opt: 'C',
        rep: 1,
        table: 206
      },
      {
        dt: 'CWE',
        desc: 'Access Restriction Value',
        opt: 'C',
        rep: 1,
        table: 717
      },
      {
        dt: 'CWE',
        desc: 'Access Restriction Reason',
        opt: 'R',
        rep: 0,
        table: 719
      },
      {
        dt: 'ST',
        desc: 'Special Access Restriction Instructions',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DR',
        desc: 'Access Restriction Date Range ',
        opt: 'R',
        rep: 1
      }
    ]
  },
  AUT: {
    desc: 'Authorization Information',
    fields: [
      {
        dt: 'CWE',
        desc: 'Authorizing Payor, Plan ID',
        opt: 'R',
        rep: 1,
        table: 72
      },
      {
        dt: 'CWE',
        desc: 'Authorizing Payor, Company ID',
        opt: 'C',
        rep: 1,
        table: 285
      },
      {
        dt: 'ST',
        desc: 'Authorizing Payor, Company Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Authorization Effective Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Authorization Expiration Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Authorization Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Reimbursement Limit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Requested Number of Treatments',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Authorized Number of Treatments',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Process Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Requested Discipline(s)',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Authorized Discipline(s)',
        opt: 'R',
        rep: 0
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
        len: 5
      },
      {
        dt: 'HD',
        desc: 'Batch Sending Application',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Batch Sending Facility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Batch Receiving Application',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Batch Receiving Facility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Batch Creation Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Batch Security',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Batch Name/ID/Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Batch Comment',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Batch Control ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Reference Batch Control ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Batch Sending Network Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Batch Receiving Network Address',
        opt: 'R',
        rep: 1
      }
    ]
  },
  BLC: {
    desc: 'Blood Code',
    fields: [
      {
        dt: 'CWE',
        desc: 'Blood Product Code',
        opt: 'R',
        rep: 1,
        table: 426
      },
      {
        dt: 'CQ',
        desc: 'Blood Amount',
        opt: 'R',
        rep: 1
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
        table: 100
      },
      {
        dt: 'ID',
        desc: 'Charge Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 122
      },
      {
        dt: 'CX',
        desc: 'Account ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Charge Type Reason',
        opt: 'R',
        rep: 1,
        table: 475
      }
    ]
  },
  BPO: {
    desc: 'Blood product order',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - BPO',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'BP Universal Service Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'BP  Processing Requirements',
        opt: 'R',
        rep: 0,
        table: 508
      },
      {
        dt: 'NM',
        desc: 'BP Quantity',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'BP Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'BP Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'BP Intended Use Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'PL',
        desc: 'BP Intended Dispense From Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'BP Intended Dispense From Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'BP Requested Dispense Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'PL',
        desc: 'BP Requested Dispense To Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'BP Requested Dispense To Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'BP Indication for Use',
        opt: 'R',
        rep: 0,
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
        desc: 'Set ID - BPX',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'BP Dispense Status',
        opt: 'C',
        rep: 1,
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
        dt: 'DTM',
        desc: 'BP Date/Time of Status',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'BC Donation ID ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'BC Component ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'BC Donation Type / Intended Use ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'CP Commercial Product ',
        opt: 'R',
        rep: 1,
        table: 512
      },
      {
        dt: 'XON',
        desc: 'CP Manufacturer ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'CP Lot Number ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'BP Blood Group ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'BC Special Testing ',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'BP Expiration Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'BP Quantity',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'BP Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'BP Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'BP Unique ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'PL',
        desc: 'BP Actual Dispensed To Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'BP Actual Dispensed To Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'BP Dispensed to Receiver',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'BP Dispensing Individual',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Batch Comment',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Batch Totals',
        opt: 'R',
        rep: 0
      }
    ]
  },
  BTX: {
    desc: 'Blood Product Transfusion/Disposition',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - BTX',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'EI',
        desc: 'BC Donation ID ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'BC Component ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'BC Blood Group',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'CP Commercial Product ',
        opt: 'R',
        rep: 1,
        table: 512
      },
      {
        dt: 'XON',
        desc: 'CP Manufacturer ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'CP Lot Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'BP Quantity',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'BP Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'BP Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'BP Transfusion/Disposition Status',
        opt: 'C',
        rep: 1,
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
        dt: 'DTM',
        desc: 'BP Date/Time of Status',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'BP Transfusion Administrator',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'BP Transfusion Verifier ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'BP Transfusion Start Date/Time of Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'BP Transfusion End Date/Time of Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'BP Adverse Reaction Type',
        opt: 'R',
        rep: 0,
        table: 514
      },
      {
        dt: 'CWE',
        desc: 'BP Transfusion Interrupted Reason',
        opt: 'R',
        rep: 1,
        table: 515
      }
    ]
  },
  CDM: {
    desc: 'Charge Description Master',
    fields: [
      {
        dt: 'CWE',
        desc: 'Primary Key Value - CDM',
        opt: 'C',
        rep: 1,
        table: 132
      },
      {
        dt: 'CWE',
        desc: 'Charge Code Alias',
        opt: 'R',
        rep: 0,
        table: 132
      },
      {
        dt: 'ST',
        desc: 'Charge Description Short',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Charge Description Long',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Description Override Indicator',
        opt: 'R',
        rep: 1,
        table: 268
      },
      {
        dt: 'CWE',
        desc: 'Exploding Charges',
        opt: 'R',
        rep: 0,
        table: 132
      },
      {
        dt: 'CNE',
        desc: 'Procedure Code',
        opt: 'R',
        rep: 0,
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
        dt: 'CWE',
        desc: 'Inventory Number',
        opt: 'R',
        rep: 0,
        table: 463
      },
      {
        dt: 'NM',
        desc: 'Resource Load',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Contract Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XON',
        desc: 'Contract Organization',
        opt: 'R',
        rep: 0
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
        desc: 'Set ID - CER',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Serial Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Version',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Granting Authority',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Issuing Authority',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ED',
        desc: 'Signature ',
        opt: 'R',
        rep: 1
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
        table: 347
      },
      {
        dt: 'CWE',
        desc: 'Granting County/Parish',
        opt: 'R',
        rep: 1,
        table: 289
      },
      {
        dt: 'CWE',
        desc: 'Certificate Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Certificate Domain',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Subject ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Subject Name',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Subject Directory Attribute Extension',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Subject Public Key Info',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Authority Key Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Basic Constraint',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CWE',
        desc: 'CRL Distribution Point',
        opt: 'R',
        rep: 0
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
        table: 347
      },
      {
        dt: 'CWE',
        desc: 'Jurisdiction County/Parish',
        opt: 'R',
        rep: 1,
        table: 289
      },
      {
        dt: 'CWE',
        desc: 'Jurisdiction Breadth',
        opt: 'R',
        rep: 0,
        table: 547
      },
      {
        dt: 'DTM',
        desc: 'Granting Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Issuing Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Activation Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Inactivation Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Expiration Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Renewal Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Revocation Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Revocation Reason Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Certificate Status Code',
        opt: 'R',
        rep: 1,
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
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Alternate Study ID',
        opt: 'R',
        rep: 3
      },
      {
        dt: 'ST',
        desc: 'Title of Study',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Chairman of Study',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DT',
        desc: 'Last IRB Approval Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Total Accrual to Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Last Accrual Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Contact for Study',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Contact\'s Telephone Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Contact\'s Address',
        opt: 'R',
        rep: 0
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
        dt: 'CWE',
        desc: 'Study Phase Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Description of Study Phase',
        opt: 'C',
        rep: 1
      }
    ]
  },
  CM2: {
    desc: 'Clinical Study Schedule Master',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID- CM2',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'Scheduled Time Point',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Description of Time Point',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Events Scheduled This Time Point',
        opt: 'C',
        rep: 200
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
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Ending Notification Reference Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Starting Notification Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Ending Notification Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Starting Notification Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Ending Notification Code',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CON: {
    desc: 'Consent Segment',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - CON',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'Consent Type',
        opt: 'R',
        rep: 1,
        table: 496
      },
      {
        dt: 'ST',
        desc: 'Consent Form ID and Version',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Consent Form Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'FT',
        desc: 'Consent Text',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'FT',
        desc: 'Subject-specific Consent Text',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'FT',
        desc: 'Consent Background Information',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'FT',
        desc: 'Subject-specific Consent Background Text',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'FT',
        desc: 'Consenter-imposed limitations',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CNE',
        desc: 'Consent Mode',
        opt: 'R',
        rep: 1,
        table: 497
      },
      {
        dt: 'CNE',
        desc: 'Consent Status',
        opt: 'C',
        rep: 1,
        table: 498
      },
      {
        dt: 'DTM',
        desc: 'Consent Discussion Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Consent Decision Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Consent Effective Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Consent End Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Subject Competence Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Translator Assistance Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CWE',
        desc: 'Language Translated To',
        opt: 'R',
        rep: 1,
        table: 296
      },
      {
        dt: 'ID',
        desc: 'Informational Material Supplied Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CWE',
        desc: 'Consent Bypass Reason',
        opt: 'R',
        rep: 1,
        table: 499
      },
      {
        dt: 'ID',
        desc: 'Consent Disclosure Level',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 500
      },
      {
        dt: 'CWE',
        desc: 'Consent Non-disclosure Reason',
        opt: 'R',
        rep: 1,
        table: 501
      },
      {
        dt: 'CWE',
        desc: 'Non-subject Consenter Reason',
        opt: 'R',
        rep: 1,
        table: 502
      },
      {
        dt: 'XPN',
        desc: 'Consenter ID',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Relationship to Subject ',
        opt: 'C',
        rep: 0,
        table: 548
      }
    ]
  },
  CSP: {
    desc: 'Clinical Study Phase',
    fields: [
      {
        dt: 'CWE',
        desc: 'Study Phase Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Date/time Study Phase Began',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Date/time Study Phase Ended',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Study Phase Evaluability',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Alternate Study ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Institution Registering the Patient',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Sponsor Patient ID  ',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Alternate Patient ID - CSR',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Date/Time of Patient Study Registration',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Person Performing Study Registration',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Study Authorizing Provider ',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Date/Time Patient Study Consent Signed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Patient Study Eligibility Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Study Randomization Date/time',
        opt: 'R',
        rep: 3
      },
      {
        dt: 'CWE',
        desc: 'Randomized Study Arm',
        opt: 'R',
        rep: 3
      },
      {
        dt: 'CWE',
        desc: 'Stratum for Study Randomization',
        opt: 'R',
        rep: 3
      },
      {
        dt: 'CWE',
        desc: 'Patient Evaluability Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Date/Time Ended Study',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Reason Ended Study',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CSS: {
    desc: 'Clinical Study Data Schedule Segment',
    fields: [
      {
        dt: 'CWE',
        desc: 'Study Scheduled Time Point',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Study Scheduled Patient Time Point ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Study Quality Control Codes',
        opt: 'R',
        rep: 3
      }
    ]
  },
  CTD: {
    desc: 'Contact Data',
    fields: [
      {
        dt: 'CWE',
        desc: 'Contact Role',
        opt: 'C',
        rep: 0,
        table: 131
      },
      {
        dt: 'XPN',
        desc: 'Contact Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Contact Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Contact Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XTN',
        desc: 'Contact Communication Information',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Preferred Method of Contact ',
        opt: 'R',
        rep: 1,
        table: 185
      },
      {
        dt: 'PLN',
        desc: 'Contact Identifiers',
        opt: 'R',
        rep: 0,
        table: 338
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Study Phase Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Study Scheduled Time Point',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Disabled Person Code',
        opt: 'R',
        rep: 1,
        table: 334
      },
      {
        dt: 'CX',
        desc: 'Disabled Person Identifier',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ID',
        desc: 'Disability Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'DT',
        desc: 'Disability Start Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Disability End Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Disability Return to Work Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Disability Unable to Work Date',
        opt: 'R',
        rep: 1
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
        dt: 'ST',
        desc: 'Diagnosis Coding Method ',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Diagnosis Code - DG1 ',
        opt: 'C',
        rep: 1,
        table: 51
      },
      {
        dt: 'ST',
        desc: 'Diagnosis Description',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Diagnosis Date/Time ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Diagnosis Type',
        opt: 'C',
        rep: 1,
        table: 52
      },
      {
        dt: 'ST',
        desc: 'Major Diagnostic Category',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Diagnostic Related Group ',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'DRG Approval Indicator ',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'DRG Grouper Review Code',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Outlier Type ',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Outlier Days ',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Outlier Cost',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Grouper Version And Type',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Diagnosis Priority',
        opt: 'R',
        rep: 1,
        table: 359
      },
      {
        dt: 'XCN',
        desc: 'Diagnosing Clinician',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Diagnosis Classification',
        opt: 'R',
        rep: 1,
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
        dt: 'DTM',
        desc: 'Attestation Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Diagnosis Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Diagnosis Action Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 206
      },
      {
        dt: 'EI',
        desc: 'Parent Diagnosis',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'DRG CCL Value Code',
        opt: 'R',
        rep: 1,
        table: 728
      },
      {
        dt: 'ID',
        desc: 'DRG Grouping Usage',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CWE',
        desc: 'DRG Diagnosis Determination Status',
        opt: 'R',
        rep: 1,
        table: 731
      },
      {
        dt: 'CWE',
        desc: 'Present On Admission (POA) Indicator',
        opt: 'R',
        rep: 1,
        table: 895
      }
    ]
  },
  DMI: {
    desc: 'DRG Master File Information',
    fields: [
      {
        dt: 'CNE',
        desc: 'Diagnostic Related Group ',
        opt: 'R',
        rep: 1,
        table: 55
      },
      {
        dt: 'CNE',
        desc: 'Major Diagnostic Category',
        opt: 'R',
        rep: 1,
        table: 118
      },
      {
        dt: 'NR',
        desc: 'Lower and Upper Trim Points',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Average Length of Stay',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Relative Weight',
        opt: 'R',
        rep: 1
      }
    ]
  },
  DRG: {
    desc: 'Diagnosis Related Group',
    fields: [
      {
        dt: 'CNE',
        desc: 'Diagnostic Related Group ',
        opt: 'R',
        rep: 1,
        table: 55
      },
      {
        dt: 'DTM',
        desc: 'DRG Assigned Date/Time ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'DRG Approval Indicator ',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CWE',
        desc: 'DRG Grouper Review Code',
        opt: 'R',
        rep: 1,
        table: 56
      },
      {
        dt: 'CWE',
        desc: 'Outlier Type ',
        opt: 'R',
        rep: 1,
        table: 83
      },
      {
        dt: 'NM',
        desc: 'Outlier Days ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Outlier Cost',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'DRG Payor',
        opt: 'R',
        rep: 1,
        table: 229
      },
      {
        dt: 'CP',
        desc: 'Outlier Reimbursement',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'DRG Transfer Type',
        opt: 'R',
        rep: 1,
        table: 415
      },
      {
        dt: 'XPN',
        desc: 'Name of Coder',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Grouper Status',
        opt: 'R',
        rep: 1,
        table: 734
      },
      {
        dt: 'CWE',
        desc: 'PCCL Value Code',
        opt: 'R',
        rep: 1,
        table: 728
      },
      {
        dt: 'NM',
        desc: 'Effective Weight',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'MO',
        desc: 'Monetary Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Status Patient',
        opt: 'R',
        rep: 1,
        table: 739
      },
      {
        dt: 'ST',
        desc: 'Grouper Software Name ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Grouper Software Version',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Status Financial Calculation',
        opt: 'R',
        rep: 1,
        table: 742
      },
      {
        dt: 'MO',
        desc: 'Relative Discount/Surcharge',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'MO',
        desc: 'Basic Charge',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'MO',
        desc: 'Total Charge',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'MO',
        desc: 'Discount/Surcharge',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Calculated Days',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Status Gender',
        opt: 'R',
        rep: 1,
        table: 749
      },
      {
        dt: 'CWE',
        desc: 'Status Age',
        opt: 'R',
        rep: 1,
        table: 749
      },
      {
        dt: 'CWE',
        desc: 'Status Length of Stay',
        opt: 'R',
        rep: 1,
        table: 749
      },
      {
        dt: 'CWE',
        desc: 'Status Same Day Flag',
        opt: 'R',
        rep: 1,
        table: 749
      },
      {
        dt: 'CWE',
        desc: 'Status Separation Mode',
        opt: 'R',
        rep: 1,
        table: 749
      },
      {
        dt: 'CWE',
        desc: 'Status Weight at Birth',
        opt: 'R',
        rep: 1,
        table: 755
      },
      {
        dt: 'CWE',
        desc: 'Status Respiration Minutes',
        opt: 'R',
        rep: 1,
        table: 757
      },
      {
        dt: 'CWE',
        desc: 'Status Admission',
        opt: 'R',
        rep: 1,
        table: 759
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
        rep: 1
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
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Logical Break Point',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Result ID',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Remote Control Command',
        opt: 'C',
        rep: 1,
        table: 368
      },
      {
        dt: 'ID',
        desc: 'Response Required',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ST',
        desc: 'Requested Completion Time',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Parameters',
        opt: 'R',
        rep: 0
      }
    ]
  },
  ECR: {
    desc: 'Equipment Command Response',
    fields: [
      {
        dt: 'CWE',
        desc: 'Command Response',
        opt: 'C',
        rep: 1,
        table: 387
      },
      {
        dt: 'DTM',
        desc: 'Date/Time Completed',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Command Response Parameters',
        opt: 'R',
        rep: 0
      }
    ]
  },
  EDU: {
    desc: 'Educational Detail',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - EDU',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'Academic Degree',
        opt: 'R',
        rep: 1,
        table: 360
      },
      {
        dt: 'DR',
        desc: 'Academic Degree Program Date Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DR',
        desc: 'Academic Degree Program Participation Date Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Academic Degree Granted Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'School',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'School Type Code',
        opt: 'R',
        rep: 1,
        table: 402
      },
      {
        dt: 'XAD',
        desc: 'School Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Major Field of Study',
        opt: 'R',
        rep: 0
      }
    ]
  },
  EQP: {
    desc: 'Equipment/log Service',
    fields: [
      {
        dt: 'CWE',
        desc: 'Event type ',
        opt: 'C',
        rep: 1,
        table: 450
      },
      {
        dt: 'ST',
        desc: 'File Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Start Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'End Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'FT',
        desc: 'Transaction Data',
        opt: 'C',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Event Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Equipment State',
        opt: 'R',
        rep: 1,
        table: 365
      },
      {
        dt: 'CWE',
        desc: 'Local/Remote Control State',
        opt: 'R',
        rep: 1,
        table: 366
      },
      {
        dt: 'CWE',
        desc: 'Alert Level',
        opt: 'R',
        rep: 1,
        table: 367
      }
    ]
  },
  ERR: {
    desc: 'Error',
    fields: [
      {
        dt: 'ST',
        desc: 'Error Code and Location',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ERL',
        desc: 'Error Location',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'HL7 Error Code',
        opt: 'C',
        rep: 1,
        table: 357
      },
      {
        dt: 'ID',
        desc: 'Severity',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 516
      },
      {
        dt: 'CWE',
        desc: 'Application Error Code',
        opt: 'R',
        rep: 1,
        table: 533
      },
      {
        dt: 'ST',
        desc: 'Application Error Parameter',
        opt: 'R',
        rep: 10
      },
      {
        dt: 'TX',
        desc: 'Diagnostic Information',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'User Message',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Inform Person Indicator',
        opt: 'R',
        rep: 0,
        table: 517
      },
      {
        dt: 'CWE',
        desc: 'Override Type',
        opt: 'R',
        rep: 1,
        table: 518
      },
      {
        dt: 'CWE',
        desc: 'Override Reason Code',
        opt: 'R',
        rep: 0,
        table: 519
      },
      {
        dt: 'XTN',
        desc: 'Help Desk Contact Point',
        opt: 'R',
        rep: 0
      }
    ]
  },
  EVN: {
    desc: 'Event Type',
    fields: [
      {
        dt: 'ST',
        desc: 'Event Type Code',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Recorded Date/Time ',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Date/Time Planned Event',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Event Reason Code',
        opt: 'R',
        rep: 1,
        table: 62
      },
      {
        dt: 'XCN',
        desc: 'Operator ID',
        opt: 'R',
        rep: 0,
        table: 188
      },
      {
        dt: 'DTM',
        desc: 'Event Occurred',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Event Facility',
        opt: 'R',
        rep: 1
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
        len: 5
      },
      {
        dt: 'HD',
        desc: 'File Sending Application',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'File Sending Facility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'File Receiving Application',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'File Receiving Facility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'File Creation Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'File Security',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'File Name/ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'File Header Comment',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'File Control ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Reference File Control ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'File Sending Network Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'File Receiving Network Address',
        opt: 'R',
        rep: 1
      }
    ]
  },
  FT1: {
    desc: 'Financial Transaction',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID   FT1',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Transaction ID ',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Transaction Batch ID ',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'DR',
        desc: 'Transaction Date ',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Transaction Posting Date ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Transaction Type ',
        opt: 'C',
        rep: 1,
        table: 17
      },
      {
        dt: 'CWE',
        desc: 'Transaction Code ',
        opt: 'C',
        rep: 1,
        table: 132
      },
      {
        dt: 'ST',
        desc: 'Transaction Description ',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Transaction Description   Alt ',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Transaction Quantity ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Transaction Amount   Extended ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Transaction Amount   Unit ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Department Code ',
        opt: 'R',
        rep: 1,
        table: 49
      },
      {
        dt: 'CWE',
        desc: 'Health Plan ID ',
        opt: 'R',
        rep: 1,
        table: 72
      },
      {
        dt: 'CP',
        desc: 'Insurance Amount ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'PL',
        desc: 'Assigned Patient Location ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Fee Schedule ',
        opt: 'R',
        rep: 1,
        table: 24
      },
      {
        dt: 'CWE',
        desc: 'Patient Type ',
        opt: 'R',
        rep: 1,
        table: 18
      },
      {
        dt: 'CWE',
        desc: 'Diagnosis Code - FT1 ',
        opt: 'R',
        rep: 0,
        table: 51
      },
      {
        dt: 'XCN',
        desc: 'Performed By Code ',
        opt: 'R',
        rep: 0,
        table: 84
      },
      {
        dt: 'XCN',
        desc: 'Ordered By Code ',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CP',
        desc: 'Unit Cost ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Entered By Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CNE',
        desc: 'Procedure Code',
        opt: 'R',
        rep: 1,
        table: 88
      },
      {
        dt: 'CNE',
        desc: 'Procedure Code Modifier',
        opt: 'R',
        rep: 0,
        table: 340
      },
      {
        dt: 'CWE',
        desc: 'Advanced Beneficiary Notice Code',
        opt: 'R',
        rep: 1,
        table: 339
      },
      {
        dt: 'CWE',
        desc: 'Medically Necessary Duplicate Procedure Reason',
        opt: 'R',
        rep: 1,
        table: 476
      },
      {
        dt: 'CWE',
        desc: 'NDC Code',
        opt: 'R',
        rep: 1,
        table: 549
      },
      {
        dt: 'CX',
        desc: 'Payment Reference ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'SI',
        desc: 'Transaction Reference Key',
        opt: 'R',
        rep: 0,
        len: 4
      },
      {
        dt: 'XON',
        desc: 'Performing Facility',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XON',
        desc: 'Ordering Facility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Item Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Model Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Special Processing Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Clinic Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Referral Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Authorization Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Service Provider Taxonomy Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Revenue Code',
        opt: 'R',
        rep: 1,
        table: 456
      },
      {
        dt: 'ST',
        desc: 'Prescription Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'NDC Qty and UOM',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'File Trailer Comment',
        opt: 'R',
        rep: 1
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
        dt: 'DTM',
        desc: 'Action Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Goal ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Goal Instance ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Episode of Care ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Goal List Priority',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Goal Established Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Expected Goal Achieve Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Goal Classification',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Goal Management Discipline',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Current Goal Review Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Current Goal Review Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Next Goal Review Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Previous Goal Review Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Goal Review Interval',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Goal Evaluation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Goal Evaluation Comment',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Goal Life Cycle Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Goal Life Cycle Status Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Goal Target Type',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XPN',
        desc: 'Goal Target Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CNE',
        desc: 'Mood Code  ',
        opt: 'R',
        rep: 1,
        table: 725
      }
    ]
  },
  GP1: {
    desc: 'Grouping/Reimbursement - Visit',
    fields: [
      {
        dt: 'CWE',
        desc: 'Type of Bill Code',
        opt: 'C',
        rep: 1,
        table: 455
      },
      {
        dt: 'CWE',
        desc: 'Revenue Code',
        opt: 'R',
        rep: 0,
        table: 456
      },
      {
        dt: 'CWE',
        desc: 'Overall Claim Disposition Code',
        opt: 'R',
        rep: 1,
        table: 457
      },
      {
        dt: 'CWE',
        desc: 'OCE Edits per Visit Code',
        opt: 'R',
        rep: 0,
        table: 458
      },
      {
        dt: 'CP',
        desc: 'Outlier Cost',
        opt: 'R',
        rep: 1
      }
    ]
  },
  GP2: {
    desc: 'Grouping/Reimbursement - Procedure Line Item',
    fields: [
      {
        dt: 'CWE',
        desc: 'Revenue Code',
        opt: 'R',
        rep: 1,
        table: 456
      },
      {
        dt: 'NM',
        desc: 'Number of Service Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Charge',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Reimbursement Action Code',
        opt: 'R',
        rep: 1,
        table: 459
      },
      {
        dt: 'CWE',
        desc: 'Denial or Rejection Code',
        opt: 'R',
        rep: 1,
        table: 460
      },
      {
        dt: 'CWE',
        desc: 'OCE Edit Code',
        opt: 'R',
        rep: 0,
        table: 458
      },
      {
        dt: 'CWE',
        desc: 'Ambulatory Payment Classification Code ',
        opt: 'R',
        rep: 1,
        table: 466
      },
      {
        dt: 'CWE',
        desc: 'Modifier Edit Code',
        opt: 'R',
        rep: 0,
        table: 467
      },
      {
        dt: 'CWE',
        desc: 'Payment Adjustment Code',
        opt: 'R',
        rep: 1,
        table: 468
      },
      {
        dt: 'CWE',
        desc: 'Packaging Status Code',
        opt: 'R',
        rep: 1,
        table: 469
      },
      {
        dt: 'CP',
        desc: 'Expected CMS Payment Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Reimbursement Type Code',
        opt: 'R',
        rep: 1,
        table: 470
      },
      {
        dt: 'CP',
        desc: 'Co-Pay Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Pay Rate per Service Unit',
        opt: 'R',
        rep: 1
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
        rep: 0
      },
      {
        dt: 'XPN',
        desc: 'Guarantor Name',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'XPN',
        desc: 'Guarantor Spouse Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Guarantor Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Guarantor Ph Num - Home',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Guarantor Ph Num - Business',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Guarantor Date/Time Of Birth',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Guarantor Administrative Sex',
        opt: 'R',
        rep: 1,
        table: 1
      },
      {
        dt: 'CWE',
        desc: 'Guarantor Type',
        opt: 'R',
        rep: 1,
        table: 68
      },
      {
        dt: 'CWE',
        desc: 'Guarantor Relationship',
        opt: 'R',
        rep: 1,
        table: 63
      },
      {
        dt: 'ST',
        desc: 'Guarantor SSN',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Guarantor Date - Begin',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Guarantor Date - End',
        opt: 'R',
        rep: 1
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
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Guarantor Employer Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Guarantor Employer Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CX',
        desc: 'Guarantor Employee ID Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Guarantor Employment Status',
        opt: 'R',
        rep: 1,
        table: 66
      },
      {
        dt: 'XON',
        desc: 'Guarantor Organization Name',
        opt: 'R',
        rep: 0
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
        dt: 'CWE',
        desc: 'Guarantor Credit Rating Code',
        opt: 'R',
        rep: 1,
        table: 341
      },
      {
        dt: 'DTM',
        desc: 'Guarantor Death Date And Time',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Guarantor Charge Adjustment Code',
        opt: 'R',
        rep: 1,
        table: 218
      },
      {
        dt: 'CP',
        desc: 'Guarantor Household Annual Income',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Guarantor Household Size',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Guarantor Employer ID Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Guarantor Marital Status Code',
        opt: 'R',
        rep: 1,
        table: 2
      },
      {
        dt: 'DT',
        desc: 'Guarantor Hire Effective Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Employment Stop Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Living Dependency',
        opt: 'R',
        rep: 1,
        table: 223
      },
      {
        dt: 'CWE',
        desc: 'Ambulatory Status',
        opt: 'R',
        rep: 0,
        table: 9
      },
      {
        dt: 'CWE',
        desc: 'Citizenship',
        opt: 'R',
        rep: 0,
        table: 171
      },
      {
        dt: 'CWE',
        desc: 'Primary Language',
        opt: 'R',
        rep: 1,
        table: 296
      },
      {
        dt: 'CWE',
        desc: 'Living Arrangement',
        opt: 'R',
        rep: 1,
        table: 220
      },
      {
        dt: 'CWE',
        desc: 'Publicity Code',
        opt: 'R',
        rep: 1,
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
        dt: 'CWE',
        desc: 'Student Indicator',
        opt: 'R',
        rep: 1,
        table: 231
      },
      {
        dt: 'CWE',
        desc: 'Religion',
        opt: 'R',
        rep: 1,
        table: 6
      },
      {
        dt: 'XPN',
        desc: 'Mother\'s Maiden Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Nationality',
        opt: 'R',
        rep: 1,
        table: 212
      },
      {
        dt: 'CWE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 0,
        table: 189
      },
      {
        dt: 'XPN',
        desc: 'Contact Person\'s Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Contact Person\'s Telephone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Contact Reason',
        opt: 'R',
        rep: 1,
        table: 222
      },
      {
        dt: 'CWE',
        desc: 'Contact Relationship',
        opt: 'R',
        rep: 1,
        table: 63
      },
      {
        dt: 'ST',
        desc: 'Job Title',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'JCC',
        desc: 'Job Code/Class',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Guarantor Employer\'s Organization Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Handicap ',
        opt: 'R',
        rep: 1,
        table: 295
      },
      {
        dt: 'CWE',
        desc: 'Job Status',
        opt: 'R',
        rep: 1,
        table: 311
      },
      {
        dt: 'FC',
        desc: 'Guarantor Financial Class',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Guarantor Race',
        opt: 'R',
        rep: 0,
        table: 5
      },
      {
        dt: 'ST',
        desc: 'Guarantor Birth Place',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'VIP Indicator',
        opt: 'R',
        rep: 1,
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
        dt: 'CWE',
        desc: 'Allergen Type Code',
        opt: 'R',
        rep: 1,
        table: 127
      },
      {
        dt: 'CWE',
        desc: 'Allergen Code/Mnemonic/Description',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Allergy Severity Code',
        opt: 'R',
        rep: 1,
        table: 128
      },
      {
        dt: 'ST',
        desc: 'Allergy Reaction Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CNE',
        desc: 'Allergy Action Code',
        opt: 'C',
        rep: 1,
        table: 206
      },
      {
        dt: 'EI',
        desc: 'Allergy Unique Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Action Reason',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Sensitivity to Causative Agent Code',
        opt: 'R',
        rep: 1,
        table: 436
      },
      {
        dt: 'CWE',
        desc: 'Allergen Group Code/Mnemonic/Description',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Onset Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Onset Date Text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Reported Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XPN',
        desc: 'Reported By',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Relationship to Patient Code',
        opt: 'R',
        rep: 1,
        table: 63
      },
      {
        dt: 'CWE',
        desc: 'Alert Device Code',
        opt: 'R',
        rep: 1,
        table: 437
      },
      {
        dt: 'CWE',
        desc: 'Allergy Clinical Status Code',
        opt: 'R',
        rep: 1,
        table: 438
      },
      {
        dt: 'XCN',
        desc: 'Statused by Person',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Statused by Organization',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Statused at Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Inactivated by Person',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Inactivated Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Initially Recorded by Person',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Initially Recorded Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Modified by Person',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Modified Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Clinician Identified Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Initially Recorded by Organization',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Modified by Organization',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Inactivated by Organization',
        opt: 'R',
        rep: 1
      }
    ]
  },
  IAR: {
    desc: 'allergy reaction',
    fields: [
      {
        dt: 'CWE',
        desc: 'Allergy Reaction Code',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Allergy Severity Code',
        opt: 'C',
        rep: 1,
        table: 128
      },
      {
        dt: 'CWE',
        desc: 'Sensitivity to Causative Agent Code',
        opt: 'R',
        rep: 1,
        table: 436
      },
      {
        dt: 'ST',
        desc: 'Management',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Service Item Code',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Inventory Lot Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Inventory Expiration Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Inventory Manufacturer Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Inventory Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Inventory Received Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Inventory Received Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Inventory Received Quantity Unit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'MO',
        desc: 'Inventory Received Item Cost',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Inventory On Hand Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Inventory On Hand Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Inventory On Hand Quantity Unit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Procedure Code',
        opt: 'R',
        rep: 1,
        table: 88
      },
      {
        dt: 'CNE',
        desc: 'Procedure Code Modifier',
        opt: 'R',
        rep: 0,
        table: 340
      }
    ]
  },
  ILT: {
    desc: 'Material Lot',
    fields: [
      {
        dt: 'SI',
        desc: 'Set Id - ILT',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Inventory Lot Number',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Inventory Expiration Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Inventory Received Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Inventory Received Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Inventory Received Quantity Unit',
        opt: 'R',
        rep: 1,
        table: 818
      },
      {
        dt: 'MO',
        desc: 'Inventory Received Item Cost',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Inventory On Hand Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Inventory On Hand Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Inventory On Hand Quantity Unit',
        opt: 'R',
        rep: 1,
        table: 818
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
        dt: 'CWE',
        desc: 'Health Plan ID',
        opt: 'C',
        rep: 1,
        table: 72
      },
      {
        dt: 'CX',
        desc: 'Insurance Company ID',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'XON',
        desc: 'Insurance Company Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Insurance Company Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XPN',
        desc: 'Insurance Co Contact Person',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Insurance Co Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Group Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Group Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CX',
        desc: 'Insured\'s Group Emp ID',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XON',
        desc: 'Insured\'s Group Emp Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DT',
        desc: 'Plan Effective Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Plan Expiration Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'AUI',
        desc: 'Authorization Information',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Plan Type',
        opt: 'R',
        rep: 1,
        table: 86
      },
      {
        dt: 'XPN',
        desc: 'Name Of Insured',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Insured\'s Relationship To Patient',
        opt: 'R',
        rep: 1,
        table: 63
      },
      {
        dt: 'DTM',
        desc: 'Insured\'s Date Of Birth',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Insured\'s Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Assignment Of Benefits',
        opt: 'R',
        rep: 1,
        table: 135
      },
      {
        dt: 'CWE',
        desc: 'Coordination Of Benefits',
        opt: 'R',
        rep: 1,
        table: 173
      },
      {
        dt: 'ST',
        desc: 'Coord Of Ben. Priority',
        opt: 'R',
        rep: 1
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
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Release Information Code',
        opt: 'R',
        rep: 1,
        table: 93
      },
      {
        dt: 'ST',
        desc: 'Pre-Admit Cert (PAC)',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Verification Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Verification By',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Type Of Agreement Code',
        opt: 'R',
        rep: 1,
        table: 98
      },
      {
        dt: 'CWE',
        desc: 'Billing Status',
        opt: 'R',
        rep: 1,
        table: 22
      },
      {
        dt: 'NM',
        desc: 'Lifetime Reserve Days',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Delay Before L.R. Day',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Company Plan Code',
        opt: 'R',
        rep: 1,
        table: 42
      },
      {
        dt: 'ST',
        desc: 'Policy Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Policy Deductible',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Policy Limit - Amount',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Policy Limit - Days',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Room Rate - Semi-Private',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Room Rate - Private',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Insured\'s Employment Status',
        opt: 'R',
        rep: 1,
        table: 66
      },
      {
        dt: 'CWE',
        desc: 'Insured\'s Administrative Sex',
        opt: 'R',
        rep: 1,
        table: 1
      },
      {
        dt: 'XAD',
        desc: 'Insured\'s Employer\'s Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Verification Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Prior Insurance Plan ID',
        opt: 'R',
        rep: 1,
        table: 72
      },
      {
        dt: 'CWE',
        desc: 'Coverage Type',
        opt: 'R',
        rep: 1,
        table: 309
      },
      {
        dt: 'CWE',
        desc: 'Handicap ',
        opt: 'R',
        rep: 1,
        table: 295
      },
      {
        dt: 'CX',
        desc: 'Insured\'s ID Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Signature Code',
        opt: 'R',
        rep: 1,
        table: 535
      },
      {
        dt: 'DT',
        desc: 'Signature Code Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Insured\'s Birth Place',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'VIP Indicator',
        opt: 'R',
        rep: 1,
        table: 99
      },
      {
        dt: 'CX',
        desc: 'External Health Plan Identifiers',
        opt: 'R',
        rep: 0
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
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Insured\'s Social Security Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Insured\'s Employer\'s Name and ID',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Employer Information Data',
        opt: 'R',
        rep: 1,
        table: 139
      },
      {
        dt: 'CWE',
        desc: 'Mail Claim Party',
        opt: 'R',
        rep: 0,
        table: 137
      },
      {
        dt: 'ST',
        desc: 'Medicare Health Ins Card Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XPN',
        desc: 'Medicaid Case Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Medicaid Case Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XPN',
        desc: 'Military Sponsor Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Military ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Dependent Of Military Recipient',
        opt: 'R',
        rep: 1,
        table: 342
      },
      {
        dt: 'ST',
        desc: 'Military Organization',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Military Station',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Military Service',
        opt: 'R',
        rep: 1,
        table: 140
      },
      {
        dt: 'CWE',
        desc: 'Military Rank/Grade',
        opt: 'R',
        rep: 1,
        table: 141
      },
      {
        dt: 'CWE',
        desc: 'Military Status',
        opt: 'R',
        rep: 1,
        table: 142
      },
      {
        dt: 'DT',
        desc: 'Military Retire Date',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'XPN',
        desc: 'Special Coverage Approval Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Special Coverage Approval Title',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Non-Covered Insurance Code',
        opt: 'R',
        rep: 0,
        table: 143
      },
      {
        dt: 'CX',
        desc: 'Payor ID',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CX',
        desc: 'Payor Subscriber ID',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Eligibility Source',
        opt: 'R',
        rep: 1,
        table: 144
      },
      {
        dt: 'RMC',
        desc: 'Room Coverage Type/Amount',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PTA',
        desc: 'Policy Type/Amount',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DDI',
        desc: 'Daily Deductible',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Living Dependency',
        opt: 'R',
        rep: 1,
        table: 223
      },
      {
        dt: 'CWE',
        desc: 'Ambulatory Status',
        opt: 'R',
        rep: 0,
        table: 9
      },
      {
        dt: 'CWE',
        desc: 'Citizenship ',
        opt: 'R',
        rep: 0,
        table: 171
      },
      {
        dt: 'CWE',
        desc: 'Primary Language',
        opt: 'R',
        rep: 1,
        table: 296
      },
      {
        dt: 'CWE',
        desc: 'Living Arrangement ',
        opt: 'R',
        rep: 1,
        table: 220
      },
      {
        dt: 'CWE',
        desc: 'Publicity Code',
        opt: 'R',
        rep: 1,
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
        dt: 'CWE',
        desc: 'Student Indicator ',
        opt: 'R',
        rep: 1,
        table: 231
      },
      {
        dt: 'CWE',
        desc: 'Religion ',
        opt: 'R',
        rep: 1,
        table: 6
      },
      {
        dt: 'XPN',
        desc: 'Mother\'s Maiden Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Nationality ',
        opt: 'R',
        rep: 1,
        table: 212
      },
      {
        dt: 'CWE',
        desc: 'Ethnic Group ',
        opt: 'R',
        rep: 0,
        table: 189
      },
      {
        dt: 'CWE',
        desc: 'Marital Status ',
        opt: 'R',
        rep: 0,
        table: 2
      },
      {
        dt: 'DT',
        desc: 'Insured\'s Employment Start Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Employment Stop Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Job Title',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'JCC',
        desc: 'Job Code/Class',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Job Status ',
        opt: 'R',
        rep: 1,
        table: 311
      },
      {
        dt: 'XPN',
        desc: 'Employer Contact Person Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Employer Contact Person Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Employer Contact Reason ',
        opt: 'R',
        rep: 1,
        table: 222
      },
      {
        dt: 'XPN',
        desc: 'Insured\'s Contact Person\'s Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Insured\'s Contact Person Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Insured\'s Contact Person Reason ',
        opt: 'R',
        rep: 0,
        table: 222
      },
      {
        dt: 'DT',
        desc: 'Relationship to the Patient Start Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Relationship to the Patient Stop Date',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Insurance Co Contact Reason ',
        opt: 'R',
        rep: 1,
        table: 232
      },
      {
        dt: 'XTN',
        desc: 'Insurance Co Contact Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Policy Scope ',
        opt: 'R',
        rep: 1,
        table: 312
      },
      {
        dt: 'CWE',
        desc: 'Policy Source ',
        opt: 'R',
        rep: 1,
        table: 313
      },
      {
        dt: 'CX',
        desc: 'Patient Member Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Guarantor\'s Relationship to Insured',
        opt: 'R',
        rep: 1,
        table: 63
      },
      {
        dt: 'XTN',
        desc: 'Insured\'s Phone Number - Home',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Insured\'s Employer Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Military Handicapped Program ',
        opt: 'R',
        rep: 1,
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
        rep: 0
      },
      {
        dt: 'XON',
        desc: 'Insured Employer Organization Name and ID',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Race',
        opt: 'R',
        rep: 0,
        table: 5
      },
      {
        dt: 'CWE',
        desc: 'Patient\'s Relationship to Insured',
        opt: 'R',
        rep: 1,
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
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Certified By',
        opt: 'R',
        rep: 0
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
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Certification Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Certification Modify Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Operator',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DT',
        desc: 'Certification Begin Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Certification End Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTN',
        desc: 'Days',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Non-Concur Code/Description',
        opt: 'R',
        rep: 1,
        table: 233
      },
      {
        dt: 'DTM',
        desc: 'Non-Concur Effective Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Physician Reviewer',
        opt: 'R',
        rep: 0,
        table: 10
      },
      {
        dt: 'ST',
        desc: 'Certification Contact',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XTN',
        desc: 'Certification Contact Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Appeal Reason',
        opt: 'R',
        rep: 1,
        table: 345
      },
      {
        dt: 'CWE',
        desc: 'Certification Agency',
        opt: 'R',
        rep: 1,
        table: 346
      },
      {
        dt: 'XTN',
        desc: 'Certification Agency Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ICD',
        desc: 'Pre-Certification Requirement',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Case Manager',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Second Opinion Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Second Opinion Status ',
        opt: 'R',
        rep: 1,
        table: 151
      },
      {
        dt: 'CWE',
        desc: 'Second Opinion Documentation Received',
        opt: 'R',
        rep: 0,
        table: 152
      },
      {
        dt: 'XCN',
        desc: 'Second Opinion Physician',
        opt: 'R',
        rep: 0,
        table: 10
      }
    ]
  },
  INV: {
    desc: 'Inventory Detail',
    fields: [
      {
        dt: 'CWE',
        desc: 'Substance Identifier',
        opt: 'C',
        rep: 1,
        table: 451
      },
      {
        dt: 'CWE',
        desc: 'Substance Status',
        opt: 'C',
        rep: 0,
        table: 383
      },
      {
        dt: 'CWE',
        desc: 'Substance Type',
        opt: 'R',
        rep: 1,
        table: 384
      },
      {
        dt: 'CWE',
        desc: 'Inventory Container Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Container Carrier Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Position on Carrier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Initial Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Current Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Available Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Consumption Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Quantity Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Expiration Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'First Used Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'On Board Stability Duration',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Test/Fluid Identifier(s)',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Manufacturer Lot Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Manufacturer Identifier',
        opt: 'R',
        rep: 1,
        table: 385
      },
      {
        dt: 'CWE',
        desc: 'Supplier Identifier',
        opt: 'R',
        rep: 1,
        table: 386
      },
      {
        dt: 'CQ',
        desc: 'On Board Stability Time ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Target Value',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Requested Procedure ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Study Instance UID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Scheduled Procedure Step ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Modality ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Protocol Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EI',
        desc: 'Scheduled Station Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Scheduled Procedure Step Location',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Scheduled Station AE Title',
        opt: 'R',
        rep: 1
      }
    ]
  },
  IPR: {
    desc: 'Invoice Processing Results',
    fields: [
      {
        dt: 'EI',
        desc: 'IPR Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Provider Cross Reference Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Payer Cross Reference Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'IPR Status',
        opt: 'C',
        rep: 1,
        table: 571
      },
      {
        dt: 'DTM',
        desc: 'IPR Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Adjudicated/Paid Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Expected Payment Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'IPR Checksum',
        opt: 'C',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Interaction Type Identifier ',
        opt: 'R',
        rep: 1,
        table: 368
      },
      {
        dt: 'CWE',
        desc: 'Interaction Active State',
        opt: 'C',
        rep: 1,
        table: 387
      }
    ]
  },
  ITM: {
    desc: 'Material Item',
    fields: [
      {
        dt: 'EI',
        desc: 'Item Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Item Description',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Item Status',
        opt: 'R',
        rep: 1,
        table: 776
      },
      {
        dt: 'CWE',
        desc: 'Item Type ',
        opt: 'R',
        rep: 1,
        table: 778
      },
      {
        dt: 'CWE',
        desc: 'Item Category',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Subject to Expiration Indicator',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'EI',
        desc: 'Manufacturer Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Manufacturer Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Manufacturer Catalog Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Manufacturer Labeler Identification Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Patient Chargeable Indicator ',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CWE',
        desc: 'Transaction Code ',
        opt: 'R',
        rep: 1,
        table: 132
      },
      {
        dt: 'CP',
        desc: 'Transaction amount - unit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Stocked Item Indicator',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CWE',
        desc: 'Supply Risk Codes ',
        opt: 'R',
        rep: 1,
        table: 871
      },
      {
        dt: 'XON',
        desc: 'Approving Regulatory Agency ',
        opt: 'R',
        rep: 0,
        table: 790
      },
      {
        dt: 'CNE',
        desc: 'Latex Indicator',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CWE',
        desc: 'Ruling Act',
        opt: 'R',
        rep: 0,
        table: 793
      },
      {
        dt: 'CWE',
        desc: 'Item Natural Account Code',
        opt: 'R',
        rep: 1,
        table: 320
      },
      {
        dt: 'NM',
        desc: 'Approved To Buy Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'MO',
        desc: 'Approved To Buy Price ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Taxable Item Indicator',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CNE',
        desc: 'Freight Charge Indicator',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CNE',
        desc: 'Item Set Indicator',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'EI',
        desc: 'Item Set Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Track Department Usage Indicator',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CNE',
        desc: 'Procedure Code ',
        opt: 'R',
        rep: 1,
        table: 88
      },
      {
        dt: 'CNE',
        desc: 'Procedure Code Modifier',
        opt: 'R',
        rep: 0,
        table: 340
      },
      {
        dt: 'CWE',
        desc: 'Special Handling Code',
        opt: 'R',
        rep: 1,
        table: 376
      }
    ]
  },
  IVC: {
    desc: 'Invoice Segment',
    fields: [
      {
        dt: 'EI',
        desc: 'Provider Invoice Number',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Payer Invoice Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Contract/Agreement Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Invoice Control',
        opt: 'C',
        rep: 1,
        table: 553
      },
      {
        dt: 'CWE',
        desc: 'Invoice Reason',
        opt: 'C',
        rep: 1,
        table: 554
      },
      {
        dt: 'CWE',
        desc: 'Invoice Type',
        opt: 'C',
        rep: 1,
        table: 555
      },
      {
        dt: 'DTM',
        desc: 'Invoice Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Invoice Amount',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Payment Terms',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Provider Organization',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Payer Organization',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Attention',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Last Invoice Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'DTM',
        desc: 'Invoice Booking Period',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Origin',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Invoice Fixed Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Special Costs',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Amount for Doctors Treatment',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Responsible Physician',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Cost Center',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Invoice Prepaid Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Total Invoice Amount without Prepaid Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Total-Amount of VAT',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'VAT-Rates applied',
        opt: 'R',
        rep: 0,
        len: 5
      },
      {
        dt: 'CWE',
        desc: 'Benefit Group',
        opt: 'C',
        rep: 1,
        table: 556
      },
      {
        dt: 'ST',
        desc: 'Provider Tax ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Payer Tax ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Provider Tax Status',
        opt: 'R',
        rep: 1,
        table: 572
      },
      {
        dt: 'CWE',
        desc: 'Payer Tax Status',
        opt: 'R',
        rep: 1,
        table: 572
      },
      {
        dt: 'ST',
        desc: 'Sales Tax ID',
        opt: 'R',
        rep: 1
      }
    ]
  },
  IVT: {
    desc: 'Material Location',
    fields: [
      {
        dt: 'SI',
        desc: 'Set Id - IVT',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'EI',
        desc: 'Inventory Location Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Inventory Location Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Source Location Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Source Location Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Item Status',
        opt: 'R',
        rep: 1,
        table: 625
      },
      {
        dt: 'EI',
        desc: 'Bin Location Identifier ',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Order Packaging',
        opt: 'R',
        rep: 1,
        table: 818
      },
      {
        dt: 'CWE',
        desc: 'Issue Packaging',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Default Inventory Asset Account',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Patient Chargeable Indicator ',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CWE',
        desc: 'Transaction Code',
        opt: 'R',
        rep: 1,
        table: 132
      },
      {
        dt: 'CP',
        desc: 'Transaction amount - unit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Item Importance Code',
        opt: 'R',
        rep: 1,
        table: 634
      },
      {
        dt: 'CNE',
        desc: 'Stocked Item Indicator',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CNE',
        desc: 'Consignment Item Indicator',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CNE',
        desc: 'Reusable Item Indicator ',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CP',
        desc: 'Reusable Cost',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Substitute Item Identifier',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EI',
        desc: 'Latex-Free Substitute Item Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Recommended Reorder Theory',
        opt: 'R',
        rep: 1,
        table: 642
      },
      {
        dt: 'NM',
        desc: 'Recommended Safety Stock Days',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Recommended Maximum Days Inventory',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Recommended Order Point',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Recommended Order Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Operating Room Par Level Indicator ',
        opt: 'R',
        rep: 1,
        table: 532
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
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'Language Code',
        opt: 'C',
        rep: 1,
        table: 296
      },
      {
        dt: 'CWE',
        desc: 'Language Ability Code',
        opt: 'R',
        rep: 0,
        table: 403
      },
      {
        dt: 'CWE',
        desc: 'Language Proficiency Code',
        opt: 'R',
        rep: 1,
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Location Department',
        opt: 'C',
        rep: 1,
        table: 264
      },
      {
        dt: 'CWE',
        desc: 'Accommodation Type',
        opt: 'R',
        rep: 0,
        table: 129
      },
      {
        dt: 'CWE',
        desc: 'Charge Code',
        opt: 'C',
        rep: 0,
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
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Segment Action Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 206
      },
      {
        dt: 'EI',
        desc: 'Segment Unique Key',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Location Characteristic ID',
        opt: 'C',
        rep: 1,
        table: 324
      },
      {
        dt: 'CWE',
        desc: 'Location Characteristic Value - LCH',
        opt: 'C',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Location Department',
        opt: 'C',
        rep: 1,
        table: 264
      },
      {
        dt: 'CWE',
        desc: 'Location Service',
        opt: 'R',
        rep: 0,
        table: 69
      },
      {
        dt: 'CWE',
        desc: 'Specialty Type',
        opt: 'R',
        rep: 0,
        table: 265
      },
      {
        dt: 'CWE',
        desc: 'Valid Patient Classes',
        opt: 'R',
        rep: 0,
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
        dt: 'DTM',
        desc: 'Activation Date - LDP',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Inactivation Date - LDP',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Inactivated Reason',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'VH',
        desc: 'Visiting Hours',
        opt: 'R',
        rep: 0,
        table: 267
      },
      {
        dt: 'XTN',
        desc: 'Contact Phone',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Location Cost Center',
        opt: 'R',
        rep: 1,
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
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Location Description',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Location Type - LOC',
        opt: 'C',
        rep: 0,
        table: 260
      },
      {
        dt: 'XON',
        desc: 'Organization Name - LOC',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Location Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Location Phone',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'License Number',
        opt: 'R',
        rep: 0,
        table: 461
      },
      {
        dt: 'CWE',
        desc: 'Location Equipment',
        opt: 'R',
        rep: 0,
        table: 261
      },
      {
        dt: 'CWE',
        desc: 'Location Service Code',
        opt: 'R',
        rep: 1,
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
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Segment Action Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 206
      },
      {
        dt: 'EI',
        desc: 'Segment Unique Key',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Location Relationship ID',
        opt: 'C',
        rep: 1,
        table: 325
      },
      {
        dt: 'XON',
        desc: 'Organizational Location Relationship Value',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Patient Location Relationship Value',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Event Completion Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'MFN Record Level Error Return',
        opt: 'C',
        rep: 1,
        table: 181
      },
      {
        dt: 'ST',
        desc: 'Primary Key Value - MFA',
        opt: 'C',
        rep: 0
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
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Effective Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Primary Key Value - MFE',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'ID',
        desc: 'Primary Key Value Type',
        opt: 'C',
        rep: 0,
        len: 3,
        table: 355
      },
      {
        dt: 'DTM',
        desc: 'Entered Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Entered By',
        opt: 'R',
        rep: 1
      }
    ]
  },
  MFI: {
    desc: 'Master File Identification',
    fields: [
      {
        dt: 'CWE',
        desc: 'Master File Identifier',
        opt: 'C',
        rep: 1,
        table: 175
      },
      {
        dt: 'HD',
        desc: 'Master File Application Identifier',
        opt: 'R',
        rep: 0,
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
        dt: 'DTM',
        desc: 'Entered Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Effective Date/Time',
        opt: 'R',
        rep: 1
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
        table: 61
      },
      {
        dt: 'ST',
        desc: 'Prior Alternate Patient ID',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Prior Patient Account Number',
        opt: 'R',
        rep: 1,
        table: 61
      },
      {
        dt: 'ST',
        desc: 'Prior Patient ID',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Prior Visit Number',
        opt: 'R',
        rep: 1,
        table: 61
      },
      {
        dt: 'CX',
        desc: 'Prior Alternate Visit ID',
        opt: 'R',
        rep: 1,
        table: 61
      },
      {
        dt: 'XPN',
        desc: 'Prior Patient Name',
        opt: 'R',
        rep: 0,
        table: 200
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
        len: 199
      },
      {
        dt: 'ST',
        desc: 'Text Message',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Expected Sequence Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Delayed Acknowledgment Type',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Error Condition',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Message Waiting Number ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: ' Message Waiting Priority ',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 520
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
        len: 5
      },
      {
        dt: 'HD',
        desc: 'Sending Application',
        opt: 'R',
        rep: 1,
        table: 361
      },
      {
        dt: 'HD',
        desc: 'Sending Facility',
        opt: 'R',
        rep: 1,
        table: 362
      },
      {
        dt: 'HD',
        desc: 'Receiving Application',
        opt: 'R',
        rep: 1,
        table: 361
      },
      {
        dt: 'HD',
        desc: 'Receiving Facility',
        opt: 'R',
        rep: 1,
        table: 362
      },
      {
        dt: 'DTM',
        desc: 'Date/Time of Message',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Security',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'MSG',
        desc: 'Message Type',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Message Control ID',
        opt: 'C',
        rep: 1,
        len: 199
      },
      {
        dt: 'PT',
        desc: 'Processing ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'VID',
        desc: 'Version ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Sequence Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Continuation Pointer',
        opt: 'R',
        rep: 1
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
        len: 15,
        table: 211
      },
      {
        dt: 'CWE',
        desc: 'Principal Language Of Message',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Alternate Character Set Handling Scheme',
        opt: 'R',
        rep: 1,
        len: 13,
        table: 356
      },
      {
        dt: 'EI',
        desc: 'Message Profile Identifier',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XON',
        desc: 'Sending Responsible Organization',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Receiving Responsible Organization',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Sending Network Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Receiving Network Address',
        opt: 'R',
        rep: 1
      }
    ]
  },
  NCK: {
    desc: 'System Clock',
    fields: [
      {
        dt: 'DTM',
        desc: 'System Date/Time',
        opt: 'C',
        rep: 1,
        len: 24
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
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Notification Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Notification Alert Severity',
        opt: 'C',
        rep: 1,
        table: 367
      },
      {
        dt: 'CWE',
        desc: 'Notification Code',
        opt: 'C',
        rep: 1
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
        desc: 'Name',
        opt: 'R',
        rep: 0,
        table: 200
      },
      {
        dt: 'CWE',
        desc: 'Relationship',
        opt: 'R',
        rep: 1,
        table: 63
      },
      {
        dt: 'XAD',
        desc: 'Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Business Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Contact Role',
        opt: 'R',
        rep: 1,
        table: 131
      },
      {
        dt: 'DT',
        desc: 'Start Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'End Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Next of Kin / Associated Parties Job Title',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'JCC',
        desc: 'Next of Kin / Associated Parties Job Code/Class',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Next of Kin / Associated Parties Employee Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Organization Name - NK1',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Marital Status',
        opt: 'R',
        rep: 1,
        table: 2
      },
      {
        dt: 'CWE',
        desc: 'Administrative Sex',
        opt: 'R',
        rep: 1,
        table: 1
      },
      {
        dt: 'DTM',
        desc: 'Date/Time of Birth',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Living Dependency',
        opt: 'R',
        rep: 0,
        table: 223
      },
      {
        dt: 'CWE',
        desc: 'Ambulatory Status',
        opt: 'R',
        rep: 0,
        table: 9
      },
      {
        dt: 'CWE',
        desc: 'Citizenship',
        opt: 'R',
        rep: 0,
        table: 171
      },
      {
        dt: 'CWE',
        desc: 'Primary Language',
        opt: 'R',
        rep: 1,
        table: 296
      },
      {
        dt: 'CWE',
        desc: 'Living Arrangement',
        opt: 'R',
        rep: 1,
        table: 220
      },
      {
        dt: 'CWE',
        desc: 'Publicity Code',
        opt: 'R',
        rep: 1,
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
        dt: 'CWE',
        desc: 'Student Indicator',
        opt: 'R',
        rep: 1,
        table: 231
      },
      {
        dt: 'CWE',
        desc: 'Religion',
        opt: 'R',
        rep: 1,
        table: 6
      },
      {
        dt: 'XPN',
        desc: 'Mother\'s Maiden Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Nationality',
        opt: 'R',
        rep: 1,
        table: 212
      },
      {
        dt: 'CWE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 0,
        table: 189
      },
      {
        dt: 'CWE',
        desc: 'Contact Reason',
        opt: 'R',
        rep: 0,
        table: 222
      },
      {
        dt: 'XPN',
        desc: 'Contact Person\'s Name',
        opt: 'R',
        rep: 0,
        table: 200
      },
      {
        dt: 'XTN',
        desc: 'Contact Person\'s Telephone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Contact Person\'s Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CX',
        desc: 'Next of Kin/Associated Party\'s Identifiers',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Job Status',
        opt: 'R',
        rep: 1,
        table: 311
      },
      {
        dt: 'CWE',
        desc: 'Race',
        opt: 'R',
        rep: 0,
        table: 5
      },
      {
        dt: 'CWE',
        desc: 'Handicap',
        opt: 'R',
        rep: 1,
        table: 295
      },
      {
        dt: 'ST',
        desc: 'Contact Person Social Security Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Next of Kin Birth Place',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'VIP Indicator',
        opt: 'R',
        rep: 1,
        table: 99
      },
      {
        dt: 'XTN',
        desc: 'Next of Kin Telecommunication Information',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XTN',
        desc: 'Contact Person\'s Telecommunication Information',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Bed Status',
        opt: 'R',
        rep: 1,
        table: 116
      }
    ]
  },
  NSC: {
    desc: 'Application Status Change',
    fields: [
      {
        dt: 'CWE',
        desc: 'Application Change Type',
        opt: 'C',
        rep: 1,
        table: 409
      },
      {
        dt: 'ST',
        desc: 'Current CPU',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Current Fileserver',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Current Application',
        opt: 'R',
        rep: 1,
        table: 361
      },
      {
        dt: 'HD',
        desc: 'Current Facility',
        opt: 'R',
        rep: 1,
        table: 362
      },
      {
        dt: 'ST',
        desc: 'New CPU',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'New Fileserver',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'New Application',
        opt: 'R',
        rep: 1,
        table: 361
      },
      {
        dt: 'HD',
        desc: 'New Facility',
        opt: 'R',
        rep: 1,
        table: 362
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
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Source Type',
        opt: 'R',
        rep: 1,
        table: 332
      },
      {
        dt: 'DTM',
        desc: 'Statistics Start',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Statistics End',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Receive Character Count',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Send Character Count',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Messages Received',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Messages Sent',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Checksum Errors Received',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Length Errors Received',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Other Errors Received',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Connect Timeouts',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Receive Timeouts',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Application control-level Errors',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Source of Comment',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 105
      },
      {
        dt: 'FT',
        desc: 'Comment',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Comment Type',
        opt: 'R',
        rep: 1,
        table: 364
      },
      {
        dt: 'XCN',
        desc: 'Entered By',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Entered Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Effective Start Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Expiration Date',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Universal Service Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Priority',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Requested Date/Time',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Observation Date/Time #',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Observation End Date/Time #',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Collection Volume *',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Collector Identifier *',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ID',
        desc: 'Specimen Action Code *',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 65
      },
      {
        dt: 'CWE',
        desc: 'Danger Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Relevant Clinical Information',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Specimen Received Date/Time *',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Specimen Source',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Ordering Provider',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Order Callback Phone Number',
        opt: 'R',
        rep: 2
      },
      {
        dt: 'ST',
        desc: 'Placer Field 1',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Placer Field 2',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Filler Field 1 +',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Filler Field 2 +',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Results Rpt/Status Chng - Date/Time +',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'MOC',
        desc: 'Charge to Practice +',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Diagnostic Serv Sect ID',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 74
      },
      {
        dt: 'ID',
        desc: 'Result Status +',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 123
      },
      {
        dt: 'PRL',
        desc: 'Parent Result +',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Quantity/Timing',
        opt: 'W',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Result Copies To',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EIP',
        desc: 'Parent Result Observation Identifier ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Transportation Mode',
        opt: 'R',
        rep: 1,
        len: 4,
        table: 124
      },
      {
        dt: 'CWE',
        desc: 'Reason for Study',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NDL',
        desc: 'Principal Result Interpreter +',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NDL',
        desc: 'Assistant Result Interpreter + ',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NDL',
        desc: 'Technician +',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NDL',
        desc: 'Transcriptionist +',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Scheduled Date/Time +',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Number of Sample Containers *',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Transport Logistics of Collected Sample *',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Collector\'s Comment *',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Transport Arrangement Responsibility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Transport Arranged',
        opt: 'R',
        rep: 1,
        len: 1,
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
        dt: 'CWE',
        desc: 'Planned Patient Transport Comment',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CNE',
        desc: 'Procedure Code',
        opt: 'R',
        rep: 1,
        table: 88
      },
      {
        dt: 'CNE',
        desc: 'Procedure Code Modifier',
        opt: 'R',
        rep: 0,
        table: 340
      },
      {
        dt: 'CWE',
        desc: 'Placer Supplemental Service Information',
        opt: 'R',
        rep: 0,
        table: 411
      },
      {
        dt: 'CWE',
        desc: 'Filler Supplemental Service Information',
        opt: 'R',
        rep: 0,
        table: 411
      },
      {
        dt: 'CWE',
        desc: 'Medically Necessary Duplicate Procedure Reason',
        opt: 'R',
        rep: 1,
        table: 476
      },
      {
        dt: 'CWE',
        desc: 'Result Handling',
        opt: 'R',
        rep: 1,
        table: 507
      },
      {
        dt: 'CWE',
        desc: 'Parent Universal Service Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Observation Group ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Parent Observation Group ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Alternate Placer Order Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EIP',
        desc: 'Parent Order',
        opt: 'R',
        rep: 1
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
        rep: 1,
        len: 3,
        table: 125
      },
      {
        dt: 'CWE',
        desc: 'Observation Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Observation Sub-ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Observation Value',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'References Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Interpretation Codes',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Probability',
        opt: 'R',
        rep: 1
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
        dt: 'DTM',
        desc: 'Effective Date of Reference Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'User Defined Access Checks',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Date/Time of the Observation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Producer\'s ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Responsible Observer',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Observation Method',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EI',
        desc: 'Equipment Instance Identifier',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Date/Time of the Analysis',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Observation Site',
        opt: 'R',
        rep: 0,
        table: 163
      },
      {
        dt: 'EI',
        desc: 'Observation Instance Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Mood Code',
        opt: 'R',
        rep: 1,
        table: 725
      },
      {
        dt: 'XON',
        desc: 'Performing Organization Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Performing Organization Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Performing Organization Medical Director',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Patient Results Release Category',
        opt: 'R',
        rep: 1,
        len: 10,
        table: 909
      }
    ]
  },
  ODS: {
    desc: 'Dietary Orders, Supplements, and Preferences',
    fields: [
      {
        dt: 'ID',
        desc: 'Type ',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 159
      },
      {
        dt: 'CWE',
        desc: 'Service Period',
        opt: 'R',
        rep: 10
      },
      {
        dt: 'CWE',
        desc: 'Diet, Supplement, or Preference Code',
        opt: 'C',
        rep: 20
      },
      {
        dt: 'ST',
        desc: 'Text Instruction',
        opt: 'R',
        rep: 2
      }
    ]
  },
  ODT: {
    desc: 'Diet Tray Instructions',
    fields: [
      {
        dt: 'CWE',
        desc: 'Tray Type',
        opt: 'C',
        rep: 1,
        table: 160
      },
      {
        dt: 'CWE',
        desc: 'Service Period',
        opt: 'R',
        rep: 10
      },
      {
        dt: 'ST',
        desc: 'Text Instruction',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Producer\'s Service/Test/Observation ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Permitted Data Types',
        opt: 'R',
        rep: 0,
        len: 3,
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
        dt: 'CWE',
        desc: 'Producer ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Observation Description',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Other Service/Test/Observation IDs for the Observation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Other Names',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Preferred Report Name for the Observation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Preferred Short Name or Mnemonic for the Observation',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Preferred Long Name for the Observation',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Identity of Instrument Used to Perform this Study',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Coded Representation of Method',
        opt: 'R',
        rep: 0
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
        dt: 'CWE',
        desc: 'Observation Producing Department/Section',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Telephone Number of Section',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Nature of Service/Test/Observation',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 174
      },
      {
        dt: 'CWE',
        desc: 'Report Subheader',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Report Display Order',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc:
            'Date/Time Stamp for Any Change in Definition for the Observation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Effective Date/Time of Change',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Typical Turn-Around Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Processing Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Processing Priority',
        opt: 'R',
        rep: 0,
        len: 1,
        table: 168
      },
      {
        dt: 'ID',
        desc: 'Reporting Priority',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 169
      },
      {
        dt: 'CWE',
        desc: 'Outside Site(s) Where Observation May Be Performed',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Address of Outside Site(s)',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Phone Number of Outside Site',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Confidentiality Code',
        opt: 'R',
        rep: 1,
        table: 177
      },
      {
        dt: 'CWE',
        desc: 'Observations Required to Interpret this Observation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Interpretation of Observations',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Contraindications to Observations',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Reflex Tests/Observations',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'TX',
        desc: 'Rules that Trigger Reflex Testing',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Fixed Canned Message',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Patient Preparation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Procedure Medication',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Factors that may Affect the Observation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Service/Test/Observation Performance Schedule',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'TX',
        desc: 'Description of Test Methods',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Kind of Quantity Observed',
        opt: 'R',
        rep: 1,
        table: 254
      },
      {
        dt: 'CWE',
        desc: 'Point Versus Interval',
        opt: 'R',
        rep: 1,
        table: 255
      },
      {
        dt: 'TX',
        desc: 'Challenge Information',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Relationship Modifier',
        opt: 'R',
        rep: 1,
        table: 258
      },
      {
        dt: 'CWE',
        desc: 'Target Anatomic Site Of Test',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Modality of Imaging Measurement',
        opt: 'R',
        rep: 1,
        table: 910
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Units of Measure',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Range of Decimal Precision',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Corresponding SI Units of Measure',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'SI Conversion Factor',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'RFR',
        desc:
            'Reference (Normal) Range for Ordinal and Continuous Observations',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'RFR',
        desc: 'Critical Range for Ordinal and Continuous Observations',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'RFR',
        desc: 'Absolute Range for Ordinal and Continuous Observations',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DLT',
        desc: 'Delta Check Criteria',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Minimum Meaningful Increments',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Preferred Coding System',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Valid Coded "Answers"',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Normal Text/Codes for Categorical Observations',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Abnormal Text/Codes for Categorical Observations',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Critical Text/Codes for Categorical Observations',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ID',
        desc: 'Value Type',
        opt: 'R',
        rep: 1,
        len: 3,
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
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Container Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Specimen',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Additive',
        opt: 'R',
        rep: 1,
        table: 371
      },
      {
        dt: 'TX',
        desc: 'Preparation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Special Handling Requirements',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Normal Collection Volume',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Minimum Collection Volume',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Specimen Requirements',
        opt: 'R',
        rep: 1
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
        rep: 1
      }
    ]
  },
  OM5: {
    desc: 'Observation Batteries (Sets)',
    fields: [
      {
        dt: 'NM',
        desc: 'Sequence Number - Test/Observation Master File',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Test/Observations Included Within an Ordered Test Battery',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Observation ID Suffixes',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Derivation Rule',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Universal Service Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Category Identifier',
        opt: 'R',
        rep: 0,
        table: 412
      },
      {
        dt: 'TX',
        desc: 'Category Description',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Category Synonym',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Effective Test/Service Start Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Effective Test/Service End Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Test/Service Default Duration Quantity ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Test/Service Default Duration Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Test/Service Default Frequency ',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Consent Identifier',
        opt: 'R',
        rep: 1,
        table: 413
      },
      {
        dt: 'DTM',
        desc: 'Consent Effective Start Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Consent Effective End Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Consent Interval Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Consent Interval Units',
        opt: 'R',
        rep: 1,
        table: 414
      },
      {
        dt: 'NM',
        desc: 'Consent Waiting Period Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Consent Waiting Period Units',
        opt: 'R',
        rep: 1,
        table: 414
      },
      {
        dt: 'DTM',
        desc: 'Effective Date/Time of Change',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Entered By',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'PL',
        desc: 'Orderable-at Location',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Formulary Status',
        opt: 'R',
        rep: 1,
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
        dt: 'CWE',
        desc: 'Primary Key Value - CDM',
        opt: 'R',
        rep: 0
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
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Placer Group Number',
        opt: 'R',
        rep: 1
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
        dt: 'ST',
        desc: 'Quantity/Timing',
        opt: 'W',
        rep: 0
      },
      {
        dt: 'EIP',
        desc: 'Parent Order',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Date/Time of Transaction',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Entered By',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Verified By',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Ordering Provider',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Enterer\'s Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XTN',
        desc: 'Call Back Phone Number',
        opt: 'R',
        rep: 2
      },
      {
        dt: 'DTM',
        desc: 'Order Effective Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Order Control Code Reason',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Entering Organization',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Entering Device',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Action By',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Advanced Beneficiary Notice Code',
        opt: 'R',
        rep: 1,
        table: 339
      },
      {
        dt: 'XON',
        desc: 'Ordering Facility Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Ordering Facility Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Ordering Facility Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Ordering Provider Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Order Status Modifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Advanced Beneficiary Notice Override Reason',
        opt: 'R',
        rep: 1,
        table: 552
      },
      {
        dt: 'DTM',
        desc: 'Filler\'s Expected Availability Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Confidentiality Code',
        opt: 'R',
        rep: 1,
        table: 177
      },
      {
        dt: 'CWE',
        desc: 'Order Type',
        opt: 'R',
        rep: 1,
        table: 482
      },
      {
        dt: 'CNE',
        desc: 'Enterer Authorization Mode',
        opt: 'R',
        rep: 1,
        table: 483
      },
      {
        dt: 'CWE',
        desc: 'Parent Universal Service Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Advanced Beneficiary Notice Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Alternate Placer Order Number',
        opt: 'R',
        rep: 0
      }
    ]
  },
  ORG: {
    desc: 'Practitioner Organization Unit s',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - ORG',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'Organization Unit Code',
        opt: 'R',
        rep: 1,
        table: 405
      },
      {
        dt: 'CWE',
        desc: 'Organization Unit Type Code',
        opt: 'R',
        rep: 1,
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Health Care Provider Type Code',
        opt: 'R',
        rep: 1,
        table: 452
      },
      {
        dt: 'CWE',
        desc: 'Health Care Provider Classification Code',
        opt: 'R',
        rep: 1,
        table: 453
      },
      {
        dt: 'CWE',
        desc: 'Health Care Provider Area of Specialization Code',
        opt: 'R',
        rep: 1,
        table: 454
      },
      {
        dt: 'DR',
        desc: 'Effective Date Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Employment Status Code',
        opt: 'R',
        rep: 1,
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
      },
      {
        dt: 'CWE',
        desc: 'Cost Center Code',
        opt: 'R',
        rep: 0,
        table: 539
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
        table: 518
      },
      {
        dt: 'CWE',
        desc: 'Business Rule Override Code',
        opt: 'R',
        rep: 1,
        table: 521
      },
      {
        dt: 'TX',
        desc: 'Override Comments',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Override Entered By',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Override Authorized By',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PAC: {
    desc: 'Shipment Package',
    fields: [
      {
        dt: 'SI',
        desc: 'Set Id - PAC',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'EI',
        desc: 'Package ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Parent Package ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NA',
        desc: 'Position in Parent Package',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Package Type',
        opt: 'C',
        rep: 1,
        table: 908
      },
      {
        dt: 'CWE',
        desc: 'Package Condition',
        opt: 'R',
        rep: 0,
        table: 544
      },
      {
        dt: 'CWE',
        desc: 'Package Handling Code',
        opt: 'R',
        rep: 0,
        table: 376
      },
      {
        dt: 'CWE',
        desc: 'Package Risk Code',
        opt: 'R',
        rep: 0,
        table: 489
      }
    ]
  },
  PCE: {
    desc: 'Patient Charge Cost Center Exceptions',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - PCE',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CX',
        desc: 'Cost Center Account Number',
        opt: 'R',
        rep: 1,
        table: 319
      },
      {
        dt: 'CWE',
        desc: 'Transaction Code',
        opt: 'R',
        rep: 1,
        table: 132
      },
      {
        dt: 'CP',
        desc: 'Transaction Amount - Unit',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PCR: {
    desc: 'Possible Causal Relationship',
    fields: [
      {
        dt: 'CWE',
        desc: 'Implicated Product',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Generic Product',
        opt: 'R',
        rep: 1,
        table: 249
      },
      {
        dt: 'CWE',
        desc: 'Product Class',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Total Duration Of Therapy',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Product Manufacture Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Product Expiration Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Product Implantation Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Product Explantation Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Single Use Device',
        opt: 'R',
        rep: 1,
        table: 244
      },
      {
        dt: 'CWE',
        desc: 'Indication For Product Use',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Product Problem',
        opt: 'R',
        rep: 1,
        table: 245
      },
      {
        dt: 'ST',
        desc: 'Product Serial/Lot Number',
        opt: 'R',
        rep: 3
      },
      {
        dt: 'CWE',
        desc: 'Product Available For Inspection',
        opt: 'R',
        rep: 1,
        table: 246
      },
      {
        dt: 'CWE',
        desc: 'Product Evaluation Performed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Product Evaluation Status',
        opt: 'R',
        rep: 1,
        table: 247
      },
      {
        dt: 'CWE',
        desc: 'Product Evaluation Results',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Evaluated Product Source',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 248
      },
      {
        dt: 'DTM',
        desc: 'Date Product Returned To Manufacturer',
        opt: 'R',
        rep: 1
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
        rep: 6,
        len: 2,
        table: 251
      },
      {
        dt: 'ID',
        desc: 'Event Causality Observations',
        opt: 'R',
        rep: 6,
        len: 2,
        table: 252
      },
      {
        dt: 'ID',
        desc: 'Indirect Exposure Mechanism',
        opt: 'R',
        rep: 3,
        len: 1,
        table: 253
      }
    ]
  },
  PD1: {
    desc: 'Patient Additional Demographic',
    fields: [
      {
        dt: 'CWE',
        desc: 'Living Dependency',
        opt: 'R',
        rep: 0,
        table: 223
      },
      {
        dt: 'CWE',
        desc: 'Living Arrangement',
        opt: 'R',
        rep: 1,
        table: 220
      },
      {
        dt: 'XON',
        desc: 'Patient Primary Facility',
        opt: 'R',
        rep: 0,
        table: 204
      },
      {
        dt: 'ST',
        desc: 'Patient Primary Care Provider Name & ID No.',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Student Indicator',
        opt: 'R',
        rep: 1,
        table: 231
      },
      {
        dt: 'CWE',
        desc: 'Handicap',
        opt: 'R',
        rep: 1,
        table: 295
      },
      {
        dt: 'CWE',
        desc: 'Living Will Code',
        opt: 'R',
        rep: 1,
        table: 315
      },
      {
        dt: 'CWE',
        desc: 'Organ Donor Code',
        opt: 'R',
        rep: 1,
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
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Publicity Code',
        opt: 'R',
        rep: 1,
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
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Place of Worship',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Advance Directive Code',
        opt: 'R',
        rep: 0,
        table: 435
      },
      {
        dt: 'CWE',
        desc: 'Immunization Registry Status',
        opt: 'R',
        rep: 1,
        table: 441
      },
      {
        dt: 'DT',
        desc: 'Immunization Registry Status Effective Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Publicity Code Effective Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Military Branch',
        opt: 'R',
        rep: 1,
        table: 140
      },
      {
        dt: 'CWE',
        desc: 'Military Rank/Grade',
        opt: 'R',
        rep: 1,
        table: 141
      },
      {
        dt: 'CWE',
        desc: 'Military Status',
        opt: 'R',
        rep: 1,
        table: 142
      },
      {
        dt: 'DT',
        desc: 'Advance Directive Last Verified Date',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PDA: {
    desc: 'Patient Death and Autopsy',
    fields: [
      {
        dt: 'CWE',
        desc: 'Death Cause Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Death Location',
        opt: 'R',
        rep: 1
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
        dt: 'DTM',
        desc: 'Death Certificate Signed Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Death Certified By',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Autopsy Performed By',
        opt: 'R',
        rep: 1
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
  PEO: {
    desc: 'Product Experience Observation',
    fields: [
      {
        dt: 'CWE',
        desc: 'Event Identifiers Used',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Event Symptom/Diagnosis Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Event Onset Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Event Exacerbation Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Event Improved Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Event Ended Data/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Event Location Occurred Address',
        opt: 'R',
        rep: 0
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
        desc: 'Event Description from Others',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'FT',
        desc: 'Event Description from Original Reporter',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'FT',
        desc: 'Event Description from Patient',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'FT',
        desc: 'Event Description from Practitioner',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'FT',
        desc: 'Event Description from Autopsy',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Cause Of Death',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XPN',
        desc: 'Primary Observer Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Primary Observer Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Primary Observer Telephone',
        opt: 'R',
        rep: 0
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
        dt: 'DTM',
        desc: 'Primary Observer Aware Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Primary Observer\'s identity May Be Divulged',
        opt: 'R',
        rep: 1,
        len: 2,
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
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Sender Individual Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Sender Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Sender Telephone',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EI',
        desc: 'Sender Event Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Sender Sequence Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'FT',
        desc: 'Sender Event Description',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'FT',
        desc: 'Sender Comment',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Sender Aware Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Event Report Date',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Event Report Timing/Type',
        opt: 'R',
        rep: 2,
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
        dt: 'ST',
        desc: 'Patient ID',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Patient Identifier List',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Alternate Patient ID - PID',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'XPN',
        desc: 'Patient Name',
        opt: 'C',
        rep: 0,
        table: 200
      },
      {
        dt: 'XPN',
        desc: 'Mother\'s Maiden Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Date/Time of Birth',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Administrative Sex',
        opt: 'R',
        rep: 1,
        table: 1
      },
      {
        dt: 'ST',
        desc: 'Patient Alias',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Race',
        opt: 'R',
        rep: 0,
        table: 5
      },
      {
        dt: 'XAD',
        desc: 'Patient Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'County Code',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'XTN',
        desc: 'Phone Number - Home',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Phone Number - Business',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Primary Language',
        opt: 'R',
        rep: 1,
        table: 296
      },
      {
        dt: 'CWE',
        desc: 'Marital Status',
        opt: 'R',
        rep: 1,
        table: 2
      },
      {
        dt: 'CWE',
        desc: 'Religion',
        opt: 'R',
        rep: 1,
        table: 6
      },
      {
        dt: 'CX',
        desc: 'Patient Account Number',
        opt: 'R',
        rep: 1,
        table: 61
      },
      {
        dt: 'ST',
        desc: 'SSN Number - Patient',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Driver\'s License Number - Patient',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Mother\'s Identifier',
        opt: 'R',
        rep: 0,
        table: 61
      },
      {
        dt: 'CWE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 0,
        table: 189
      },
      {
        dt: 'ST',
        desc: 'Birth Place',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Citizenship',
        opt: 'R',
        rep: 0,
        table: 171
      },
      {
        dt: 'CWE',
        desc: 'Veterans Military Status',
        opt: 'R',
        rep: 1,
        table: 172
      },
      {
        dt: 'ST',
        desc: 'Nationality ',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Patient Death Date and Time',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Identity Reliability Code',
        opt: 'R',
        rep: 0,
        table: 445
      },
      {
        dt: 'DTM',
        desc: 'Last Update Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Last Update Facility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Species Code',
        opt: 'R',
        rep: 1,
        table: 446
      },
      {
        dt: 'CWE',
        desc: 'Breed Code',
        opt: 'R',
        rep: 1,
        table: 447
      },
      {
        dt: 'ST',
        desc: 'Strain',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Production Class Code',
        opt: 'R',
        rep: 2,
        table: 429
      },
      {
        dt: 'CWE',
        desc: 'Tribal Citizenship',
        opt: 'R',
        rep: 0,
        table: 171
      },
      {
        dt: 'XTN',
        desc: 'Patient Telecommunication Information',
        opt: 'R',
        rep: 0
      }
    ]
  },
  PKG: {
    desc: 'Item Packaging',
    fields: [
      {
        dt: 'SI',
        desc: 'Set Id - PKG',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'Packaging Units',
        opt: 'R',
        rep: 1,
        table: 818
      },
      {
        dt: 'CNE',
        desc: 'Default Order Unit Of Measure Indicator',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'NM',
        desc: 'Package Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Price',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Future Item Price',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Future Item Price Effective Date',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PMT: {
    desc: 'Payment Information',
    fields: [
      {
        dt: 'EI',
        desc: 'Payment/Remittance Advice Number',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Payment/Remittance Effective Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Payment/Remittance Expiration Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Payment Method',
        opt: 'C',
        rep: 1,
        table: 570
      },
      {
        dt: 'DTM',
        desc: 'Payment/Remittance Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Payment/Remittance Amount',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Check Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Payee Bank Identification',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Payee Transit Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Payee Bank Account ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Payment Organization',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'ESR-Code-Line',
        opt: 'R',
        rep: 1
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
        dt: 'ST',
        desc: 'Procedure Coding Method',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Procedure Code',
        opt: 'C',
        rep: 1,
        table: 88
      },
      {
        dt: 'ST',
        desc: 'Procedure Description',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Procedure Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Procedure Functional Type',
        opt: 'R',
        rep: 1,
        table: 230
      },
      {
        dt: 'NM',
        desc: 'Procedure Minutes',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Anesthesiologist',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Anesthesia Code',
        opt: 'R',
        rep: 1,
        table: 19
      },
      {
        dt: 'NM',
        desc: 'Anesthesia Minutes',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Surgeon',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Procedure Practitioner ',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Consent Code',
        opt: 'R',
        rep: 1,
        table: 59
      },
      {
        dt: 'NM',
        desc: 'Procedure Priority',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 418
      },
      {
        dt: 'CWE',
        desc: 'Associated Diagnosis Code',
        opt: 'R',
        rep: 1,
        table: 51
      },
      {
        dt: 'CNE',
        desc: 'Procedure Code Modifier',
        opt: 'R',
        rep: 0,
        table: 340
      },
      {
        dt: 'CWE',
        desc: 'Procedure DRG Type',
        opt: 'R',
        rep: 1,
        table: 416
      },
      {
        dt: 'CWE',
        desc: 'Tissue Type Code',
        opt: 'R',
        rep: 0,
        table: 417
      },
      {
        dt: 'EI',
        desc: 'Procedure Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Procedure Action Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 206
      },
      {
        dt: 'CWE',
        desc: 'DRG Procedure Determination Status ',
        opt: 'R',
        rep: 1,
        table: 761
      },
      {
        dt: 'CWE',
        desc: 'DRG Procedure Relevance',
        opt: 'R',
        rep: 1,
        table: 763
      },
      {
        dt: 'PL',
        desc: 'Treating Organizational Unit',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ID',
        desc: 'Respiratory Within Surgery',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'EI',
        desc: 'Parent Procedure ID',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PRA: {
    desc: 'Practitioner Detail',
    fields: [
      {
        dt: 'CWE',
        desc: 'Primary Key Value - PRA',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Practitioner Group',
        opt: 'R',
        rep: 0,
        table: 358
      },
      {
        dt: 'CWE',
        desc: 'Practitioner Category',
        opt: 'R',
        rep: 0,
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
        table: 337
      },
      {
        dt: 'PLN',
        desc: 'Practitioner ID Numbers',
        opt: 'R',
        rep: 0,
        table: 338
      },
      {
        dt: 'PIP',
        desc: 'Privileges',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DT',
        desc: 'Date Entered Practice',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Institution ',
        opt: 'R',
        rep: 1,
        table: 537
      },
      {
        dt: 'DT',
        desc: 'Date Left Practice',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Government Reimbursement Billing Eligibility',
        opt: 'R',
        rep: 0,
        table: 401
      },
      {
        dt: 'SI',
        desc: 'Set ID - PRA',
        opt: 'R',
        rep: 1,
        len: 4
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
        dt: 'DTM',
        desc: 'Action Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Problem ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Problem Instance ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Episode of Care ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Problem List Priority',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Problem Established Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Anticipated Problem Resolution Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Actual Problem Resolution Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Problem Classification',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Problem Management Discipline',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Problem Persistence',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Problem Confirmation Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Problem Life Cycle Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Problem Life Cycle Status Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Problem Date of Onset',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Problem Onset Text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Problem Ranking',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Certainty of Problem',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Probability of Problem (0-1)',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Individual Awareness of Problem',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Problem Prognosis',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Individual Awareness of Prognosis',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Family/Significant Other Awareness of Problem/Prognosis',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Security/Sensitivity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Problem Severity',
        opt: 'R',
        rep: 1,
        table: 836
      },
      {
        dt: 'CWE',
        desc: 'Problem Perspective',
        opt: 'R',
        rep: 1,
        table: 838
      },
      {
        dt: 'CNE',
        desc: 'Mood Code',
        opt: 'R',
        rep: 1,
        table: 725
      }
    ]
  },
  PRC: {
    desc: 'Pricing',
    fields: [
      {
        dt: 'CWE',
        desc: 'Primary Key Value - PRC',
        opt: 'C',
        rep: 1,
        table: 132
      },
      {
        dt: 'CWE',
        desc: 'Facility ID - PRC',
        opt: 'R',
        rep: 0,
        table: 464
      },
      {
        dt: 'CWE',
        desc: 'Department',
        opt: 'R',
        rep: 0,
        table: 184
      },
      {
        dt: 'CWE',
        desc: 'Valid Patient Classes',
        opt: 'R',
        rep: 0,
        table: 4
      },
      {
        dt: 'CP',
        desc: 'Price',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Formula',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Minimum Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Maximum Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'MO',
        desc: 'Minimum Price',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'MO',
        desc: 'Maximum Price',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Effective Start Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Effective End Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Price Override Flag',
        opt: 'R',
        rep: 1,
        table: 268
      },
      {
        dt: 'CWE',
        desc: 'Billing Category',
        opt: 'R',
        rep: 0,
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Charge on Indicator',
        opt: 'R',
        rep: 1,
        table: 269
      }
    ]
  },
  PRD: {
    desc: 'Provider Data',
    fields: [
      {
        dt: 'CWE',
        desc: 'Provider Role',
        opt: 'C',
        rep: 0,
        table: 286
      },
      {
        dt: 'XPN',
        desc: 'Provider Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Provider Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Provider Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XTN',
        desc: 'Provider Communication Information',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Preferred Method of Contact ',
        opt: 'R',
        rep: 1,
        table: 185
      },
      {
        dt: 'PLN',
        desc: 'Provider Identifiers',
        opt: 'R',
        rep: 0,
        table: 338
      },
      {
        dt: 'DTM',
        desc: 'Effective Start Date of Provider Role',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Effective End Date of Provider Role',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XON',
        desc: 'Provider Organization Name and Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Provider Organization Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Provider Organization Location Information',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Provider Organization Communication Information',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Provider Organization Method of Contact',
        opt: 'R',
        rep: 1,
        table: 185
      }
    ]
  },
  PRT: {
    desc: 'Participation Information',
    fields: [
      {
        dt: 'EI',
        desc: 'Participation Instance ID',
        opt: 'R',
        rep: 1,
        len: 4
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
        dt: 'CWE',
        desc: 'Action Reason',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Participation ',
        opt: 'C',
        rep: 1,
        table: 912
      },
      {
        dt: 'XCN',
        desc: 'Participation Person',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Participation Person Provider Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Participant Organization Unit Type',
        opt: 'R',
        rep: 1,
        table: 406
      },
      {
        dt: 'XON',
        desc: 'Participation Organization',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Participant Location',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EI',
        desc: 'Participation Device',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Participation Begin Date/Time (arrival time)',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Participation End Date/Time (departure time)',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Participation Qualitative Duration',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Participation Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Participant Telecommunication Address',
        opt: 'R',
        rep: 0
      }
    ]
  },
  PSG: {
    desc: 'Product/Service Group',
    fields: [
      {
        dt: 'EI',
        desc: 'Provider Product/Service Group Number',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Payer Product/Service Group Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'SI',
        desc: 'Product/Service Group Sequence Number',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Adjudicate as Group',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CP',
        desc: 'Product/Service Group Billed Amount',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Product/Service Group Description',
        opt: 'C',
        rep: 1
      }
    ]
  },
  PSL: {
    desc: 'Product/Service Line Item',
    fields: [
      {
        dt: 'EI',
        desc: 'Provider Product/Service Line Item Number',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Payer Product/Service Line Item Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'SI',
        desc: 'Product/Service Line Item Sequence Number',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'EI',
        desc: 'Provider Tracking ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Payer Tracking ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Product/Service Line Item Status',
        opt: 'C',
        rep: 1,
        table: 559
      },
      {
        dt: 'CWE',
        desc: 'Product/Service Code',
        opt: 'C',
        rep: 1,
        table: 879
      },
      {
        dt: 'CWE',
        desc: 'Product/Service Code Modifier',
        opt: 'R',
        rep: 5,
        table: 880
      },
      {
        dt: 'ST',
        desc: 'Product/Service Code Description',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Product/Service Effective Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Product/Service Expiration Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Product/Service Quantity',
        opt: 'R',
        rep: 1,
        table: 560
      },
      {
        dt: 'CP',
        desc: 'Product/Service Unit Cost',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Number of Items per Unit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Product/Service Gross Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Product/Service Billed Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Product/Service Clarification Code Type',
        opt: 'R',
        rep: 20,
        table: 561
      },
      {
        dt: 'ST',
        desc: 'Product/Service Clarification Code Value',
        opt: 'R',
        rep: 20
      },
      {
        dt: 'EI',
        desc: 'Health Document Reference Identifier',
        opt: 'R',
        rep: 5
      },
      {
        dt: 'CWE',
        desc: 'Processing Consideration Code',
        opt: 'R',
        rep: 20,
        table: 562
      },
      {
        dt: 'ID',
        desc: 'Restricted Disclosure Indicator',
        opt: 'C',
        rep: 1,
        len: 4,
        table: 532
      },
      {
        dt: 'CWE',
        desc: 'Related Product/Service Code Indicator',
        opt: 'R',
        rep: 1,
        table: 879
      },
      {
        dt: 'CP',
        desc: 'Product/Service Amount for Physician',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Product/Service Cost Factor',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Cost Center',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DR',
        desc: 'Billing Period',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Days without Billing',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Session-No',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'XCN',
        desc: 'Executing Physician ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Responsible Physician ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Role Executing Physician',
        opt: 'R',
        rep: 1,
        table: 881
      },
      {
        dt: 'CWE',
        desc: 'Medical Role Executing Physician',
        opt: 'R',
        rep: 1,
        table: 882
      },
      {
        dt: 'CWE',
        desc: 'Side of body ',
        opt: 'R',
        rep: 1,
        table: 894
      },
      {
        dt: 'NM',
        desc: 'Number of TP\'s PP',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'TP-Value PP',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Internal Scaling Factor PP',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'External Scaling Factor PP',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Amount PP',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Number of TP\'s Technical Part',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'TP-Value Technical Part',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Internal Scaling Factor Technical Part',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'External Scaling Factor Technical Part',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Amount Technical Part',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CP',
        desc: 'Total Amount Professional Part + Technical Part',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'VAT-Rate',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Main-Service',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Validation',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ST',
        desc: 'Comment',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PSS: {
    desc: 'Product/Service Section',
    fields: [
      {
        dt: 'EI',
        desc: 'Provider Product/Service Section Number',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Payer Product/Service Section Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'SI',
        desc: 'Product/Service Section Sequence Number',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CP',
        desc: 'Billed Amount',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Section Description or Heading',
        opt: 'C',
        rep: 1
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
        dt: 'CWE',
        desc: 'Pathway ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Pathway Instance ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Pathway Established Date/Time ',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Pathway Life Cycle Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Change Pathway Life Cycle Status Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Mood Code',
        opt: 'R',
        rep: 1,
        table: 725
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
        dt: 'CWE',
        desc: 'Patient Class',
        opt: 'C',
        rep: 1,
        table: 4
      },
      {
        dt: 'PL',
        desc: 'Assigned Patient Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Admission Type',
        opt: 'R',
        rep: 1,
        table: 7
      },
      {
        dt: 'CX',
        desc: 'Preadmit Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'PL',
        desc: 'Prior Patient Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Attending Doctor',
        opt: 'R',
        rep: 0,
        table: 10
      },
      {
        dt: 'XCN',
        desc: 'Referring Doctor',
        opt: 'R',
        rep: 0,
        table: 10
      },
      {
        dt: 'XCN',
        desc: 'Consulting Doctor',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Hospital Service',
        opt: 'R',
        rep: 1,
        table: 69
      },
      {
        dt: 'PL',
        desc: 'Temporary Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Preadmit Test Indicator',
        opt: 'R',
        rep: 1,
        table: 87
      },
      {
        dt: 'CWE',
        desc: 'Re-admission Indicator',
        opt: 'R',
        rep: 1,
        table: 92
      },
      {
        dt: 'CWE',
        desc: 'Admit Source',
        opt: 'R',
        rep: 1,
        table: 23
      },
      {
        dt: 'CWE',
        desc: 'Ambulatory Status',
        opt: 'R',
        rep: 0,
        table: 9
      },
      {
        dt: 'CWE',
        desc: 'VIP Indicator',
        opt: 'R',
        rep: 1,
        table: 99
      },
      {
        dt: 'XCN',
        desc: 'Admitting Doctor',
        opt: 'R',
        rep: 0,
        table: 10
      },
      {
        dt: 'CWE',
        desc: 'Patient Type',
        opt: 'R',
        rep: 1,
        table: 18
      },
      {
        dt: 'CX',
        desc: 'Visit Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'FC',
        desc: 'Financial Class',
        opt: 'R',
        rep: 0,
        table: 64
      },
      {
        dt: 'CWE',
        desc: 'Charge Price Indicator',
        opt: 'R',
        rep: 1,
        table: 32
      },
      {
        dt: 'CWE',
        desc: 'Courtesy Code',
        opt: 'R',
        rep: 1,
        table: 45
      },
      {
        dt: 'CWE',
        desc: 'Credit Rating',
        opt: 'R',
        rep: 1,
        table: 46
      },
      {
        dt: 'CWE',
        desc: 'Contract Code',
        opt: 'R',
        rep: 0,
        table: 44
      },
      {
        dt: 'DT',
        desc: 'Contract Effective Date',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Contract Amount',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Contract Period',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Interest Code',
        opt: 'R',
        rep: 1,
        table: 73
      },
      {
        dt: 'CWE',
        desc: 'Transfer to Bad Debt Code',
        opt: 'R',
        rep: 1,
        table: 110
      },
      {
        dt: 'DT',
        desc: 'Transfer to Bad Debt Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Bad Debt Agency Code',
        opt: 'R',
        rep: 1,
        table: 21
      },
      {
        dt: 'NM',
        desc: 'Bad Debt Transfer Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Bad Debt Recovery Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Delete Account Indicator',
        opt: 'R',
        rep: 1,
        table: 111
      },
      {
        dt: 'DT',
        desc: 'Delete Account Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Discharge Disposition',
        opt: 'R',
        rep: 1,
        table: 112
      },
      {
        dt: 'DLD',
        desc: 'Discharged to Location',
        opt: 'R',
        rep: 1,
        table: 113
      },
      {
        dt: 'CWE',
        desc: 'Diet Type',
        opt: 'R',
        rep: 1,
        table: 114
      },
      {
        dt: 'CWE',
        desc: 'Servicing Facility',
        opt: 'R',
        rep: 1,
        table: 115
      },
      {
        dt: 'ST',
        desc: 'Bed Status',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Account Status',
        opt: 'R',
        rep: 1,
        table: 117
      },
      {
        dt: 'PL',
        desc: 'Pending Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'PL',
        desc: 'Prior Temporary Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Admit Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Discharge Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Current Patient Balance',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Total Charges',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Total Adjustments',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Total Payments',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Alternate Visit ID',
        opt: 'R',
        rep: 1,
        table: 203
      },
      {
        dt: 'CWE',
        desc: 'Visit Indicator',
        opt: 'R',
        rep: 1,
        table: 326
      },
      {
        dt: 'ST',
        desc: 'Other Healthcare Provider',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Service Episode Description',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Service Episode Identifier',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Accommodation Code',
        opt: 'R',
        rep: 1,
        table: 129
      },
      {
        dt: 'CWE',
        desc: 'Admit Reason',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Transfer Reason',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Patient Valuables',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Patient Valuables Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Visit User Code',
        opt: 'R',
        rep: 0,
        table: 130
      },
      {
        dt: 'DTM',
        desc: 'Expected Admit Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Expected Discharge Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Estimated Length of Inpatient Stay',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Actual Length of Inpatient Stay',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Visit Description',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Referral Source Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DT',
        desc: 'Previous Service Date',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Purge Status Code',
        opt: 'R',
        rep: 1,
        table: 213
      },
      {
        dt: 'DT',
        desc: 'Purge Status Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Special Program Code',
        opt: 'R',
        rep: 1,
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Visit Publicity Code',
        opt: 'R',
        rep: 1,
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
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Patient Status Code',
        opt: 'R',
        rep: 1,
        table: 216
      },
      {
        dt: 'CWE',
        desc: 'Visit Priority Code',
        opt: 'R',
        rep: 1,
        table: 217
      },
      {
        dt: 'DT',
        desc: 'Previous Treatment Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Expected Discharge Disposition',
        opt: 'R',
        rep: 1,
        table: 112
      },
      {
        dt: 'DT',
        desc: 'Signature on File Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'First Similar Illness Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Patient Charge Adjustment Code',
        opt: 'R',
        rep: 1,
        table: 218
      },
      {
        dt: 'CWE',
        desc: 'Recurring Service Code',
        opt: 'R',
        rep: 1,
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
        dt: 'DTM',
        desc: 'Expected Surgery Date and Time',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Mode of Arrival Code',
        opt: 'R',
        rep: 1,
        table: 430
      },
      {
        dt: 'CWE',
        desc: 'Recreational Drug Use Code',
        opt: 'R',
        rep: 0,
        table: 431
      },
      {
        dt: 'CWE',
        desc: 'Admission Level of Care Code',
        opt: 'R',
        rep: 1,
        table: 432
      },
      {
        dt: 'CWE',
        desc: 'Precaution Code',
        opt: 'R',
        rep: 0,
        table: 433
      },
      {
        dt: 'CWE',
        desc: 'Patient Condition Code',
        opt: 'R',
        rep: 1,
        table: 434
      },
      {
        dt: 'CWE',
        desc: 'Living Will Code',
        opt: 'R',
        rep: 1,
        table: 315
      },
      {
        dt: 'CWE',
        desc: 'Organ Donor Code',
        opt: 'R',
        rep: 1,
        table: 316
      },
      {
        dt: 'CWE',
        desc: 'Advance Directive Code',
        opt: 'R',
        rep: 0,
        table: 435
      },
      {
        dt: 'DT',
        desc: 'Patient Status Effective Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Expected LOA Return Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Expected Pre-admission Testing Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Notify Clergy Code',
        opt: 'R',
        rep: 0,
        table: 534
      },
      {
        dt: 'DT',
        desc: 'Advance Directive Last Verified Date',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PYE: {
    desc: 'Payee Information',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - PYE',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'Payee Type',
        opt: 'C',
        rep: 1,
        table: 557
      },
      {
        dt: 'CWE',
        desc: 'Payee Relationship to Invoice (Patient)',
        opt: 'R',
        rep: 1,
        table: 558
      },
      {
        dt: 'XON',
        desc: 'Payee Identification List',
        opt: 'R',
        rep: 5
      },
      {
        dt: 'XPN',
        desc: 'Payee Person Name',
        opt: 'R',
        rep: 4
      },
      {
        dt: 'XAD',
        desc: 'Payee Address',
        opt: 'R',
        rep: 4
      },
      {
        dt: 'CWE',
        desc: 'Payment Method',
        opt: 'R',
        rep: 1,
        table: 570
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
        rep: 1
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
        dt: 'CWE',
        desc: 'Message Query Name',
        opt: 'R',
        rep: 1,
        table: 471
      },
      {
        dt: 'NM',
        desc: 'Hit Count Total',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'This payload',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Hits remaining',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Message Query Name',
        opt: 'C',
        rep: 1,
        table: 471
      }
    ]
  },
  QPD: {
    desc: 'Query Parameter Definition',
    fields: [
      {
        dt: 'CWE',
        desc: 'Message Query Name ',
        opt: 'C',
        rep: 1,
        table: 471
      },
      {
        dt: 'ST',
        desc: 'Query Tag',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'User Parameters (in successive fields) ',
        opt: 'R',
        rep: 1
      }
    ]
  },
  QRD: {
    desc: 'Original-Style Query Definition',
    fields: [
      {
        dt: 'DTM',
        desc: 'Query Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Query Format Code',
        opt: 'C',
        rep: 1,
        table: 106
      },
      {
        dt: 'ID',
        desc: 'Query Priority',
        opt: 'C',
        rep: 1,
        table: 91
      },
      {
        dt: 'ST',
        desc: 'Query ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Deferred Response Type',
        opt: 'R',
        rep: 1,
        table: 107
      },
      {
        dt: 'DTM',
        desc: 'Deferred Response Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Quantity Limited Request',
        opt: 'C',
        rep: 1,
        table: 126
      },
      {
        dt: 'XCN',
        desc: 'Who Subject Filter',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'What Subject Filter',
        opt: 'C',
        rep: 0,
        table: 48
      },
      {
        dt: 'CWE',
        desc: 'What Department Data Code',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'VR',
        desc: 'What Data Code Value Qual.',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ID',
        desc: 'Query Results Level',
        opt: 'R',
        rep: 1,
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
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'When Data Start Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'When Data End Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'What User Qualifier',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Other QRY Subject Filter',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ID',
        desc: 'Which Date/Time Qualifier',
        opt: 'R',
        rep: 0,
        table: 156
      },
      {
        dt: 'ID',
        desc: 'Which Date/Time Status Qualifier',
        opt: 'R',
        rep: 0,
        table: 157
      },
      {
        dt: 'ID',
        desc: 'Date/Time Selection Qualifier',
        opt: 'R',
        rep: 0,
        table: 158
      },
      {
        dt: 'TQ',
        desc: 'When Quantity/Timing Qualifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Search Confidence Threshold',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Match Reason Code',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 392
      },
      {
        dt: 'CWE',
        desc: 'Algorithm Descriptor',
        opt: 'R',
        rep: 1,
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
        table: 126
      },
      {
        dt: 'CNE',
        desc: 'Response Modality',
        opt: 'R',
        rep: 1,
        table: 394
      },
      {
        dt: 'DTM',
        desc: 'Execution and Delivery Time',
        opt: 'R',
        rep: 1
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
        rep: 0
      },
      {
        dt: 'ID',
        desc: 'Segment group inclusion ',
        opt: 'R',
        rep: 0,
        len: 256,
        table: 391
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
        rep: 1
      },
      {
        dt: 'RCD',
        desc: 'Column Description',
        opt: 'C',
        rep: 0,
        table: 440
      }
    ]
  },
  RDT: {
    desc: 'Table Row Data',
    fields: [
      {
        dt: 'ST',
        desc: 'Column Value',
        opt: 'C',
        rep: 1
      }
    ]
  },
  REL: {
    desc: 'Clinical Relationship Segment',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID -REL',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'CWE',
        desc: 'Relationship Type',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'This Relationship Instance Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Source Information Instance Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Target Information Instance Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Asserting Entity Instance ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Asserting Person',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Asserting Organization',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Assertor Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XTN',
        desc: 'Assertor Contact',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DR',
        desc: 'Assertion Date Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Negation Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CWE',
        desc: 'Certainty of Relationship',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Priority No',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Priority  Sequence No (rel preference for consideration)',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Separability Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      }
    ]
  },
  RF1: {
    desc: 'Referral Information',
    fields: [
      {
        dt: 'CWE',
        desc: 'Referral Status',
        opt: 'R',
        rep: 1,
        table: 283
      },
      {
        dt: 'CWE',
        desc: 'Referral Priority',
        opt: 'R',
        rep: 1,
        table: 280
      },
      {
        dt: 'CWE',
        desc: 'Referral Type',
        opt: 'R',
        rep: 1,
        table: 281
      },
      {
        dt: 'CWE',
        desc: 'Referral Disposition',
        opt: 'R',
        rep: 0,
        table: 282
      },
      {
        dt: 'CWE',
        desc: 'Referral Category',
        opt: 'R',
        rep: 1,
        table: 284
      },
      {
        dt: 'EI',
        desc: 'Originating Referral Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Effective Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Expiration Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Process Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Referral Reason',
        opt: 'R',
        rep: 0,
        table: 336
      },
      {
        dt: 'EI',
        desc: 'External Referral Identifier',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Referral Documentation Completion Status ',
        opt: 'R',
        rep: 1,
        table: 865
      }
    ]
  },
  RFI: {
    desc: 'Request for Information',
    fields: [
      {
        dt: 'DTM',
        desc: 'Request Date',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Response Due Date',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Patient Consent',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'DTM',
        desc: 'Date Additional Information Was Submitted',
        opt: 'R',
        rep: 1
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
        len: 1,
        table: 206
      },
      {
        dt: 'CWE',
        desc: 'Resource Group ID',
        opt: 'R',
        rep: 1
      }
    ]
  },
  RMI: {
    desc: 'Risk Management Incident',
    fields: [
      {
        dt: 'CWE',
        desc: 'Risk Management Incident Code',
        opt: 'R',
        rep: 1,
        table: 427
      },
      {
        dt: 'DTM',
        desc: 'Date/Time Incident',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Incident Type Code',
        opt: 'R',
        rep: 1,
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
        rep: 1
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
        dt: 'CWE',
        desc: 'Role-ROL',
        opt: 'C',
        rep: 1,
        table: 443
      },
      {
        dt: 'XCN',
        desc: 'Role Person',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Role Begin Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Role End Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Role Duration',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Role Action Reason',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Provider Type',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Organization Unit Type',
        opt: 'R',
        rep: 1,
        table: 406
      },
      {
        dt: 'XAD',
        desc: 'Office/Home Address/Birthplace',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Phone ',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Person\'s Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XON',
        desc: 'Organization',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Manufacturer Identifier',
        opt: 'R',
        rep: 1,
        table: 385
      },
      {
        dt: 'ST',
        desc: 'Manufacturer\'s Catalog',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Vendor ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Vendor Catalog',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Item Code - Internal',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Item Code - External',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Hospital Item Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Requisition Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Requisition Unit of Measure',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Cost Center Account Number',
        opt: 'R',
        rep: 1,
        table: 319
      },
      {
        dt: 'CWE',
        desc: 'Item Natural Account Code',
        opt: 'R',
        rep: 1,
        table: 320
      },
      {
        dt: 'CWE',
        desc: 'Deliver To ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Date Needed',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Administration Sub-ID Counter',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Date/Time Start of Administration',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Date/Time End of Administration',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Administered Code',
        opt: 'C',
        rep: 1,
        table: 292
      },
      {
        dt: 'NM',
        desc: 'Administered Amount',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Administered Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Administered Dosage Form',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Administration Notes',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Administering Provider',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'LA2',
        desc: 'Administered-at Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Administered Per (Time Unit)',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Administered Strength',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Administered Strength Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Substance Lot Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Substance Expiration Date',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Substance Manufacturer Name',
        opt: 'R',
        rep: 0,
        table: 227
      },
      {
        dt: 'CWE',
        desc: 'Substance/Treatment Refusal Reason',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Indication',
        opt: 'R',
        rep: 0
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
        len: 1,
        table: 206
      },
      {
        dt: 'DTM',
        desc: 'System Entry Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Administered Drug Strength Volume',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Administered Drug Strength Volume Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Administered Barcode Identifier',
        opt: 'R',
        rep: 1
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
        dt: 'PL',
        desc: 'Administer-at',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Administered-at Address',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Component Code',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Component Amount',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Component Units',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Component Strength',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Component Strength Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Supplementary Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Component Drug Strength Volume',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Component Drug Strength Volume Units',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Dispense/Give Code',
        opt: 'C',
        rep: 1,
        table: 292
      },
      {
        dt: 'DTM',
        desc: 'Date/Time Dispensed',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Actual Dispense Amount',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Actual Dispense Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Actual Dosage Form',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Prescription Number',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Number of Refills Remaining',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Dispense Notes',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Dispensing Provider',
        opt: 'R',
        rep: 0
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
        rep: 1
      },
      {
        dt: 'LA2',
        desc: 'Dispense-to Location',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Pharmacy/Treatment Supplier\'s Special Dispensing Instructions',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Actual Strength',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Actual Strength Unit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Substance Lot Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Substance Expiration Date',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Substance Manufacturer Name',
        opt: 'R',
        rep: 0,
        table: 227
      },
      {
        dt: 'CWE',
        desc: 'Indication',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Dispense Package Size',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Dispense Package Size Unit',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Supplementary Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Initiating Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Packaging/Assembly Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Actual Drug Strength Volume',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Actual Drug Strength Volume Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Dispense to Pharmacy',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Dispense to Pharmacy Address',
        opt: 'R',
        rep: 1
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
        table: 484
      },
      {
        dt: 'XTN',
        desc: 'Pharmacy Phone Number',
        opt: 'R',
        rep: 0
      }
    ]
  },
  RXE: {
    desc: 'Pharmacy/Treatment Encoded Order',
    fields: [
      {
        dt: 'ST',
        desc: 'Quantity/Timing',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Code',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Give Amount - Minimum',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Give Amount - Maximum',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Units',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Dosage Form',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Provider\'s Administration Instructions',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Deliver-to Location',
        opt: 'W',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Dispense Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Number of Refills',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Ordering Provider\'s DEA Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Pharmacist/Treatment Supplier\'s Verifier ID',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Prescription Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Number of Refills Remaining',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Number of Refills/Doses Dispensed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'D/T of Most Recent Refill or Dose Dispensed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Total Daily Dose',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Pharmacy/Treatment Supplier\'s Special Dispensing Instructions',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Give Per (Time Unit)',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Give Rate Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Rate Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Give Strength',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Strength Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Indication',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Dispense Package Size',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Dispense Package Size Unit',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Supplementary Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Original Order Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Give Drug Strength Volume',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Drug Strength Volume Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Controlled Substance Schedule',
        opt: 'R',
        rep: 1,
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
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Pharmacy of Most Recent Fill',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Initial Dispense Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Dispensing Pharmacy',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Dispensing Pharmacy Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'PL',
        desc: 'Deliver-to Patient Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Deliver-to Address',
        opt: 'R',
        rep: 1
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
        dt: 'XTN',
        desc: 'Pharmacy Phone Number',
        opt: 'R',
        rep: 0
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
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Dispense Sub-ID Counter',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Quantity/Timing',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Code',
        opt: 'C',
        rep: 1,
        table: 292
      },
      {
        dt: 'NM',
        desc: 'Give Amount - Minimum',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Give Amount - Maximum',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Units',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Dosage Form',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Administration Notes',
        opt: 'R',
        rep: 0
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
        desc: 'Dispense-To Location',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc:
            'Pharmacy/Treatment Supplier\'s Special Administration Instructions',
        opt: 'R',
        rep: 0,
        len: 250
      },
      {
        dt: 'ST',
        desc: 'Give Per (Time Unit)',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Give Rate Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Rate Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Give Strength',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Strength Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Substance Lot Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Substance Expiration Date',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Substance Manufacturer Name',
        opt: 'R',
        rep: 0,
        table: 227
      },
      {
        dt: 'CWE',
        desc: 'Indication',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Give Drug Strength Volume',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Drug Strength Volume Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Give Barcode Identifier',
        opt: 'R',
        rep: 1
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
        desc: 'Dispense to Pharmacy',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Dispense to Pharmacy Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'PL',
        desc: 'Deliver-to Patient Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Deliver-to Address',
        opt: 'R',
        rep: 1
      }
    ]
  },
  RXO: {
    desc: 'Pharmacy/Treatment Order',
    fields: [
      {
        dt: 'CWE',
        desc: 'Requested Give Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Requested Give Amount - Minimum',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Requested Give Amount - Maximum',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Requested Give Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Requested Dosage Form',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Provider\'s Pharmacy/Treatment Instructions',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Provider\'s Administration Instructions',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'LA1',
        desc: 'Deliver-To Location',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Requested Dispense Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Requested Dispense Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Requested Dispense Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Number Of Refills',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Ordering Provider\'s DEA Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Pharmacist/Treatment Supplier\'s Verifier ID',
        opt: 'R',
        rep: 0
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
        desc: 'Requested Give Per (Time Unit)',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Requested Give Strength',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Requested Give Strength Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Indication',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Requested Give Rate Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Requested Give Rate Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Total Daily Dose',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Supplementary Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Requested Drug Strength Volume',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Requested Drug Strength Volume Units',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Medication Instance Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Segment Instance Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Mood Code',
        opt: 'R',
        rep: 1,
        table: 725
      },
      {
        dt: 'CWE',
        desc: 'Dispensing Pharmacy',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Dispensing Pharmacy Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'PL',
        desc: 'Deliver-to Patient Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Deliver-to Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XTN',
        desc: 'Pharmacy Phone Number',
        opt: 'R',
        rep: 0
      }
    ]
  },
  RXR: {
    desc: 'Pharmacy/Treatment Route',
    fields: [
      {
        dt: 'CWE',
        desc: 'Route',
        opt: 'C',
        rep: 1,
        table: 162
      },
      {
        dt: 'CWE',
        desc: 'Administration Site',
        opt: 'R',
        rep: 1,
        table: 550
      },
      {
        dt: 'CWE',
        desc: 'Administration Device',
        opt: 'R',
        rep: 1,
        table: 164
      },
      {
        dt: 'CWE',
        desc: 'Administration Method',
        opt: 'R',
        rep: 1,
        table: 165
      },
      {
        dt: 'CWE',
        desc: 'Routing Instruction',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Administration Site Modifier',
        opt: 'R',
        rep: 1,
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
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Accession Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Container Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Primary (Parent) Container Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Equipment Container Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Specimen Source',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Registration Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Container Status',
        opt: 'R',
        rep: 1,
        table: 370
      },
      {
        dt: 'CWE',
        desc: 'Carrier Type',
        opt: 'R',
        rep: 1,
        table: 378
      },
      {
        dt: 'EI',
        desc: 'Carrier Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NA',
        desc: 'Position in Carrier ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Tray Type - SAC',
        opt: 'R',
        rep: 1,
        table: 379
      },
      {
        dt: 'EI',
        desc: 'Tray Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NA',
        desc: 'Position in Tray ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Location',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'NM',
        desc: 'Container Height',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Container Diameter',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Barrier Delta',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Bottom Delta',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Container Height/Diameter/Delta Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Container Volume',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Available Specimen Volume',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Initial Specimen Volume',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Volume Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Separator Type',
        opt: 'R',
        rep: 1,
        table: 380
      },
      {
        dt: 'CWE',
        desc: 'Cap Type',
        opt: 'R',
        rep: 1,
        table: 381
      },
      {
        dt: 'CWE',
        desc: 'Additive',
        opt: 'R',
        rep: 0,
        table: 371
      },
      {
        dt: 'CWE',
        desc: 'Specimen Component',
        opt: 'R',
        rep: 1,
        table: 372
      },
      {
        dt: 'SN',
        desc: 'Dilution Factor',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Treatment',
        opt: 'R',
        rep: 1,
        table: 373
      },
      {
        dt: 'SN',
        desc: 'Temperature',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Hemolysis Index',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Hemolysis Index Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Lipemia Index',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Lipemia Index Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Icterus Index',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Icterus Index Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Fibrin Index',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Fibrin Index Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'System Induced Contaminants',
        opt: 'R',
        rep: 0,
        table: 374
      },
      {
        dt: 'CWE',
        desc: 'Drug Interference',
        opt: 'R',
        rep: 0,
        table: 382
      },
      {
        dt: 'CWE',
        desc: 'Artificial Blood',
        opt: 'R',
        rep: 1,
        table: 375
      },
      {
        dt: 'CWE',
        desc: 'Special Handling Code',
        opt: 'R',
        rep: 0,
        table: 376
      },
      {
        dt: 'CWE',
        desc: 'Other Environmental Factors',
        opt: 'R',
        rep: 0,
        table: 377
      }
    ]
  },
  SCD: {
    desc: 'Anti-Microbial Cycle Data',
    fields: [
      {
        dt: 'TM',
        desc: 'Cycle Start Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Cycle Count',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Temp Max',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Temp Min',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Load Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Condition Time ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Sterilize Time ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Exhaust Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Total Cycle Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Device Status ',
        opt: 'R',
        rep: 1,
        table: 682
      },
      {
        dt: 'DTM',
        desc: 'Cycle Start Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Dry Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Leak Rate',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Control Temperature',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Sterilizer Temperature',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TM',
        desc: 'Cycle Complete Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Under Temperature',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Over Temperature',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Abort Cycle',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CNE',
        desc: 'Alarm',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CNE',
        desc: 'Long in Charge Phase',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CNE',
        desc: 'Long in Exhaust Phase',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CNE',
        desc: 'Long in Fast Exhaust Phase',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CNE',
        desc: 'Reset',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'XCN',
        desc: 'Operator - Unload',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Door Open',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CNE',
        desc: 'Reading Failure',
        opt: 'R',
        rep: 1,
        table: 532
      },
      {
        dt: 'CWE',
        desc: 'Cycle Type',
        opt: 'R',
        rep: 1,
        table: 702
      },
      {
        dt: 'CQ',
        desc: 'Thermal Rinse Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Wash Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Injection Rate',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Procedure Code',
        opt: 'R',
        rep: 1,
        table: 88
      },
      {
        dt: 'CX',
        desc: 'Patient Identifier List',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Attending Doctor',
        opt: 'R',
        rep: 1,
        table: 10
      },
      {
        dt: 'SN',
        desc: 'Dilution Factor',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Fill Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CQ',
        desc: 'Inlet Temperature',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Filler Appointment ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Occurrence Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Placer Group Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Schedule ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Event Reason',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Appointment Reason',
        opt: 'R',
        rep: 1,
        table: 276
      },
      {
        dt: 'CWE',
        desc: 'Appointment Type',
        opt: 'R',
        rep: 1,
        table: 277
      },
      {
        dt: 'ST',
        desc: 'Appointment Duration',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Appointment Duration Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Appointment Timing Quantity',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Placer Contact Person',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Placer Contact Phone Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Placer Contact Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Placer Contact Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Filler Contact Person',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Filler Contact Phone Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XAD',
        desc: 'Filler Contact Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Filler Contact Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Entered by Person',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'XTN',
        desc: 'Entered by Phone Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'PL',
        desc: 'Entered by Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Parent Placer Appointment ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Parent Filler Appointment ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Filler Status Code',
        opt: 'R',
        rep: 1,
        table: 278
      },
      {
        dt: 'EI',
        desc: 'Placer Order Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EI',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 0
      }
    ]
  },
  SCP: {
    desc: 'Sterilizer Configuration (Anti-Microbial Devices)',
    fields: [
      {
        dt: 'NM',
        desc: 'Number Of Decontamination/Sterilization Devices ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Labor Calculation Type',
        opt: 'R',
        rep: 1,
        table: 651
      },
      {
        dt: 'CWE',
        desc: 'Date Format',
        opt: 'R',
        rep: 1,
        table: 653
      },
      {
        dt: 'EI',
        desc: 'Device Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Device Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Device Model Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Device Type',
        opt: 'R',
        rep: 1,
        table: 657
      },
      {
        dt: 'CWE',
        desc: 'Lot Control',
        opt: 'R',
        rep: 1,
        table: 659
      }
    ]
  },
  SDD: {
    desc: 'Sterilization Device Data',
    fields: [
      {
        dt: 'EI',
        desc: 'Lot Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Device Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Device Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Device Data State',
        opt: 'R',
        rep: 1,
        table: 667
      },
      {
        dt: 'CWE',
        desc: 'Load Status',
        opt: 'R',
        rep: 1,
        table: 669
      },
      {
        dt: 'NM',
        desc: 'Control Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Operator Name',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Software Certified Version or Release Number',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Software Product Name',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Software Binary ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Software Product Information',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Software Install Date',
        opt: 'R',
        rep: 1
      }
    ]
  },
  SHP: {
    desc: 'Shipment',
    fields: [
      {
        dt: 'EI',
        desc: 'Shipment ID',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Internal Shipment ID',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Shipment Status',
        opt: 'R',
        rep: 1,
        table: 905
      },
      {
        dt: 'DTM',
        desc: 'Shipment Status Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Shipment Status Reason',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Shipment Priority',
        opt: 'R',
        rep: 1,
        table: 906
      },
      {
        dt: 'CWE',
        desc: 'Shipment Confidentiality',
        opt: 'R',
        rep: 0,
        table: 907
      },
      {
        dt: 'NM',
        desc: 'Number of Packages in Shipment',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Shipment Condition',
        opt: 'R',
        rep: 0,
        table: 544
      },
      {
        dt: 'CWE',
        desc: 'Shipment Handling Code',
        opt: 'R',
        rep: 0,
        table: 376
      },
      {
        dt: 'CWE',
        desc: 'Shipment Risk Code',
        opt: 'R',
        rep: 0,
        table: 489
      }
    ]
  },
  SID: {
    desc: 'Substance Identifier',
    fields: [
      {
        dt: 'CWE',
        desc: 'Application/Method Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Substance Lot Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Substance Container Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Substance Manufacturer Identifier ',
        opt: 'R',
        rep: 1,
        table: 385
      }
    ]
  },
  SLT: {
    desc: 'Sterilization Lot',
    fields: [
      {
        dt: 'EI',
        desc: 'Device Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Device Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Lot Number ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Item Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Bar Code',
        opt: 'R',
        rep: 1
      }
    ]
  },
  SPM: {
    desc: 'Specimen',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - SPM',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'EIP',
        desc: 'Specimen ID ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EIP',
        desc: 'Specimen Parent IDs',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Specimen Type ',
        opt: 'C',
        rep: 1,
        table: 487
      },
      {
        dt: 'CWE',
        desc: 'Specimen Type Modifier',
        opt: 'R',
        rep: 0,
        table: 541
      },
      {
        dt: 'CWE',
        desc: 'Specimen Additives',
        opt: 'R',
        rep: 0,
        table: 371
      },
      {
        dt: 'CWE',
        desc: 'Specimen Collection Method ',
        opt: 'R',
        rep: 1,
        table: 488
      },
      {
        dt: 'CWE',
        desc: 'Specimen Source Site',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Specimen Source Site Modifier',
        opt: 'R',
        rep: 0,
        table: 542
      },
      {
        dt: 'CWE',
        desc: 'Specimen Collection Site',
        opt: 'R',
        rep: 1,
        table: 543
      },
      {
        dt: 'CWE',
        desc: 'Specimen Role',
        opt: 'R',
        rep: 0,
        table: 369
      },
      {
        dt: 'CQ',
        desc: 'Specimen Collection Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Grouped Specimen Count',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Specimen Description ',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Specimen Handling Code ',
        opt: 'R',
        rep: 0,
        table: 376
      },
      {
        dt: 'CWE',
        desc: 'Specimen Risk Code',
        opt: 'R',
        rep: 0,
        table: 489
      },
      {
        dt: 'DR',
        desc: 'Specimen Collection Date/Time ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Specimen Received Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Specimen Expiration Date/Time',
        opt: 'R',
        rep: 1
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
        table: 490
      },
      {
        dt: 'CWE',
        desc: 'Specimen Quality ',
        opt: 'R',
        rep: 1,
        table: 491
      },
      {
        dt: 'CWE',
        desc: 'Specimen Appropriateness ',
        opt: 'R',
        rep: 1,
        table: 492
      },
      {
        dt: 'CWE',
        desc: 'Specimen Condition ',
        opt: 'R',
        rep: 0,
        table: 493
      },
      {
        dt: 'CQ',
        desc: 'Specimen Current Quantity ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Number of Specimen Containers',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Container Type ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Container Condition',
        opt: 'R',
        rep: 1,
        table: 544
      },
      {
        dt: 'CWE',
        desc: 'Specimen Child Role ',
        opt: 'R',
        rep: 1,
        table: 494
      },
      {
        dt: 'CX',
        desc: 'Accession ID',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CX',
        desc: 'Other Specimen ID',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EI',
        desc: 'Shipment ID',
        opt: 'R',
        rep: 1
      }
    ]
  },
  STF: {
    desc: 'Staff Identification',
    fields: [
      {
        dt: 'CWE',
        desc: 'Primary Key Value - STF',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CX',
        desc: 'Staff Identifier List',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XPN',
        desc: 'Staff Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Staff Type',
        opt: 'R',
        rep: 0,
        table: 182
      },
      {
        dt: 'CWE',
        desc: 'Administrative Sex',
        opt: 'R',
        rep: 1,
        table: 1
      },
      {
        dt: 'DTM',
        desc: 'Date/Time of Birth',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Department',
        opt: 'R',
        rep: 0,
        table: 184
      },
      {
        dt: 'CWE',
        desc: 'Hospital Service - STF',
        opt: 'R',
        rep: 0,
        table: 69
      },
      {
        dt: 'XTN',
        desc: 'Phone',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XAD',
        desc: 'Office/Home Address/Birthplace',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DIN',
        desc: 'Institution Activation Date',
        opt: 'R',
        rep: 0,
        table: 537
      },
      {
        dt: 'DIN',
        desc: 'Institution Inactivation Date',
        opt: 'R',
        rep: 0,
        table: 537
      },
      {
        dt: 'CWE',
        desc: 'Backup Person ID',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'E-Mail Address',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Preferred Method of Contact',
        opt: 'R',
        rep: 1,
        table: 185
      },
      {
        dt: 'CWE',
        desc: 'Marital Status',
        opt: 'R',
        rep: 1,
        table: 2
      },
      {
        dt: 'ST',
        desc: 'Job Title',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'JCC',
        desc: 'Job Code/Class',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Employment Status Code',
        opt: 'R',
        rep: 1,
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
        rep: 1
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
        desc: 'Auto Ins Expires',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Date Last DMV Review',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Date Next DMV Review',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Race',
        opt: 'R',
        rep: 1,
        table: 5
      },
      {
        dt: 'CWE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 1,
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
        dt: 'CWE',
        desc: 'Citizenship',
        opt: 'R',
        rep: 0,
        table: 171
      },
      {
        dt: 'DTM',
        desc: 'Date/Time of Death',
        opt: 'R',
        rep: 1
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
        table: 538
      },
      {
        dt: 'DR',
        desc: 'Institution Relationship Period',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Expected Return Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Cost Center Code',
        opt: 'R',
        rep: 0,
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
        table: 540
      },
      {
        dt: 'CWE',
        desc: 'Generic resource type or category',
        opt: 'R',
        rep: 0,
        table: 771
      },
      {
        dt: 'CWE',
        desc: 'Religion',
        opt: 'R',
        rep: 1,
        table: 6
      },
      {
        dt: 'ED',
        desc: 'Signature ',
        opt: 'R',
        rep: 1
      }
    ]
  },
  STZ: {
    desc: 'Sterilization Parameter',
    fields: [
      {
        dt: 'CWE',
        desc: 'Sterilization Type',
        opt: 'R',
        rep: 1,
        table: 806
      },
      {
        dt: 'CWE',
        desc: 'Sterilization Cycle',
        opt: 'R',
        rep: 1,
        table: 702
      },
      {
        dt: 'CWE',
        desc: 'Maintenance Cycle',
        opt: 'R',
        rep: 1,
        table: 809
      },
      {
        dt: 'CWE',
        desc: 'Maintenance Type ',
        opt: 'R',
        rep: 1,
        table: 811
      }
    ]
  },
  TCC: {
    desc: 'Test Code Configuration',
    fields: [
      {
        dt: 'CWE',
        desc: 'Universal Service Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Equipment Test Application Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Specimen Source',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'SN',
        desc: 'Auto-Dilution Factor Default',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'SN',
        desc: 'Rerun Dilution Factor Default',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'SN',
        desc: 'Pre-Dilution Factor Default',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'SN',
        desc: 'Endogenous Content of Pre-Dilution Diluent',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Inventory Limits Warning Level',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Processing Type',
        opt: 'R',
        rep: 1,
        table: 388
      }
    ]
  },
  TCD: {
    desc: 'Test Code Detail',
    fields: [
      {
        dt: 'CWE',
        desc: 'Universal Service Identifier',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'SN',
        desc: 'Auto-Dilution Factor ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'SN',
        desc: 'Rerun Dilution Factor ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'SN',
        desc: 'Pre-Dilution Factor ',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'SN',
        desc: 'Endogenous Content of Pre-Dilution Diluent',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Analyte Repeat Status',
        opt: 'R',
        rep: 1,
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
        rep: 1
      },
      {
        dt: 'RPT',
        desc: 'Repeat Pattern',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'TM',
        desc: 'Explicit Time',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CQ',
        desc: 'Relative Time and Units',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CQ',
        desc: 'Service Duration',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Start date/time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'End date/time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CWE',
        desc: 'Priority',
        opt: 'R',
        rep: 0,
        table: 485
      },
      {
        dt: 'TX',
        desc: 'Condition text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Text instruction',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Conjunction',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 472
      },
      {
        dt: 'CQ',
        desc: 'Occurrence duration',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Total occurrences',
        opt: 'R',
        rep: 1
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
        rep: 0
      },
      {
        dt: 'EI',
        desc: 'Related Filler Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EI',
        desc: 'Related Placer Group Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ID',
        desc: 'Sequence Condition Code',
        opt: 'R',
        rep: 1,
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
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Cyclic Group Maximum Number of Repeats',
        opt: 'R',
        rep: 1
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
        dt: 'CWE',
        desc: 'Document Type ',
        opt: 'C',
        rep: 1,
        table: 270
      },
      {
        dt: 'ID',
        desc: 'Document Content Presentation',
        opt: 'R',
        rep: 1,
        table: 191
      },
      {
        dt: 'DTM',
        desc: 'Activity Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Primary Activity Provider Code/Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Origination Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Transcription Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Edit Date/Time',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Originator Code/Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Assigned Document Authenticator',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Transcriptionist Code/Name',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EI',
        desc: 'Unique Document Number',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Parent Document Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Placer Order Number',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'EI',
        desc: 'Filler Order Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Unique Document File Name',
        opt: 'R',
        rep: 1
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
        len: 1,
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
        rep: 1
      },
      {
        dt: 'PPN',
        desc: 'Authentication Person, Time Stamp (set) ',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'XCN',
        desc: 'Distributed Copies (Code and Name of Recipient(s) )',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Folder Assignment',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'Document Title',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'Agreed Due Date/Time   ',
        opt: 'R',
        rep: 1
      }
    ]
  },
  UAC: {
    desc: 'User Authentication Credential Segment',
    fields: [
      {
        dt: 'CWE',
        desc: 'User Authentication Credential Type Code',
        opt: 'C',
        rep: 1,
        table: 615
      },
      {
        dt: 'ED',
        desc: 'User Authentication Credential  ',
        opt: 'C',
        rep: 1
      }
    ]
  },
  UB1: {
    desc: 'UB82',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID   UB1',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Blood Deductible',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Blood Furnished Pints',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Blood Replaced Pints',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Blood Not Replaced Pints',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Co Insurance Days',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Condition Code',
        opt: 'W',
        rep: 5
      },
      {
        dt: 'ST',
        desc: 'Covered Days',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Non Covered Days',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Value Amount & Code',
        opt: 'W',
        rep: 8
      },
      {
        dt: 'ST',
        desc: 'Number Of Grace Days',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Special Program Indicator',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'PSRO/UR Approval Indicator',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'PSRO/UR Approved Stay Fm',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'PSRO/UR Approved Stay To',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Occurrence',
        opt: 'W',
        rep: 5
      },
      {
        dt: 'ST',
        desc: 'Occurrence Span',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Occur Span Start Date',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Occur Span End Date',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'UB 82 Locator 2',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'UB 82 Locator 9',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'UB 82 Locator 27',
        opt: 'W',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'UB 82 Locator 45',
        opt: 'W',
        rep: 1
      }
    ]
  },
  UB2: {
    desc: 'Uniform Billing Data',
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
        desc: 'Co-Insurance Days (9)',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'CWE',
        desc: 'Condition Code (24-30)',
        opt: 'R',
        rep: 7,
        table: 43
      },
      {
        dt: 'ST',
        desc: 'Covered Days (7)',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'ST',
        desc: 'Non-Covered Days (8)',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'UVC',
        desc: 'Value Amount & Code',
        opt: 'R',
        rep: 12
      },
      {
        dt: 'OCD',
        desc: 'Occurrence Code & Date (32-35)',
        opt: 'R',
        rep: 8
      },
      {
        dt: 'OSP',
        desc: 'Occurrence Span Code/Dates (36)',
        opt: 'R',
        rep: 2
      },
      {
        dt: 'ST',
        desc: 'Uniform Billing Locator 2 (State)',
        opt: 'R',
        rep: 2,
        len: 29
      },
      {
        dt: 'ST',
        desc: 'Uniform Billing 11 (State)',
        opt: 'R',
        rep: 2,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Uniform Billing 31 (National)',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'ST',
        desc: 'Document Control Number',
        opt: 'R',
        rep: 3,
        len: 23
      },
      {
        dt: 'ST',
        desc: 'Uniform Billing 49 (National)',
        opt: 'R',
        rep: 23,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Uniform Billing 56 (State)',
        opt: 'R',
        rep: 5,
        len: 14
      },
      {
        dt: 'ST',
        desc: 'Uniform Billing 57 (National)',
        opt: 'R',
        rep: 1,
        len: 27
      },
      {
        dt: 'ST',
        desc: 'Uniform Billing 78 (State)',
        opt: 'R',
        rep: 2,
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
        dt: 'DTM',
        desc: 'R/U Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Report Priority',
        opt: 'R',
        rep: 1,
        table: 109
      },
      {
        dt: 'XCN',
        desc: 'R/U Who Subject Definition',
        opt: 'C',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'R/U What Subject Definition',
        opt: 'R',
        rep: 0,
        table: 48
      },
      {
        dt: 'CWE',
        desc: 'R/U What Department Code',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'R/U Display/Print Locations',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ID',
        desc: 'R/U Results Level',
        opt: 'R',
        rep: 1,
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
        rep: 0
      },
      {
        dt: 'DTM',
        desc: 'R/U When Data Start Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'R/U When Data End Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'R/U What User Qualifier',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ST',
        desc: 'R/U Other Results Subject Definition',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'ID',
        desc: 'R/U Which Date/Time Qualifier',
        opt: 'R',
        rep: 0,
        table: 156
      },
      {
        dt: 'ID',
        desc: 'R/U Which Date/Time Status Qualifier',
        opt: 'R',
        rep: 0,
        table: 157
      },
      {
        dt: 'ID',
        desc: 'R/U Date/Time Selection Qualifier',
        opt: 'R',
        rep: 0,
        table: 158
      },
      {
        dt: 'TQ',
        desc: 'R/U Quantity/Timing Qualifier',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Documented Date/Time',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'DTM',
        desc: 'Stated Variance Date/Time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'XCN',
        desc: 'Variance Originator',
        opt: 'R',
        rep: 0
      },
      {
        dt: 'CWE',
        desc: 'Variance Classification',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Variance Description',
        opt: 'R',
        rep: 0
      }
    ]
  },
  VND: {
    desc: 'Purchasing Vendor',
    fields: [
      {
        dt: 'SI',
        desc: 'Set Id - VND',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'EI',
        desc: 'Vendor Identifier ',
        opt: 'C',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Vendor Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Vendor Catalog Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CNE',
        desc: 'Primary Vendor Indicator',
        opt: 'R',
        rep: 1,
        table: 532
      }
    ]
  }
};

module.exports = segments;
