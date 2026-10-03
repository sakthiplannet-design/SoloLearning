# Connect Firebase to SoloLearning

Configure Firebase yourself and send the web-app configuration. No project invitation, console password, Admin SDK key, or service-account JSON is needed for the current app.

## 1. Open the existing project

Go to https://console.firebase.google.com/ and open project `sololearning-23`. Confirm the ID under the gear icon → Project settings → General. Avoid creating a second project.

## 2. Register the web app

Under Project settings → General → Your apps, select an existing web app or click the web icon (`</>`). Name it `SoloLearning Web` and select Register app. Firebase Hosting is optional; the app can run on another HTTPS static host.

In SDK setup and configuration, select Config and copy the complete `firebaseConfig` object. The `apiKey` and `appId` must be real values, not placeholders. Send this object to the developer or update `firebase-config.js`.

Firebase browser configuration is designed to be included in client code and does not grant administrative access. Authentication and Firestore rules protect learner data.

## 3. Enable anonymous sign-in

Open Build → Authentication → Get started (if shown) → Sign-in method. Select Anonymous, enable it, and save. No Google or email sign-in is needed yet.

The current app creates a separate anonymous identity for each browser. Clearing browser data can lose access to that identity. It is not a cross-device parent account.

## 4. Create Cloud Firestore

Open Build → Firestore Database → Create database. Choose Standard edition where offered and the default database ID `(default)`. Choose production mode rather than open test mode.

This project already has its default database in Mumbai (`asia-south1`); no new database is required. For other projects, choose a region close to the users. Database location generally cannot be changed later, so confirm before creating it. The free Spark plan should suffice for initial testing within its quotas. Storage, Functions and billing are not required by the current app.

## 5. Publish the access rules

In Firestore Database → Rules, replace the editor contents with the complete contents of [firestore.rules](firestore.rules) in this repository, then click Publish. Do not use `allow read, write: if true`.

The rules let authenticated learners access only `learners/{their-own-uid}` and limit the document to stars, practised items, completed lessons, quiz count and recent results. No microphone recordings are stored. The app creates the collection and learner document automatically after sign-in.

## 6. Add authorized domains

Open Authentication → Settings → Authorized domains. Add `localhost` for local development if missing. Once the app has an HTTPS URL, add its hostname, such as `your-app.vercel.app`, without a protocol or path. Add the custom hostname too if one is used. Recent Firebase projects may not include `localhost` automatically.

If the Firebase API key is already restricted by HTTP referrer, ensure the app's origins are allowed in Google Cloud's API key settings. Preserve intentional restrictions.

## 7. Send these details

- Complete web `firebaseConfig` object.
- Confirmation that Anonymous Authentication is enabled.
- Confirmation that the default Firestore database exists and the repository's rules are published.
- Database region and authorized hostname, if known.

No Firebase console access is required for connecting the browser app. If automated rules deployment is needed later, use a scoped deployment identity in the execution environment rather than sending credentials in chat.

## 8. Verify the connection

After configuration is added, practise a letter and finish a quiz. My progress should report Firebase synchronization. Authentication → Users should show an anonymous user. Firestore → Data should show `learners/{uid}` with `stars`, `learned`, `quizzes`, `lessons` and `results`. Reload in the same browser to confirm progress remains.

If it fails, check the configuration values, enabled sign-in provider, authorized domain and rules. Local progress remains available when cloud access fails. Speech recognition is independent of Firebase and checks recognized text, not expert pronunciation quality.
