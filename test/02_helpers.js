/* eslint-disable */
const assert = require('assert');
const {
  camelCase,
  capitalizeFirst,
  hl7Unescape,
  hl7Escape,
  hl7Encode,
  hl7DecodeDate,
  hl7DecodeTime,
  hl7EncodeDate,
  hl7EncodeDateTime
} = require('../lib/helpers');

describe('Helpers', function() {

  it('camelcase', function() {
    assert.equal(camelCase('Hello world'), 'helloWorld');
    assert.equal(camelCase('Hello-world'), 'helloWorld');
    assert.equal(camelCase('Hello.world'), 'helloWorld');
    assert.equal(camelCase('Hello  world'), 'helloWorld');
    assert.equal(camelCase('Hello&world'), 'helloWorld');
  });

  it('capitalizeFirst', function() {
    assert.equal(capitalizeFirst('hello world'), 'HelloWorld');
    assert.equal(capitalizeFirst('hello-world'), 'HelloWorld');
    assert.equal(capitalizeFirst('hello.world'), 'HelloWorld');
    assert.equal(capitalizeFirst('hello  world'), 'HelloWorld');
    assert.equal(capitalizeFirst('Hello&world'), 'HelloWorld');
  });

  it('hl7Unescape', function() {
    assert.equal(hl7Unescape('\\F\\\\S\\\\R\\\\E\\\\T\\abcd\\U\\'), '|^~\\&abcdU');
    assert.equal(hl7Unescape('\\c65\\\\M015f\\\\M0000\\'),
        'e' + String.fromCharCode(0x15f) + String.fromCharCode(0));
    assert.deepEqual(hl7Unescape('\\x01020304\\'), Buffer.from('01020304', 'hex'));
  });

  it('hl7Escape', function() {
    assert.equal(hl7Escape(undefined), '');
    assert.equal(hl7Escape('|^~\\&abc\x09\x10d'), '\\F\\\\S\\\\R\\\\E\\\\T\\abc\\X0910\\d');
    assert.equal(hl7Escape(Buffer.from([9, 10, 32])), '\\X090a20\\');
    assert.equal(hl7Escape([9, 10, 32]), '\\X090a20\\');
  });

  it('hl7Encode', function() {
    assert.equal(hl7Encode(new Date(2015, 1, 15, 11, 32, 23), 'DT'), '20150215');
    assert.equal(hl7Encode(new Date(2015, 1, 15, 11, 32, 23), 'DTM'), '20150215113223');
    assert.equal(hl7Encode(123, 'ST'), '123');
  });

  it('hl7EncodeDate', function() {
    assert.equal(hl7EncodeDate(undefined), '');
    assert.equal(hl7EncodeDate(new Date(2015, 1, 15, 11, 32, 23)), '20150215');
  });

  it('hl7EncodeDateTime', function() {
    assert.equal(hl7EncodeDateTime(undefined), '');
    assert.equal(hl7EncodeDateTime(new Date(2015, 1, 15, 11, 32, 23)), '20150215113223');
  });

  it('hl7DecodeDate', function() {
    assert.equal(hl7DecodeDate(undefined), null);
    assert.deepEqual(hl7DecodeDate('20150215113223'), new Date(2015, 1, 15, 11, 32, 23));
    try {
      hl7DecodeDate('abcd');
    } catch (e) {
      if (e.message.includes('Invalid date string'))
        return;
      throw e;
    }
    assert(0, 'Failed');
  });

  it('hl7DecodeTime', function() {
    assert.equal(hl7DecodeTime(undefined), null);
    assert.deepEqual(hl7DecodeTime('113223'), new Date(0, 0, 0, 11, 32, 23));
    assert.deepEqual(hl7DecodeTime('1132'), new Date(0, 0, 0, 11, 32, 0));
    try {
      hl7DecodeTime('abcd');
    } catch (e) {
      if (e.message.includes('Invalid time string'))
        return;
      throw e;
    }
    assert(0, 'Failed');
  });

});