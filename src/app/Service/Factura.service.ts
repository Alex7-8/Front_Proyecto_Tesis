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
  export class FacturaService {
    private _url: string = `${environment.API_URL}/Factura/`; // URL de la API
    estado: number = 1;
  
    constructor(private http: HttpClient,
      private tokenService: TokenService,
    
      ) { }
  



  



    setFactura(body:any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(this._url + 'SetFacturaVenta', JSON.stringify(body),{ headers } )
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            const estado = "401";
            const mensaje = "Sin Autorizacion";

            return throwError({ ok: false, estado, mensaje });
          })
        );
    }


    setFacturaServicios(body:any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(this._url + 'SetFacturaServicios', JSON.stringify(body),{ headers } )
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

CambiarEstadoFactura(
  c_Id_Factura: number,
  c_Usuario_Modificacion: string,
  c_Descripcion: string
  ):  Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this._url}CambiarEstadoFactura?IdFactura=${c_Id_Factura}&IdUM=${c_Usuario_Modificacion}&razon=${c_Descripcion}`;
  return this.http.post<any>(url,headers);

}


getFacturaVentaProductosByDia(): Observable<SerieFacturaData> {
  const url = `${this._url}GetFacturaVentaByDia`;
  return this.http.get<SerieFacturaData>(url);

}


getFacturaServiciosByDia(): Observable<SerieFacturaData> {
  const url = `${this._url}GetFacturaServiciosByDia`;
  return this.http.get<SerieFacturaData>(url);

}





  

getSerieFactura(searchTerm: string): Observable<any> {
      const params = { searchTerm };
      return this.http.get<any>(`${this._url}GetSerie`, { params });
    }



getFacturaVentaCliente(IdSerie: number,IdSL: number,IdPersona): Observable<SerieFacturaData> {
  const url = `${this._url}GetFacturaVentaCliente?IdS=${IdSerie}&IdSL=${IdSL}&IdPersona=${IdPersona}`;
  return this.http.get<SerieFacturaData>(url);
}


getFacturaVentaCF(IdSerie: number,IdSL: number): Observable<SerieFacturaData> {
  const url = `${this._url}GetFacturaVentaCF?IdS=${IdSerie}&IdSL=${IdSL}`;
  return this.http.get<SerieFacturaData>(url);

}
getFacturaVentaClienteByDia(): Observable<SerieFacturaData> {
  const url = `${this._url}GetFacturaVentaCF`;
  return this.http.get<SerieFacturaData>(url);

}



getDetalleFacturaById(ids: number): Observable<SerieFacturaData> {
  const url = `${this._url}GetDetalleFacturaById?IdS=${ids}`;
  return this.http.get<SerieFacturaData>(url);

}


getDetalleFacturaServiciosById(ids: number): Observable<SerieFacturaData> {
  const url = `${this._url}GetDetalleFacturaServicioById?IdS=${ids}`;
  return this.http.get<SerieFacturaData>(url);

}



  }
  
