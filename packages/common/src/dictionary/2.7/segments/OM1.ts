import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'General Segment',
  fields: {
    '1': {
      type: 'NM',
      opt: 'R',
    },
    '2': {
      desc: "Producer's Service/Test/Observation ID",
      opt: 'R',
    },
    '3': {
      type: 'ID',
      desc: 'Permitted Data Types',
      opt: 'O',
      rep: 'infinite',
      len: 3,
      table: 125,
    },
    '4': {
      desc: 'Specimen Required',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 136,
    },
    '5': {
      desc: 'Producer ID',
      opt: 'R',
    },
    '6': {
      desc: 'Observation Description',
      opt: 'O',
    },
    '7': {
      desc: 'Other Service/Test/Observation IDs for the Observation',
    },
    '8': {
      type: 'ST',
      desc: 'Other Names',
      opt: 'R',
      rep: 'infinite',
    },
    '9': {
      desc: 'Preferred Report Name for the Observation',
      opt: 'O',
      rep: 1,
    },
    '10': {
      desc: 'Preferred Short Name or Mnemonic for the Observation',
      len: 8,
    },
    '11': {
      desc: 'Preferred Long Name for the Observation',
    },
    '12': {
      type: 'ID',
      desc: 'Orderability',
      len: 1,
      table: 136,
    },
    '13': {
      rep: 'infinite',
    },
    '14': {
      desc: 'Coded Representation of Method',
    },
    '15': {
      type: 'ID',
      desc: 'Portable Device Indicator',
      rep: 1,
      len: 1,
      table: 136,
    },
    '16': {
      desc: 'Observation Producing Department/Section',
      rep: 'infinite',
    },
    '17': {
      desc: 'Telephone Number of Section',
      rep: 1,
    },
    '18': {
      type: 'CWE',
      desc: 'Nature of Service/Test/Observation',
      len: 1,
      table: 174,
    },
    '19': {
      desc: 'Report Subheader',
      opt: 'O',
    },
    '20': {
      type: 'ST',
      desc: 'Report Display Order',
    },
    '21': {
      desc: 'Date/Time Stamp for Any Change in Definition for the Observation',
    },
    '22': {
      opt: 'O',
    },
    '23': {
      type: 'NM',
      desc: 'Typical Turn-Around Time',
    },
    '24': {
      desc: 'Processing Time',
    },
    '25': {
      type: 'ID',
      desc: 'Processing Priority',
      rep: 'infinite',
      len: 1,
      table: 168,
    },
    '26': {
      desc: 'Reporting Priority',
      rep: 1,
      len: 1,
      table: 169,
    },
    '27': {
      desc: 'Outside Site(s) Where Observation May Be Performed',
      rep: 'infinite',
    },
    '28': {
      desc: 'Address of Outside Site(s)',
    },
    '29': {
      desc: 'Phone Number of Outside Site',
      rep: 1,
    },
    '30': {
      desc: 'Confidentiality Code',
      rep: 1,
      table: 177,
    },
    '31': {
      desc: 'Observations Required to Interpret this Observation',
    },
    '32': {
      type: 'TX',
      desc: 'Interpretation of Observations',
      rep: 1,
    },
    '33': {
      desc: 'Contraindications to Observations',
    },
    '34': {
      desc: 'Reflex Tests/Observations',
    },
    '35': {
      desc: 'Rules that Trigger Reflex Testing',
      rep: 1,
    },
    '36': {
      desc: 'Fixed Canned Message',
    },
    '37': {
      type: 'TX',
      desc: 'Patient Preparation',
      rep: 1,
    },
    '38': {
      desc: 'Procedure Medication',
    },
    '39': {
      type: 'TX',
    },
    '40': {
      type: 'ST',
      desc: 'Service/Test/Observation Performance Schedule',
      rep: 'infinite',
    },
    '41': {
      type: 'TX',
      desc: 'Description of Test Methods',
      rep: 1,
    },
    '42': {
      desc: 'Kind of Quantity Observed',
      table: 254,
    },
    '43': {
      opt: 'O',
      rep: 1,
      table: 255,
    },
    '44': {
      type: 'TX',
      opt: 'O',
      rep: 1,
    },
    '45': {
      opt: 'O',
      rep: 1,
      table: 258,
    },
    '46': {
      opt: 'O',
      rep: 1,
    },
    '47': {
      desc: 'Modality of Imaging Measurement',
      opt: 'O',
      rep: 1,
      table: 910,
    },
  },
};
