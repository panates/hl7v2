# HL7 v2 for Node.js - Documentation

The documentation of three packages, released together:

| Package                                     | What it does                                                                                    |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [`hl7v2`](../packages/hl7v2)                | Messages: parsing, building, reading and writing values, validation, acknowledgments, batches  |
| [`hl7v2-net`](../packages/net)              | The network: an MLLP server and client over TCP or TLS, routing, acknowledgment modes, batches |
| [`hl7v2-dictionary`](../packages/dictionary) | The definitions: segments, data types, message structures and tables of HL7 v2.1 to v2.9      |

The library is designed from the ground up for Node.js and TypeScript, and follows the HL7 v2 standard: what it writes is read by other HL7 systems as they read their own, and what they write is read here as they mean it - tested case by case.

## Start here

- [Getting started](getting-started.md) - install, read a message, build one, send it and answer it.
- [Migrating from v1 to v2](migration-v1-to-v2.md) - what changed in 2.0.0, and what to do.

## Guide

Messages (`hl7v2`)

- [Messages](messages.md) - the message model, parsing, building, reading and writing values, writing out.
- [Paths](paths.md) - reading and writing by location: `PID-5-1`, `/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBX-5`.
- [Objects](objects.md) - segments and whole messages as plain objects.
- [TypeScript](typescript.md) - types by version: what the compiler checks, and how to opt out.
- [Message structures](structure.md) - groups, the structure tree, names across versions.
- [Validation](validation.md) - checking a message against its version.
- [Acknowledgments](acknowledgments.md) - ACKs, NAKs, error codes and locations.
- [Character sets and escaping](encoding.md) - MSH-18, bytes, escape sequences, line breaks.
- [Dates and numbers](dates-and-numbers.md) - how DT, DTM, TM, NM and SI values are read and written.
- [Batches](batches.md) - batch files, and batches over the network.

Network (`hl7v2-net`)

- [Network](network.md) - servers, clients, routing, acknowledgment modes, timeouts, TLS, events.

Definitions (`hl7v2-dictionary`)

- [Dictionary](dictionary.md) - versions, definitions, field enums, tables, extending a dictionary.

Reference

- [hl7v2 API](api/hl7v2.md)
- [hl7v2-net API](api/net.md)
- [hl7v2-dictionary API](api/dictionary.md)

## Examples

Fourteen runnable programs in [examples](../examples): reading and building messages, typed access, validation, lab results, mapping to JSON, character sets, batch files, an MLLP server and client, TLS, enhanced acknowledgments, a routing gateway and batches over MLLP. Each runs with `npm start`, and CI checks their output.

## HL7 versions

Every HL7 v2 version from 2.1 to 2.9, each read and written by its own definitions:

| Series | Versions                      |
| ------ | ----------------------------- |
| 2.1    | 2.1                           |
| 2.2    | 2.2                           |
| 2.3    | 2.3, 2.3.1                    |
| 2.4    | 2.4                           |
| 2.5    | 2.5, 2.5.1                    |
| 2.6    | 2.6                           |
| 2.7    | 2.7, 2.7.1                    |
| 2.8    | 2.8, 2.8.1, 2.8.2             |
| 2.9    | 2.9                           |

A message of a version in between - 2.5.2, say - is read by the nearest one below it.

## Requirements

Node.js 22 or later.

The packages are plain JavaScript (ES modules) and need nothing else. They ship their type declarations: TypeScript projects use them as they are, with TypeScript 5.4 or later.
