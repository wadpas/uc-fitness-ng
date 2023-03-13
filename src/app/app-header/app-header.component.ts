import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from "@angular/core";
import { User } from "src/auth/auth.service";


@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-header.component.scss'],
    template: `
    <div class="app-header">
        <div class="wrapper">
            <img src="assets/img/logo.png">
        </div>
    </div>`
})
export class AppHeaderComponent {

}       