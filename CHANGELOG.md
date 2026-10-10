# Changelog

<!-- rman:documented-up-to 085a45e3014b75393afabf406920f2c270333c5e -->

## v1.9.0 (2026-04-20)

### ✨ Features

- add error handling support to HL7Router with dedicated error middleware and refined error handling flow (4c1cf46)

### 🧹 Chores

- update dependencies, bump versions to latest releases (b6a57e2)

---

## v1.8.3 (2026-04-15)

### 🐛 Bug Fixes

- correct sub-component field reference and component position logic. fixes #79 (ca754f0)

### 📚 Documentation

- expand README with package descriptions and badges cleanup (b2355d0)

### 🧹 Chores

- update dependencies, bump versions to align with latest updates (88e01df)

---

## v1.8.2 (2026-04-14)

### 📚 Documentation

- improve README with detailed usage examples and API documentation (0733d24)

### 🧹 Chores

- update project configuration (bf27a46)

---

## v1.8.1 (2026-04-14)

### 🐛 Bug Fixes

- use Map API for handler stack prioritization in HL7 router (c47b565)
- use Map API for handler stack prioritization in HL7 router: fixes #75 (7d1e068)

### 🧹 Chores

- update dependencies and scripts for packages (05d6919)
- remove unused .madgerc configuration file (77e6c04)
- update Mocha config to simplify test spec path (9dc5b66)
- Linting update (2006a77)
- update Mocha config to include tests from all packages (a063642)

### 💬 General Changes

- simplify and standardize tsconfig definitions across packages (e5d3572)

---

## v1.8.0 (2026-02-24)

### 🔧 Refactoring

- update socket properties (b894b09)

---

## v1.7.1 (2026-02-23)

### 🐛 Bug Fixes

- hl7 date serialization issue (0fc7c4d)

---

## v1.7.0 (2025-12-31)

### 🐛 Bug Fixes

- Sending circular ack messages (93cdeb5)

### 💬 General Changes

- Corrected panates/gh-setup-node@v1 option (22ac6dd)
- npm trusted publish (43699b2)

---

## v1.6.0 (2025-12-18)

### ✨ Features

- Added reconnection logic to HL7Client chore: Updated deps (4939ccc)

### 💬 General Changes

- Reconfigure tsconfig files and enable "composite" (d355339)

---

## v1.5.0 (2025-12-02)

### 💬 General Changes

- Code reformat (0f08510)
- Updated workflow (d7bcc85)

---

## v1.4.4 (2025-09-29)

### ✨ Features

- Added indexOrAfter argument to getSegment, getSegmentFromLast, getNode and getNodeFromLast methods (e030e97)
- Added indexOrAfter argument to getSegment, getSegmentFromLast (646e162)

---

## v1.4.3 (2025-09-29)

### 🐛 Bug Fixes

- Exported missing HL7MessageNode (7388375)

---

## v1.4.2 (2025-09-29)

### 🔧 Refactoring

- Renamed RESPONSE to PATIENT_RESULT (b700427)

### 🧹 Chores

- Updated deps (748dbbf)

---

## v1.4.1 (2025-09-26)

### 💬 General Changes

- getNode() and getNodeFromLast() helper methods to HL7MessageNode class (30ac81a)

---

## v1.4.0 (2025-09-26)

### ✨ Features

- Added HL7 message structures (09539dc)
- Added buildStructureTree() method (e76041f)

### 🧹 Chores

- Updated dependencies (cc67c02)
- Action dev (d4272a7)

---

## v1.3.2 (2025-09-24)

### 🐛 Bug Fixes

- HL7Segment.next(type) do not locate next segment with given type (414ad1f)

---

## v1.3.1 (2025-09-15)

### 🐛 Bug Fixes

- Fixed non strict parsing (17de026)

---

## v1.2.7 (2025-09-10)

### 🔧 Refactoring

- removed ::ffff: from remoteAddress() (b147b0b)

---

## v1.2.6 (2025-09-09)

### 🔧 Refactoring

- renamed .peerIp to .remoteAddress (d46d5d1)
- Updated dependencies (df2de6b)

---

## v1.2.5 (2025-08-29)

### ✨ Features

- Added isEmpty() method fix: Wrong component index issue (6629414)

### 🐛 Bug Fixes

- Fixed message type return value (262e60a)
- Minor type fixes (ace50f6)

### 🔧 Refactoring

