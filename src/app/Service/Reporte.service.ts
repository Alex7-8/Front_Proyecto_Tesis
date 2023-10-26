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



@Injectable({
    providedIn: 'root'
  })
  export class ReporteService {
    private _url: string = `${environment.API_URL}/Reportes/`;
   
    estado: number = 1;
  
    constructor(private http: HttpClient,
      private tokenService: TokenService,
    
      ) { }

    getReporteFacturaByTipo(Tipo: string): Observable<any> {
      return this.http.get<any>(`${this._url}GetReporteFacturaByDia?Tipo=${Tipo}`);
    }


  }
  
