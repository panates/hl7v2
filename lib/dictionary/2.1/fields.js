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
        desc: 'Zip',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ST',
        desc: 'Country',
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
        dt: 'NM',
        desc: 'Check Digit',
        opt: 'R',
        rep: 1
      },
      {
        dt: 'ID',
        desc: 'Code Identifying Check Digit Scheme Employed',
        opt: 'R',
        rep: 1
      }
    ]
  },
  CM: {
    desc: 'Composite'
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
  CN: {
    desc: 'Composite ID Number And Name',
    components: [
      {
        dt: 'ST',
        desc: 'ID',
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
        desc: 'Degree',
        opt: 'R',
        rep: 1
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
    desc: 'SET ID'
  },
  ST: {
    desc: 'String Data'
  },
  TN: {
    desc: 'Telephone Number'
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
