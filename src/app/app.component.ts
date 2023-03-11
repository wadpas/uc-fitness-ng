import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    Angular
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>
  </div>`
})
export class AppComponent {
  title = 'uc-fitness-ng';
}
