import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService, User } from 'src/auth/auth.service';
import { Store } from 'store';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <app-header></app-header>
    <app-nav 
       [authenticated]="(user$ | async)?.authenticated"
      (logout)="onLogout()">
    </app-nav>
    <div> 
     {{ user$ | async | json}}
    </div>
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>  
  </div>`
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private authService: AuthService
  ) { }

  user$: Observable<User>
  subscription: Subscription

  ngOnInit(): void {
    this.subscription = this.authService.auth$.subscribe()
    this.user$ = this.store.select<User>('user')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onLogout() {
    this.authService.logoutUser()
  }

}
