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
import { MarcaData } from '../pages/apps/marca/interfaces/marca.interface';
import axios from 'axios'; 
import { DecimalPipe } from "@angular/common";




export interface Servicios {
  Id: string;
  name: string;   
  Url_IMG: string;
}


@Injectable({
    providedIn: 'root'
  })
  export class ServicioService {
    private _url: string = `${environment.API_URL}/Servicios/`; // URL de la API
    estado: number = 1;
  
    constructor(private http: HttpClient,
      private tokenService: TokenService,
    
      ) { }
  


    setServicio(body:any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(this._url + 'SetServicios', JSON.stringify(body),{ headers } )
        .pipe(

          catchError((error: HttpErrorResponse) => {
            console.error(error);
            const estado = "401";
            const mensaje = "Sin Autorizacion";

            return throwError({ ok: false, estado, mensaje });
          })
        );
    }



putServicio(
  c_Id_Servicio: number,
  c_Nombre_Servicio: string,
  c_Img_Base: string,
  c_Descripcion: string,
  c_Usuario_Modificacion: string,
  c_Precio: DecimalPipe,

    ): Observable<any> {
     
const body = {
c_Id_Servicio,
c_Nombre_Servicio,
c_Img_Base,
c_Descripcion,
c_Usuario_Modificacion,
c_Precio
};

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post<any>(this._url + 'PutServicios', JSON.stringify(body),{ headers } )
.pipe(tap((response) => {
       console.log(response)}));
catchError((error: HttpErrorResponse) => {
console.error(error);
const estado = "401";
const mensaje = "Sin Autorizacion";

return throwError({ ok: false, estado, mensaje });
})
}

CambiarEstadoServicio(
  c_Id_Servicio: number,
  c_Usuario_Modificacion: string,
   c_Descripcion: string
  ):  Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this._url}CambiarEstadoMarca?IdS=${c_Id_Servicio}&IdUM=${c_Usuario_Modificacion}&razon=${c_Descripcion}`;
  return this.http.post<any>(url,headers);

}


    getMarca(searchTerm: string): Observable<any> {
 

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}GetServicios`, { params });
    }



getMarcaById(IdServicio: number): Observable<MarcaData> {
  const url = `${this._url}GetServiciosById?IdS=${IdServicio}`;
  return this.http.get<MarcaData>(url);

}



getServicios(): Observable<Servicios[]> {
  return this.http.get<any>(`${this._url}GetServicios`, {
  }).pipe(
    map(response => {
      if (response.ok && Array.isArray(response.response)) {
        console.log(response.response)
        return response.response.map(item => ({
          name: item.c_Nombre_Servicio,
          Id: item.c_Id_Servicio,
          Url_IMG: item.c_Url_IMG
        }));
      } else {
        return response.response.map(item => ({
          name: item.c_Transaccion_Mensaje,
          Id: item.c_Transaccion_Estado,
          Url_IMG: ''
        }));
      }
    }),
    catchError(error => {
      console.error(error);
      return [];
    })
  );
}






  }
  
