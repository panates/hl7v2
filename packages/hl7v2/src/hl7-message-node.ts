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
   * Searches for a node of a given name
   */
  getNode(
    nodeName: string,
    indexOrAfter?: number | HL7MessageNode,
  ): HL7MessageNode | undefined {
    let k = 0;
    for (let i = 0; i < this.items.length; i++) {
      const node = this.items[i];
      if (node instanceof HL7MessageNode && node.name === nodeName) {
        if (!indexOrAfter) return node;
        if (typeof indexOrAfter === 'number') {
          if (indexOrAfter === k++) return node;
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
    let k = 0;
    for (let i = this.items.length - 1; i >= 0; i--) {
      const node = this.items[i];
      if (node instanceof HL7MessageNode && node.name === nodeName) {
        if (!indexOrAfter) return node;
        if (typeof indexOrAfter === 'number') {
          if (indexOrAfter === k++) return node;
        } else {
          if (indexOrAfter === node) indexOrAfter = undefined;
        }
      }
    }
  }
}
