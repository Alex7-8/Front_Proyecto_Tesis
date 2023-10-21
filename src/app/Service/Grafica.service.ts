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
  export class GraficaService {
    private _url: string = `${environment.API_URL}/Grafica/`;
    private _url2: string = `${environment.API_URL}/Factura/`;
    estado: number = 1;
  
    constructor(private http: HttpClient,
      private tokenService: TokenService,
    
      ) { }
  



  


    getGraficaByDia(searchTerm: string): Observable<any> {
 

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}GetGrafiaByDia`, { params });
    }


    

    getGraficaBySemana(searchTerm: string): Observable<any> {
 

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}/GetGrafiaBySemana`, { params });
    }

    

    getGraficaByMes(searchTerm: string): Observable<any> {
 

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}GetGrafiaByMes`, { params });
    }


    

    getGraficaByAnio(searchTerm: string): Observable<any> {

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}GetGrafiaByAnio`, { params });
    }

  





    getGraficaSByDia(searchTerm: string): Observable<any> {
 

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}GetGrafiaServicioByDia`, { params });
    }


    

    getGraficaSBySemana(searchTerm: string): Observable<any> {
 

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}/GetGrafiaServicioBySemana`, { params });
    }

    

    getGraficaSByMes(searchTerm: string): Observable<any> {
 

      const params = { searchTerm };
    
      return this.http.get<any>(`${this._url}GetGrafiaServicioByMes`, { params });
    }


    

    getGraficaSByAnio(searchTerm: string): Observable<any> {
      const params = { searchTerm };
      return this.http.get<any>(`${this._url}GetGrafiaServicioByAnio`, { params });
    }



    getGananciasPDia(searchTerm: string): Observable<any> {
      const params = { searchTerm };
      return this.http.get<any>(`${this._url2}GetGananciasByDia`, { params });
    }

    getGananciasPSemana(searchTerm: string): Observable<any> {
      const params = { searchTerm };
      return this.http.get<any>(`${this._url2}GetGananciasBySemana`, { params });
    }
    getGananciasPMes(searchTerm: string): Observable<any> {
      const params = { searchTerm };
      return this.http.get<any>(`${this._url2}GetGananciasByMes`, { params });
    }

    getGananciasPAnio(searchTerm: string): Observable<any> {
      const params = { searchTerm };
      return this.http.get<any>(`${this._url2}GetGananciasByAnio`, { params });
    }

    getGananciasSDia(searchTerm: string): Observable<any> {
      const params = { searchTerm };
      return this.http.get<any>(`${this._url2}GetGananciasSByDia`, { params });
    }

    getGananciasSSemana(searchTerm: string): Observable<any> {
      const params = { searchTerm };
      return this.http.get<any>(`${this._url2}GetGananciasSBySemana`, { params });
    }
    getGananciasSMes(searchTerm: string): Observable<any> {
      const params = { searchTerm };
      return this.http.get<any>(`${this._url2}GetGananciasSByMes`, { params });
    }

    getGananciasSAnio(searchTerm: string): Observable<any> {
      const params = { searchTerm };
      return this.http.get<any>(`${this._url2}GetGananciasSByAnio`, { params });
    }
  }
  
