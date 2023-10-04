import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { Auth } from '../models/auth.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.API_URL}/`;
  private user: BehaviorSubject<Auth | null> = new BehaviorSubject<Auth | null>(null);
  public user$ = this.user.asObservable();
  private remember = Number(localStorage.getItem('remember') || '0');

  constructor(private http: HttpClient, private tokenService: TokenService) {
    if (this.remember === 1) {
      this.user.next(JSON.parse(localStorage.getItem('userInfo') || '{}'));
    } else {
      this.user.next(JSON.parse(sessionStorage.getItem('userInfo') || '{}'));
    }
  }

  public get currentUserValue(): Auth {
    return this.user.value;
  }

  public get GetRemember(): number {
    return Number(localStorage.getItem('remember') || '0');
  }


  LogIn(c_Id_Usuario: string, c_Contrasenia: string,c_Direccion_IP: string, c_Id_Dispositivo: string, c_Tipo_Dispositivo: string, remember?: boolean): Observable<Auth> {

    const body = { c_Id_Usuario, c_Contrasenia, c_Direccion_IP, c_Id_Dispositivo, c_Tipo_Dispositivo };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Auth>(this.apiUrl + 'LogIn/SetLogIn', JSON.stringify(body), { headers })
      .pipe(tap((response) => {
        if (response.ok === true) {
          localStorage.setItem('remember', remember === true ? '1': '0');
          if (remember === true) {
            localStorage.setItem('userInfo', JSON.stringify(response));
          } else {
            sessionStorage.setItem('userInfo', JSON.stringify(response));
          }
          this.tokenService.saveToken(response.token);
          this.user.next(response);

         

        }
      }));

      
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('remember');
    sessionStorage.clear();
    this.user.next(null!);

    //setTimeout(() => location.reload(), 2);
    
  }
}
