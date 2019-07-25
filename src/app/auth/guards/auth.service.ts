import { Injectable } from '@angular/core';
import { ILogin } from '../login/login';

@Injectable()

export class AuthService {

  constructor() { }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }
}
