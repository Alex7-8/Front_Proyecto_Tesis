import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable,throwError  } from "rxjs";
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { Auth } from '../models/auth.model';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { get } from "http";
import { map } from 'rxjs/operators';
import { DateTime } from "luxon";
import { CuentaData } from '../pages/apps/Cuentas/interfaces/Cuentas.interface';
import axios from 'axios'; 









@Injectable({
    providedIn: 'root'
  })
  export class CuentaService {
    private _url: string = `${environment.API_URL}/Cuentas/`; // URL de la API
    estado: number = 1;
  
    constructor(private http: HttpClient,
      private tokenService: TokenService,
    
      ) { }
  



  



    setCuenta(body:any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(this._url + 'SetDeposito', JSON.stringify(body),{ headers } )
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            const estado = "401";
            const mensaje = "Sin Autorizacion";

            return throwError({ ok: false, estado, mensaje });
          })
        );
    }



putCuenta(
  c_Id_Marca: number,
  c_Nombre: string,
  c_Img_Base: string,
  c_Descripcion: string,
  c_Usuario_Modificacion: string,

    ): Observable<any> {
     
const body = {
c_Id_Marca,
c_Nombre,
c_Img_Base,
c_Descripcion,
c_Usuario_Modificacion,

};

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post<any>(this._url + 'PutMarca', JSON.stringify(body),{ headers } )
.pipe(
catchError((error: HttpErrorResponse) => {
console.error(error);
const estado = "401";
const mensaje = "Sin Autorizacion";

return throwError({ ok: false, estado, mensaje });
})
);
}

CambiarEstadoCuenta(
  c_Id_Marca: number,
  c_Usuario_Modificacion: string,
   c_Descripcion: string
  ):  Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this._url}CambiarEstadoMarca?IdMarca=${c_Id_Marca}&IdUM=${c_Usuario_Modificacion}&razon=${c_Descripcion}`;
  return this.http.post<any>(url,headers);

}


    getCuenta(searchTerm: string): Observable<any> {
 

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}GetMarca`, { params });
    }



getCuentaById(IdCuenta: number): Observable<CuentaData> {
  const url = `${this._url}GetCuentaById?IdCuenta=${IdCuenta}`;
  return this.http.get<CuentaData>(url);

}









  }
  
