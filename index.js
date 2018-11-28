/* GSB
 ------------------------
 (c) 2017-present Panates
 SQB may be freely distributed under the MIT license.
 For details and documentation:
 https://panates.github.io/gsb/
*/

const HL7Message = require('./lib/HL7Message');
const HL7Server = require('./lib/exchange/HL7Server');
const HL7Client = require('./lib/exchange/HL7Client');
const HL7MessageRouter = require('./lib/exchange/HL7MessageRouter');
const {
  hl7Unescape,
  hl7Escape,
  hl7Encode,
  hl7Decode,
  hl7DecodeDate,
  hl7DecodeTime,
  hl7EncodeDate,
  hl7EncodeDateTime
} = require('./lib/helpers');

module.exports = {
  HL7Message,
  HL7Server,
  HL7Client,
  HL7MessageRouter,
  hl7Unescape,
  hl7Escape,
  hl7Encode,
  hl7Decode,
  hl7DecodeDate,
  hl7DecodeTime,
  hl7EncodeDate,
  hl7EncodeDateTime,
  createServer: HL7Server.createServer,
  connect: HL7Client.connect,
  router: (handler) => new HL7MessageRouter(handler)
};
