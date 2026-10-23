# Ponyman

**Ponytail + Caveman in one ~750-token ruleset.** Write the least code that works. Say the fewest words that carry it. Every fact kept.

Built on the work of:
- **[Ponytail](https://github.com/DietrichGebert/ponytail)** by Dietrich Gebert (MIT): the laziness ladder, root-cause fixes, one-runnable-check rule.
- **[Caveman](https://github.com/JuliusBrussee/caveman)** by Julius Brussee (Apache-2.0): the terse voice, negation and payload preservation, plain-prose exceptions.

See [NOTICE](NOTICE). All credit for the ideas goes to them; Ponyman condenses and merges.

## Install (Claude Code)

```bash
claude plugin marketplace add goudacheeser/ponyman
claude plugin install ponyman@ponyman
```

Or paste `skills/ponyman/SKILL.md` into any agent's system prompt.

## Benchmarks (claude-sonnet-5-5, single run per cell, 2026-10-23)

### Caveman length eval (`evals/llm_run.py`, 10 dev questions, vs `Answer concisely.` control) — v0.1

| Skill | Output tokens saved (median) | Input added per call |
|---|--:|--:|
| **ponyman** | **32%** | **+1034** |
| caveman | 25% | +1717 |
| ponytail | 23% | +1148 |

### Ponytail agentic benchmark (`benchmarks/agentic/run.py`, headless Claude Code sessions)

Quick set (11 tasks), v0.1:

| vs no skill | LOC | output tokens | cost | time | correct | safe |
|---|--:|--:|--:|--:|--:|--:|
| **ponyman** | **-68%** | **-42%** | **-17%** | -19% | 11/11 | 10/11 |
| ponytail | -63% | -35% | -12% | -21% | 11/11 | 10/11 |
| caveman | -49% | -19% | +14% | -6% | 11/11 | 10/11 |

Full suite (45 tasks), v0.2:

| vs no skill | LOC | output tokens | cost | time | correct | safe |
|---|--:|--:|--:|--:|--:|--:|
| ponytail | -58% | -40% | -15% | -25% | 42/45 | 44/45 |
| **ponyman** | -53% | -31% | -9% | -19% | 42/45 | 44/45 |
| caveman | -23% | -8% | +21% | -1% | 42/45 | 43/45 |

Honest read: n=1 per cell, so noisy. Ponyman wins the prose eval and the quick set; on the full suite Ponytail alone is still slightly leaner. No arm lost correctness; the 3 shared correctness misses are the template backend tasks every arm failed.

### v0.1 → v0.2 changes (driven by results)
- Privacy added to "never cut" (every arm leaked subscriber addresses on `scope-recipients`; v0.2 passes).
- "Explain X" gets the core idea, not a tour (v0.1 over-answered the connection-pooling prompt).
- Check rule strengthened: lazy code without its check is unfinished.

Pending: caveman fidelity eval (30 regex correctness cases) not yet scored.
