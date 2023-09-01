// auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Service/Login.service'; // Asegúrate de importar el servicio de autenticación de tu proyecto
import { TokenService } from '../Service/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private auth: LoginService,
    private tokenService: TokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.tokenService.getToken();
    if (token ) { // Llama al método isAuthenticated() del servicio de autenticación
      return true;
    } else {
      console.log('no token');
      // Si el usuario no está autenticado, redirige a la ruta "/authentication/login" o la que necesites.
      this.router.navigate(['/login']);
      return false;
    }
  }
}
