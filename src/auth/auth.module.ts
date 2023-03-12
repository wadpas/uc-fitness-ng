import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';

import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register.component";
import { AuthFormComponent } from "./auth-form/auth-form.component";
import { AuthService } from 'src/auth/auth.service';



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

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }

        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule,
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase())
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthFormComponent
    ],
    providers: [
        AuthService
    ],
})
export class AuthModule { } 