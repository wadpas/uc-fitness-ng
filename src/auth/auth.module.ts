import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register.component";
import { AuthFormComponent } from "./auth-form/auth-form.component";

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
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthFormComponent
    ]
})
export class AuthModule { }