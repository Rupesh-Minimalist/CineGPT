import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCz961D2KjOgq41TMAO8zFJogcGKQVA78A",
  authDomain: "cinegpt-28ae2.firebaseapp.com",
  projectId: "cinegpt-28ae2",
  storageBucket: "cinegpt-28ae2.appspot.com",
  messagingSenderId: "48394933200",
  appId: "1:48394933200:web:7e33fe1b4b323f6d021fd5",
  measurementId: "G-KCM5ED628Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;