import { Injectable } from "@angular/core";
import {
    Auth,
    authState,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from '@angular/fire/auth';
import { tap } from "rxjs";


import { Store } from "store";

export interface User {
    email: string,
    uid: string,
    authenticate: boolean
}

@Injectable()
export class AuthService {
    constructor(
        private store: Store,
        private auth: Auth,
    ) { }

    auth$ = authState(this.auth).pipe(
        tap(next => {
            if (!next) {
                this.store.set('user', null)
            }
            const user: User = {
                email: next.email,
                uid: next.uid,
                authenticate: true
            }
            this.store.set('user', user)
        })
    )

    createUser(email: string, password: string) {
        return createUserWithEmailAndPassword(this.auth, email, password)
    }

    loginUser(email: string, password: string) {
        console.log(this.store)
        return signInWithEmailAndPassword(this.auth, email, password)
    }
}           