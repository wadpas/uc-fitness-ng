import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'login-component',
    template: `<div>
        Login
        <auth-form (submitted)="loginUser($event)">
            <h1>Login</h1>
            <a routerLink="/auth/register">Not registered?</a>
            <button type="submit">Login</button>
        </auth-form>
    </div>`
})
export class LoginComponent {

    loginUser(event: FormGroup) {
        console.log(event.value)
    }
}           