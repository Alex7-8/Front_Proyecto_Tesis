// auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Service/Login.service'; // Asegúrate de importar el servicio de autenticación de tu proyecto
import { TokenService } from '../Service/token.service';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthGuardAdmin implements CanActivate {
  constructor(
    private router: Router, 
    private auth: LoginService,
    private tokenService: TokenService) {}









    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.tokenService.getToken()) {
        const token = localStorage.getItem("token"); 
        const decodedToken: any = jwt_decode(token);
  
        if (decodedToken.role.includes("ADMINISTRADOR")) {
          return true;
        } else {
          // Guarda la ruta actual en la que el usuario intentaba acceder.
          this.router.navigate(['/login']);
          alert("No tienes permisos para acceder a esta ruta");
          return false;
        }
      } else {
        // Guarda la ruta actual en la que el usuario intentaba acceder.
        alert("No tienes permisos para acceder a esta ruta");
        this.router.navigate(['/login']);
        return false;
      }
    }

}
