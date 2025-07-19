import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAET-ytrx4YacLxcLTKj4PhyyH_8TmUPm8",
    authDomain: "my-app-b8f78.firebaseapp.com",
    projectId: "my-app-b8f78",
    storageBucket: "my-app-b8f78.firebasestorage.app",
    messagingSenderId: "1036088403036",
    appId: "1:1036088403036:web:bb68705bc85433570ff299",
    measurementId: "G-HBKCYE7CTD"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };