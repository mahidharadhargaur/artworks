import { Injectable, inject } from '@angular/core';
import {
  Auth,
  authState,
  User,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Observable, Subscription, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  authState$ = authState(this.auth);
  authStateSubscription$: Subscription = new Subscription();

  constructor() {
    this.authStateSubscription$ = this.authState$.subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  public get isLoggedIn() {
    return this.authState$.pipe(map((aUser: User | null) => !!aUser));
  }

  public get userDetails() {
    return this.authState$.pipe(
      map((user: User | null) => {
        return {
          name: user?.displayName,
          email: user?.email,
        };
      })
    );
  }

  public login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  public logout(): Observable<any> {
    return from(signOut(this.auth));
  }
  public register(email: string, password: string): Observable<any> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }
}
