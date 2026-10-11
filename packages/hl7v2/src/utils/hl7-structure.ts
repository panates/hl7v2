/** Whether a structure has a place for any segment, or any Z segment */
export function hasPlaceholder(defs: Record<string, any>): boolean {
  return Object.entries<any>(defs).some(
    ([key, def]) =>
      /^any(HL7|Z)Segment$/.test(def.segment || key) ||
      (def.segments && hasPlaceholder(def.segments)),
  );
}
