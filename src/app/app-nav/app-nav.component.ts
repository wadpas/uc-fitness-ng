import { ChangeDetectionStrategy, EventEmitter, Input, Output } from "@angular/core";
import { Component } from "@angular/core";


@Component({
    selector: 'app-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-nav.component.scss'],
    template: `
    <div class="app-nav">
       <div class="wrapper">
            <a
                routerLink="schedule"
                routerLinkActive="active">
                Schedule
            </a>
             <a
                routerLink="meals"
                routerLinkActive="active">
                Meals
            </a>
             <a
                routerLink="workouts"
                routerLinkActive="active">
                Workouts
            </a>
             <a
                routerLink="/auth/login"
                routerLinkActive="active"
                (click)="logoutUser()">
                {{ authenticated? 'Logout': 'Login' }}
            </a>
       </div>
    </div>`
})
export class AppNavComponent {
    @Input() authenticated: boolean
    @Output() logout = new EventEmitter<any>()

    logoutUser() {
        if (this.authenticated)
            this.logout.emit()
    }
}