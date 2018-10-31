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
        dt: 'ID',
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
        desc: 'Type',
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
  CE: {
    desc: 'Coded Element',
    components: [
      {
        dt: 'ID',
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
        dt: 'ST',
        desc: 'Assigning Authority',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CK_ACCOUNT_NO: {
    desc: 'Account Number',
    components: [
      {
        dt: 'NM',
        desc: 'Account Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Check Digit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Check Digit Scheme',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Facility ID',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_ABS_RANGE: {
    desc: 'Absolute Range',
    components: [
      {
        dt: 'CM_RANGE',
        desc: 'Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Numeric Change',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Percent Per Change',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Days',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_AUI: {
    desc: 'Authorization Information',
    components: [
      {
        dt: 'ST',
        desc: 'Authorization Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'DT',
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
  CM_BATCH_TOTAL: {
    desc: 'CM For Batch Totals',
    components: [
      {
        dt: 'NM',
        desc: 'Batch Total 1',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Batch Total 2',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_CCD: {
    desc: 'Charge Time',
    components: [
      {
        dt: 'ID',
        desc: 'When To Charge',
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
  CM_DDI: {
    desc: 'Daily Deductible',
    components: [
      {
        dt: 'ST',
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
  CM_DIN: {
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
  CM_DLD: {
    desc: 'Discharge Location',
    components: [
      {
        dt: 'ID',
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
  CM_DLT: {
    desc: 'Delta Check',
    components: [
      {
        dt: 'CM_RANGE',
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
        desc: 'Change',
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
  CM_DTN: {
    desc: 'Day Type And Number',
    components: [
      {
        dt: 'ID',
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
  CM_EIP: {
    desc: 'Parent Order',
    components: [
      {
        dt: 'ST',
        desc: 'Parent s Placer Order Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Parent s Filler Order Number',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_ELD: {
    desc: 'Error',
    components: [
      {
        dt: 'ST',
        desc: 'Segment-ID',
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
        desc: 'Field-Position',
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
  CM_FILLER: {
    desc: 'Filler',
    components: [
      {
        dt: 'ID',
        desc: 'Unique Filler Id',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Filler Application ID',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_FINANCE: {
    desc: 'Finance',
    components: [
      {
        dt: 'ID',
        desc: 'Financial Class ID',
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
  CM_GROUP_ID: {
    desc: 'Group ID',
    components: [
      {
        dt: 'ID',
        desc: 'Unique Group Id',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Placer Application Id',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_INTERNAL_LOCATION: {
    desc: 'Internal Location',
    components: [
      {
        dt: 'ID',
        desc: 'Nurse Unit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Room',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Bed',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Facility ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Bed Status',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Etage',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Klinik',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Zentrum',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_JOB_CODE: {
    desc: 'Job Code',
    components: [
      {
        dt: 'ID',
        desc: 'Job Code',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Employee Classification',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_LA1: {
    desc: 'Location With Address Information',
    components: [
      {
        dt: 'CM_INTERNAL_LOCATION',
        desc: 'Dispense / Deliver To Location',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'AD',
        desc: 'Location',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_LICENSE_NO: {
    desc: 'License Number',
    components: [
      {
        dt: 'ST',
        desc: 'License Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Issuing State,province,country',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_MOC: {
    desc: 'Charge To Practise',
    components: [
      {
        dt: 'ST',
        desc: 'Dollar Amount',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Charge Code',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_MSG: {
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
      }
    ]
  },
  CM_NDL: {
    desc: 'Observing Practitioner',
    components: [
      {
        dt: 'CN',
        desc: 'Interpreter / Technician',
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
        dt: 'CM_INTERNAL_LOCATION',
        desc: 'Location',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_OCD: {
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
  CM_OSP: {
    desc: 'Occurence Span',
    components: [
      {
        dt: 'ID',
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
  CM_PARENT_RESULT: {
    desc: 'Undefined CM Data Type',
    components: [
      {
        dt: 'CE',
        desc: 'Observation Identifier',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Sub-ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'Result',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_PAT_ID: {
    desc: 'Patient ID',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Check Digit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Check Digit Scheme',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Facility ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Type',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_PAT_ID_0192: {
    desc: 'Patient ID With Table 0192',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Check Digit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Check Digit Scheme',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Facility ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Type',
        opt: 'R',
        rep: 1,
        table: 192
      }
    ]
  },
  CM_PCF: {
    desc: 'Pre-certification Required',
    components: [
      {
        dt: 'ID',
        desc: 'Pre-certification Patient Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Pre-certication Required',
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
  CM_PEN: {
    desc: 'Penalty',
    components: [
      {
        dt: 'ID',
        desc: 'Penalty ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'NM',
        desc: 'Penalty Amount',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_PIP: {
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
      }
    ]
  },
  CM_PLACER: {
    desc: 'Auftragsnummer Des Auftraggebers / Der Auftraggebenden Stelle',
    components: [
      {
        dt: 'ID',
        desc: 'Unique Placer Id',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Placer Application',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_PLN: {
    desc: 'Practitioner ID Numbers',
    components: [
      {
        dt: 'ST',
        desc: 'ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Type Of ID Number',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'State/other Qualifiying Info',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_POSITION: {
    desc: 'Position',
    components: [
      {
        dt: 'ST',
        desc: 'Saal',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Tisch',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Stuhl',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_PRACTITIONER: {
    desc: 'Practitioner',
    components: [
      {
        dt: 'CN',
        desc: 'Procedure Practitioner  ID',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Procedure Practitioner Type',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_PTA: {
    desc: 'Policy Type',
    components: [
      {
        dt: 'ID',
        desc: 'Policy Type',
        opt: 'R',
        rep: 1,
        table: 147
      },
      {
        dt: 'ID',
        desc: 'Amount Class',
        opt: 'R',
        rep: 1,
        table: 193
      },
      {
        dt: 'NM',
        desc: 'Amount',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_RANGE: {
    desc: 'Wertebereich',
    components: [
      {
        dt: 'CE',
        desc: 'Low Value',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CE',
        desc: 'High Value',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_RFR: {
    desc: 'Reference Range',
    components: [
      {
        dt: 'CM_RANGE',
        desc: 'Reference Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Sex',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CM_RANGE',
        desc: 'Age Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CM_RANGE',
        desc: 'Gestational Age Range',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Species',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Race / Subspecies',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Text Condition',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_RI: {
    desc: 'Interval',
    components: [
      {
        dt: 'ST',
        desc: 'Repeat Pattern',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Explicit Time Intevall',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM_RMC: {
    desc: 'Room Coverage',
    components: [
      {
        dt: 'ID',
        desc: 'Room Type',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
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
  CM_SPD: {
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
  CM_SPS: {
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
      }
    ]
  },
  CM_UVC: {
    desc: 'Value Code And Amount',
    components: [
      {
        dt: 'ID',
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
  CM_VR: {
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
  CN: {
    desc: 'Composite ID Number And Name',
    components: [
      {
        dt: 'ID',
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
        dt: 'ST',
        desc: 'Degree',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Source Table Id',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'AD',
        desc: 'Adresse',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TN',
        desc: 'Telefon',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TN',
        desc: 'Faxnummer',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'TN',
        desc: 'Online-Nummer',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'E-Mail',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CN_PERSON: {
    desc: 'Person',
    components: [
      {
        dt: 'ID',
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
        dt: 'ST',
        desc: 'Degree',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Source Table Id',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CQ_QUANTITY: {
    desc: 'Quantity',
    components: [
      {
        dt: 'ST',
        desc: 'Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Units',
        opt: 'R',
        rep: 1
      }
    ]
  },
  DT: {
    desc: 'Date'
  },
  FT: {
    desc: 'Formatted Text Data'
  },
  ID: {
    desc: 'Coded values for HL7 tables'
  },
  IS: {
    desc: 'Coded value for user-defined tables'
  },
  NM: {
    desc: 'Numeric'
  },
  PN: {
    desc: 'Person Name',
    components: [
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
        dt: 'ST',
        desc: 'Degree',
        opt: 'R',
        rep: 1
      }
    ]
  },
  SI: {
    desc: 'Sequence ID'
  },
  ST: {
    desc: 'String Data'
  },
  TN: {
    desc: 'Telephone Number'
  },
  TQ: {
    desc: 'Timing Quantity',
    components: [
      {
        dt: 'CQ_QUANTITY',
        desc: 'Quantity',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'CM_RI',
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
        dt: 'ID',
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
        dt: 'TX',
        desc: 'Text',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Conjunction',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Order Sequencing',
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
      },
      {
        dt: 'ST',
        desc: 'Degree Of Precision',
        opt: 'R',
        rep: 1
      }
    ]
  },
  TX: {
    desc: 'Text Data'
  },
  VARIES: {
    desc: 'Variable Datatype'
  }
};

module.exports = fields;
