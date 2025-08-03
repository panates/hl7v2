import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'General Segment',
  fields: {
    '1': {
      type: 'NM',
      opt: 'R',
      len: 4,
    },
    '2': {
      type: 'CE',
      desc: "Producer's Service/Test/Observation ID",
      opt: 'R',
      len: 250,
    },
    '3': {
      type: 'ID',
      desc: 'Permitted Data Types',
      opt: 'O',
      rep: 'infinite',
      len: 12,
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
      type: 'CE',
      desc: 'Producer ID',
      opt: 'R',
      len: 250,
    },
    '6': {
      desc: 'Observation Description',
      opt: 'O',
    },
    '7': {
      type: 'CE',
      desc: 'Other Service/Test/Observation IDs for the Observation',
      len: 250,
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
      len: 30,
    },
    '10': {
      desc: 'Preferred Short Name or Mnemonic for Observation',
      len: 8,
    },
    '11': {
      desc: 'Preferred Long Name for the Observation',
      len: 200,
    },
    '12': {
      type: 'ID',
      desc: 'Orderability',
      len: 1,
      table: 136,
    },
    '13': {
      type: 'CE',
      rep: 'infinite',
      len: 250,
    },
    '14': {
      desc: 'Coded Representation of Method',
      len: 250,
    },
    '15': {
      type: 'ID',
      desc: 'Portable Device Indicator',
      rep: 1,
      len: 1,
      table: 136,
    },
    '16': {
      type: 'CE',
      desc: 'Observation Producing Department/Section',
      rep: 'infinite',
      len: 250,
    },
    '17': {
      desc: 'Telephone Number of Section',
      rep: 1,
      len: 250,
    },
    '18': {
      desc: 'Nature of Service/Test/Observation',
      len: 1,
      table: 174,
    },
    '19': {
      type: 'CE',
      desc: 'Report Subheader',
      opt: 'O',
      len: 250,
    },
    '20': {
      type: 'ST',
      desc: 'Report Display Order',
      len: 20,
    },
    '21': {
      type: 'TS',
      len: 26,
    },
    '22': {
      opt: 'O',
    },
    '23': {
      type: 'NM',
      desc: 'Typical Turn-Around Time',
      len: 20,
    },
    '24': {
      desc: 'Processing Time',
    },
    '25': {
      type: 'ID',
      desc: 'Processing Priority',
      rep: 'infinite',
      len: 40,
      table: 168,
    },
    '26': {
      desc: 'Reporting Priority',
      rep: 1,
      len: 5,
      table: 169,
    },
    '27': {
      type: 'CE',
      desc: 'Outside Site',
      rep: 'infinite',
      len: 250,
    },
    '28': {
      desc: 'Address of Outside Site',
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
      type: 'CE',
      desc: 'Observations Required to Interpret the Observation',
      len: 250,
    },
    '32': {
      type: 'TX',
      desc: 'Interpretation of Observations',
      rep: 1,
      len: 65536,
    },
    '33': {
      type: 'CE',
      desc: 'Contraindications to Observations',
    },
    '34': {
      desc: 'Reflex Tests/Observations',
      len: 250,
    },
    '35': {
      desc: 'Rules that Trigger Reflex Testing',
      rep: 1,
      len: 80,
    },
    '36': {
      type: 'CE',
      desc: 'Fixed Canned Message',
    },
    '37': {
      type: 'TX',
      desc: 'Patient Preparation',
      rep: 1,
      len: 200,
    },
    '38': {
      type: 'CE',
      desc: 'Procedure Medication',
      len: 250,
    },
    '39': {
      type: 'TX',
    },
    '40': {
      type: 'ST',
      desc: 'Service/Test/Observation Performance Schedule',
      rep: 'infinite',
      len: 60,
    },
    '41': {
      type: 'TX',
      desc: 'Description of Test Methods',
      rep: 1,
      len: 65536,
    },
    '42': {
      type: 'CE',
      desc: 'Kind of Quantity Observed',
      len: 250,
      table: 254,
    },
    '43': {
      type: 'CE',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 255,
    },
    '44': {
      type: 'TX',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '45': {
      type: 'CE',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 258,
    },
    '46': {
      type: 'CE',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '47': {
      type: 'CE',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 259,
    },
  },
};
