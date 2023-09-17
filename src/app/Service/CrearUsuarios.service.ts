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
import { Empleado } from '../../@vex/interfaces/Empleado.interface';
import axios from 'axios'; 


@Injectable({
    providedIn: 'root'
  })
  export class CrearUsuariosService {
    private _url: string = `${environment.API_URL}/Persona/`; // URL de la API
    estado: number = 1;
  
    constructor(private http: HttpClient,
      private tokenService: TokenService) { }
  
    setEmpleado(c_Id_Usuario: string,
                C_ID_ROL: number[], 
                c_ID_Rol_Persona: number,
                c_Id_Tipo_Cuenta: string,
                c_Id_Sucursal: number,
                c_Id_Genero: number,
                c_Id_Municipio: number,
                c_Primer_Nombre: string,
                c_Segundo_Nombre: string,
                c_Tercer_Nombre: string,
                c_Primer_Apellido: string,
                c_Segundo_Apellido: string,
                c_Apellido_Casada: string,
                c_DPI: string,
                c_NIT: string,
                c_Direccion: string,
                c_PNumero_Telefono: string,
                c_SNumero_Telefono: string,
                c_Correo: string,
                c_Img_Base: string,
                c_Descripcion: string,
                c_Fecha_Nacimiento: string,
                c_Usuario_Creacion: string,

                  ): Observable<any> {
                    const c_ID_ROL = C_ID_ROL.map(num => num.toString());

      const body = {
       c_Id_Usuario,
        c_ID_ROL,
        c_ID_Rol_Persona,
        c_Id_Tipo_Cuenta,
        c_Id_Sucursal,
        c_Id_Genero,
        c_Id_Municipio,
        c_Primer_Nombre,
        c_Segundo_Nombre,
        c_Tercer_Nombre,
        c_Primer_Apellido,
        c_Segundo_Apellido,
        c_Apellido_Casada,
        c_DPI,
        c_NIT,
        c_Direccion,
        c_PNumero_Telefono,
        c_SNumero_Telefono,
        c_Correo,
        c_Img_Base,
        c_Descripcion,
        c_Fecha_Nacimiento,
        c_Usuario_Creacion,

      };
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(this._url + 'SetEmpleadosA', JSON.stringify(body),{ headers } )
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            const estado = "401";
            const mensaje = "Sin Autorizacion";

            return throwError({ ok: false, estado, mensaje });
          })
        );
    }


    setPersona(
      c_ID_Rol_Persona: number,
      c_Empresa: string,
      c_Id_Tipo_Cuenta: string,
      c_Id_Sucursal: number,
      c_Id_Genero: number,
      c_Id_Municipio: number,
      c_Primer_Nombre: string,
      c_Segundo_Nombre: string,
      c_Tercer_Nombre: string,
      c_Primer_Apellido: string,
      c_Segundo_Apellido: string,
      c_Apellido_Casada: string,
      c_DPI: string,
      c_NIT: string,
      c_Direccion: string,
      c_PNumero_Telefono: string,
      c_SNumero_Telefono: string,
      c_Correo: string,
      c_Img_Base: string,
      c_Descripcion: string,
      c_Fecha_Nacimiento: string,
      c_Usuario_Creacion: string,

        ): Observable<any> {
         

const body = {
c_ID_Rol_Persona,
c_Empresa,
c_Id_Tipo_Cuenta,
c_Id_Sucursal,
c_Id_Genero,
c_Id_Municipio,
c_Primer_Nombre,
c_Segundo_Nombre,
c_Tercer_Nombre,
c_Primer_Apellido,
c_Segundo_Apellido,
c_Apellido_Casada,
c_DPI,
c_NIT,
c_Direccion,
c_PNumero_Telefono,
c_SNumero_Telefono,
c_Correo,
c_Img_Base,
c_Descripcion,
c_Fecha_Nacimiento,
c_Usuario_Creacion,

};
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post<any>(this._url + 'SetPersona', JSON.stringify(body),{ headers } )
.pipe(
catchError((error: HttpErrorResponse) => {
  console.error(error);
  const estado = "401";
  const mensaje = "Sin Autorizacion";

  return throwError({ ok: false, estado, mensaje });
})
);
}

