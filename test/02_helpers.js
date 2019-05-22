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
    assert.strictEqual(camelCase('Hello world'), 'helloWorld');
    assert.strictEqual(camelCase('Hello-world'), 'helloWorld');
    assert.strictEqual(camelCase('Hello.world'), 'helloWorld');
    assert.strictEqual(camelCase('Hello  world'), 'helloWorld');
    assert.strictEqual(camelCase('Hello&world'), 'helloWorld');
  });

  it('capitalizeFirst', function() {
    assert.strictEqual(capitalizeFirst('hello world'), 'HelloWorld');
    assert.strictEqual(capitalizeFirst('hello-world'), 'HelloWorld');
    assert.strictEqual(capitalizeFirst('hello.world'), 'HelloWorld');
    assert.strictEqual(capitalizeFirst('hello  world'), 'HelloWorld');
    assert.strictEqual(capitalizeFirst('Hello&world'), 'HelloWorld');
  });

  it('hl7Unescape', function() {
    assert.strictEqual(hl7Unescape('\\F\\\\S\\\\R\\\\E\\\\T\\abcd\\U\\'), '|^~\\&abcdU');
    assert.strictEqual(hl7Unescape('\\c65\\\\M015f\\\\M0000\\'),
        'e' + String.fromCharCode(0x15f) + String.fromCharCode(0));
    assert.deepStrictEqual(hl7Unescape('\\x01020304\\'), Buffer.from('01020304', 'hex'));
  });

  it('hl7Escape', function() {
    assert.strictEqual(hl7Escape(undefined), '');
    assert.strictEqual(hl7Escape('|^~\\&abc\x09\x10d'), '\\F\\\\S\\\\R\\\\E\\\\T\\abc\\X0910\\d');
    assert.strictEqual(hl7Escape(Buffer.from([9, 10, 32])), '\\X090a20\\');
    assert.strictEqual(hl7Escape([9, 10, 32]), '\\X090a20\\');
  });

  it('hl7Encode', function() {
    assert.strictEqual(hl7Encode(new Date('2015-01-15T11:32:23+0200'), 'DT'), '20150115');
    assert.strictEqual(hl7Encode(new Date('2015-01-15T11:32:23+0200'), 'DTM'), '20150115093223');
    assert.strictEqual(hl7Encode(123, 'ST'), '123');
  });

  it('hl7EncodeDate', function() {
    assert.strictEqual(hl7EncodeDate(undefined), '');
    assert.strictEqual(hl7EncodeDate(new Date(2015, 1, 15, 11, 32, 23)), '20150215');
  });

  it('hl7EncodeDateTime', function() {
    assert.strictEqual(hl7EncodeDateTime(undefined), '');
    assert.strictEqual(hl7EncodeDateTime(new Date('2015-01-15T11:32:23+0200')), '20150115093223');
  });

  it('hl7DecodeDate', function() {
    assert.strictEqual(hl7DecodeDate(undefined), null);
    assert.deepStrictEqual(hl7DecodeDate('20150215113223'), new Date('2015-02-15T11:32:23Z'));
    assert.throws(() => {
      hl7DecodeDate('abcd');
    }, /Invalid date string/);
  });

  it('hl7DecodeTime', function() {
    assert.strictEqual(hl7DecodeTime(undefined), null);
    assert.deepStrictEqual(hl7DecodeTime('113223'), new Date('0000-01-01T11:32:23.000Z'));
    assert.deepStrictEqual(hl7DecodeTime('1132'), new Date('0000-01-01T11:32:00.000Z'));
    assert.throws(() => {
      hl7DecodeTime('abcd');
    }, /Invalid time string/);
  });

});
