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
import { SerieFacturaData } from "../pages/apps/SerieFactura/interfaces/SerieFactura.interface"; 
import axios from 'axios'; 



@Injectable({
    providedIn: 'root'
  })
  export class SerieFacturaService {
    private _url: string = `${environment.API_URL}/SerieFactura/`; // URL de la API
    estado: number = 1;
  
    constructor(private http: HttpClient,
      private tokenService: TokenService,
    
      ) { }
  



  



    setSerieFactura(body:any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(this._url + 'SetSerie', JSON.stringify(body),{ headers } )
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            const estado = "401";
            const mensaje = "Sin Autorizacion";

            return throwError({ ok: false, estado, mensaje });
          })
        );
    }



putSerieFactura(body:any): Observable<any> {
 
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post<any>(this._url + 'PutSerie', JSON.stringify(body),{ headers } )
.pipe(
catchError((error: HttpErrorResponse) => {
console.error(error);
const estado = "401";
const mensaje = "Sin Autorizacion";

return throwError({ ok: false, estado, mensaje });
})
);
}

CambiarEstadoSerie(
  c_Id_Serie: number,
  c_Usuario_Modificacion: string,
  c_Descripcion: string
  ):  Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this._url}CambiarEstadoSerie?IdSerie=${c_Id_Serie}&IdUM=${c_Usuario_Modificacion}&razon=${c_Descripcion}`;
  return this.http.post<any>(url,headers);

}


  

getSerieFactura(searchTerm: string): Observable<any> {
 

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}GetSerie`, { params });
    }



getSerieFacturaById(IdSerie: number): Observable<SerieFacturaData> {
  const url = `${this._url}GetSerieById?IdS=${IdSerie}`;
  return this.http.get<SerieFacturaData>(url);

}


getSerieFacturaBySL(IdSL: number): Observable<SerieFacturaData> {
  const url = `${this._url}GetSerieBySL?IdSL=${IdSL}`;
  return this.http.get<SerieFacturaData>(url);

}









  }
  