putPersona(
  c_Id_Persona: number,
  c_ID_Rol_Persona: number,
  c_Id_Tipo_Cuenta: string,
  c_Id_Sucursal: number,
  c_Id_Genero: number,
  c_Id_Municipio: number,
  c_Primer_Nombre: string,
  c_Segundo_Nombre: string,
  c_Tercer_Nombre: string,
  c_Primer_Apellido: string,
  c_Segundo_Apellido: string,
  c_Apellido_Casada: string,
  c_DPI: string,
  c_NIT: string,
  c_Direccion: string,
  c_PNumero_Telefono: string,
  c_SNumero_Telefono: string,
  c_Correo: string,
  c_Img_Base: string,
  c_Descripcion: string,
  c_Fecha_Nacimiento: string,
  c_Usuario_Modificacion: string,

    ): Observable<any> {
     
const body = {
c_Id_Persona,
c_ID_Rol_Persona,
c_Id_Tipo_Cuenta,
c_Id_Sucursal,
c_Id_Genero,
c_Id_Municipio,
c_Primer_Nombre,
c_Segundo_Nombre,
c_Tercer_Nombre,
c_Primer_Apellido,
c_Segundo_Apellido,
c_Apellido_Casada,
c_DPI,
c_NIT,
c_Direccion,
c_PNumero_Telefono,
c_SNumero_Telefono,
c_Correo,
c_Img_Base,
c_Descripcion,
c_Fecha_Nacimiento,
c_Usuario_Modificacion,

};

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post<any>(this._url + 'PutPersona', JSON.stringify(body),{ headers } )
.pipe(
catchError((error: HttpErrorResponse) => {
console.error(error);
const estado = "401";
const mensaje = "Sin Autorizacion";

return throwError({ ok: false, estado, mensaje });
})
);
}

