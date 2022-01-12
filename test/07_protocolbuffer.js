/* eslint-disable */
const assert = require('assert');
const HL7ProtocolHandler = require('../lib/exchange/HL7ProtocolBuffer');
const {VT, FS, CR} = require('../lib/types');

describe('HL7ProtocolBuffer', function() {

  it('should write(Buffer)', function() {
    const p = new HL7ProtocolHandler();
    const buf = Buffer.from('MSH');
    p.write(buf);
    assert.strictEqual(p._buffers[0], buf);
    assert.strictEqual(p.length, 3);
  });

  it('should write(String)', function() {
    const p = new HL7ProtocolHandler();
    p.write('MSH');
    assert(p._buffers[0] instanceof Buffer);
    assert.strictEqual(p._buffers[0].toString(), 'MSH');
  });

  it('should write(Array<byte>)', function() {
    const p = new HL7ProtocolHandler();
    p.write(['M'.charCodeAt(0), 'S'.charCodeAt(0), 'H'.charCodeAt(0)]);
    assert(p._buffers[0] instanceof Buffer);
    assert.strictEqual(p._buffers[0].toString(), 'MSH');
  });

  let testNo = 1;

  it('Handle data block test-' + (testNo++), function(done) {
    const p = new HL7ProtocolHandler();
    p.on('block', (data) => {
      assert.strictEqual(data.toString(), VT + 'MSH|^~\\&||||||||||2.7.1' + FS + CR);
      done();
    });
    p.write(VT + 'MSH|^~\\&||||||||||2.7.1' + FS + CR);
  });

  it('Handle data block test-' + (testNo++), function(done) {
    const p = new HL7ProtocolHandler();
    p.on('block', (data) => {
      assert.strictEqual(data.toString(), VT + 'MSH|^~\\&||||||||||2.7.1' + FS + CR);
      done();
    });
    p.write(VT + 'MSH|^~\\&||||||');
    p.write('||||2.7.1');
    assert.strictEqual(p.length, 24);
    p.write(FS + CR);
  });

  it('Handle data block test-' + (testNo++), function(done) {
    const p = new HL7ProtocolHandler();
    p.on('block', (data) => {
      assert.strictEqual(data.toString(), VT + 'MSH|^~\\&||||||||||2.7.1' + FS);
      done();
    });
    p.write(VT + 'MSH|^~\\&||||||');
    p.write('||||2.7.1' + FS);
  });

  it('Handle data block test-' + (testNo++), function(done) {
    const p = new HL7ProtocolHandler();
    let k = 0;
    p.on('block', (data) => {
      k++;
      if (k === 1)
        assert.strictEqual(data.toString(),
            VT + 'MSH|^~\\&||||||||||2.7.1' + FS + CR);
      if (k === 2) {
        assert.strictEqual(data.toString(), VT + 'MSH|^~\\&||||||||||2.7.1' + FS);
        done();
      }
    });
    p.write(VT + 'MSH|^~\\&||||||');
    p.write('||||2.7.1' + FS + CR + VT + 'MSH|^~\\&||||||');
    p.write('||||2.7.1' + FS);
  });

  it('Handle data block test-' + (testNo++), function(done) {
    const p = new HL7ProtocolHandler();
    let k = 0;
    p.on('block', (data) => {
      k++;
      if (k === 1)
        assert.strictEqual(data.toString(),
            VT + 'MSH|^~\\&||||||||||2.7.1' + FS);
      if (k === 2) {
        assert.strictEqual(data.toString(), VT + 'MSH|^~\\&||||||||||2.7.1' + FS + CR);
        done();
      }
    });
    p.write('Bulk Data' + VT + 'MSH|^~\\&||||||');
    p.write('||||2.7.1' + FS + 'Bulk Data' + VT + 'MSH|^~\\&||||||');
    p.write('||||2.7.1' + FS + CR);
  });

  it('Handle data block test-' + (testNo), function(done) {
    const p = new HL7ProtocolHandler();
    p.on('block', (data) => {
      assert.strictEqual(data.toString(), VT + 'MSH|^~\\&||||||||||2.7.1' + FS + CR);
      done();
    });
    p.write('MSH|^~\\&||||||||||2.7.1' + FS + CR);
    p.write(VT + 'MSH|^~\\&||||||||||2.7.1' + FS + CR);
  });

  it('Should emit blocks as Buffer instances', function(done) {
    const p = new HL7ProtocolHandler();
    let tests;
    p.on('block', (data) => {
      assert(data instanceof Buffer);
      assert.strictEqual(data.toString(), VT + 'MSH|^~\\&||||||||||2.7.1' + FS + CR);
      if (tests === 0) done();
    });

    const msg = VT + 'MSH|^~\\&||||||||||2.7.1' + FS + CR;
    tests = 3;
    --tests, p.write(msg);
    --tests, p.write(Buffer.from(msg));
    --tests, p.write([...Buffer.from(msg)]);
  })

});
