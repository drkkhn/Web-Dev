import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usernameSource = new BehaviorSubject<string | null>(null);
  username$ = this.usernameSource.asObservable();

  constructor() { }

  setUsername(username: string) {
    console.log(username);
    this.usernameSource.next(username);
  }

  getUsername(): string | null {
    console.log(this.usernameSource.value);
    return this.usernameSource.value;
  }
}
