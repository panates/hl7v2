const fields = {
  AD: {
    desc: 'Address',
    components: [
      {
        dt: 'ST',
        desc: 'Street Address',
        opt: 'R',
        rep: 1,
        len: 120
      },
      {
        dt: 'ST',
        desc: 'Other Designation',
        opt: 'R',
        rep: 1,
        len: 120
      },
      {
        dt: 'ST',
        desc: 'City',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'ST',
        desc: 'State or Province',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'ST',
        desc: 'Zip or Postal Code',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Country',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 399
      },
      {
        dt: 'ID',
        desc: 'Address Type',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 190
      },
      {
        dt: 'ST',
        desc: 'Other Geographic Designation',
        opt: 'R',
        rep: 1,
        len: 50
      }
    ]
  },
  AUI: {
    desc: 'Authorization Information',
    components: [
      {
        dt: 'ST',
        desc: 'Authorization Number',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'DT',
        desc: 'Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Source',
        opt: 'R',
        rep: 1,
        len: 199
      }
    ]
  },
  CCD: {
    desc: 'Charge Code and Date',
    components: [
      {
        dt: 'ID',
        desc: 'Invocation Event',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 100
      },
      {
        dt: 'TS',
        desc: 'Date/time',
        opt: 'R',
        rep: 1,
        len: 26
      }
    ]
  },
  CCP: {
    desc: 'Channel Calibration Parameters',
    components: [
      {
        dt: 'NM',
        desc: 'Channel Calibration Sensitivity Correction Factor',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'NM',
        desc: 'Channel Calibration Baseline',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'NM',
        desc: 'Channel Calibration Time Skew',
        opt: 'R',
        rep: 1,
        len: 6
      }
    ]
  },
  CD: {
    desc: 'Channel Definition',
    components: [
      {
        dt: 'WVI',
        desc: 'Channel Identifier',
        opt: 'R',
        rep: 1,
        len: 22
      },
      {
        dt: 'WVS',
        desc: 'Waveform Source',
        opt: 'R',
        rep: 1,
        len: 17
      },
      {
        dt: 'CSU',
        desc: 'Channel Sensitivity/Units',
        opt: 'R',
        rep: 1,
        len: 478
      },
      {
        dt: 'CCP',
        desc: 'Channel Calibration Parameters',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'NM',
        desc: 'Channel Sampling Frequency',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'NR',
        desc: 'Minimum/Maximum Data Values',
        opt: 'R',
        rep: 1,
        len: 33
      }
    ]
  },
  CE: {
    desc: 'Coded Element',
    components: [
      {
        dt: 'ST',
        desc: 'Identifier',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Text',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Name of Coding System',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 396
      },
      {
        dt: 'ST',
        desc: 'Alternate Identifier',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Alternate Text',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Name of Alternate Coding System',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 396
      }
    ]
  },
  CF: {
    desc: 'Coded Element with Formatted Values',
    components: [
      {
        dt: 'ST',
        desc: 'Identifier',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'FT',
        desc: 'Formatted Text',
        opt: 'R',
        rep: 1,
        len: 65536
      },
      {
        dt: 'ID',
        desc: 'Name of Coding System',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 396
      },
      {
        dt: 'ST',
        desc: 'Alternate Identifier',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'FT',
        desc: 'Alternate Formatted Text',
        opt: 'R',
        rep: 1,
        len: 65536
      },
      {
        dt: 'ID',
        desc: 'Name of Alternate Coding System',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 396
      }
    ]
  },
  CNE: {
    desc: 'Coded with No Exceptions',
    components: [
      {
        dt: 'ST',
        desc: 'Identifier',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Text',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Name of Coding System',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 396
      },
      {
        dt: 'ST',
        desc: 'Alternate Identifier',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Alternate Text',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Name of Alternate Coding System',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 396
      },
      {
        dt: 'ST',
        desc: 'Coding System Version ID',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ST',
        desc: 'Alternate Coding System Version ID',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ST',
        desc: 'Original Text',
        opt: 'R',
        rep: 1,
        len: 199
      }
    ]
  },
  CNN: {
    desc: 'Composite ID Number and Name Simplified',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Family Name',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'ST',
        desc: 'Given Name',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Second and Further Given Names or Initials Thereof',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Suffix',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Prefix',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'IS',
        desc: 'Degree',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 360
      },
      {
        dt: 'IS',
        desc: 'Source Table',
        opt: 'R',
        rep: 1,
        len: 4,
        table: 297
      },
      {
        dt: 'IS',
        desc: 'Assigning Authority   - Namespace ID',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 363
      },
      {
        dt: 'ST',
        desc: 'Assigning Authority  - Universal ID',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Assigning Authority  - Universal ID Type',
        opt: 'R',
        rep: 1,
        len: 6,
        table: 301
      }
    ]
  },
  CP: {
    desc: 'Composite Price',
    components: [
      {
        dt: 'MO',
        desc: 'Price',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'ID',
        desc: 'Price Type',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 205
      },
      {
        dt: 'NM',
        desc: 'From Value',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'To Value',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'CE',
        desc: 'Range Units',
        opt: 'R',
        rep: 1,
        len: 483
      },
      {
        dt: 'ID',
        desc: 'Range Type',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 298
      }
    ]
  },
  CQ: {
    desc: 'Composite Quantity with Units',
    components: [
      {
        dt: 'NM',
        desc: 'Quantity',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'CE',
        desc: 'Units',
        opt: 'R',
        rep: 1,
        len: 483
      }
    ]
  },
  CSU: {
    desc: 'Channel Sensitivity',
    components: [
      {
        dt: 'NM',
        desc: 'Channel Sensitivity',
        opt: 'C',
        rep: 1,
        len: 60
      },
      {
        dt: 'ST',
        desc: 'Unit of Measure Identifier',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Unit of Measure Description',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Unit of Measure Coding System',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 396
      },
      {
        dt: 'ST',
        desc: 'Alternate Unit of Measure Identifier',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Alternate Unit of Measure Description',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Alternate Unit of Measure Coding System',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 396
      }
    ]
  },
  CWE: {
    desc: 'Coded with Exceptions',
    components: [
      {
        dt: 'ST',
        desc: 'Identifier',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Text',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Name of Coding System',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 396
      },
      {
        dt: 'ST',
        desc: 'Alternate Identifier',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Alternate Text',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Name of Alternate Coding System',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 396
      },
      {
        dt: 'ST',
        desc: 'Coding System Version ID',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ST',
        desc: 'Alternate Coding System Version ID',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ST',
        desc: 'Original Text',
        opt: 'R',
        rep: 1,
        len: 199
      }
    ]
  },
  CX: {
    desc: 'Extended Composite ID with Check Digit',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'C',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Check Digit',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'ID',
        desc: 'Check Digit Scheme',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 61
      },
      {
        dt: 'HD',
        desc: 'Assigning Authority',
        opt: 'R',
        rep: 1,
        len: 227,
        table: 363
      },
      {
        dt: 'ID',
        desc: 'Identifier Type Code',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 203
      },
      {
        dt: 'HD',
        desc: 'Assigning Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'DT',
        desc: 'Effective Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Expiration Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'CWE',
        desc: 'Assigning Jurisdiction',
        opt: 'R',
        rep: 1,
        len: 705
      },
      {
        dt: 'CWE',
        desc: 'Assigning Agency or Department',
        opt: 'R',
        rep: 1,
        len: 705
      }
    ]
  },
  DDI: {
    desc: 'Daily Deductible Information',
    components: [
      {
        dt: 'NM',
        desc: 'Delay Days',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'MO',
        desc: 'Monetary Amount',
        opt: 'C',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Number of Days',
        opt: 'R',
        rep: 1,
        len: 4
      }
    ]
  },
  DIN: {
    desc: 'Date and Institution Name',
    components: [
      {
        dt: 'TS',
        desc: 'Date',
        opt: 'C',
        rep: 1,
        len: 26
      },
      {
        dt: 'CE',
        desc: 'Institution Name',
        opt: 'C',
        rep: 1,
        len: 483,
        table: 531
      }
    ]
  },
  DLD: {
    desc: 'Discharge Location and Date',
    components: [
      {
        dt: 'IS',
        desc: 'Discharge Location',
        opt: 'C',
        rep: 1,
        len: 20,
        table: 113
      },
      {
        dt: 'TS',
        desc: 'Effective Date',
        opt: 'R',
        rep: 1,
        len: 26
      }
    ]
  },
  DLN: {
    desc: 'Driver_s License Number',
    components: [
      {
        dt: 'ST',
        desc: 'License Number',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'IS',
        desc: 'Issuing State, Province, Country',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 333
      },
      {
        dt: 'DT',
        desc: 'Expiration Date',
        opt: 'R',
        rep: 1,
        len: 24
      }
    ]
  },
  DLT: {
    desc: 'Delta',
    components: [
      {
        dt: 'NR',
        desc: 'Normal Range',
        opt: 'R',
        rep: 1,
        len: 33
      },
      {
        dt: 'NM',
        desc: 'Numeric Threshold',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ID',
        desc: 'Change Computation',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 523
      },
      {
        dt: 'NM',
        desc: 'Days Retained',
        opt: 'R',
        rep: 1,
        len: 4
      }
    ]
  },
  DR: {
    desc: 'Date/Time Range',
    components: [
      {
        dt: 'TS',
        desc: 'Range Start Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'Range End Date/Time',
        opt: 'R',
        rep: 1,
        len: 26
      }
    ]
  },
  DT: {
    desc: 'Date'
  },
  DTM: {
    desc: 'Date/Time'
  },
  DTN: {
    desc: 'Day Type and Number',
    components: [
      {
        dt: 'IS',
        desc: 'Day Type',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 149
      },
      {
        dt: 'NM',
        desc: 'Number of Days',
        opt: 'C',
        rep: 1,
        len: 3
      }
    ]
  },
  ED: {
    desc: 'Encapsulated Data',
    components: [
      {
        dt: 'HD',
        desc: 'Source Application',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'ID',
        desc: 'Type of Data',
        opt: 'C',
        rep: 1,
        len: 9,
        table: 191
      },
      {
        dt: 'ID',
        desc: 'Data Subtype',
        opt: 'R',
        rep: 1,
        len: 18,
        table: 291
      },
      {
        dt: 'ID',
        desc: 'Encoding',
        opt: 'C',
        rep: 1,
        len: 6,
        table: 299
      },
      {
        dt: 'TX',
        desc: 'Data',
        opt: 'C',
        rep: 1,
        len: 65536
      }
    ]
  },
  EI: {
    desc: 'Entity Identifier',
    components: [
      {
        dt: 'ST',
        desc: 'Entity Identifier',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'IS',
        desc: 'Namespace ID',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 363
      },
      {
        dt: 'ST',
        desc: 'Universal ID',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Universal ID Type',
        opt: 'R',
        rep: 1,
        len: 6,
        table: 301
      }
    ]
  },
  EIP: {
    desc: 'Entity Identifier Pair',
    components: [
      {
        dt: 'EI',
        desc: 'Placer Assigned Identifier',
        opt: 'R',
        rep: 1,
        len: 427
      },
      {
        dt: 'EI',
        desc: 'Filler Assigned Identifier',
        opt: 'R',
        rep: 1,
        len: 427
      }
    ]
  },
  ELD: {
    desc: 'Error Location and Description',
    components: [
      {
        dt: 'ST',
        desc: 'Segment ID',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Segment Sequence',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Field Position',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'CE',
        desc: 'Code Identifying Error',
        opt: 'R',
        rep: 1,
        len: 483,
        table: 357
      }
    ]
  },
  ERL: {
    desc: 'Error Location',
    components: [
      {
        dt: 'ST',
        desc: 'Segment ID',
        opt: 'C',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Segment Sequence',
        opt: 'C',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Field Position',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Field Repetition',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Component Number',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Sub-Component Number',
        opt: 'R',
        rep: 1,
        len: 2
      }
    ]
  },
  FC: {
    desc: 'Financial Class',
    components: [
      {
        dt: 'IS',
        desc: 'Financial Class Code',
        opt: 'C',
        rep: 1,
        len: 20,
        table: 64
      },
      {
        dt: 'TS',
        desc: 'Effective Date',
        opt: 'R',
        rep: 1,
        len: 26
      }
    ]
  },
  FN: {
    desc: 'Family Name',
    components: [
      {
        dt: 'ST',
        desc: 'Surname',
        opt: 'C',
        rep: 1,
        len: 50
      },
      {
        dt: 'ST',
        desc: 'Own Surname Prefix',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Own Surname',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'ST',
        desc: 'Surname Prefix From Partner/Spouse',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Surname From Partner/Spouse',
        opt: 'R',
        rep: 1,
        len: 50
      }
    ]
  },
  FT: {
    desc: 'Formatted Text Data'
  },
  GTS: {
    desc: 'General Timing Specification'
  },
  HD: {
    desc: 'Hierarchic Designator',
    components: [
      {
        dt: 'IS',
        desc: 'Namespace ID',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 300
      },
      {
        dt: 'ST',
        desc: 'Universal ID',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Universal ID Type',
        opt: 'R',
        rep: 1,
        len: 6,
        table: 301
      }
    ]
  },
  ICD: {
    desc: 'Insurance Certification Definition',
    components: [
      {
        dt: 'IS',
        desc: 'Certification Patient Type',
        opt: 'R',
        rep: 1,
        len: 11,
        table: 150
      },
      {
        dt: 'ID',
        desc: 'Certification Required',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'TS',
        desc: 'Date/Time Certification Required',
        opt: 'R',
        rep: 1,
        len: 26
      }
    ]
  },
  ID: {
    desc: 'Coded values for HL7 tables'
  },
  IS: {
    desc: 'Coded value for user-defined tables'
  },
  JCC: {
    desc: 'Job Code/Class',
    components: [
      {
        dt: 'IS',
        desc: 'Job Code',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 327
      },
      {
        dt: 'IS',
        desc: 'Job Class',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 328
      },
      {
        dt: 'TX',
        desc: 'Job Description Text',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  LA1: {
    desc: 'Location with Address Variation 1',
    components: [
      {
        dt: 'IS',
        desc: 'Point of Care',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 302
      },
      {
        dt: 'IS',
        desc: 'Room',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 303
      },
      {
        dt: 'IS',
        desc: 'Bed',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 304
      },
      {
        dt: 'HD',
        desc: 'Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'IS',
        desc: 'Location Status',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 306
      },
      {
        dt: 'IS',
        desc: 'Patient Location Type',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 305
      },
      {
        dt: 'IS',
        desc: 'Building',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 307
      },
      {
        dt: 'IS',
        desc: 'Floor',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 308
      },
      {
        dt: 'AD',
        desc: 'Address',
        opt: 'R',
        rep: 1,
        len: 415
      }
    ]
  },
  LA2: {
    desc: 'Location with Address Variation 2',
    components: [
      {
        dt: 'IS',
        desc: 'Point of Care',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 302
      },
      {
        dt: 'IS',
        desc: 'Room',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 303
      },
      {
        dt: 'IS',
        desc: 'Bed',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 304
      },
      {
        dt: 'HD',
        desc: 'Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'IS',
        desc: 'Location Status',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 306
      },
      {
        dt: 'IS',
        desc: 'Patient Location Type',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 305
      },
      {
        dt: 'IS',
        desc: 'Building',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 307
      },
      {
        dt: 'IS',
        desc: 'Floor',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 308
      },
      {
        dt: 'ST',
        desc: 'Street Address',
        opt: 'R',
        rep: 1,
        len: 120
      },
      {
        dt: 'ST',
        desc: 'Other Designation',
        opt: 'R',
        rep: 1,
        len: 120
      },
      {
        dt: 'ST',
        desc: 'City',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'ST',
        desc: 'State or Province',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'ST',
        desc: 'Zip or Postal Code',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Country',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 399
      },
      {
        dt: 'ID',
        desc: 'Address Type',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 190
      },
      {
        dt: 'ST',
        desc: 'Other Geographic Designation',
        opt: 'R',
        rep: 1,
        len: 50
      }
    ]
  },
  MA: {
    desc: 'Multiplexed Array',
    components: [
      {
        dt: 'NM',
        desc: 'Sample 1 From Channel 1',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Sample 1 From Channel 2',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Sample 1 From Channel N',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Sample 2 From Channel 1',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Sample 2 From Channel N',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Sample N From Channel N',
        opt: 'R',
        rep: 1,
        len: 16
      }
    ]
  },
  MO: {
    desc: 'Money',
    components: [
      {
        dt: 'NM',
        desc: 'Quantity',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'ID',
        desc: 'Denomination',
        opt: 'R',
        rep: 1,
        len: 3
      }
    ]
  },
  MOC: {
    desc: 'Money and Code',
    components: [
      {
        dt: 'MO',
        desc: 'Monetary Amount',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'CE',
        desc: 'Charge Code',
        opt: 'R',
        rep: 1,
        len: 483
      }
    ]
  },
  MOP: {
    desc: 'Money or Percentage',
    components: [
      {
        dt: 'ID',
        desc: 'Money or Percentage Indicator',
        opt: 'C',
        rep: 1,
        len: 2,
        table: 148
      },
      {
        dt: 'NM',
        desc: 'Money or Percentage Quantity',
        opt: 'C',
        rep: 1,
        len: 16
      },
      {
        dt: 'ID',
        desc: 'Currency Denomination',
        opt: 'R',
        rep: 1,
        len: 3
      }
    ]
  },
  MSG: {
    desc: 'Message Type',
    components: [
      {
        dt: 'ID',
        desc: 'Message Code',
        opt: 'C',
        rep: 1,
        len: 3,
        table: 76
      },
      {
        dt: 'ID',
        desc: 'Trigger Event',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 3
      },
      {
        dt: 'ID',
        desc: 'Message Structure',
        opt: 'R',
        rep: 1,
        len: 7,
        table: 354
      }
    ]
  },
  NA: {
    desc: 'Numeric Array',
    components: [
      {
        dt: 'NM',
        desc: 'Value1',
        opt: 'C',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Value2',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Value3',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Value4',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Value5',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Value6',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Value7',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Value8',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Value9',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'Value10',
        opt: 'R',
        rep: 1,
        len: 16
      }
    ]
  },
  NDL: {
    desc: 'Name with Date and Location',
    components: [
      {
        dt: 'CNN',
        desc: 'Name Of Person',
        opt: 'R',
        rep: 1,
        len: 406
      },
      {
        dt: 'TS',
        desc: 'Start Date/time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'TS',
        desc: 'End Date/time',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'IS',
        desc: 'Point of Care',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 302
      },
      {
        dt: 'IS',
        desc: 'Room',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 303
      },
      {
        dt: 'IS',
        desc: 'Bed',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 304
      },
      {
        dt: 'HD',
        desc: 'Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'IS',
        desc: 'Location Status',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 306
      },
      {
        dt: 'IS',
        desc: 'Patient Location Type',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 305
      },
      {
        dt: 'IS',
        desc: 'Building',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 307
      },
      {
        dt: 'IS',
        desc: 'Floor',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 308
      }
    ]
  },
  NM: {
    desc: 'Numeric'
  },
  NR: {
    desc: 'Numeric Range',
    components: [
      {
        dt: 'NM',
        desc: 'Low Value',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'NM',
        desc: 'High Value',
        opt: 'R',
        rep: 1,
        len: 16
      }
    ]
  },
  OCD: {
    desc: 'Occurrence Code and Date',
    components: [
      {
        dt: 'CNE',
        desc: 'Occurrence Code',
        opt: 'C',
        rep: 1,
        len: 705,
        table: 350
      },
      {
        dt: 'DT',
        desc: 'Occurrence Date',
        opt: 'C',
        rep: 1,
        len: 8
      }
    ]
  },
  OSD: {
    desc: 'Order Sequence Definition',
    components: [
      {
        dt: 'ID',
        desc: 'Sequence/Results Flag',
        opt: 'C',
        rep: 1,
        len: 1,
        table: 524
      },
      {
        dt: 'ST',
        desc: 'Placer Order Number: Entity Identifier',
        opt: 'C',
        rep: 1,
        len: 15
      },
      {
        dt: 'IS',
        desc: 'Placer Order Number: Namespace ID',
        opt: 'R',
        rep: 1,
        len: 6,
        table: 363
      },
      {
        dt: 'ST',
        desc: 'Filler Order Number: Entity Identifier',
        opt: 'C',
        rep: 1,
        len: 15
      },
      {
        dt: 'IS',
        desc: 'Filler Order Number: Namespace ID',
        opt: 'R',
        rep: 1,
        len: 6,
        table: 363
      },
      {
        dt: 'ST',
        desc: 'Sequence Condition Value',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'NM',
        desc: 'Maximum Number of Repeats',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'ST',
        desc: 'Placer Order Number: Universal ID',
        opt: 'C',
        rep: 1,
        len: 15
      },
      {
        dt: 'ID',
        desc: 'Placer Order Number: Universal ID Type',
        opt: 'R',
        rep: 1,
        len: 6,
        table: 301
      },
      {
        dt: 'ST',
        desc: 'Filler Order Number: Universal ID',
        opt: 'C',
        rep: 1,
        len: 15
      },
      {
        dt: 'ID',
        desc: 'Filler Order Number: Universal ID Type',
        opt: 'R',
        rep: 1,
        len: 6,
        table: 301
      }
    ]
  },
  OSP: {
    desc: 'Occurrence Span Code and Date',
    components: [
      {
        dt: 'CNE',
        desc: 'Occurrence Span Code',
        opt: 'C',
        rep: 1,
        len: 705,
        table: 351
      },
      {
        dt: 'DT',
        desc: 'Occurrence Span Start Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Occurrence Span Stop Date',
        opt: 'R',
        rep: 1,
        len: 8
      }
    ]
  },
  PIP: {
    desc: 'Practitioner Institutional Privileges',
    components: [
      {
        dt: 'CE',
        desc: 'Privilege',
        opt: 'C',
        rep: 1,
        len: 483,
        table: 525
      },
      {
        dt: 'CE',
        desc: 'Privilege Class',
        opt: 'R',
        rep: 1,
        len: 483,
        table: 526
      },
      {
        dt: 'DT',
        desc: 'Expiration Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'DT',
        desc: 'Activation Date',
        opt: 'R',
        rep: 1,
        len: 8
      },
      {
        dt: 'EI',
        desc: 'Facility',
        opt: 'R',
        rep: 1,
        len: 427
      }
    ]
  },
  PL: {
    desc: 'Person Location',
    components: [
      {
        dt: 'IS',
        desc: 'Point of Care',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 302
      },
      {
        dt: 'IS',
        desc: 'Room',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 303
      },
      {
        dt: 'IS',
        desc: 'Bed',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 304
      },
      {
        dt: 'HD',
        desc: 'Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'IS',
        desc: 'Location Status',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 306
      },
      {
        dt: 'IS',
        desc: 'Person Location Type',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 305
      },
      {
        dt: 'IS',
        desc: 'Building',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 307
      },
      {
        dt: 'IS',
        desc: 'Floor',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 308
      },
      {
        dt: 'ST',
        desc: 'Location Description',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'EI',
        desc: 'Comprehensive Location Identifier',
        opt: 'R',
        rep: 1,
        len: 427
      },
      {
        dt: 'HD',
        desc: 'Assigning Authority for Location',
        opt: 'R',
        rep: 1,
        len: 227
      }
    ]
  },
  PLN: {
    desc: 'Practitioner License or Other ID Number',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'C',
        rep: 1,
        len: 20
      },
      {
        dt: 'IS',
        desc: 'Type of ID Number',
        opt: 'C',
        rep: 1,
        len: 8,
        table: 338
      },
      {
        dt: 'ST',
        desc: 'State/other Qualifying Information',
        opt: 'R',
        rep: 1,
        len: 62
      },
      {
        dt: 'DT',
        desc: 'Expiration Date',
        opt: 'R',
        rep: 1,
        len: 8
      }
    ]
  },
  PPN: {
    desc: 'Performing Person Time Stamp',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'FN',
        desc: 'Family Name',
        opt: 'R',
        rep: 1,
        len: 194
      },
      {
        dt: 'ST',
        desc: 'Given Name',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Second and Further Given Names or Initials Thereof',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Suffix',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Prefix',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'IS',
        desc: 'Degree',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 360
      },
      {
        dt: 'IS',
        desc: 'Source Table',
        opt: 'R',
        rep: 1,
        len: 4,
        table: 297
      },
      {
        dt: 'HD',
        desc: 'Assigning Authority',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'ID',
        desc: 'Name Type Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 200
      },
      {
        dt: 'ST',
        desc: 'Identifier Check Digit',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'ID',
        desc: 'Check Digit Scheme',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 61
      },
      {
        dt: 'ID',
        desc: 'Identifier Type Code',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 203
      },
      {
        dt: 'HD',
        desc: 'Assigning Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'TS',
        desc: 'Date/Time Action Performed',
        opt: 'R',
        rep: 1,
        len: 26
      },
      {
        dt: 'ID',
        desc: 'Name Representation Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 465
      },
      {
        dt: 'CE',
        desc: 'Name Context',
        opt: 'R',
        rep: 1,
        len: 483
      },
      {
        dt: 'DR',
        desc: 'Name Validity Range',
        opt: 'R',
        rep: 1,
        len: 17
      },
      {
        dt: 'ID',
        desc: 'Name Assembly Order',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 444
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
        dt: 'ST',
        desc: 'Professional Suffix',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'CWE',
        desc: 'Assigning Jurisdiction',
        opt: 'R',
        rep: 1,
        len: 705
      },
      {
        dt: 'CWE',
        desc: 'Assigning Agency or Department',
        opt: 'R',
        rep: 1,
        len: 705
      }
    ]
  },
  PRL: {
    desc: 'Parent Result Link',
    components: [
      {
        dt: 'CE',
        desc: 'Parent Observation Identifier',
        opt: 'C',
        rep: 1,
        len: 483
      },
      {
        dt: 'ST',
        desc: 'Parent Observation Sub-identifier',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TX',
        desc: 'Parent Observation Value Descriptor',
        opt: 'R',
        rep: 1,
        len: 250
      }
    ]
  },
  PT: {
    desc: 'Processing Type',
    components: [
      {
        dt: 'ID',
        desc: 'Processing ID',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 103
      },
      {
        dt: 'ID',
        desc: 'Processing Mode',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 207
      }
    ]
  },
  PTA: {
    desc: 'Policy Type and Amount',
    components: [
      {
        dt: 'IS',
        desc: 'Policy Type',
        opt: 'C',
        rep: 1,
        len: 5,
        table: 147
      },
      {
        dt: 'IS',
        desc: 'Amount Class',
        opt: 'R',
        rep: 1,
        len: 9,
        table: 193
      },
      {
        dt: 'NM',
        desc: 'Money or Percentage Quantity',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'MOP',
        desc: 'Money or Percentage',
        opt: 'C',
        rep: 1,
        len: 23
      }
    ]
  },
  QIP: {
    desc: 'Query Input Parameter List',
    components: [
      {
        dt: 'ST',
        desc: 'Segment Field Name',
        opt: 'C',
        rep: 1,
        len: 12
      },
      {
        dt: 'ST',
        desc: 'Values',
        opt: 'C',
        rep: 1,
        len: 199
      }
    ]
  },
  QSC: {
    desc: 'Query Selection Criteria',
    components: [
      {
        dt: 'ST',
        desc: 'Segment Field Name',
        opt: 'C',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Relational Operator',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 209
      },
      {
        dt: 'ST',
        desc: 'Value',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Relational Conjunction',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 210
      }
    ]
  },
  RCD: {
    desc: 'Row Column Definition',
    components: [
      {
        dt: 'ST',
        desc: 'Segment Field Name',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'HL7 Data Type',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 440
      },
      {
        dt: 'NM',
        desc: 'Maximum Column Width',
        opt: 'R',
        rep: 1,
        len: 2
      }
    ]
  },
  RFR: {
    desc: 'Reference Range',
    components: [
      {
        dt: 'NR',
        desc: 'Numeric Range',
        opt: 'C',
        rep: 1,
        len: 33
      },
      {
        dt: 'IS',
        desc: 'Administrative Sex',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 1
      },
      {
        dt: 'NR',
        desc: 'Age Range',
        opt: 'R',
        rep: 1,
        len: 33
      },
      {
        dt: 'NR',
        desc: 'Gestational Age Range',
        opt: 'R',
        rep: 1,
        len: 33
      },
      {
        dt: 'ST',
        desc: 'Species',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Race/subspecies',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'TX',
        desc: 'Conditions',
        opt: 'R',
        rep: 1,
        len: 199
      }
    ]
  },
  RI: {
    desc: 'Repeat Interval',
    components: [
      {
        dt: 'IS',
        desc: 'Repeat Pattern',
        opt: 'R',
        rep: 1,
        len: 6,
        table: 335
      },
      {
        dt: 'ST',
        desc: 'Explicit Time Interval',
        opt: 'R',
        rep: 1,
        len: 199
      }
    ]
  },
  RMC: {
    desc: 'Room Coverage',
    components: [
      {
        dt: 'IS',
        desc: 'Room Type',
        opt: 'C',
        rep: 1,
        len: 20,
        table: 145
      },
      {
        dt: 'IS',
        desc: 'Amount Type',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 146
      },
      {
        dt: 'NM',
        desc: 'Coverage Amount',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'MOP',
        desc: 'Money or Percentage',
        opt: 'C',
        rep: 1,
        len: 23
      }
    ]
  },
  RP: {
    desc: 'Reference Pointer',
    components: [
      {
        dt: 'ST',
        desc: 'Pointer',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'HD',
        desc: 'Application ID',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'ID',
        desc: 'Type of Data',
        opt: 'R',
        rep: 1,
        len: 9,
        table: 191
      },
      {
        dt: 'ID',
        desc: 'Subtype',
        opt: 'R',
        rep: 1,
        len: 19,
        table: 291
      }
    ]
  },
  RPT: {
    desc: 'Repeat Pattern',
    components: [
      {
        dt: 'CWE',
        desc: 'Repeat Pattern Code',
        opt: 'C',
        rep: 1,
        len: 705,
        table: 335
      },
      {
        dt: 'ID',
        desc: 'Calendar Alignment',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 527
      },
      {
        dt: 'NM',
        desc: 'Phase Range Begin Value',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Phase Range End Value',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'NM',
        desc: 'Period Quantity',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'IS',
        desc: 'Period Units',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'ID',
        desc: 'Institution Specified Time',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 136
      },
      {
        dt: 'ID',
        desc: 'Event',
        opt: 'R',
        rep: 1,
        len: 6,
        table: 528
      },
      {
        dt: 'NM',
        desc: 'Event Offset Quantity',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'IS',
        desc: 'Event Offset Units',
        opt: 'R',
        rep: 1,
        len: 10
      },
      {
        dt: 'GTS',
        desc: 'General Timing Specification',
        opt: 'R',
        rep: 1,
        len: 200
      }
    ]
  },
  SAD: {
    desc: 'Street Address',
    components: [
      {
        dt: 'ST',
        desc: 'Street or Mailing Address',
        opt: 'R',
        rep: 1,
        len: 120
      },
      {
        dt: 'ST',
        desc: 'Street Name',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'ST',
        desc: 'Dwelling Number',
        opt: 'R',
        rep: 1,
        len: 12
      }
    ]
  },
  SCV: {
    desc: 'Scheduling Class Value Pair',
    components: [
      {
        dt: 'CWE',
        desc: 'Parameter Class',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Parameter Value',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  SI: {
    desc: 'Sequence ID'
  },
  SN: {
    desc: 'Structured Numeric',
    components: [
      {
        dt: 'ST',
        desc: 'Comparator',
        opt: 'R',
        rep: 1,
        len: 2
      },
      {
        dt: 'NM',
        desc: 'Num1',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'ST',
        desc: 'Separator/Suffix',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'NM',
        desc: 'Num2',
        opt: 'R',
        rep: 1,
        len: 15
      }
    ]
  },
  SPD: {
    desc: 'Specialty Description',
    components: [
      {
        dt: 'ST',
        desc: 'Specialty Name',
        opt: 'C',
        rep: 1,
        len: 50
      },
      {
        dt: 'ST',
        desc: 'Governing Board',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'ID',
        desc: 'Eligible or Certified',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 337
      },
      {
        dt: 'DT',
        desc: 'Date of Certification',
        opt: 'R',
        rep: 1,
        len: 8
      }
    ]
  },
  SPS: {
    desc: 'Specimen Source',
    components: [
      {
        dt: 'CWE',
        desc: 'Specimen Source Name or Code',
        opt: 'R',
        rep: 1,
        len: 705
      },
      {
        dt: 'CWE',
        desc: 'Additives',
        opt: 'R',
        rep: 1,
        len: 705,
        table: 371
      },
      {
        dt: 'TX',
        desc: 'Specimen Collection Method',
        opt: 'R',
        rep: 1,
        len: 200
      },
      {
        dt: 'CWE',
        desc: 'Body Site',
        opt: 'R',
        rep: 1,
        len: 705,
        table: 163
      },
      {
        dt: 'CWE',
        desc: 'Site Modifier',
        opt: 'R',
        rep: 1,
        len: 705,
        table: 495
      },
      {
        dt: 'CWE',
        desc: 'Collection Method Modifier Code',
        opt: 'R',
        rep: 1,
        len: 705
      },
      {
        dt: 'CWE',
        desc: 'Specimen Role',
        opt: 'R',
        rep: 1,
        len: 705,
        table: 369
      }
    ]
  },
  SRT: {
    desc: 'Sort Order',
    components: [
      {
        dt: 'ST',
        desc: 'Sort-by Field',
        opt: 'C',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Sequencing',
        opt: 'R',
        rep: 1,
        len: 2,
        table: 397
      }
    ]
  },
  ST: {
    desc: 'String Data'
  },
  TM: {
    desc: 'Time'
  },
  TQ: {
    desc: 'Timing Quantity',
    components: [
      {
        dt: 'CQ',
        desc: 'Quantity',
        opt: 'R',
        rep: 1,
        len: 267
      },
      {
        dt: 'RI',
        desc: 'Interval',
        opt: 'R',
        rep: 1,
        len: 206
      },
      {
        dt: 'ST',
        desc: 'Duration',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'TS',
        desc: 'Start Date/Time',
        opt: 'R',
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
        dt: 'ST',
        desc: 'Priority',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'ST',
        desc: 'Condition',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'TX',
        desc: 'Text',
        opt: 'R',
        rep: 1,
        len: 200
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
        dt: 'OSD',
        desc: 'Order Sequencing',
        opt: 'R',
        rep: 1,
        len: 110
      },
      {
        dt: 'CE',
        desc: 'Occurrence Duration',
        opt: 'R',
        rep: 1,
        len: 483
      },
      {
        dt: 'NM',
        desc: 'Total Occurrences',
        opt: 'R',
        rep: 1,
        len: 4
      }
    ]
  },
  TS: {
    desc: 'Time Stamp',
    components: [
      {
        dt: 'DTM',
        desc: 'Time',
        opt: 'C',
        rep: 1,
        len: 24
      },
      {
        dt: 'ID',
        desc: 'Degree of Precision',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 529
      }
    ]
  },
  TX: {
    desc: 'Text Data'
  },
  UVC: {
    desc: 'UB Value Code and Amount',
    components: [
      {
        dt: 'CNE',
        desc: 'Value Code',
        opt: 'C',
        rep: 1,
        len: 20,
        table: 153
      },
      {
        dt: 'MO',
        desc: 'Value Amount',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  VARIES: {
    desc: 'Variable Datatype'
  },
  VH: {
    desc: 'Visiting Hours',
    components: [
      {
        dt: 'ID',
        desc: 'Start Day Range',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 267
      },
      {
        dt: 'ID',
        desc: 'End Day Range',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 267
      },
      {
        dt: 'TM',
        desc: 'Start Hour Range',
        opt: 'R',
        rep: 1,
        len: 16
      },
      {
        dt: 'TM',
        desc: 'End Hour Range',
        opt: 'R',
        rep: 1,
        len: 16
      }
    ]
  },
  VID: {
    desc: 'Version Identifier',
    components: [
      {
        dt: 'ID',
        desc: 'Version ID',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 104
      },
      {
        dt: 'CE',
        desc: 'Internationalization Code',
        opt: 'R',
        rep: 1,
        len: 483,
        table: 399
      },
      {
        dt: 'CE',
        desc: 'International Version ID',
        opt: 'R',
        rep: 1,
        len: 483
      }
    ]
  },
  VR: {
    desc: 'Value Range',
    components: [
      {
        dt: 'ST',
        desc: 'First Data Code Value',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'ST',
        desc: 'Last Data Code Value',
        opt: 'R',
        rep: 1,
        len: 6
      }
    ]
  },
  WVI: {
    desc: 'Channel Identifier',
    components: [
      {
        dt: 'NM',
        desc: 'Channel Number',
        opt: 'C',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Channel Name',
        opt: 'R',
        rep: 1,
        len: 17
      }
    ]
  },
  WVS: {
    desc: 'Waveform Source',
    components: [
      {
        dt: 'ST',
        desc: 'Source One Name',
        opt: 'C',
        rep: 1,
        len: 8
      },
      {
        dt: 'ST',
        desc: 'Source Two Name',
        opt: 'R',
        rep: 1,
        len: 8
      }
    ]
  },
  XAD: {
    desc: 'Extended Address',
    components: [
      {
        dt: 'SAD',
        desc: 'Street Address',
        opt: 'R',
        rep: 1,
        len: 184
      },
      {
        dt: 'ST',
        desc: 'Other Designation',
        opt: 'R',
        rep: 1,
        len: 120
      },
      {
        dt: 'ST',
        desc: 'City',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'ST',
        desc: 'State or Province',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'ST',
        desc: 'Zip or Postal Code',
        opt: 'R',
        rep: 1,
        len: 12
      },
      {
        dt: 'ID',
        desc: 'Country',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 399
      },
      {
        dt: 'ID',
        desc: 'Address Type',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 190
      },
      {
        dt: 'ST',
        desc: 'Other Geographic Designation',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'IS',
        desc: 'County/Parish Code',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 289
      },
      {
        dt: 'IS',
        desc: 'Census Tract',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 288
      },
      {
        dt: 'ID',
        desc: 'Address Representation Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 465
      },
      {
        dt: 'DR',
        desc: 'Address Validity Range',
        opt: 'R',
        rep: 1,
        len: 53
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
      }
    ]
  },
  XCN: {
    desc: 'Extended Composite ID Number and Name for Persons',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'R',
        rep: 1,
        len: 15
      },
      {
        dt: 'FN',
        desc: 'Family Name',
        opt: 'R',
        rep: 1,
        len: 194
      },
      {
        dt: 'ST',
        desc: 'Given Name',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Second and Further Given Names or Initials Thereof',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Suffix',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Prefix',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'IS',
        desc: 'Degree',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 360
      },
      {
        dt: 'IS',
        desc: 'Source Table',
        opt: 'R',
        rep: 1,
        len: 4,
        table: 297
      },
      {
        dt: 'HD',
        desc: 'Assigning Authority',
        opt: 'R',
        rep: 1,
        len: 227,
        table: 363
      },
      {
        dt: 'ID',
        desc: 'Name Type Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 200
      },
      {
        dt: 'ST',
        desc: 'Identifier Check Digit',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'ID',
        desc: 'Check Digit Scheme',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 61
      },
      {
        dt: 'ID',
        desc: 'Identifier Type Code',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 203
      },
      {
        dt: 'HD',
        desc: 'Assigning Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'ID',
        desc: 'Name Representation Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 465
      },
      {
        dt: 'CE',
        desc: 'Name Context',
        opt: 'R',
        rep: 1,
        len: 483,
        table: 448
      },
      {
        dt: 'DR',
        desc: 'Name Validity Range',
        opt: 'R',
        rep: 1,
        len: 53
      },
      {
        dt: 'ID',
        desc: 'Name Assembly Order',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 444
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
        dt: 'ST',
        desc: 'Professional Suffix',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'CWE',
        desc: 'Assigning Jurisdiction',
        opt: 'R',
        rep: 1,
        len: 705
      },
      {
        dt: 'CWE',
        desc: 'Assigning Agency or Department',
        opt: 'R',
        rep: 1,
        len: 705
      }
    ]
  },
  XON: {
    desc: 'Extended Composite Name and Identification Number for Organizations',
    components: [
      {
        dt: 'ST',
        desc: 'Organization Name',
        opt: 'R',
        rep: 1,
        len: 50
      },
      {
        dt: 'IS',
        desc: 'Organization Name Type Code',
        opt: 'R',
        rep: 1,
        len: 20,
        table: 204
      },
      {
        dt: 'NM',
        desc: 'ID Number',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'NM',
        desc: 'Check Digit',
        opt: 'R',
        rep: 1,
        len: 1
      },
      {
        dt: 'ID',
        desc: 'Check Digit Scheme',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 61
      },
      {
        dt: 'HD',
        desc: 'Assigning Authority',
        opt: 'R',
        rep: 1,
        len: 227,
        table: 363
      },
      {
        dt: 'ID',
        desc: 'Identifier Type Code',
        opt: 'R',
        rep: 1,
        len: 5,
        table: 203
      },
      {
        dt: 'HD',
        desc: 'Assigning Facility',
        opt: 'R',
        rep: 1,
        len: 227
      },
      {
        dt: 'ID',
        desc: 'Name Representation Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 465
      },
      {
        dt: 'ST',
        desc: 'Organization Identifier',
        opt: 'R',
        rep: 1,
        len: 20
      }
    ]
  },
  XPN: {
    desc: 'Extended Person Name',
    components: [
      {
        dt: 'FN',
        desc: 'Family Name',
        opt: 'R',
        rep: 1,
        len: 194
      },
      {
        dt: 'ST',
        desc: 'Given Name',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Second and Further Given Names or Initials Thereof',
        opt: 'R',
        rep: 1,
        len: 30
      },
      {
        dt: 'ST',
        desc: 'Suffix',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'ST',
        desc: 'Prefix',
        opt: 'R',
        rep: 1,
        len: 20
      },
      {
        dt: 'IS',
        desc: 'Degree',
        opt: 'R',
        rep: 1,
        len: 6,
        table: 360
      },
      {
        dt: 'ID',
        desc: 'Name Type Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 200
      },
      {
        dt: 'ID',
        desc: 'Name Representation Code',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 465
      },
      {
        dt: 'CE',
        desc: 'Name Context',
        opt: 'R',
        rep: 1,
        len: 483,
        table: 448
      },
      {
        dt: 'DR',
        desc: 'Name Validity Range',
        opt: 'R',
        rep: 1,
        len: 53
      },
      {
        dt: 'ID',
        desc: 'Name Assembly Order',
        opt: 'R',
        rep: 1,
        len: 1,
        table: 444
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
        dt: 'ST',
        desc: 'Professional Suffix',
        opt: 'R',
        rep: 1,
        len: 199
      }
    ]
  },
  XTN: {
    desc: 'Extended Telecommunication Number',
    components: [
      {
        dt: 'ST',
        desc: 'Telephone Number',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ID',
        desc: 'Telecommunication Use Code',
        opt: 'R',
        rep: 1,
        len: 3,
        table: 201
      },
      {
        dt: 'ID',
        desc: 'Telecommunication Equipment Type',
        opt: 'R',
        rep: 1,
        len: 8,
        table: 202
      },
      {
        dt: 'ST',
        desc: 'Email Address',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'NM',
        desc: 'Country Code',
        opt: 'R',
        rep: 1,
        len: 3
      },
      {
        dt: 'NM',
        desc: 'Area/City Code',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'NM',
        desc: 'Local Number',
        opt: 'R',
        rep: 1,
        len: 9
      },
      {
        dt: 'NM',
        desc: 'Extension',
        opt: 'R',
        rep: 1,
        len: 5
      },
      {
        dt: 'ST',
        desc: 'Any Text',
        opt: 'R',
        rep: 1,
        len: 199
      },
      {
        dt: 'ST',
        desc: 'Extension Prefix',
        opt: 'R',
        rep: 1,
        len: 4
      },
      {
        dt: 'ST',
        desc: 'Speed Dial Code',
        opt: 'R',
        rep: 1,
        len: 6
      },
      {
        dt: 'ST',
        desc: 'Unformatted Telephone number',
        opt: 'R',
        rep: 1,
        len: 199
      }
    ]
  }
};

module.exports = fields;
