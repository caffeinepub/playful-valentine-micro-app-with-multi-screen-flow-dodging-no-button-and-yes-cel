# Specification

## Summary
**Goal:** Build a playful, single-page Valentine micro-app with a 4-screen flow, a dodging “NO” button interaction, and a celebratory “YES” outcome with gentle Valentine-themed styling.

**Planned changes:**
- Implement a 4-step SPA-style flow with smooth transitions: Intro → Build-up → Big Question → Sweet Ending (no backend calls).
- Intro screen: display exact text “Hi Anya 💕\nI made a tiny app just to ask you something…” and a “Continue” button to advance.
- Build-up screen: display exact text “This is a very serious question.\nPlease answer honestly 😌” and an “I’m ready” button to advance.
- Big Question screen: show centered bold question “Anya, will you be my Valentine? 💝”, buttons “YES 💕” and “NO”, plus subtle helper text “(Just kidding… but I really hope you say yes 🥺)”.
- Add “dodging NO button” behavior on hover/touch/pointer-down/click attempts, keeping NO within bounds, fully visible, and without shifting the layout; YES stays fixed.
- Show brief auto-fading playful feedback messages after each NO dodge, randomly chosen from the provided list (exact text).
- On “YES 💕”: trigger confetti, hearts-rain animation, and device vibration when supported; then display the exact success and follow-up messages; prevent further NO interaction.
- Sweet Ending screen: show exact text “I promise this app is the only thing that won’t let you say no 😉\nThank you for being you.” reachable after YES (auto-delay or a clear continue action).
- Apply a cute Valentine visual theme (pink/red/soft purple), rounded friendly typography, and gentle animations; keep tone playful and not pushy.
- Add optional soft romantic background music with a visible mute/unmute (or play/pause) control that defaults muted or requires user action to start.
- Add generated static visual assets under `frontend/public/assets/generated` and visibly use at least one background/pattern asset in the UI.

**User-visible outcome:** Users can click through a cute 4-step Valentine flow, experience a playful “NO” button that dodges with friendly messages, click “YES 💕” for celebration effects and messages, then reach a sweet ending screen, with optional user-controlled background music.
