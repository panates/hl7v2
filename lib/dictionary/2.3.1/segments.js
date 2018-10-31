const segments = {
  ACC: {
    desc: 'Accident segment',
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
        len: 60
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
        len: 60
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
      }
    ]
  },
  ADD: {
    desc: 'Addendum segment',
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
  AIG: {
    desc: 'Appointment information - general resource segment',
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
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Resource Type',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Resource Group',
        opt: 'R',
        rep: 0,
        len: 200
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
        len: 200
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
        len: 200
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
        len: 200
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
        len: 200
      }
    ]
  },
  AIL: {
    desc: 'Appointment information - location resource segment',
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
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Location Type-AIL',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Location Group',
        opt: 'R',
        rep: 1,
        len: 200
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
        len: 200
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
        len: 200
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
        len: 200
      }
    ]
  },
  AIP: {
    desc: 'Appointment information - personnel resource segment',
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
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Resource Role',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Resource Group',
        opt: 'R',
        rep: 1,
        len: 200
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
        len: 200
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
        len: 200
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
        len: 200
      }
    ]
  },
  AIS: {
    desc: 'Appointment information - service segment',
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
        desc: 'Universal Service ID',
        opt: 'C',
        rep: 1,
        len: 200
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
        len: 200
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
        len: 200
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
        len: 200
      }
    ]
  },
  AL1: {
    desc: 'Patient allergy information segment',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - AL1',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'IS',
        desc: 'Allergy Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 127
      },
      {
        dt: 'CE',
        desc: 'Allergy Code/Mnemonic/Description',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'IS',
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
    desc: 'Appointment preferences segment',
    fields: [
      {
        dt: 'SCV',
        desc: 'Time Selection Criteria',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'SCV',
        desc: 'Resource Selection Criteria',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'SCV',
        desc: 'Location Selection Criteria',
        opt: 'R',
        rep: 0,
        len: 80
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
    desc: 'Appointment request segment',
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
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Request Event Reason',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Appointment Reason',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Appointment Type',
        opt: 'R',
        rep: 1,
        len: 200
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
        len: 200
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
        len: 48
      },
      {
        dt: 'XTN',
        desc: 'Placer Contact Phone Number',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'XAD',
        desc: 'Placer Contact Address',
        opt: 'R',
        rep: 0,
        len: 106
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
        desc: 'Entered by Person',
        opt: 'C',
        rep: 0,
        len: 48
      },
      {
        dt: 'XTN',
        desc: 'Entered by Phone Number',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'PL',
        desc: 'Entered by Location',
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
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Authorizing Payor, Company ID',
        opt: 'C',
        rep: 1,
        len: 200
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
    desc: 'Batch header segment',
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
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Batch Receiving Facility',
        opt: 'R',
        rep: 1,
        len: 20
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
  BLG: {
    desc: 'Billing segment',
    fields: [
      {
        dt: 'CCD',
        desc: 'When to Charge',
        opt: 'R',
        rep: 1,
        len: 40
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
      }
    ]
  },
  BTS: {
    desc: 'Batch trailer segment',
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
  CDM: {
    desc: 'Charge description master segment',
    fields: [
      {
        dt: 'CE',
        desc: 'Primary Key Value - CDM',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Charge Code Alias',
        opt: 'R',
        rep: 0,
        len: 200
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Procedure Code',
        opt: 'R',
        rep: 0,
        len: 80
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
        len: 60
      },
      {
        dt: 'NM',
        desc: 'Resource Load',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'CK',
        desc: 'Contract Number',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'XON',
        desc: 'Contract Organization',
        opt: 'R',
        rep: 0,
        len: 200
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
  CM0: {
    desc: 'Clinical study master segment',
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
        rep: 3,
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
        len: 60
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
        len: 60
      },
      {
        dt: 'XTN',
        desc: 'Contact\'s Tel. Number',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'XAD',
        desc: 'Contact\'s Address',
        opt: 'R',
        rep: 0,
        len: 100
      }
    ]
  },
  CM1: {
    desc: 'Clinical study phase master segment',
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
        len: 60
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
    desc: 'Clinical study schedule master segment',
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
        len: 60
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
        rep: 200,
        len: 60
      }
    ]
  },
  CSP: {
    desc: 'Clinical study phase segment',
    fields: [
      {
        dt: 'CE',
        desc: 'Study Phase Identifier',
        opt: 'C',
        rep: 1,
        len: 60
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
        len: 60
      }
    ]
  },
  CSR: {
    desc: 'Clinical study registration segment',
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
        len: 60
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
        len: 60
      },
      {
        dt: 'XCN',
        desc: 'Study Authorizing Provider',
        opt: 'C',
        rep: 0,
        len: 60
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
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Study Randomization Date/time',
        opt: 'R',
        rep: 3,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Randomized Study Arm',
        opt: 'R',
        rep: 3,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Stratum for Study Randomization',
        opt: 'R',
        rep: 3,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Patient Evaluability Status',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 60
      }
    ]
  },
  CSS: {
    desc: 'Clinical study data schedule segment',
    fields: [
      {
        dt: 'CE',
        desc: 'Study Scheduled Time Point',
        opt: 'C',
        rep: 1,
        len: 60
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
        rep: 3,
        len: 60
      }
    ]
  },
  CTD: {
    desc: 'Contact Data',
    fields: [
      {
        dt: 'CE',
        desc: 'Contact Role',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'XPN',
        desc: 'Contact Name',
        opt: 'R',
        rep: 0,
        len: 106
      },
      {
        dt: 'XAD',
        desc: 'Contact Address',
        opt: 'R',
        rep: 0,
        len: 200
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
        len: 100
      },
      {
        dt: 'CE',
        desc: 'Preferred Method Of Contact',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'PI',
        desc: 'Contact Identifiers',
        opt: 'R',
        rep: 0,
        len: 100
      }
    ]
  },
  CTI: {
    desc: 'Clinical trial identification segment',
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Study Scheduled Time Point',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  DB1: {
    desc: 'Disability segment',
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
        len: 32
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
    desc: 'Diagnosis segment',
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
        len: 60
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Diagnostic Related Group',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 60
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
        len: 60
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
      }
    ]
  },
  DRG: {
    desc: 'Diagnosis related group segment',
    fields: [
      {
        dt: 'CE',
        desc: 'Diagnostic Related Group',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 60
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
      }
    ]
  },
  DSC: {
    desc: 'Continuation pointer segment',
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
    desc: 'Display data segment',
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
  EQL: {
    desc: 'Embedded query language segment',
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
        desc: 'Query/ Response Format Code',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 106
      },
      {
        dt: 'CE',
        desc: 'EQL  Query Name',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'EQL  Query Statement',
        opt: 'C',
        rep: 1,
        len: 4096
      }
    ]
  },
  ERQ: {
    desc: 'Event replay query segment',
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
        len: 60
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
    desc: 'Error segment',
    fields: [
      {
        dt: 'ELD',
        desc: 'Error Code and Location',
        opt: 'C',
        rep: 0,
        len: 80
      }
    ]
  },
  EVN: {
    desc: 'Event type segment',
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
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Event Occurred',
        opt: 'R',
        rep: 1,
        len: 26
      }
    ]
  },
  FAC: {
    desc: 'Facility segment',
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
        len: 200
      },
      {
        dt: 'XTN',
        desc: 'Facility Telecommunication',
        opt: 'C',
        rep: 1,
        len: 44
      },
      {
        dt: 'XCN',
        desc: 'Contact Person',
        opt: 'R',
        rep: 0,
        len: 60
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
        len: 200
      },
      {
        dt: 'XTN',
        desc: 'Contact Telecommunication',
        opt: 'R',
        rep: 0,
        len: 44
      },
      {
        dt: 'XCN',
        desc: 'Signature Authority',
        opt: 'C',
        rep: 0,
        len: 60
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
        len: 200
      },
      {
        dt: 'XTN',
        desc: 'Signature Authority Telecommunication',
        opt: 'R',
        rep: 1,
        len: 44
      }
    ]
  },
  FHS: {
    desc: 'File header segment',
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
        len: 15
      },
      {
        dt: 'ST',
        desc: 'File Receiving Facility',
        opt: 'R',
        rep: 1,
        len: 20
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
    desc: 'Financial transaction segment',
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
        dt: 'TS',
        desc: 'Transaction Date',
        opt: 'C',
        rep: 1,
        len: 26
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
        len: 80
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Insurance Plan ID',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 60
      },
      {
        dt: 'XCN',
        desc: 'Performed By Code',
        opt: 'R',
        rep: 0,
        len: 120
      },
      {
        dt: 'XCN',
        desc: 'Ordered By Code',
        opt: 'R',
        rep: 0,
        len: 120
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
        len: 120
      },
      {
        dt: 'CE',
        desc: 'Procedure Code',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Procedure Code Modifier',
        opt: 'R',
        rep: 0,
        len: 80
      }
    ]
  },
  FTS: {
    desc: 'File trailer segment',
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
        len: 80
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
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Goal Management Discipline',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Current Goal Review Status',
        opt: 'R',
        rep: 1,
        len: 80
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
        len: 80
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
        len: 80
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
        len: 80
      },
      {
        dt: 'XPN',
        desc: 'Goal Target Name',
        opt: 'R',
        rep: 0,
        len: 80
      }
    ]
  },
  GT1: {
    desc: 'Guarantor segment',
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
        len: 59
      },
      {
        dt: 'XPN',
        desc: 'Guarantor Name',
        opt: 'C',
        rep: 0,
        len: 48
      },
      {
        dt: 'XPN',
        desc: 'Guarantor Spouse Name',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'XAD',
        desc: 'Guarantor Address',
        opt: 'R',
        rep: 0,
        len: 106
      },
      {
        dt: 'XTN',
        desc: 'Guarantor Ph Num-Home',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'XTN',
        desc: 'Guarantor Ph Num-Business',
        opt: 'R',
        rep: 0,
        len: 40
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
        desc: 'Guarantor Sex',
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
        len: 80
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
        len: 130
      },
      {
        dt: 'XAD',
        desc: 'Guarantor Employer Address',
        opt: 'R',
        rep: 0,
        len: 106
      },
      {
        dt: 'XTN',
        desc: 'Guarantor Employer Phone Number',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'CX',
        desc: 'Guarantor Employee ID Number',
        opt: 'R',
        rep: 0,
        len: 20
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
        len: 130
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
        len: 80
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
        len: 80
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
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Guarantor Marital Status Code',
        opt: 'R',
        rep: 1,
        len: 80
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
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Primary Language',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 80
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
        len: 80
      },
      {
        dt: 'XPN',
        desc: 'Mother s Maiden Name',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'CE',
        desc: 'Nationality',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'XPN',
        desc: 'Contact Person s Name',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'XTN',
        desc: 'Contact Person s Telephone Number',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'CE',
        desc: 'Contact Reason',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'IS',
        desc: 'Contact Relationship',
        opt: 'R',
        rep: 1,
        len: 2,
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
        desc: 'Guarantor Employer s Organization Name',
        opt: 'R',
        rep: 0,
        len: 130
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
        len: 80
      }
    ]
  },
  IAM: {
    desc: 'Patient adverse reaction information - unique iden',
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
        len: 250
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
        len: 250
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
        len: 250
      },
      {
        dt: 'EI',
        desc: 'Allergy Unique Identifier',
        opt: 'C',
        rep: 1,
        len: 80
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
        len: 250
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
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Alert Device Code',
        opt: 'R',
        rep: 1,
        len: 250
      },
      {
        dt: 'CE',
        desc: 'Allergy Clinical Status Code',
        opt: 'R',
        rep: 1,
        len: 250
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
  IN1: {
    desc: 'Insurance segment',
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
        len: 60
      },
      {
        dt: 'CX',
        desc: 'Insurance Company ID',
        opt: 'C',
        rep: 0,
        len: 59
      },
      {
        dt: 'XON',
        desc: 'Insurance Company Name',
        opt: 'R',
        rep: 0,
        len: 130
      },
      {
        dt: 'XAD',
        desc: 'Insurance Company Address',
        opt: 'R',
        rep: 0,
        len: 106
      },
      {
        dt: 'XPN',
        desc: 'Insurance Co Contact Person',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'XTN',
        desc: 'Insurance Co Phone Number',
        opt: 'R',
        rep: 0,
        len: 40
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
        len: 130
      },
      {
        dt: 'CX',
        desc: 'Insured s Group Emp ID',
        opt: 'R',
        rep: 0,
        len: 12
      },
      {
        dt: 'XON',
        desc: 'Insured s Group Emp Name',
        opt: 'R',
        rep: 0,
        len: 130
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
        len: 55
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
        len: 48
      },
      {
        dt: 'CE',
        desc: 'Insured s Relationship To Patient',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'TS',
        desc: 'Insured s Date Of Birth',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'XAD',
        desc: 'Insured s Address',
        opt: 'R',
        rep: 0,
        len: 106
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
        len: 60
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
        desc: 'Insured s Employment Status',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'IS',
        desc: 'Insured s Sex',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 1
      },
      {
        dt: 'XAD',
        desc: 'Insured s Employer s Address',
        opt: 'R',
        rep: 0,
        len: 106
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
        desc: 'Insured s ID Number',
        opt: 'R',
        rep: 0,
        len: 12
      }
    ]
  },
  IN2: {
    desc: 'Insurance additional information segment',
    fields: [
      {
        dt: 'CX',
        desc: 'Insured s Employee ID',
        opt: 'R',
        rep: 0,
        len: 59
      },
      {
        dt: 'ST',
        desc: 'Insured s Social Security Number',
        opt: 'R',
        rep: 1,
        len: 11
      },
      {
        dt: 'XCN',
        desc: 'Insured s Employer s Name and ID',
        opt: 'R',
        rep: 0,
        len: 130
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
        len: 48
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
        len: 48
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
        len: 80
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
        len: 48
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
        len: 59
      },
      {
        dt: 'CX',
        desc: 'Payor Subscriber ID',
        opt: 'R',
        rep: 0,
        len: 59
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
        len: 25
      },
      {
        dt: 'PTA',
        desc: 'Policy Type/Amount',
        opt: 'R',
        rep: 0,
        len: 25
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
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Primary Language',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 80
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
        len: 80
      },
      {
        dt: 'XPN',
        desc: 'Mother s Maiden Name',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'CE',
        desc: 'Nationality',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Marital Status',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'DT',
        desc: 'Insured s Employment Start Date',
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
        len: 48
      },
      {
        dt: 'XTN',
        desc: 'Employer Contact Person Phone Number',
        opt: 'R',
        rep: 0,
        len: 40
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
        desc: 'Insured s Contact Person s Name',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'XTN',
        desc: 'Insured s Contact Person Phone Number',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'IS',
        desc: 'Insured s Contact Person Reason',
        opt: 'R',
        rep: 0,
        len: 2,
        table: 222
      },
      {
        dt: 'DT',
        desc: 'Relationship To The Patient Start Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Relationship To The Patient Stop Date',
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
        len: 40
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Guarantor s Relationship To Insured',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XTN',
        desc: 'Insured s Phone Number - Home',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'XTN',
        desc: 'Insured s Employer Phone Number',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'CE',
        desc: 'Military Handicapped Program',
        opt: 'R',
        rep: 1,
        len: 60
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
        desc: 'Insured Organization Name And ID',
        opt: 'R',
        rep: 0,
        len: 130
      },
      {
        dt: 'XON',
        desc: 'Insured Employer Organization Name And ID',
        opt: 'R',
        rep: 0,
        len: 130
      },
      {
        dt: 'CE',
        desc: 'Race',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'HCFA Patient s Relationship to Insured',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  IN3: {
    desc: 'Insurance additional information, certification segment',
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
        len: 59
      },
      {
        dt: 'XCN',
        desc: 'Certified By',
        opt: 'R',
        rep: 0,
        len: 60
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
        len: 10
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
        len: 60
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
        len: 3
      },
      {
        dt: 'CE',
        desc: 'Non-Concur Code/Description',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 60
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
        len: 40
      },
      {
        dt: 'CE',
        desc: 'Appeal Reason',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Certification Agency',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'XTN',
        desc: 'Certification Agency Phone Number',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'PCF',
        desc: 'Pre-Certification Req/Window',
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
        len: 60
      }
    ]
  },
  LCC: {
    desc: 'Location charge code segment',
    fields: [
      {
        dt: 'PL',
        desc: 'Primary Key Value - LCC',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'IS',
        desc: 'Location Department',
        opt: 'C',
        rep: 1,
        len: 10,
        table: 264
      },
      {
        dt: 'CE',
        desc: 'Accommodation Type',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Charge Code',
        opt: 'C',
        rep: 0,
        len: 60
      }
    ]
  },
  LCH: {
    desc: 'Location characteristic segment',
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
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Location Characteristic Value',
        opt: 'R',
        rep: 1,
        len: 80
      }
    ]
  },
  LDP: {
    desc: 'Location department segment',
    fields: [
      {
        dt: 'PL',
        desc: 'Primary Key Value - LDP',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'IS',
        desc: 'Location Department',
        opt: 'C',
        rep: 1,
        len: 10,
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
        len: 60
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
        len: 80
      },
      {
        dt: 'XTN',
        desc: 'Contact Phone',
        opt: 'R',
        rep: 1,
        len: 40
      }
    ]
  },
  LOC: {
    desc: 'Location identification segment',
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
        len: 90
      },
      {
        dt: 'XAD',
        desc: 'Location Address',
        opt: 'R',
        rep: 0,
        len: 106
      },
      {
        dt: 'XTN',
        desc: 'Location Phone',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'CE',
        desc: 'License Number',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'IS',
        desc: 'Location Equipment',
        opt: 'R',
        rep: 0,
        len: 3,
        table: 261
      }
    ]
  },
  LRL: {
    desc: 'Location relationship segment',
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
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XON',
        desc: 'Organizational Location Relationship Value',
        opt: 'R',
        rep: 0,
        len: 80
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
    desc: 'Master file acknowledgment segment',
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Primary Key Value   MFA',
        opt: 'C',
        rep: 0,
        len: 60
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
    desc: 'Master file entry segment',
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
    desc: 'Master file identification segment',
    fields: [
      {
        dt: 'CE',
        desc: 'Master File Identifier',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'HD',
        desc: 'Master File Application Identifier',
        opt: 'R',
        rep: 1,
        len: 180
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
    desc: 'Merge patient information segment-',
    fields: [
      {
        dt: 'CX',
        desc: 'Prior Patient Identifier List',
        opt: 'C',
        rep: 0,
        len: 20
      },
      {
        dt: 'CX',
        desc: 'Prior Alternate Patient ID',
        opt: 'R',
        rep: 0,
        len: 20
      },
      {
        dt: 'CX',
        desc: 'Prior Patient Account Number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CX',
        desc: 'Prior Patient ID',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CX',
        desc: 'Prior Visit Number',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CX',
        desc: 'Prior Alternate Visit ID',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'XPN',
        desc: 'Prior Patient Name',
        opt: 'R',
        rep: 0,
        len: 48
      }
    ]
  },
  MSA: {
    desc: 'Message acknowledgment segment',
    fields: [
      {
        dt: 'ID',
        desc: 'Acknowledgement Code',
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
    desc: 'Message header segment',
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
        len: 180
      },
      {
        dt: 'HD',
        desc: 'Sending Facility',
        opt: 'R',
        rep: 1,
        len: 180
      },
      {
        dt: 'HD',
        desc: 'Receiving Application',
        opt: 'R',
        rep: 1,
        len: 180
      },
      {
        dt: 'HD',
        desc: 'Receiving Facility',
        opt: 'R',
        rep: 1,
        len: 180
      },
      {
        dt: 'TS',
        desc: 'Date/Time Of Message',
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
        dt: 'MSG',
        desc: 'Message Type',
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
        len: 2
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
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Alternate Character Set Handling Scheme',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 356
      }
    ]
  },
  NCK: {
    desc: 'System Clock',
    fields: [
      {
        dt: 'TS',
        desc: 'System Date/Time',
        opt: 'R',
        rep: 1
      }
    ]
  },
  NK1: {
    desc: 'Next of kin / associated parties segment',
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
        dt: 'XAD',
        desc: 'Address',
        opt: 'R',
        rep: 0,
        len: 106
      },
      {
        dt: 'XTN',
        desc: 'Phone Number',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'XTN',
        desc: 'Business Phone Number',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'CE',
        desc: 'Contact Role',
        opt: 'R',
        rep: 1,
        len: 200
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
        len: 20
      },
      {
        dt: 'XON',
        desc: 'Organization Name - NK1',
        opt: 'R',
        rep: 0,
        len: 90
      },
      {
        dt: 'CE',
        desc: 'Marital Status',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'IS',
        desc: 'Sex',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 1
      },
      {
        dt: 'TS',
        desc: 'Date/Time Of Birth',
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
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Primary Language',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 80
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
        len: 80
      },
      {
        dt: 'XPN',
        desc: 'Mother s Maiden Name',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'CE',
        desc: 'Nationality',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Contact Reason',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'XPN',
        desc: 'Contact Person s Name',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'XTN',
        desc: 'Contact Person s Telephone Number',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'XAD',
        desc: 'Contact Person s Address',
        opt: 'R',
        rep: 0,
        len: 106
      },
      {
        dt: 'CX',
        desc: 'Next of Kin/Associated Party s Identifiers',
        opt: 'R',
        rep: 0,
        len: 32
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
        len: 80
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
      }
    ]
  },
  NPU: {
    desc: 'Bed status update segment',
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
    desc: 'Application status change',
    fields: [
      {
        dt: 'IS',
        desc: 'Network Change Type',
        opt: 'R',
        rep: 1,
        table: 333
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
        dt: 'ST',
        desc: 'Current Application',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Current Facility',
        opt: 'R',
        rep: 1
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
        dt: 'ST',
        desc: 'New Application',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'New Facility',
        opt: 'R',
        rep: 1
      }
    ]
  },
  NST: {
    desc: 'Application control level statistics',
    fields: [
      {
        dt: 'ID',
        desc: 'Statistics Available',
        opt: 'R',
        rep: 1,
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
        rep: 1
      },
      {
        dt: 'TS',
        desc: 'Statistics Start',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TS',
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
        desc: 'Network Errors',
        opt: 'R',
        rep: 1
      }
    ]
  },
  NTE: {
    desc: 'Notes and comments segment',
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
        len: 60
      }
    ]
  },
  OBR: {
    desc: 'Observation request segment',
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
        desc: 'Universal Service ID',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'ID',
        desc: 'Priority-OBR',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'TS',
        desc: 'Requested Date/time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Observation Date/Time  ',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Observation End Date/Time  ',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'CQ',
        desc: 'Collection Volume *',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'XCN',
        desc: 'Collector Identifier *',
        opt: 'R',
        rep: 0,
        len: 60
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
        dt: 'CE',
        desc: 'Danger Code',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Relevant Clinical Info.',
        opt: 'R',
        rep: 1,
        len: 300
      },
      {
        dt: 'TS',
        desc: 'Specimen Received Date/Time *',
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
        len: 120
      },
      {
        dt: 'XTN',
        desc: 'Order Callback Phone Number',
        opt: 'R',
        rep: 2,
        len: 40
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
        desc: 'Filler Field 1 +',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Filler Field 2 +',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'TS',
        desc: 'Results Rpt/Status Chng - Date/Time +',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'MOC',
        desc: 'Charge to Practice +',
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
        rep: 1,
        len: 200
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
        rep: 5,
        len: 150
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
        len: 300
      },
      {
        dt: 'NDL',
        desc: 'Principal Result Interpreter +',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'NDL',
        desc: 'Assistant Result Interpreter +',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'NDL',
        desc: 'Technician +',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'NDL',
        desc: 'Transcriptionist +',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'TS',
        desc: 'Scheduled Date/Time +',
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
        desc: 'Transport Logistics of Collected Sample *',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Collector s Comment *',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Transport Arrangement Responsibility',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Procedure Code',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Procedure Code Modifier',
        opt: 'R',
        rep: 0,
        len: 80
      }
    ]
  },
  OBX: {
    desc: 'Observation/result segment',
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
        opt: 'C',
        rep: 1,
        len: 3,
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
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'VARIES',
        desc: 'Observation Value',
        opt: 'R',
        rep: 0,
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
        len: 5,
        table: 78
      },
      {
        dt: 'NM',
        desc: 'Probability',
        opt: 'R',
        rep: 5,
        len: 5
      },
      {
        dt: 'ID',
        desc: 'Nature of Abnormal Test',
        opt: 'R',
        rep: 1,
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
        desc: 'Date Last Obs Normal Values',
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
        len: 60
      },
      {
        dt: 'XCN',
        desc: 'Responsible Observer',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Observation Method',
        opt: 'R',
        rep: 0,
        len: 60
      }
    ]
  },
  ODS: {
    desc: 'Dietary orders, supplements, and preferences segment',
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
    desc: 'Diet tray instructions segment',
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
        rep: 1,
        len: 80
      }
    ]
  },
  OM1: {
    desc: 'General segment',
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
        desc: 'Producer\'s Test/Observation ID',
        opt: 'R',
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
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'CE',
        desc: 'Producer ID',
        opt: 'R',
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
        desc: 'Other Test/Observation IDs for the Observation',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Other Names',
        opt: 'R',
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
        dt: 'CE',
        desc: 'Observation Producing Department/Section',
        opt: 'R',
        rep: 0,
        len: 1
      },
      {
        dt: 'XTN',
        desc: 'Telephone Number of Section',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'IS',
        desc: 'Nature of Test/Observation',
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
        len: 200
      },
      {
        dt: 'XAD',
        desc: 'Address of Outside Site',
        opt: 'R',
        rep: 0,
        len: 1000
      },
      {
        dt: 'XTN',
        desc: 'Phone Number of Outside Site',
        opt: 'R',
        rep: 1,
        len: 400
      },
      {
        dt: 'IS',
        desc: 'Confidentiality Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 177
      },
      {
        dt: 'CE',
        desc: 'Observations Required to Interpret the Obs',
        opt: 'R',
        rep: 1,
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
        rep: 1,
        len: 65536
      },
      {
        dt: 'CE',
        desc: 'Reflex Tests/Observations',
        opt: 'R',
        rep: 0,
        len: 200
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
        desc: 'Factors that may Effect the Observation',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'ST',
        desc: 'Test/Observation Performance Schedule',
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Point Versus Interval',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Target Anatomic Site Of Test',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Modality Of Imaging Measurement',
        opt: 'R',
        rep: 1,
        len: 200
      }
    ]
  },
  OM2: {
    desc: 'Numeric observation segment',
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
        len: 60
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
        len: 60
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
        rep: 1,
        len: 200
      },
      {
        dt: 'NR',
        desc: 'Critical Range for Ordinal & Continuous Obs',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'RFR',
        desc: 'Absolute Range for Ordinal & Continuous Obs',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'DLT',
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
    desc: 'Categorical test/observation segment',
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Valid Coded  Answers ',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Normal Text/Codes for Categorical Observations',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Abnormal Text/Codes for Categorical Observations',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Critical Text Codes for Categorical Observations',
        opt: 'R',
        rep: 1,
        len: 200
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
    desc: 'Observations that require specimens segment',
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
    desc: 'Observation batteries (sets',
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
    desc: 'Observations that are calculated from other observations segment',
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
  ORC: {
    desc: 'Common order segment',
    fields: [
      {
        dt: 'ID',
        desc: 'Order Control',
        opt: 'R',
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
        rep: 1,
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
        len: 120
      },
      {
        dt: 'XCN',
        desc: 'Verified By',
        opt: 'R',
        rep: 0,
        len: 120
      },
      {
        dt: 'XCN',
        desc: 'Ordering Provider',
        opt: 'R',
        rep: 0,
        len: 120
      },
      {
        dt: 'PL',
        desc: 'Enterer s Location',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'XTN',
        desc: 'Call Back Phone Number',
        opt: 'R',
        rep: 2,
        len: 40
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
        dt: 'XCN',
        desc: 'Action By',
        opt: 'R',
        rep: 0,
        len: 120
      },
      {
        dt: 'CE',
        desc: 'Advanced Beneficiary Notice Code',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'XON',
        desc: 'Ordering Facility Name',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'XAD',
        desc: 'Ordering Facility Address',
        opt: 'R',
        rep: 0,
        len: 106
      },
      {
        dt: 'XTN',
        desc: 'Ordering Facility Phone Number',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'XAD',
        desc: 'Ordering Provider Address',
        opt: 'R',
        rep: 0,
        len: 106
      }
    ]
  },
  PCR: {
    desc: 'Possible causal relationship segment',
    fields: [
      {
        dt: 'CE',
        desc: 'Implicated Product',
        opt: 'C',
        rep: 1,
        len: 60
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
        len: 60
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
        len: 60
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
        rep: 3,
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Product Evaluation Status',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Product Evaluation Results',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 90
      },
      {
        dt: 'XCN',
        desc: 'Patient Primary Care Provider Name & ID No.',
        opt: 'R',
        rep: 0,
        len: 90
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
        desc: 'Living Will',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 315
      },
      {
        dt: 'IS',
        desc: 'Organ Donor',
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
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Publicity Code',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'ID',
        desc: 'Protection Indicator',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      }
    ]
  },
  PDC: {
    desc: 'Product detail country segment',
    fields: [
      {
        dt: 'XON',
        desc: 'Manufacturer/Distributor',
        opt: 'C',
        rep: 0,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Country',
        opt: 'C',
        rep: 1,
        len: 60
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
        len: 60
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
        len: 60
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
    desc: 'Product experience observation segment',
    fields: [
      {
        dt: 'CE',
        desc: 'Event Identifiers Used',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Event Symptom/Diagnosis Code',
        opt: 'R',
        rep: 0,
        len: 60
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
        len: 106
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
        len: 60
      },
      {
        dt: 'XPN',
        desc: 'Primary Observer Name',
        opt: 'R',
        rep: 0,
        len: 46
      },
      {
        dt: 'XAD',
        desc: 'Primary Observer Address',
        opt: 'R',
        rep: 0,
        len: 106
      },
      {
        dt: 'XTN',
        desc: 'Primary Observer Telephone',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'ID',
        desc: 'Primary Observer s Qualification',
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
        desc: 'Primary Observer s identity May Be Divulged',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 243
      }
    ]
  },
  PES: {
    desc: 'Product experience sender segment',
    fields: [
      {
        dt: 'XON',
        desc: 'Sender Organization Name',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'XCN',
        desc: 'Sender Individual Name',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'XAD',
        desc: 'Sender Address',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'XTN',
        desc: 'Sender Telephone',
        opt: 'R',
        rep: 0,
        len: 44
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
    desc: 'Patient identification segment',
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
        len: 20
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
        len: 48
      },
      {
        dt: 'XPN',
        desc: 'Mother s Maiden Name',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'TS',
        desc: 'Date/Time Of Birth',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'IS',
        desc: 'Sex',
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
        len: 48
      },
      {
        dt: 'CE',
        desc: 'Race',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'XAD',
        desc: 'Patient Address',
        opt: 'R',
        rep: 0,
        len: 106
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
        len: 40
      },
      {
        dt: 'XTN',
        desc: 'Phone Number - Business',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'CE',
        desc: 'Primary Language',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Marital Status',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Religion',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CX',
        desc: 'Patient Account Number',
        opt: 'R',
        rep: 1,
        len: 20
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
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Ethnic Group',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'ST',
        desc: 'Birth Place',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Veterans Military Status',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Nationality',
        opt: 'R',
        rep: 1,
        len: 80
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
      }
    ]
  },
  PR1: {
    desc: 'Procedures segment',
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
        len: 2,
        table: 89
      },
      {
        dt: 'CE',
        desc: 'Procedure Code',
        opt: 'C',
        rep: 1,
        len: 80
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
        opt: 'C',
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
        len: 120
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
        len: 120
      },
      {
        dt: 'XCN',
        desc: 'Procedure Practitioner',
        opt: 'R',
        rep: 0,
        len: 230
      },
      {
        dt: 'CE',
        desc: 'Consent Code',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'NM',
        desc: 'Procedure Priority',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'CE',
        desc: 'Associated Diagnosis Code',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Procedure Code Modifier',
        opt: 'R',
        rep: 0,
        len: 80
      }
    ]
  },
  PRA: {
    desc: 'Practitioner detail segment',
    fields: [
      {
        dt: 'CE',
        desc: 'Primary Key Value - PRA',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Practitioner Group',
        opt: 'R',
        rep: 0,
        len: 60
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
        len: 100
      },
      {
        dt: 'PLN',
        desc: 'Practitioner ID Numbers',
        opt: 'R',
        rep: 0,
        len: 100
      },
      {
        dt: 'PIP',
        desc: 'Privileges',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'DT',
        desc: 'Date Entered Practice',
        opt: 'R',
        rep: 1,
        len: 8
      }
    ]
  },
  PRB: {
    desc: 'Problem Detail',
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
        len: 80
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
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Problem Management Discipline',
        opt: 'R',
        rep: 0,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Problem Persistence',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Problem Confirmation Status',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Problem Life Cycle Status',
        opt: 'R',
        rep: 1,
        len: 80
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
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Certainty of Problem',
        opt: 'R',
        rep: 1,
        len: 60
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
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Problem Prognosis',
        opt: 'R',
        rep: 1,
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Individual Awareness of Prognosis',
        opt: 'R',
        rep: 1,
        len: 80
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
        len: 80
      }
    ]
  },
  PRC: {
    desc: 'Pricing segment',
    fields: [
      {
        dt: 'CE',
        desc: 'Primary Key Value - PRC',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Facility ID - PRC',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Department',
        opt: 'R',
        rep: 0,
        len: 200
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
        len: 60
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
        len: 200
      },
      {
        dt: 'XPN',
        desc: 'Provider Name',
        opt: 'R',
        rep: 0,
        len: 106
      },
      {
        dt: 'XAD',
        desc: 'Provider Address',
        opt: 'R',
        rep: 0,
        len: 60
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
        len: 100
      },
      {
        dt: 'CE',
        desc: 'Preferred Method Of Contact',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'PI',
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
    desc: 'Product summary header segment',
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
        rep: 8,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Number of Product Experience Reports Filed by Distributor',
        opt: 'R',
        rep: 8,
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
        len: 80
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
        len: 80
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
    desc: 'Patient visit segment',
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
        len: 20
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
        len: 60
      },
      {
        dt: 'XCN',
        desc: 'Referring Doctor',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'XCN',
        desc: 'Consulting Doctor',
        opt: 'R',
        rep: 0,
        len: 60
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
        len: 3,
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
        len: 60
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
        len: 20
      },
      {
        dt: 'FC',
        desc: 'Financial Class',
        opt: 'R',
        rep: 0,
        len: 50
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
        len: 1,
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
        len: 25
      },
      {
        dt: 'CE',
        desc: 'Diet Type',
        opt: 'R',
        rep: 1,
        len: 80
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
        dt: 'CX',
        desc: 'Alternate Visit ID',
        opt: 'R',
        rep: 1,
        len: 20
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
        len: 60
      }
    ]
  },
  PV2: {
    desc: 'Patient visit - additional information segment',
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
        dt: 'IS',
        desc: 'Visit User Code',
        opt: 'R',
        rep: 1,
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
        len: 90
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
        len: 90
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
        len: 80
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
        desc: 'Expected Surgery Date & Time',
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
      }
    ]
  },
  QAK: {
    desc: 'Query Acknowledgement',
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
      }
    ]
  },
  QRD: {
    desc: 'Original-style query definition segment',
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
        len: 10
      },
      {
        dt: 'XCN',
        desc: 'Who Subject Filter',
        opt: 'C',
        rep: 0,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'What Subject Filter',
        opt: 'C',
        rep: 0,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'What Department Data Code',
        opt: 'C',
        rep: 0,
        len: 60
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
    desc: 'Original style query filter segment',
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
      }
    ]
  },
  RDF: {
    desc: 'Table row definition segment',
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
        len: 40
      }
    ]
  },
  RDT: {
    desc: 'Table row data segment',
    fields: [
      {
        dt: 'VARIES',
        desc: 'Column Value',
        opt: 'R',
        rep: 1
      }
    ]
  },
  RF1: {
    desc: 'Referral Infomation',
    fields: [
      {
        dt: 'CE',
        desc: 'Referral Status',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Referral Priority',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Referral Type',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Referral Disposition',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Referral Category',
        opt: 'R',
        rep: 1,
        len: 200
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
        len: 200
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
    desc: 'Resource group segment',
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
        len: 200
      }
    ]
  },
  ROL: {
    desc: 'Role',
    fields: [
      {
        dt: 'EI',
        desc: 'Role Instance ID',
        opt: 'C',
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
        len: 80
      },
      {
        dt: 'XCN',
        desc: 'Role Person',
        opt: 'C',
        rep: 0,
        len: 80
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
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Role Action Reason',
        opt: 'R',
        rep: 1,
        len: 80
      }
    ]
  },
  RQ1: {
    desc: 'Requisition detail-1 segment',
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
        desc: 'Manufacturer ID',
        opt: 'R',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Manufacturer s Catalog',
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
    desc: 'Requisition detail segment',
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
        desc: 'Requisition Unit of Measure',
        opt: 'R',
        rep: 1,
        len: 60
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
    desc: 'Pharmacy/treatment administration segment',
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
        dt: 'CE',
        desc: 'Administration Notes',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'XCN',
        desc: 'Administering Provider',
        opt: 'R',
        rep: 0,
        len: 200
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
        len: 60
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Substance Refusal Reason',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Indication',
        opt: 'R',
        rep: 0,
        len: 200
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
        desc: 'Action Code-RXA',
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
      }
    ]
  },
  RXC: {
    desc: 'Pharmacy/treatment component order segment',
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
        len: 60
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
        len: 60
      }
    ]
  },
  RXD: {
    desc: 'Pharmacy/treatment dispense segment',
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
        len: 100
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
        desc: 'Dispense-To Location',
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
        desc: 'Pharmacy/Treatment Supplier s Special Dispensing Instructions',
        opt: 'R',
        rep: 0,
        len: 200
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
        len: 60
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Indication',
        opt: 'R',
        rep: 0,
        len: 200
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
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Dispense Package Method',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 321
      }
    ]
  },
  RXE: {
    desc: 'Pharmacy/treatment encoded order segment',
    fields: [
      {
        dt: 'TQ',
        desc: 'Quantity/Timing',
        opt: 'C',
        rep: 1,
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
        desc: 'Provider s Administration Instructions',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'LA1',
        desc: 'Deliver-to Location',
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
        len: 60
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
        desc: 'Ordering Provider s DEA Number',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'XCN',
        desc: 'Pharmacist/Treatment Supplier s Verifier ID',
        opt: 'R',
        rep: 0,
        len: 60
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
        desc: 'Pharmacy/Treatment Supplier s Special Dispensing Instructions',
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
        len: 60
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Give Indication',
        opt: 'R',
        rep: 0,
        len: 200
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
        len: 60
      },
      {
        dt: 'ID',
        desc: 'Dispense Package Method',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 321
      }
    ]
  },
  RXG: {
    desc: 'Pharmacy/treatment give segment',
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
        opt: 'C',
        rep: 1,
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
        desc: 'Administration Notes',
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
        dt: 'LA2',
        desc: 'Dispense-To Location',
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
            'Pharmacy/Treatment Supplier s Special Administration Instructions',
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
        len: 60
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
        len: 60
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Indication',
        opt: 'R',
        rep: 0,
        len: 200
      }
    ]
  },
  RXO: {
    desc: 'Pharmacy/treatment order segment',
    fields: [
      {
        dt: 'CE',
        desc: 'Requested Give Code',
        opt: 'R',
        rep: 1,
        len: 100
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
        desc: 'Provider s Pharmacy/Treatment Instructions',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Provider s Administration Instructions',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'LA1',
        desc: 'Deliver-to Location',
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
        desc: 'Number Of Refills',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'XCN',
        desc: 'Ordering Provider s DEA Number',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'XCN',
        desc: 'Pharmacist/Treatment Supplier s Verifier ID',
        opt: 'R',
        rep: 0,
        len: 60
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Indication',
        opt: 'R',
        rep: 0,
        len: 200
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
        len: 60
      },
      {
        dt: 'CQ',
        desc: 'Total Daily Dose',
        opt: 'R',
        rep: 1,
        len: 10
      }
    ]
  },
  RXR: {
    desc: 'Pharmacy/treatment route segment',
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
      },
      {
        dt: 'CE',
        desc: 'Routing Instruction',
        opt: 'R',
        rep: 1,
        len: 60
      }
    ]
  },
  SCH: {
    desc: 'Schedule activity information segment',
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
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Event Reason',
        opt: 'C',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Appointment Reason',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Appointment Type',
        opt: 'R',
        rep: 1,
        len: 200
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
        len: 200
      },
      {
        dt: 'TQ',
        desc: 'Appointment Timing Quantity',
        opt: 'C',
        rep: 0,
        len: 200
      },
      {
        dt: 'XCN',
        desc: 'Placer Contact Person',
        opt: 'R',
        rep: 0,
        len: 48
      },
      {
        dt: 'XTN',
        desc: 'Placer Contact Phone Number',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'XAD',
        desc: 'Placer Contact Address',
        opt: 'R',
        rep: 0,
        len: 106
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
        len: 38
      },
      {
        dt: 'XTN',
        desc: 'Filler Contact Phone Number',
        opt: 'R',
        rep: 1,
        len: 40
      },
      {
        dt: 'XAD',
        desc: 'Filler Contact Address',
        opt: 'R',
        rep: 0,
        len: 106
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
        desc: 'Entered by Person',
        opt: 'C',
        rep: 0,
        len: 48
      },
      {
        dt: 'XTN',
        desc: 'Entered by Phone Number',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'PL',
        desc: 'Entered by Location',
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
        len: 200
      }
    ]
  },
  SPR: {
    desc: 'Stored procedure request definition segment',
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
        desc: 'Query/ Response Format Code',
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
        len: 60
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
    desc: 'Staff identification segment',
    fields: [
      {
        dt: 'CE',
        desc: 'Primary Key Value - STF',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'CX',
        desc: 'Staff ID Code',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'XPN',
        desc: 'Staff Name',
        opt: 'R',
        rep: 0,
        len: 48
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
        desc: 'Sex',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 1
      },
      {
        dt: 'TS',
        desc: 'Date/Time Of Birth',
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
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Hospital Service',
        opt: 'R',
        rep: 0,
        len: 200
      },
      {
        dt: 'XTN',
        desc: 'Phone',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'XAD',
        desc: 'Office/Home Address',
        opt: 'R',
        rep: 0,
        len: 106
      },
      {
        dt: 'DIN',
        desc: 'Institution Activation Date',
        opt: 'R',
        rep: 0,
        len: 26
      },
      {
        dt: 'DIN',
        desc: 'Institution Inactivation Date',
        opt: 'R',
        rep: 0,
        len: 26
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
        desc: 'E-Mail Address',
        opt: 'R',
        rep: 0,
        len: 40
      },
      {
        dt: 'CE',
        desc: 'Preferred Method Of Contact',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CE',
        desc: 'Marital Status',
        opt: 'R',
        rep: 1,
        len: 80
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
        desc: 'Employment Status',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 66
      },
      {
        dt: 'ID',
        desc: 'Additional Insured on  Auto',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'DLN',
        desc: 'Driver s License Number - Staff',
        opt: 'R',
        rep: 1,
        len: 25
      },
      {
        dt: 'ID',
        desc: 'Copy  Auto Ins',
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
      }
    ]
  },
  TXA: {
    desc: 'Document notification segment',
    fields: [
      {
        dt: 'SI',
        desc: 'Set ID - TXA',
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
        len: 60
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
        len: 60
      },
      {
        dt: 'XCN',
        desc: 'Assigned Document Authenticator',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'XCN',
        desc: 'Transcriptionist Code/Name',
        opt: 'R',
        rep: 0,
        len: 48
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
        len: 60
      },
      {
        dt: 'XCN',
        desc: 'Distributed Copies',
        opt: 'R',
        rep: 0,
        len: 60
      }
    ]
  },
  UB1: {
    desc: 'UB82 data segment',
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
        rep: 5,
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
        desc: 'Value Amount & Code',
        opt: 'R',
        rep: 8,
        len: 12
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'PSRO/UR Approval Indicator',
        opt: 'R',
        rep: 1,
        len: 60
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
        rep: 5,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Occurrence Span',
        opt: 'R',
        rep: 1,
        len: 60
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
    desc: 'UB92 data segment',
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
        rep: 7,
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
        desc: 'Value Amount & Code',
        opt: 'R',
        rep: 12,
        len: 11
      },
      {
        dt: 'OCD',
        desc: 'Occurrence Code & Date',
        opt: 'R',
        rep: 8,
        len: 11
      },
      {
        dt: 'OSP',
        desc: 'Occurrence Span Code/Dates',
        opt: 'R',
        rep: 2,
        len: 28
      },
      {
        dt: 'ST',
        desc: 'UB92 Locator 2',
        opt: 'R',
        rep: 2,
        len: 29
      },
      {
        dt: 'ST',
        desc: 'UB92 Locator 11',
        opt: 'R',
        rep: 2,
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
        rep: 3,
        len: 23
      },
      {
        dt: 'ST',
        desc: 'UB92 Locator 49',
        opt: 'R',
        rep: 23,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'UB92 Locator 56',
        opt: 'R',
        rep: 5,
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
    desc: 'Results/update definition segment',
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'R/U What Subject Definition',
        opt: 'R',
        rep: 0,
        len: 60
      },
      {
        dt: 'CE',
        desc: 'R/U What Department Code',
        opt: 'R',
        rep: 0,
        len: 60
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
    desc: 'Unsolicited selection segment',
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
        len: 80
      },
      {
        dt: 'CE',
        desc: 'Variance Classification',
        opt: 'R',
        rep: 1,
        len: 60
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
    desc: 'Virtual table query request segment',
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
        desc: 'Query/ Response Format Code',
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
        len: 60
      },
      {
        dt: 'CE',
        desc: 'Virtual Table Name',
        opt: 'C',
        rep: 1,
        len: 60
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
