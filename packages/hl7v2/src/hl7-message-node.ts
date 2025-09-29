import { HL7Segment } from './hl7-segment.js';

export class HL7MessageNode {
  name: string = '';
  items: (HL7Segment | HL7MessageNode)[] = [];

  constructor(name: string) {
    this.name = name;
  }

  /**
   * Searches for a segment of a given type
   */
  getSegment(
    segmentType: string,
    indexOrAfter?: number | HL7Segment,
  ): HL7Segment | undefined {
    for (let k = 0; k < this.items.length; k++) {
      const seg = this.items[k];
      if (seg instanceof HL7Segment && seg.segmentType === segmentType) {
        if (!indexOrAfter) return seg;
        if (typeof indexOrAfter === 'number') {
          if (indexOrAfter === k) return seg;
          k++;
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
    for (let k = this.items.length - 1; k >= 0; k--) {
      const seg = this.items[k];
      if (seg instanceof HL7Segment && seg.segmentType === segmentType) {
        if (!indexOrAfter) return seg;
        if (typeof indexOrAfter === 'number') {
          if (indexOrAfter === k) return seg;
          k++;
        } else {
          if (indexOrAfter === seg) indexOrAfter = undefined;
        }
      }
    }
  }

  /**
   * Searches for a node of a given name
   */
  getNode(
    nodeName: string,
    indexOrAfter?: number | HL7MessageNode,
  ): HL7MessageNode | undefined {
    for (let k = 0; k < this.items.length; k++) {
      const node = this.items[k];
      if (node instanceof HL7MessageNode && node.name === nodeName) {
        if (!indexOrAfter) return node;
        if (typeof indexOrAfter === 'number') {
          if (indexOrAfter === k) return node;
          k++;
        } else {
          if (indexOrAfter === node) indexOrAfter = undefined;
        }
      }
    }
  }

  /**
   * Searches for a node of a given name in reverse order
   */
  getNodeFromLast(
    nodeName: string,
    indexOrAfter?: number | HL7MessageNode,
  ): HL7MessageNode | undefined {
    for (let k = this.items.length - 1; k >= 0; k--) {
      const node = this.items[k];
      if (node instanceof HL7MessageNode && node.name === nodeName) {
        if (!indexOrAfter) return node;
        if (typeof indexOrAfter === 'number') {
          if (indexOrAfter === k) return node;
          k++;
        } else {
          if (indexOrAfter === node) indexOrAfter = undefined;
        }
      }
    }
  }
}
