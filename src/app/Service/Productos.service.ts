import { Injectable } from "@angular/core";
import { DecimalPipe } from "@angular/common";
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
import { ProductoData } from '../pages/apps/producto/interfaces/producto.interface';
import axios from 'axios'; 


export interface Productos {
  Id: string;
  name: string;   
  Url_IMG: string;

}


@Injectable({
    providedIn: 'root'
  })
  export class ProductoService {
    private _url: string = `${environment.API_URL}/Productos/`; // URL de la API
    estado: number = 1;
  
    constructor(private http: HttpClient,
      private tokenService: TokenService,
    
      ) { }
  


    setProducto(body:any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(this._url + 'SetProductos', JSON.stringify(body),{ headers } )
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            const estado = "401";
            const mensaje = "Sin Autorizacion";

            return throwError({ ok: false, estado, mensaje });
          })
        );
    }



putProducto(
  c_Tipo_Mov: string,
  c_Id_Producto: number,
  c_Nombre_Producto : string,
  c_Id_Marca: number,
  c_Id_Sucursal: number,
  c_Id_Categoria: number,
  c_Stock_Disponible: number,
  c_Precio_Compra: DecimalPipe,
  c_Precio_Venta: DecimalPipe,
  C_Cantidad : number,
  c_Img_Base: string,
  c_Descripcion: string,
  c_Usuario_Modificacion: string,

    ): Observable<any> {
     
const body = {
c_Tipo_Mov,
c_Id_Producto,
c_Nombre_Producto,
c_Id_Marca,
c_Id_Sucursal,
c_Id_Categoria,
c_Stock_Disponible,
c_Precio_Compra,
c_Precio_Venta,
C_Cantidad,
c_Img_Base,
c_Descripcion,
c_Usuario_Modificacion,
};
console.log(body)
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post<any>(this._url + 'PutProductos', JSON.stringify(body),{ headers } )
.pipe(
catchError((error: HttpErrorResponse) => {
console.error(error);
const estado = "401";
const mensaje = "Sin Autorizacion";

return throwError({ ok: false, estado, mensaje });
})
);
}

CambiarEstadoProducto(
  c_Id_Producto: number,
  c_Usuario_Modificacion: string,
   c_Descripcion: string
  ):  Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this._url}CambiarEstadoProducto?IdP=${c_Id_Producto}&IdUM=${c_Usuario_Modificacion}&razon=${c_Descripcion}`;
  return this.http.post<any>(url,headers);

}


    getProducto(searchTerm: string): Observable<any> {
 

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}GetProductos`, { params });
    }



getProductoById(Id_Producto: number): Observable<ProductoData> {
  const url = `${this._url}GetProductosById?IdP=${Id_Producto}`;
  return this.http.get<ProductoData>(url);

}






getProductoFacturacion(searchTerm: number): Observable<Productos[]> {
  
  return this.http.get<any>(`${this._url}GetProductosFactura?idSL=${searchTerm}`, {
  }).pipe(
    map(response => {
     
      if (response.ok && Array.isArray(response.response)) {
       // console.log(response.response)
        return response.response.map(item => ({
          name: item.c_Nombre_Producto,
          Id: item.c_Id_Producto,
          Url_IMG: item.c_Url_IMG,
        }));
      } else {
        return response.response.map(item => ({
          name: item.c_Transaccion_Mensaje,
          Id: item.c_Transaccion_Estado,
          flag: ''
        }));
      }
    }),
    catchError(error => {
      console.error(error);
      return [];
    })
  );
}



getProductoFacturacionById(Id_Producto: number): Observable<ProductoData> {
  const url = `${this._url}GetProductosFacturaById?IdP=${Id_Producto}`;
  return this.http.get<ProductoData>(url);

}






  }
  
