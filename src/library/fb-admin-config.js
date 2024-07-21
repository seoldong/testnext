// import { cert, getApps, initializeApp } from 'firebase-admin/app';

// const firebaseAdminConfig = {
//     type: process.env.FB_TYPE,
//     project_id: process.env.FB_PROJECT_ID,
//     private_key_id: process.env.FB_PRIVATE_KEY_ID,
//     private_key: process.env.FB_PRIVATE_KEY,
//     client_email: process.env.FB_CLIENT_EMAIL,
//     client_id: process.env.FB_CLIENT_ID,
//     auth_uri: process.env.FB_AUTH_URL,
//     token_uri: process.env.FB_TOKEN_URI,
//     auth_provider_x509_cert_url: process.env.FB_AUTH_PROVIDER_X509_CERT_URL,
//     client_x509_cert_url: process.env.FB_CLIENT_X509_CERT_URL,
//     universe_domain: process.env.FB_UNIVERSE_DOMAIN,
// }

// export function customInitApp() {
//     if (getApps().length <= 0) {
//         initializeApp({
//             credential: cert(firebaseAdminConfig),
//         });
//     }
// }

// export FIREBASE_AUTH_EMULATOR_HOST = "127.0.0.1:9099"
// export FIRESTORE_EMULATOR_HOST = "127.0.0.1:8080"