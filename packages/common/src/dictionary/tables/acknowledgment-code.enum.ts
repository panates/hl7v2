export type AcknowledgmentCode =
  /**
   * Original mode: Application Accept - Enhanced mode: Application acknowledgment: Accept
   */
  | 'AA'
  /**
   *  Original mode: Application Error - Enhanced mode: Application acknowledgment: Error
   */
  | 'AE'
  /**
   *  Original mode: Application Reject - Enhanced mode: Application acknowledgment: Reject
   */
  | 'AR'
  /**
   *  Enhanced mode: Accept acknowledgment: Commit Accept
   */
  | 'CA'
  /**
   *  Enhanced mode: Accept acknowledgment: Commit Error
   */
  | 'CE'
  /**
   *  Enhanced mode: Accept acknowledgment: Commit Reject
   */
  | 'CR';
