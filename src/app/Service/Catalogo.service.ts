import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators'
import { map } from 'rxjs/operators';
import { id } from 'date-fns/locale';


export interface Departamento {
    name: string;
    Id: string;
    flag: string;
  }


  export interface Municipio {
    name: string;
    Id: string;
    flag: string;
  }

  export interface Sucursal {
    name: string;
    Id: string;
    flag: string;
  }


  @Injectable({
    providedIn: 'root'
  })
  export class CatalogoService {
    private _url: string = `${environment.API_URL}/Catalogo/`; // URL de la API
  
    constructor(private http: HttpClient) { }
  
    getDepartamentos(searchTerm: string): Observable<Departamento[]> {
      return this.http.get<any>(`${this._url}GetDepartamento`, {
      }).pipe(
        map(response => {
          if (response.ok && Array.isArray(response.response)) {
           // console.log(response.response)
            return response.response.map(item => ({
              name: item.c_Nombre,
              Id: item.c_Id_Depto,
              flag: item.c_Url_IMG
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

    getMunicipioXDepartamentos(IdDepartamento: string, searchTerm: string): Observable<Municipio[]> {
  
        return this.http.get<any>(`${this._url}GetMunicipioXDepartamento`, {
          
          params: {
            IdDepartamento: IdDepartamento.toString(),
            searchTerm: searchTerm
          }
        }).pipe(
          map(response => {
            if (response.ok && Array.isArray(response.response)) {
              //console.log(response.response)
              return response.response.map(item => ({
                name: item.c_Nombre,
                Id: item.c_Id_Municipio,
                flag: item.c_Url_IMG
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


 getRolPersona(searchTerm: string): Observable<any> {
  const params = { searchTerm };
  return this.http.get<any>(`${this._url}GetRolPersona`, { params });
}

getRolUsuario(searchTerm: string): Observable<any> {
 

  const params = { searchTerm };

  return this.http.get<any>(`${this._url}GetRolUsuario`, { params });
}



getGenero(searchTerm: string): Observable<any> {
 
  const params = { searchTerm };

  return this.http.get<any>(`${this._url}GetGenero`, { params });
}
getTipoCuenta(searchTerm: string): Observable<any> {
 
  const params = { searchTerm };

  return this.http.get<any>(`${this._url}GetTipoCuenta`, { params });
}


getSucursal(searchTerm: string): Observable<Sucursal[]> {
  return this.http.get<any>(`${this._url}GetSucursal`, {
  }).pipe(
    map(response => {
      if (response.ok && Array.isArray(response.response)) {
       // console.log(response.response)
        return response.response.map(item => ({
          name: item.c_Nombre,
          Id: item.c_Id_Sucursal,
          flag: item.c_Url_Img
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


}

