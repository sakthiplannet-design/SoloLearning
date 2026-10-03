# SoloLearning: Tamil garden

A responsive Tamil course for a six-year-old: 247-letter reference, visual and listening quizzes, word building, sentence ordering, speech practice, and a flexible 24-week course plan inside the app.

## Run locally

Run `python3 -m http.server 3000` from this directory and open http://localhost:3000. This is a static ES-module app; do not open the HTML directly from disk. Deploy the files on an HTTPS static host to use the microphone.

## Firebase

The supplied project configuration is in `firebase-config.js`. Replace `YOUR_API_KEY` and `YOUR_APP_ID` with the Firebase console values for the registered web app. Enable Anonymous sign-in under Authentication, create a Firestore database, and deploy `firestore.rules` before enabling cloud storage. Add the host to Firebase Authentication's authorized domains. No Admin SDK or secret service account belongs in the browser.

Without configuration the app saves progress to localStorage. With configuration it uses anonymous Firebase Auth and a private `learners/{uid}` Firestore document. Anonymous progress belongs to that browser identity, not a cross-device parent account. Clearing browser data can lose access. The app saves stars, completed quizzes and practised items, never audio. Browser speech recognition may transmit audio to the browser vendor.

## Speech limitations and production work

Tamil playback requires an installed Tamil speech-synthesis voice. The app reports when none is available rather than using an unrelated language voice. Tamil speech recognition depends on browser and service support; short isolated letters are particularly unreliable. Text matching is not phoneme-level pronunciation assessment. An adult must check sound quality and vowel length. For reliable production speech training, add native-speaker recordings and a server-side Tamil phoneme assessment provider after testing child speech and regional variants. Never award an invented pronunciation percentage.

Before launch, have a Tamil teacher review sound models, vocabulary, progression and spoken/formal Tamil differences. Expand each course stage into teacher-reviewed lessons and add spaced review, native audio and parent-managed accounts. The 24-week plan is a flexible guide, not a guarantee of mastery.

## Checks

Run `npm run check` and `npm test`. The tests validate 247-letter coverage, lesson quiz choices, word and sentence assembly, safe local storage recovery, and cloud progress merging. No package installation is required for these checks.

## Setup guide

See [FIREBASE_SETUP.md](FIREBASE_SETUP.md) for step-by-step Firebase console instructions. Firebase Hosting configuration is included as an optional deployment target; this app can also be hosted on any HTTPS static host.
