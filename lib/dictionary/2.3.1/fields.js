const fields = {
  AD: {
    desc: 'Address',
    components: [
      {
        dt: 'ST',
        desc: 'Street Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Other Designation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'City',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'State Or Province',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Zip Or Postal Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Country',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Address Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Other Geographic Designation',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'TS',
        desc: 'Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Source',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CCD: {
    desc: 'Charge Time',
    components: [
      {
        dt: 'ID',
        desc: 'When To Charge Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TS',
        desc: 'Date/time',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Channel Calibration Baseline',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Channel Calibration Time Skew',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'WVS',
        desc: 'Electrode Names',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CSU',
        desc: 'Channel Sensitivity/units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CCP',
        desc: 'Calibration Parameters',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Sampling Frequency',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NR',
        desc: 'Minimum/maximum Data Values',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Name Of Coding System',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Alternate Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Alternate Text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Name Of Alternate Coding System',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CF: {
    desc: 'Coded Element With Formatted Values',
    components: [
      {
        dt: 'ST',
        desc: 'Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'FT',
        desc: 'Formatted Text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Name Of Coding System',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Alternate Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'FT',
        desc: 'Alternate Formatted Text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Name Of Alternate Coding System',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CK: {
    desc: 'Composite ID With Check Digit',
    components: [
      {
        dt: 'NM',
        desc: 'ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Check Digit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Code Identifying The Check Digit Scheme Employed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Assigning Authority',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CN: {
    desc: 'Composite ID Number And Name',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Family Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Given Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Middle Initial Or Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Suffix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Prefix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Degree',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Source Table',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Assigning Authority',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CNE: {
    desc: 'Coded With No Exceptions',
    components: [
      {
        dt: 'ST',
        desc: 'Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Name Of Coding System',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Alternate Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Alternate Text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Name Of Alternate Coding System',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Coding System Version ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Alternate Coding System Version ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Original Text',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CNS: {
    desc: 'Composite ID Number And Name Simplified',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Family Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Given Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Second And Further Given Names Or Initials Thereof',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Suffix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Prefix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Degree',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Source Table',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Assigning Authority Namespace ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Assigning Authority Universal ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Assigning Authority Universal ID Type',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CP: {
    desc: 'Composite Price',
    components: [
      {
        dt: 'MO',
        desc: 'Price',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Price Type',
        opt: 'R',
        rep: 1,
        table: 205
      },
      {
        dt: 'NM',
        desc: 'From Value',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'To Value',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Range Units',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Range Type',
        opt: 'R',
        rep: 1,
        table: 298
      }
    ]
  },
  CQ: {
    desc: 'Composite Quantity With Units',
    components: [
      {
        dt: 'NM',
        desc: 'Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Units',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CSU: {
    desc: 'Channel Sensitivity/units',
    components: [
      {
        dt: 'NM',
        desc: 'Channel Sensitivity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Unit Of Measure Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Unit Of Measure Description',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Unit Of Measure Coding System',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Alternate Unit Of Measure Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Alternate Unit Of Measure Description',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Alternate Unit Of Measure Coding System',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CWE: {
    desc: 'Coded With Exceptions',
    components: [
      {
        dt: 'ST',
        desc: 'Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Name Of Coding System',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Alternate Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Alternate Text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Name Of Alternate Coding System',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Coding System Version ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Alternate Coding System Version ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Original Text',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CX: {
    desc: 'Extended Composite ID With Check Digit',
    components: [
      {
        dt: 'ST',
        desc: 'ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Check Digit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Code Identifying The Check Digit Scheme Employed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Assigning Authority',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Identifier Type Code',
        opt: 'R',
        rep: 1,
        table: 203
      },
      {
        dt: 'HD',
        desc: 'Assigning Facility',
        opt: 'R',
        rep: 1
      }
    ]
  },
  DDI: {
    desc: 'Daily Deductible',
    components: [
      {
        dt: 'NM',
        desc: 'Delay Days',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Number Of Days',
        opt: 'R',
        rep: 1
      }
    ]
  },
  DIN: {
    desc: 'Activation Date',
    components: [
      {
        dt: 'TS',
        desc: 'Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Institution Name',
        opt: 'R',
        rep: 1
      }
    ]
  },
  DLD: {
    desc: 'Discharge Location',
    components: [
      {
        dt: 'IS',
        desc: 'Discharge Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TS',
        desc: 'Effective Date',
        opt: 'R',
        rep: 1
      }
    ]
  },
  DLN: {
    desc: 'Driver\'s License Number',
    components: [
      {
        dt: 'ST',
        desc: 'Driver s License Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Issuing State, Province, Country',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Expiration Date',
        opt: 'R',
        rep: 1
      }
    ]
  },
  DLT: {
    desc: 'Delta Check',
    components: [
      {
        dt: 'NR',
        desc: 'Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Numeric Threshold',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Change Computation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Length Of Time-days',
        opt: 'R',
        rep: 1
      }
    ]
  },
  DR: {
    desc: 'Date/time Range',
    components: [
      {
        dt: 'TS',
        desc: 'Range Start Date/time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TS',
        desc: 'Range End Date/time',
        opt: 'R',
        rep: 1
      }
    ]
  },
  DT: {
    desc: 'Date'
  },
  DTN: {
    desc: 'Day Type And Number',
    components: [
      {
        dt: 'IS',
        desc: 'Day Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Number Of Days',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Type Of Data',
        opt: 'R',
        rep: 1,
        table: 191
      },
      {
        dt: 'ID',
        desc: 'Data Subtype',
        opt: 'R',
        rep: 1,
        table: 291
      },
      {
        dt: 'ID',
        desc: 'Encoding',
        opt: 'R',
        rep: 1,
        table: 299
      },
      {
        dt: 'ST',
        desc: 'Data',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Namespace ID',
        opt: 'R',
        rep: 1,
        table: 300
      },
      {
        dt: 'ST',
        desc: 'Universal ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Universal ID Type',
        opt: 'R',
        rep: 1,
        table: 301
      }
    ]
  },
  EIP: {
    desc: 'Parent Order',
    components: [
      {
        dt: 'EI',
        desc: 'Parent s Placer Order Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Parent s Filler Order Number',
        opt: 'R',
        rep: 1
      }
    ]
  },
  ELD: {
    desc: 'Error',
    components: [
      {
        dt: 'ST',
        desc: 'Segment ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Sequence',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Field Position',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Code Identifying Error',
        opt: 'R',
        rep: 1
      }
    ]
  },
  FC: {
    desc: 'Financial Class',
    components: [
      {
        dt: 'IS',
        desc: 'Financial Class',
        opt: 'R',
        rep: 1,
        table: 64
      },
      {
        dt: 'TS',
        desc: 'Effective Date',
        opt: 'R',
        rep: 1
      }
    ]
  },
  FN: {
    desc: 'Family + Last Name Prefix',
    components: [
      {
        dt: 'ST',
        desc: 'Family Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Last Name Prefix',
        opt: 'R',
        rep: 1
      }
    ]
  },
  FT: {
    desc: 'Formatted Text Data'
  },
  HD: {
    desc: 'Hierarchic Designator',
    components: [
      {
        dt: 'IS',
        desc: 'Namespace ID',
        opt: 'R',
        rep: 1,
        table: 300
      },
      {
        dt: 'ST',
        desc: 'Universal ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Universal ID Type',
        opt: 'R',
        rep: 1,
        table: 301
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
    desc: 'Job Code/class',
    components: [
      {
        dt: 'IS',
        desc: 'Job Code',
        opt: 'R',
        rep: 1,
        table: 327
      },
      {
        dt: 'IS',
        desc: 'Job Class',
        opt: 'R',
        rep: 1,
        table: 328
      }
    ]
  },
  LA1: {
    desc: 'Location With Address Information (variant 1',
    components: [
      {
        dt: 'IS',
        desc: 'Point Of Care',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Room',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Bed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Facility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Location Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Person Location Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Building',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Floor',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'AD',
        desc: 'Address',
        opt: 'R',
        rep: 1
      }
    ]
  },
  LA2: {
    desc: 'Location With Address Information (variant 2',
    components: [
      {
        dt: 'IS',
        desc: 'Point Of Care',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Room',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Bed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Facility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Location Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Person Location Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Building',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Floor',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Street Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Other Designation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'City',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'State Or Province',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Zip Or Postal Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Country',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Address Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Other Geographic Designation',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Sample 1 From Channel 2',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Sample 1 From Channel 3',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Sample 2 From Channel 1',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Sample 2 From Channel 2',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Sample 2 From Channel 3',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Denomination',
        opt: 'R',
        rep: 1
      }
    ]
  },
  MOC: {
    desc: 'Charge To Practise',
    components: [
      {
        dt: 'MO',
        desc: 'Dollar Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Charge Code',
        opt: 'R',
        rep: 1
      }
    ]
  },
  MOP: {
    desc: 'Money Or Percentage',
    components: [
      {
        dt: 'IS',
        desc: 'Money Or Percentage Indicator',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Money Or Percentage Quantity',
        opt: 'R',
        rep: 1
      }
    ]
  },
  MSG: {
    desc: 'Message Type',
    components: [
      {
        dt: 'ID',
        desc: 'Message Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Trigger Event',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Message Structure',
        opt: 'R',
        rep: 1
      }
    ]
  },
  NA: {
    desc: 'Numeric Array',
    components: [
      {
        dt: 'NM',
        desc: 'Value1',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Value2',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Value3',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Value4',
        opt: 'R',
        rep: 1
      }
    ]
  },
  NDL: {
    desc: 'Observing Practitioner',
    components: [
      {
        dt: 'CN',
        desc: 'OP Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TS',
        desc: 'Start Date/time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TS',
        desc: 'End Date/time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Point Of Care',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Room',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Bed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Facility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Location Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Person Location Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Building',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Floor',
        opt: 'R',
        rep: 1
      }
    ]
  },
  NM: {
    desc: 'Numeric'
  },
  NR: {
    desc: 'Wertebereich',
    components: [
      {
        dt: 'NM',
        desc: 'Low Value',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'High Value',
        opt: 'R',
        rep: 1
      }
    ]
  },
  OCD: {
    desc: 'Occurence',
    components: [
      {
        dt: 'ID',
        desc: 'Occurrence Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Occurrence Date',
        opt: 'R',
        rep: 1
      }
    ]
  },
  OSD: {
    desc: 'Order Sequence',
    components: [
      {
        dt: 'ID',
        desc: 'Sequence/results Flag',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Placer Order Number: Entity Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Placer Order Number: Namespace ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Filler Order Number: Entity Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Filler Order Number: Namespace ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Sequence Condition Value',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Maximum Number Of Repeats',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Placer Order Number: Universal ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Placer Order Number; Universal ID Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Filler Order Number: Universal ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Filler Order Number: Universal ID Type',
        opt: 'R',
        rep: 1
      }
    ]
  },
  OSP: {
    desc: 'Occurence Span',
    components: [
      {
        dt: 'CE',
        desc: 'Occurrence Span Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Occurrence Span Start Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Occurrence Span Stop Date',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PCF: {
    desc: 'Pre-certification Required',
    components: [
      {
        dt: 'IS',
        desc: 'Pre-certification Patient Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Pre-certification Required',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TS',
        desc: 'Pre-certification Window',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PI: {
    desc: 'Person Identifier',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Type Of ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Other Qualifying Info',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PIP: {
    desc: 'Privileges',
    components: [
      {
        dt: 'CE',
        desc: 'Privilege',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Privilege Class',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Expiration Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Activation Date',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'EI',
        desc: 'Facility',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PL: {
    desc: 'Person Location',
    components: [
      {
        dt: 'IS',
        desc: 'Point Of Care',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Room',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Bed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Facility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Location Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Person Location Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Building',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Floor',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Location Description',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PLN: {
    desc: 'Practitioner ID Numbers',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Type Of ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'State/other Qualifying Info',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Expiration Date',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PN: {
    desc: 'Person Name',
    components: [
      {
        dt: 'FN',
        desc: 'Family+last Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Given Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Middle Initial Or Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Suffix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Prefix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Degree',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'FN',
        desc: 'Family+last Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Given Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Middle Initial Or Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Suffix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Prefix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Degree',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Source Table',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Assigning Authority',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Name Type Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Identifier Check Digit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Code Identifying The Check Digit Scheme Employed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Identifier Type Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Assigning Facility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TS',
        desc: 'Date/Time Action Performed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Name Representation Code',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PRL: {
    desc: 'Parent Result Link',
    components: [
      {
        dt: 'CE',
        desc: 'OBX-3 Observation Identifier Of Parent Result',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'OBX-4 Sub-ID Of Parent Result',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Part Of OBX-5 Observation Result From Parent',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Processing Mode',
        opt: 'R',
        rep: 1
      }
    ]
  },
  PTA: {
    desc: 'Policy Type',
    components: [
      {
        dt: 'IS',
        desc: 'Policy Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Amount Class',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Amount',
        opt: 'R',
        rep: 1
      }
    ]
  },
  QIP: {
    desc: 'Query Input Parameter List',
    components: [
      {
        dt: 'ST',
        desc: 'Field Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Value1&value2&value3',
        opt: 'R',
        rep: 1
      }
    ]
  },
  QSC: {
    desc: 'Query Selection Criteria',
    components: [
      {
        dt: 'ST',
        desc: 'Segment Field Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Relational Operator',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Value',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Relational Conjunction',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'HL7 Date Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Maximum Column Width',
        opt: 'R',
        rep: 1
      }
    ]
  },
  RFR: {
    desc: 'Reference Range',
    components: [
      {
        dt: 'NR',
        desc: 'Numeric Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Administrative Sex',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NR',
        desc: 'Age Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NR',
        desc: 'Gestational Age Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Species',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Race/subspecies',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Conditions',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Explicit Time Interval',
        opt: 'R',
        rep: 1
      }
    ]
  },
  RMC: {
    desc: 'Room Coverage',
    components: [
      {
        dt: 'IS',
        desc: 'Room Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Amount Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Coverage Amount',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Application ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Type Of Data',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Subtype',
        opt: 'R',
        rep: 1
      }
    ]
  },
  SCV: {
    desc: 'Scheduling Class Value Pair',
    components: [
      {
        dt: 'IS',
        desc: 'Parameter Class',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Parameter Value',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Num1',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Separator Or Suffix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Num2',
        opt: 'R',
        rep: 1
      }
    ]
  },
  SPD: {
    desc: 'Specialty',
    components: [
      {
        dt: 'ST',
        desc: 'Specialty Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Governing Board',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Eligible Or Certified',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
        desc: 'Date Of Certification',
        opt: 'R',
        rep: 1
      }
    ]
  },
  SPS: {
    desc: 'Specimen Source',
    components: [
      {
        dt: 'CE',
        desc: 'Specimen Source Name Or Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Additives',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TX',
        desc: 'Freetext',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Body Site',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Site Modifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Collection Modifier Method Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Specimen Role',
        opt: 'R',
        rep: 1
      }
    ]
  },
  ST: {
    desc: 'String Data'
  },
  TM: {
    desc: 'Time'
  },
  TN: {
    desc: 'Telephone Number'
  },
  TQ: {
    desc: 'Timing Quantity',
    components: [
      {
        dt: 'CQ',
        desc: 'Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'RI',
        desc: 'Interval',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Duration',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TS',
        desc: 'Start Date/time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TS',
        desc: 'End Date/time',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Priority',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Condition',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Conjunction',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'OSD',
        desc: 'Order Sequencing',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Occurrence Duration',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Total Occurences',
        opt: 'R',
        rep: 1
      }
    ]
  },
  TS: {
    desc: 'Time Stamp',
    components: [
      {
        dt: 'ST',
        desc: 'Time Of An Event',
        opt: 'R',
        rep: 1
      }
    ]
  },
  TX: {
    desc: 'Text Data'
  },
  UVC: {
    desc: 'Value Code And Amount',
    components: [
      {
        dt: 'IS',
        desc: 'Value Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Value Amount',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'End Day Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TM',
        desc: 'Start Hour Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TM',
        desc: 'End Hour Range',
        opt: 'R',
        rep: 1
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
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Internationalization Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'International Version ID',
        opt: 'R',
        rep: 1
      }
    ]
  },
  VR: {
    desc: 'Value Qualifier',
    components: [
      {
        dt: 'ST',
        desc: 'First Data Code Value',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Last Data Code Calue',
        opt: 'R',
        rep: 1
      }
    ]
  },
  WVI: {
    desc: 'Channel Identifier',
    components: [
      {
        dt: 'NM',
        desc: 'Channel Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Channel Name',
        opt: 'R',
        rep: 1
      }
    ]
  },
  WVS: {
    desc: 'Wavefrom Source',
    components: [
      {
        dt: 'ST',
        desc: 'Source Name 1',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Source Name 2',
        opt: 'R',
        rep: 1
      }
    ]
  },
  XAD: {
    desc: 'Extended Address',
    components: [
      {
        dt: 'ST',
        desc: 'Street Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Other Designation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'City',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'State Or Province',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Zip Or Postal Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Country',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Address Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Other Geographic Designation',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'County/parish Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Census Tract',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Address Representation Code',
        opt: 'R',
        rep: 1
      }
    ]
  },
  XCN: {
    desc: 'Extended Composite ID Number And Name For Persons',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'FN',
        desc: 'Family+last Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Given Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Middle Initial Or Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Suffix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Prefix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Degree',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Source Table',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Assigning Authority',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Name Type Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Identifier Check Digit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Code Identifying The Check Digit Scheme Employed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Identifier Type Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Assigning Facility',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Name Representation Code',
        opt: 'R',
        rep: 1
      }
    ]
  },
  XON: {
    desc: 'Extended Composite Name And Identification Number For Organizations',
    components: [
      {
        dt: 'ST',
        desc: 'Organization Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Organization Name Type Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Check Digit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Code Identifying The Check Digit Scheme Employed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Assigning Authority',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Identifier Type Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'HD',
        desc: 'Assigning Facility ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Name Representation Code',
        opt: 'R',
        rep: 1
      }
    ]
  },
  XPN: {
    desc: 'Extended Person Name',
    components: [
      {
        dt: 'FN',
        desc: 'Family+last Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Given Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Middle Initial Or Name',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Suffix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Prefix',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'IS',
        desc: 'Degree',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Name Type Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Name Representation Code',
        opt: 'R',
        rep: 1
      }
    ]
  },
  XTN: {
    desc: 'Extended Telecommunication Number',
    components: [
      {
        dt: 'TN',
        desc: 'Telephone Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Telecommunication Use Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Telecommunication Equipment Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Email Address',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Country Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Area/city Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Phone Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Extension',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Any Text',
        opt: 'R',
        rep: 1
      }
    ]
  }
};

module.exports = fields;
