/* eslint-disable */
const assert = require('assert');
const {HL7Message} = require('../');
const HL7MessageRouter = require('../lib/exchange/HL7MessageRouter');

describe('HL7MessageRouter', function() {

  it('should construct', function() {
    const router = new HL7MessageRouter();
    assert(router);
  });

  it('should add route functions with use()', function() {
    const router = new HL7MessageRouter();
    router.use('ORU^R01', () => {});
    router.use(() => {});
    router.use({messageType: 'ORU^R01'}, () => {});
    assert(router);
    assert.strictEqual(router._handlers.length, 3);
  });

  it('should use() validate arguments', function() {
    const router = new HL7MessageRouter();
    assert.throws(() => {
      router.use(123);
    }, /You must provide/);
  });

  it('should call handlers till get response message', function() {
    const router = new HL7MessageRouter();
    let k = 0;
    const fn = () => {k++;};
    router.use('ORU^R01', fn);
    router.use(fn);
    router.use({messageType: 'ORU^R01', versionId: '2.5'}, () => {
      k++;
      return 1;
    });
    router.use('ORU^R01', fn);
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532||ORU^R01|||2.5');
    return router(msg).then(() => {
      assert.strictEqual(k, 3);
    });
  });

  it('should call only handlers of given messageType', function() {
    const router = new HL7MessageRouter();
    let k = 0;
    const fn = () => {k++;};
    router.use('ORU^R02', fn);
    router.use(fn);
    router.use({messageType: 'ORU^R03', versionId: '2.5'}, fn);
    router.use('ORU^R01', fn);
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532||ORU^R01|||2.5');
    return router(msg).then(() => {
      assert.strictEqual(k, 2);
    });
  });

  it('should call only handlers of given messageType list', function() {
    const router = new HL7MessageRouter();
    let k = 0;
    const fn = () => {k++;};
    router.use(['ORU^R01', 'ORU^R02'], fn);
    router.use(fn);
    router.use({messageType: ['ORU^R01', 'ORU^R02'], versionId: '2.5'}, fn);
    router.use(['ORU^R03', 'ORU^R04'], fn);
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532||ORU^R01|||2.5');
    return router(msg).then(() => {
      assert.strictEqual(k, 3);
    });
  });

  it('should call only handlers of given version', function() {
    const router = new HL7MessageRouter();
    let k = 0;
    const fn = () => {k++;};
    router.use('ORU^R01', fn);
    router.use(fn);
    router.use({messageType: 'ORU^R01', versionId: '2.2'}, fn);
    router.use('ORU^R01', fn);
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532||ORU^R01|||2.5');
    return router(msg).then(() => {
      assert.strictEqual(k, 3);
    });
  });

  it('should call only handlers of given version list', function() {
    const router = new HL7MessageRouter();
    let k = 0;
    const fn = () => {k++;};
    router.use('ORU^R01', fn);
    router.use(fn);
    router.use({messageType: 'ORU^R01', versionId: ['2.2', '2.5']}, fn);
    router.use({messageType: 'ORU^R01', versionId: ['2.7', '2.6']}, fn);
    router.use('ORU^R01', fn);
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532||ORU^R01|||2.5');
    return router(msg).then(() => {
      assert.strictEqual(k, 4);
    });
  });

  it('should call default handler if no handler matches', function(done) {
    const router = new HL7MessageRouter(()=>{
      done();
    });
    router.use('ORU^R02', ()=>{});
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532||ORU^R01|||2.5');
    router(msg);
  });

  it('should handlers return promises', function() {
    const router = new HL7MessageRouter();
    const fn = () => {return Promise.resolve(1);};
    router.use('ORU^R01', fn);
    const msg = HL7Message.parse('MSH|^~\\&|||||199807311532||ORU^R01|||2.5');
    return router(msg).then((resp) => {
      assert.strictEqual(resp, 1);
    });
  });

});
