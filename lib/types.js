/*
 ------------------------
 (c) 2017-present Panates
 This file may be freely distributed under the MIT license.
*/

module.exports = {
  VERSIONS: ['2.1', '2.2', '2.3', '2.3.1', '2.4',
    '2.5', '2.5.1', '2.6', '2.7', '2.7.1'],
  DEFAULT_VERSION: '2.3.1',
  FIELD_SEPARATOR: '|',
  COMPONENT_SEPARATOR: '^',
  SUBCOMPONENT_SEPARATOR: '&',
  REPETITION_SEPARATOR: '~',
  ESCAPE_CHARACTER: '\\',
  CR: '\x0D',
  LF: '\x0A',
  VT: '\x0B',
  FS: '\x1C',
  ESCAPE_CHARS: {
    '': '\\',
    '|': '\\F\\',
    '^': '\\S\\',
    '~': '\\R\\',
    '&': '\\T\\',
    '\\': '\\E\\'
  }
};
