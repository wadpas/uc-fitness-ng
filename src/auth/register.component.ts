import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
    selector: 'login-component',
    template: `<div>
        Register
        <auth-form (submitted)="registerUser($event)">
            <h1>Register</h1>
            <a routerLink="/auth/login">
                Already have an account?
            </a>
            <button type="submit">
                Create account
            </button>
            <div class="error" *ngIf="error">
                {{error}}
            </div>
        </auth-form>
    </div>`
})
export class RegisterComponent {
    error: string = ''

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    async registerUser(event: FormGroup) {
        const { email, password } = event.value
        try {
            await this.authService.createUser(email, password)
            this.router.navigate(['/'])
            console.log('registerUser')
        } catch (err: any) {
            this.error = err.message
        }
    }
}           