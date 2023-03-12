import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';
import { Store } from 'store';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>{{ user$ | async | json}}</h1>
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


}
