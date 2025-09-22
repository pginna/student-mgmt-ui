import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  login(username: string): Observable<boolean> {
    // Simulate a successful login for any username
    this.loggedIn = true;
    console.log(`Dummy user '${username}' logged in.`);
    return of(true);
  }

  logout(): void {
    this.loggedIn = false;
    console.log('Dummy user logged out.');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
