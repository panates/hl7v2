---
name: Bug report
about: A message read, written, validated or exchanged wrongly, or an error you did not expect
title: ''
labels: ''
assignees: ''
---

**Packages and versions**
Which of `hl7v2`, `hl7v2-net`, `hl7v2-dictionary`, and their versions. The Node.js version (`node -v`), and the TypeScript version for a typing problem.

**The message**
The HL7 v2 message, or the smallest part of it that shows the problem, and its HL7 version (MSH-12).
Replace patient names, identifiers, dates of birth and addresses with made-up values first: do not post real patient data.

```
MSH|^~\&|...
```

**Code**
The smallest code that shows the problem.

```typescript

```

**What happens**
The output, the error and its stack, or the wrong value.

**What you expected**
The value or behaviour you expected, and where the HL7 v2 standard says so (chapter and section), if you know.

**Other HL7 systems**
For a network problem: what the other side is (product and version), and what it sends or expects.

Security problems are not reported here: see SECURITY.md.
