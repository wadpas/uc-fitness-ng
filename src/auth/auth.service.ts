import { Injectable } from "@angular/core";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

@Injectable()
export class AuthService {
    firebaseConfig = {
        apiKey: "AIzaSyAZwir_ZenNQnaVwoam46F6f6tn2wmEjPY",
        authDomain: "fitness-ng-56fb7.firebaseapp.com",
        databaseURL: "https://fitness-ng-56fb7-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "fitness-ng-56fb7",
        storageBucket: "fitness-ng-56fb7.appspot.com",
        messagingSenderId: "245211566214",
        appId: "1:245211566214:web:3063358bac492d1cc70107",
        measurementId: "G-ZF2L6XP2HD"
    };

    app = initializeApp(this.firebaseConfig);
    auth = getAuth(this.app);

    createUser(email: string, password: string) {
        return createUserWithEmailAndPassword(this.auth, email, password)
    }

    loginUser(email: string, password: string) {
        return signInWithEmailAndPassword(this.auth, email, password)
    }
}           