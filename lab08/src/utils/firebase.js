import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const {
REACT_APP_FIREBASE_API_KEY,
REACT_APP_AUTH_DOMAIN,
REACT_APP_DATABASE_URL,
REACT_APP_PROJECT_ID,
REACT_APP_STORAGE_BUCKET,
REACT_APP_MESSAGING_SENDER_ID,
REACT_APP_APP_ID,
REACT_APP_MEASUREMENT_ID,

} = process.env;
export const firebaseConfig = {
    apiKey:REACT_APP_FIREBASE_API_KEY,
    authDomain:REACT_APP_AUTH_DOMAIN,
    projectId:REACT_APP_PROJECT_ID,
    databaseURL:REACT_APP_DATABASE_URL,
    storageBucket:REACT_APP_STORAGE_BUCKET,
    messagingSenderId:REACT_APP_MESSAGING_SENDER_ID,
    appId:REACT_APP_APP_ID,
    measurementId:REACT_APP_MEASUREMENT_ID
}
    const app =    initializeApp(firebaseConfig); // khoitao
    export const realtimeDB = getDatabase(app); //lay data
  