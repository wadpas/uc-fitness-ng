import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZwir_ZenNQnaVwoam46F6f6tn2wmEjPY",
  authDomain: "fitness-ng-56fb7.firebaseapp.com",
  databaseURL: "https://fitness-ng-56fb7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitness-ng-56fb7",
  storageBucket: "fitness-ng-56fb7.appspot.com",
  messagingSenderId: "245211566214",
  appId: "1:245211566214:web:3063358bac492d1cc70107",
  measurementId: "G-ZF2L6XP2HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);