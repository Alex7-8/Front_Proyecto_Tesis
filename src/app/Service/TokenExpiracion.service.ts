// import { Injectable } from '@angular/core';
// import jwt_decode from "jwt-decode";
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenExpirationService {
//   private expirationThreshold = 300000; // 5 minutos en milisegundos
//   private tokenExpirationSubject = new BehaviorSubject<boolean>(false);

//   sub: string;  // u otras propiedades según tu token
//   exp: number;

//   private parseToken(token: string): JwtToken {
//     const tokenData = jwt_decode(token) as JwtToken;
//     return tokenData;
//   }

//   constructor() {
//     // Inicializa la verificación de expiración del token en intervalos regulares
//     setInterval(() => this.checkTokenExpiration(), 60000); // Verifica cada minuto
//   }

//   private checkTokenExpiration() {
//     const token = localStorage.getItem('token'); // Obtén el token almacenado
//     if (token) {
//       const tokenData = this.parseToken(token);
//       const currentTime = Date.now();
//       if (tokenData.exp * 1000 - currentTime <= this.expirationThreshold) {
//         // El token está a punto de expirar
//         this.tokenExpirationSubject.next(true);
//       }
//     }
//   }

//   public getTokenExpirationStatus() {
//     return this.tokenExpirationSubject.asObservable();
//   }

//   private parseToken(token: string) {
//     // Decodificar el token JWT y obtener la fecha de expiración
//     // Puedes usar una biblioteca como 'jwt-decode' para esto.
//   }
// }
