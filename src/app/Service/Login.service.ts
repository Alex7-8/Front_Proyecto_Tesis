import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url: string = `${environment.API_URL}/LogIn/LogIn`;

  constructor(private http: HttpClient) { }

  LogIn(c_Id_Usuario: string, c_Contrasenia: string, c_Direccion_IP: string, c_Id_Dispositivo: string): Observable<any> {
    return this.http.post<any>(this._url, { c_Id_Usuario, c_Contrasenia, c_Direccion_IP, c_Id_Dispositivo });
  }
}