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
  getSegment(segmentType: string, index: number = 0): HL7Segment | undefined {
    let k = 0;
    for (const seg of this.items) {
      if (seg instanceof HL7Segment && seg.segmentType === segmentType) {
        if (!index || index === k) return seg;
        k++;
      }
    }
  }

  /**
   * Searches for a segment of a given type in reverse order
   */
  getSegmentFromLast(
    segmentType: string,
    index: number = 0,
  ): HL7Segment | undefined {
    for (let k = this.items.length - 1; k >= 0; k--) {
      const seg = this.items[k];
      if (seg instanceof HL7Segment && seg.segmentType === segmentType) {
        if (!index || index === k) return seg;
        k++;
      }
    }
  }
}
