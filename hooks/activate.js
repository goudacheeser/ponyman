#!/usr/bin/env node
// Injects skills/ponyman/SKILL.md (minus frontmatter) as hidden session context.
const fs = require('fs');
const path = require('path');
const event = process.argv[2] || 'SessionStart';
const skill = fs.readFileSync(path.join(__dirname, '..', 'skills', 'ponyman', 'SKILL.md'), 'utf8');
const body = skill.replace(/^---[\s\S]*?---\s*/, '');
process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: event, additionalContext: body } }));
