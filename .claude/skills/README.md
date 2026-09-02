# Vendored design skills

These Claude Code skills were vendored into this repo so anyone working on
this project with Claude Code gets the same frontend/UI-design guidance.

| Skill(s) | Source | License |
|---|---|---|
| `frontend-design` | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) @ `ed404106fcd80ba98ecb7c851e531dcb626d13b7` (`plugins/frontend-design`) | see `frontend-design/LICENSE.txt` |
| `impeccable` | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) @ `b0594c72d18006b5865c70eb3a97e8b04064e600` | Apache-2.0, see `impeccable/LICENSE` |
| `banner-design`, `brand`, `design`, `design-system`, `slides`, `ui-styling`, `ui-ux-pro-max` | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) @ `8bd29e775453ebcae52b6e6514fbf134df0c5770` | MIT, see each skill's `LICENSE` |
| `webapp-testing` | [anthropics/skills](https://github.com/anthropics/skills) @ `53048666b05b4799081517d00e09e0a2dd688678` | Apache-2.0, see `webapp-testing/LICENSE.txt` |

Each skill is self-contained under its own directory with a `SKILL.md`
describing when Claude should use it. To update a skill, re-copy it from
its source repo at a newer commit.

Only `webapp-testing` was pulled from [anthropics/skills](https://github.com/anthropics/skills) —
the rest of that repo (`docx`, `pdf`, `pptx`, `xlsx`, `skill-creator`, `claude-api`,
`web-artifacts-builder`, …) duplicates skills already built into Claude Code
itself, `brand-guidelines` is Anthropic's own brand (not this client's), and
the remaining skills (slide themes, poster art, Slack GIFs, etc.) aren't
relevant to this project.
