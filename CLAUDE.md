## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

## Before every push

Run these in order, and push only when every step passes:

1. `rman deps` - list the dependencies that have a newer version.
2. `rman deps -u` - when step 1 lists any, upgrade them.
3. `rman ci` - delete node_modules and lockfiles and install from scratch.
4. Check: `rman check`, `rman lint`, `rman format --check`, and type-check the tests (`tsc -p packages/<pkg>/test/tsconfig.json --noEmit` for hl7v2, net and dictionary).
5. Test: the unit tests and the examples.
6. Push.
