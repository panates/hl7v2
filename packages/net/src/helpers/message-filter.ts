import type { HL7Request } from '../hl7-request.js';
import type { HL7MessageFilter } from '../types.js';

/** Compiles a filter (see HL7MessageFilter) into a test of a request */
export function compileFilter(
  filter: HL7MessageFilter,
): (req: HL7Request) => boolean {
  if (typeof filter === 'function') return filter;
  const tests = (Array.isArray(filter) ? filter : [filter]).map(compileOne);
  return req => tests.some(test => test(req));
}

function compileOne(pattern: string): (req: HL7Request) => boolean {
  const p = pattern.trim().toUpperCase();
  if (p === '*') return () => true;
  if (p.includes('_')) {
    /*
     * A message structure. The dictionary serves an event by its structure's
     * own definition (ADT_A04 is ADT_A01), so the message follows the
     * structure when both name the same definition.
     */
    return req => {
      const { message } = req;
      const messages = message.dictionary.messages || {};
      const name = message.structureName;
      if (!name)
        return message.messageType.replace('^', '_').toUpperCase() === p;
      return (
        name.toUpperCase() === p ||
        (!!messages[p] && messages[p] === messages[name])
      );
    };
  }
  const [type, event = '*'] = p.split('^');
  const part = (want: string, have: string | undefined) =>
    want === '*' || want === (have || '').toUpperCase();
  return req => {
    const [t, e] = req.message.messageType.split('^');
    return part(type, t) && part(event, e);
  };
}
