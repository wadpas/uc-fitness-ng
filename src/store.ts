import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, distinctUntilChanged, pluck } from 'rxjs';
import { User } from './auth/auth.service';


export interface State {
  user: User
  [key: string]: any
}

const state: State = {
  user: undefined
};

@Injectable({
  providedIn: 'root'
})
export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}