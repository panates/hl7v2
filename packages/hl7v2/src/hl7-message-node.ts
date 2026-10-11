import { HL7Segment } from './hl7-segment.js';

export class HL7MessageNode {
  name: string = '';
  /** The names this group has in other versions of the message (see is()) */
  aliases: string[] = [];
  items: (HL7Segment | HL7MessageNode)[] = [];

  constructor(name: string, aliases?: string[]) {
    this.name = name;
    if (aliases) this.aliases = [...aliases];
  }

  /**
   * Whether this node is the group of the given name - its own, or one it has
   * in another version of the message: ORU_R01's PATIENT_RESULT is called
   * RESPONSE in 2.3, and is found by either name in every version.
   */
  is(name: string): boolean {
    return this.name === name || this.aliases.includes(name);
  }

  /**
   * Searches for a segment of a given type
   */
  getSegment(
    segmentType: string,
    indexOrAfter?: number | HL7Segment,
  ): HL7Segment | undefined {
    let k = 0;
    for (let i = 0; i < this.items.length; i++) {
      const seg = this.items[i];
      if (seg instanceof HL7Segment && seg.segmentType === segmentType) {
        if (!indexOrAfter) return seg;
        if (typeof indexOrAfter === 'number') {
          if (indexOrAfter === k++) return seg;
        } else {
          if (indexOrAfter === seg) indexOrAfter = undefined;
        }
      }
    }
  }

  /**
   * Searches for a segment of a given type in reverse order
   */
  getSegmentFromLast(
    segmentType: string,
    indexOrAfter?: number | HL7Segment,
  ): HL7Segment | undefined {
    let k = 0;
    for (let i = this.items.length - 1; i >= 0; i--) {
      const seg = this.items[i];
      if (seg instanceof HL7Segment && seg.segmentType === segmentType) {
        if (!indexOrAfter) return seg;
        if (typeof indexOrAfter === 'number') {
          if (indexOrAfter === k++) return seg;
        } else {
          if (indexOrAfter === seg) indexOrAfter = undefined;
        }
      }
    }
  }

  /**
   * Searches for a node of a given name, or of an alias of it (see is()).
   * A node carrying the name itself is preferred to one known by it as an alias.
   */
  getNode(
    nodeName: string,
    indexOrAfter?: number | HL7MessageNode,
  ): HL7MessageNode | undefined {
    return pick(this._nodesNamed(nodeName), indexOrAfter);
  }

  /**
   * Searches for a node of a given name, or of an alias of it, in reverse order
   */
  getNodeFromLast(
    nodeName: string,
    indexOrAfter?: number | HL7MessageNode,
  ): HL7MessageNode | undefined {
    return pick(this._nodesNamed(nodeName).reverse(), indexOrAfter);
  }

  protected _nodesNamed(nodeName: string): HL7MessageNode[] {
    const nodes = this.items.filter(
      (x): x is HL7MessageNode => x instanceof HL7MessageNode,
    );
    const named = nodes.filter(x => x.name === nodeName);
    return named.length ? named : nodes.filter(x => x.is(nodeName));
  }
}

function pick(
  nodes: HL7MessageNode[],
  indexOrAfter?: number | HL7MessageNode,
): HL7MessageNode | undefined {
  if (indexOrAfter == null) return nodes[0];
  if (typeof indexOrAfter === 'number') return nodes[indexOrAfter];
  const i = nodes.indexOf(indexOrAfter);
  return i < 0 ? undefined : nodes[i + 1];
}