CambiarEstadoPersona(
  c_Id_Persona: number,
  c_Usuario_Modificacion: string,
   c_Descripcion: string
  ):  Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this._url}CambiarEstadoPersona?IdP=${c_Id_Persona}&IdUM=${c_Usuario_Modificacion}&razon=${c_Descripcion}`;
  return this.http.post<any>(url,headers);

}

putEmpleado(
      c_Id_Persona: number,
      c_Id_Usuario: string,
      C_ID_ROL: number[], 
      c_ID_Rol_Persona: number,
      c_Id_Tipo_Cuenta: string,
      c_Id_Sucursal: number,
      c_Id_Genero: number,
      c_Id_Municipio: number,
      c_Primer_Nombre: string,
      c_Segundo_Nombre: string,
      c_Tercer_Nombre: string,
      c_Primer_Apellido: string,
      c_Segundo_Apellido: string,
      c_Apellido_Casada: string,
      c_DPI: string,
      c_NIT: string,
      c_Direccion: string,
      c_PNumero_Telefono: string,
      c_SNumero_Telefono: string,
      c_Correo: string,
      c_Img_Base: string,
      c_Descripcion: string,
      c_Fecha_Nacimiento: string,
      c_Usuario_Modificacion: string,

        ): Observable<any> {
          const c_ID_ROL = C_ID_ROL.map(num => num.toString());

const body = {
c_Id_Persona,
c_Id_Usuario,
c_ID_ROL,
c_ID_Rol_Persona,
c_Id_Tipo_Cuenta,
c_Id_Sucursal,
c_Id_Genero,
c_Id_Municipio,
c_Primer_Nombre,
c_Segundo_Nombre,
c_Tercer_Nombre,
c_Primer_Apellido,
c_Segundo_Apellido,
c_Apellido_Casada,
c_DPI,
c_NIT,
c_Direccion,
c_PNumero_Telefono,
c_SNumero_Telefono,
c_Correo,
c_Img_Base,
c_Descripcion,
c_Fecha_Nacimiento,
c_Usuario_Modificacion,

};
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post<any>(this._url + 'PutEmpleadosA', JSON.stringify(body),{ headers } )
.pipe(
catchError((error: HttpErrorResponse) => {
  console.error(error);
  const estado = "401";
  const mensaje = "Sin Autorizacion";

  return throwError({ ok: false, estado, mensaje });
})
);
}

putEmpleadoByIdUsuario(
  c_Id_Persona: number,
  c_Id_Usuario: string,
  c_ContraseniaA: string,
  c_ContraseniaN: string,
  c_Id_Genero: number,
  c_Id_Municipio: number,
  c_Primer_Nombre: string,
  c_Segundo_Nombre: string,
  c_Tercer_Nombre: string,
  c_Primer_Apellido: string,
  c_Segundo_Apellido: string,
  c_Apellido_Casada: string,
  c_DPI: string,
  c_NIT: string,
  c_Direccion: string,
  c_PNumero_Telefono: string,
  c_SNumero_Telefono: string,
  c_Correo: string,
  c_Img_Base: string,
  c_Descripcion: string,
  c_Fecha_Nacimiento: string,
  c_Usuario_Modificacion: string,

    ): Observable<any> {
      

const body = {
c_Id_Persona,
c_Id_Usuario,
c_ContraseniaA,
c_ContraseniaN,
c_Id_Genero,
c_Id_Municipio,
c_Primer_Nombre,
c_Segundo_Nombre,
c_Tercer_Nombre,
c_Primer_Apellido,
c_Segundo_Apellido,
c_Apellido_Casada,
c_DPI,
c_NIT,
c_Direccion,
c_PNumero_Telefono,
c_SNumero_Telefono,
c_Correo,
c_Img_Base,
c_Descripcion,
c_Fecha_Nacimiento,
c_Usuario_Modificacion
};
const headers = new HttpHeaders({ 'Content-Type': 'application/json'});

console.log(body)
return this.http.post<any>(this._url + 'PutEmpleadosByIdUsuario', JSON.stringify(body),{ headers } )
.pipe(tap((response) => {
  if (response.ok === true) {
    this.tokenService.deleteTokenUnico()
    this.tokenService.saveToken(response.token);
  }if (response.ok === false) {
    catchError((error: HttpErrorResponse) => {
      console.error(error);
      const estado = "401";
      const mensaje = "Sin Autorizacion";
    
      return throwError({ ok: false, estado, mensaje });
    })
  }
 
}));
}


CambiarEstadoEmpleado(
  c_Id_Persona: number,
  c_Id_Usuario: string,
  c_Usuario_Modificacion: string,
 c_Descripcion: string
  ):  Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this._url}CambiarEstadoEmpleado?IdP=${c_Id_Persona}&IdU=${c_Id_Usuario}&IdUM=${c_Usuario_Modificacion}&razon=${c_Descripcion}`;
  return this.http.post<any>(url,headers);

}


    getEmpleado(searchTerm: string): Observable<any> {
 

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}GetEmpleados`, { params });
    }



    getPersona(searchTerm: string): Observable<any> {
 

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}GetPersona`, { params });
    }



getEmpleadoById(IdPersona: number): Observable<Empleado> {
  const url = `${this._url}GetEmpleadoByIdUA?IdPersona=${IdPersona}`;
  return this.http.get<Empleado>(url);

}

getEmpleadoByIdUsuario(IdUsuario: string): Observable<Empleado> {
  const url = `${this._url}GetEmpleadoByIdUsuario?IdUsuario=${IdUsuario}`;
  return this.http.get<Empleado>(url);

}

getPersonaById(IdPersona: number): Observable<Empleado> {
  const url = `${this._url}GetPersonaById?IdPersona=${IdPersona}`;
  return this.http.get<Empleado>(url);

}








  }
  
