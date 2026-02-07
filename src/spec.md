# Specification

## Summary
**Goal:** Replace the existing Valentine app flow with a mobile-first “Find the NO Button” mini-game that progresses through levels and ends with a replayable cute ending.

**Planned changes:**
- Replace `frontend/src/App.tsx` screen flow with client-side state navigation for: Game Intro → Level 1 → Final Level → Real Question → YES Celebration → Extra-Cute Ending (Replay resets all game state).
- Update Intro UI copy and CTA to exactly: “Hi Anya 💕\nWelcome to a tiny game I made just for you.”, “Your mission: find the NO button 😌”, and primary button “🎮 Start Game”.
- Implement Level 1 with header “Level 1: Find the NO button ❌”, lightweight distraction animations (floating hearts, teddy walking, flowers popping), and a “hidden NO button” that briefly appears (~0.5s), relocates, and sometimes renders partially behind teddy/flower/chocolate; tapping its last-known area makes it escape with a light vibration when supported.
- Add Level 1 miss/escape feedback pop-ups randomly from: “Nope 😜”, “Missed it!”, “It ran away!”, “Try again 😂”; after a consistent threshold, show “Hmm… this is harder than it looks 🤔”.
- Implement Final Level with header “Final Level: Last chance 😏” and fake tappable buttons “NO?”, “Not this one”, “Almost!” that vanish when tapped, then advance to the Real Question screen.
- Implement Real Question screen with slower/calm pacing, keep AudioToggle behavior, and show exactly: “Okay Anya… no more games.” and “Will you be my Valentine? 💝” with only one button “✅ YES 💕” (no NO button present).
- Update YES celebration to trigger confetti + hearts explosion + teddy hugging a heart, then show sweet messages sequentially (in order) and finish with: “Happy Valentine’s Day 💕\nI’m really lucky to be with you.”
- Add Extra-Cute Ending screen with teddy holding a sign reading “Best Valentine Ever 🧸❤️” and a “Replay the game 😄” button that restarts from the beginning and resets counters/timers/visibility.
- Apply pastel mini-game styling (pink/peach/lavender), soft bouncing animations, and one-hand-friendly big tap targets across new screens.
- Incorporate uploaded images as static frontend assets and ensure any checkerboard-looking backgrounds are removed/avoided so they render cleanly on pastel backgrounds.

**User-visible outcome:** Users can play a short “Find the NO button” mini-game with animated distractions and funny feedback, reach a calm Valentine question moment, see a celebratory message sequence, and replay the full game from the ending.
