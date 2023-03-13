import { Injectable } from "@angular/core";
import {
    Auth,
    authState,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from '@angular/fire/auth';
import { tap } from "rxjs";


import { Store } from "store";

export interface User {
    email: string,
    uid: string,
    authenticated: boolean
}

@Injectable()
export class AuthService {
    constructor(
        private store: Store,
        private auth: Auth,
    ) { }

    auth$ = authState(this.auth).pipe(
        tap(next => {
            if (next) {
                this.store.set('user', {
                    email: next.email,
                    uid: next.uid,
                    authenticated: true
                })
            } else {
                this.store.set('user', {
                    email: '',
                    uid: '',
                    authenticated: false
                })
            }
        })
    )

    createUser(email: string, password: string) {
        return createUserWithEmailAndPassword(this.auth, email, password)
    }

    loginUser(email: string, password: string) {
        return signInWithEmailAndPassword(this.auth, email, password)

    }

    logoutUser() {
        return signOut(this.auth)
    }
}           