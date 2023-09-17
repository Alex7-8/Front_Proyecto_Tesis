import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
  deleteToken() {
    sessionStorage.clear();
    localStorage.removeItem('remember');
    localStorage.removeItem('token');
  }

  deleteTokenUnico() {
    localStorage.removeItem('token');
  }
}
