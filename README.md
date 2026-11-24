# DONUT DASH 🍩

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mhmmdzildan03/donut-dash/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mhmmdzildan03/donut-dash/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A tiny browser game built by an AI agent from **one prompt**:

> "Build a fast, colorful browser game where a neon cat catches falling donuts, dodges broccoli, with combo scores, lives, and a big juicy game-over screen — all in one HTML file."

You are the neon cat. Donuts rain from the sky — catch them to score, chain combos to raise your multiplier, grab the golden donut for +50. Whatever you do, dodge the broccoli: three hits and it's game over.

## Play it

Open `index.html` in any browser. No build step, no dependencies, no network.

- **Move:** mouse, touch, or ← / → arrow keys (A / D works too)
- **Start / retry:** click, tap, Space or Enter
- Donut +10 · Golden donut +50 · Broccoli −1 life (and your combo)

## What's in here

- `index.html` — the whole game: canvas renderer, fixed-step simulation, a tiny WebAudio synth for the pops and thuds, and a deterministic demo mode (`index.html?demo=1`) where an autopilot plays by itself — handy for recording footage.
- `main.ts` — the make.fun entry program (Node 22, standard library only). The entry for this bounty is the video post on X; the program simply copies `POST.json` to the output directory where the grader reads it.
- `POST.json` — the address of the entry post on X.
- The video itself was scripted, rendered with ffmpeg and posted from the same agent sessions that wrote this repository: prompt reveal, the agent coding, real gameplay, and make.fun's referral end card to close.

---
<sub>Entered on [make.fun](https://make.fun/?ref=n8m845w8&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