- Improvements (5facea4)

---

## v1.2.4 (2025-08-28)

### 🔧 Refactoring

- Improvements (5e9fb3e)

---

## v1.2.2 (2025-08-27)

### 🧹 Chores

- Updated deps (80e9669)

---

## v1.2.1 (2025-08-27)

### 🔧 Refactoring

- Improvements for better logging (4b47a90)

---

## v1.1.6 (2025-08-25)

### 🐛 Bug Fixes

- Parse fails when no encoding defined in header (8d7cfdc)

---

## v1.1.5 (2025-08-19)

### 🔧 Refactoring

- Minor improvements (ef4d531)

---

## v1.1.4 (2025-08-19)

### 🔧 Refactoring

- Minor improvements refactor: Updated dependencies (558f904)

---

## v1.1.3 (2025-08-07)

### ✨ Features

- Added tls client support (5bdae0e)
- Added "send" event (fee6fe0)

---

## v1.1.2 (2025-08-06)

### 🐛 Bug Fixes

- Renamed SetIDxxx enum items to SetID (7d647f5)

---

## v1.1.1 (2025-08-06)

### 🐛 Bug Fixes

- Fixed index file name (cb9acc6)

---

## v1.1.0 (2025-08-06)

### 🔧 Refactoring

- Created a separate package (hl7v2-dictionary) for dictionary Refactor: Refactor HL7 classes (e384770)

---

## v1.0.2 (2025-08-03)

### ✨ Features

- New release (92d03b5)

---

## v1.0.1 (2025-08-03)

### 🐛 Bug Fixes

- character set was not correctly parsed (5bfafc2)
- iconv doesn't recognize UNICODE* encodings (232d785)
- **exchange/server:** use named field parameters (8ab22cf)
- **exchange/server:** <2.5 error support (d3c55cc)

### 🔧 Refactoring

- Written from scratch with TypeScript. refactor: Seperated HL7 dictionary and TCP socket libraries (61aa0bd)

### 🧹 Chores

- Pre major versioning (b3b4e09)

### 💬 General Changes

- Initial commit (b274ab7)
- Updated readme (52b802e)
- Test fails in node v6 (9062e3a)
- Incremented timeout for long test (0c94d20)
- Removed duplicate line in jsdoc (c8b9af4)
- Fixed invalid package name (cf25a78)
- Add tsl support to both server and client (e847087)
- Added "connect" and "createServer" static functions (cc3400f)
- [*] More optimisations (3b954f7)
- [*] Optimized tests (5a6fb01)
- [-] Added missing index.js in files (e5433f1)
- [*] Updated jsdoc (986962f)
- [*] Removed listenError event (12f1f8a)
- [*] Exposed HL7MessageRouter class (a47e4f1)
- [*] Minor test fixes (90578bd)
- [*] Minor optimization (1467e87)
- [*] Minor fix (5757a16)
- Updated dependencies (a95c845)
- Fixed #2: Wrong Message Control ID used in sendReceive (bb4aaeb)
- + Added millisecond and timezone parsing support for date time fields (73cdde6)
- Merge pull request #5 from k2s/patch-1 (7d332e1)
- Downgrade mocha to v7. v8 causes error with node 8,9 (5fce4f1)
- Implemented HL7 null values (https://wiki.hl7.org/Null) (13dbc88)
- Bump glob-parent from 5.1.1 to 5.1.2 (95e81f5)
- Allow client certificate free TLS connections (f4d8ce6)
- Fix a bug with a leaking catch-block (84c0ba3)
- Update HL7MessageRouter.js (fd650b7)
- Updated eslint config (8fcea1d)
- Use carriage return as the segment terminator character; (b28a133)
- HL7ProtocolHandler.block always emits Buffer instances; (96ff347)
- Add test for parsing ISO 8859-1 encoded HL7 message (50148ee)
- Use specified encoding to send and receive messages (d0a38a4)
- Add custom segments support (0307f0b)
- Unify custom segments support coding style (3f7480e)
- Do not override HL7Message instance's customDict with parse options (2db2289)
- Fix reverted HL7 message terminators in tests (b7e83e8)
- Merge pull request #30 from srosenda/add-custom-segements-support (6e59985)
- Bump putil-merge from 3.7.0 to 3.8.0 (d12ad75)
- Added asHL7 getters and setters (ee1d4d3)
- Fixed lint issue (ef7d141)
