import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidarService {
  private _url: string = `${environment.API_URL}/LogIn/`; // URL de la API

  constructor(private http: HttpClient) { }

  Validar(c_Id_Usuario: string, c_Id_Dispositivo: string, token: string): Observable<any> {
    const body = { c_Id_Usuario, c_Id_Dispositivo };

    // Define los encabezados con el token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}` // Agrega el token al encabezado Authorization
    });

    return this.http.post<any>(this._url + 'SetActivarDispositivo', JSON.stringify(body), { headers })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          const estado = "20";
          const mensaje = "El link ya no es válido";
          return throwError({ ok: false, estado, mensaje });
        })
      );
  }
}

