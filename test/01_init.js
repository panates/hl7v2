/* eslint-disable */
const assert = require('assert');
const {HL7Message} = require('../');
const {DEFAULT_VERSION, VERSIONS} = require('../lib/types');

describe('Init message', function() {

  it('should construct HL7Message', function() {
    const msg = new HL7Message();
    msg.add('MSH');
    assert.equal(msg.version, DEFAULT_VERSION);
    assert.equal(msg.MSH.VersionId.value, DEFAULT_VERSION);
    assert.equal(msg.MSH.VersionId.message, msg);
    assert(msg.MSH.VersionId.maxLength);
    assert(msg.MSH.VersionId.description);
    assert(msg.MSH.VersionId.optional);
    assert(msg.MSH.VersionId.repeatable);
    assert(msg.MSH.CharacterSet.table);
    assert.equal(msg.MSH.VersionId.length, 1);
    assert.equal(msg.MSH.CharacterSet.length, 0);
  });

  it('should construct all versions', function() {
    for (const version of VERSIONS) {
      const msg = new HL7Message({version});
      msg.add('MSH');
      assert.equal(msg.version, version);
      assert.equal(msg.MSH.VersionId.value, version);
      assert.equal(msg.toHL7(), 'MSH|^~\\&||||||||||' + version + '\r');
    }
  });

  it('should not change MSH version other than message version', function() {
    const msg = new HL7Message({version: '2.5'});
    msg.add('MSH');
    msg.MSH.VersionId.setValue('2.3');
    assert.equal(msg.toHL7(), 'MSH|^~\\&||||||||||2.5\r');
  });

  it('should not set unknown version', function() {
    try {
      new HL7Message({version: '2.0'});
    } catch (e) {
      if (e.message.includes('Unknown'))
        return;
      throw  e;
    }
    assert(0, 'Failed');
  });

  it('should define custom field ', function() {
    const msg = new HL7Message();
    const msh = msg.add('MSH');
    msh.defineField(15, {dt: 'ST'});
    assert(msh.CustomField15.dataType, 'ST');
  });

  it('should sequence number at least 1 when defining field ', function() {
    try {
      const msg = new HL7Message();
      const msh = msg.add('MSH');
      msh.defineField(0, {dt: 'ST'});
    } catch (e) {
      if (e.message.includes('greater than'))
        return;
      throw  e;
    }
    assert(0, 'Failed');
  });

  it('should pass config object when defining field ', function() {
    try {
      const msg = new HL7Message();
      const msh = msg.add('MSH');
      msh.defineField(10);
    } catch (e) {
      if (e.message.includes('You must provide config object'))
        return;
      throw  e;
    }
    assert(0, 'Failed');
  });

  it('should check data type exists in dictionary when defining field', function() {
    try {
      const msg = new HL7Message();
      const msh = msg.add('MSH');
      msh.defineField(1, {dt: 'STTT'});
    } catch (e) {
      if (e.message.includes('Unknown HL7 field'))
        return;
      throw  e;
    }
    assert(0, 'Failed');
  });

});