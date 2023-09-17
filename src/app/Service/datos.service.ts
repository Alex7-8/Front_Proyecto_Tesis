import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private dirIP: string = '';
  private uniqueID: string = '';
  private c_Tipo_Dispositivo: string = '';

  constructor() {
    this.initData();

  }

  private initData(): void {
    
    this.getLocalIPAddress((ipAddress) => {
     /// console.log('Local IP Address:', ipAddress);
      this.dirIP = ipAddress || '';
    });

  }
  private TipoDispositivo() {
    const c_Tipo_Dispositivo = navigator.userAgent;
    const regex = /\((.*?)\)/; // Expresión regular para obtener el contenido entre paréntesis
    const match = c_Tipo_Dispositivo.match(regex);
    if (match && match.length >= 2) {
      // Remover ;, / y espacios y agregar guiones -
      return match[1].replace(/[;]/g, '-').replace(/[\/\s]/g, '-');
    } else {
      return ''; // Si no se encuentra ninguna coincidencia, devuelve una cadena vacía o un mensaje de error.
    }
  }
  


  private UniqueID(): string {
    const deviceId = this.generateBrowserFingerprint();
    
   

    const localStorageKey = 'token_dispositivo';
    const localStorageKeys  = 'uniqueID';
    let uniqueID = '' + localStorage.getItem(localStorageKey);


    if (uniqueID) {
      const tokenDispositivo = localStorage.getItem('token_dispositivo');
      if (tokenDispositivo) {
        uniqueID = this.decodeToken(tokenDispositivo);
        // console.log('Linea 36')
        // console.log('Token Dispositivo:', uniqueID);
        this.uniqueID = uniqueID;
      }
    }
      if (uniqueID.search('-') === -1 ) {
    //  console.log('Linea 37')
      
      uniqueID = this.generateUniqueID();
      localStorage.setItem(localStorageKeys, uniqueID);
      this.uniqueID = uniqueID;
//console.log('UniqueID:', uniqueID);
    }
    return uniqueID;
  }

  private getLocalIPAddress(callback: (ipAddress: string | undefined) => void): void {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => callback(data.ip))
      .catch(error => {
        console.error('Error al obtener la IP local:', error);
        callback(undefined);
      });
  }

  private generateBrowserFingerprint(): string {

    const fingerprint = [
      navigator.userAgent,
      screen.width,
      screen.height,
      screen.colorDepth,
    ].join('|');

    return fingerprint;
  }

  private generateUniqueID(): string {
    // Código para generar el uniqueID
    const uniqueID = `${screen.width}-${screen.height}-${screen.colorDepth}`;

    return uniqueID;
  }

  private decodeToken(token: string): string {
    try {
      const decodedToken: any = jwt_decode(token);
      const idDispositivo: string = decodedToken.IdDispositivo;
      return idDispositivo;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return '';
    }
  }

  getDirIP(): string {
    
    return this.dirIP;



  }

  getUniqueID(): string {
    this.uniqueID = this.UniqueID();

    return this.uniqueID;
  }

  
  getTipoDispositivo(): string {
    this.c_Tipo_Dispositivo = this.TipoDispositivo();

    return this.c_Tipo_Dispositivo;
  }

}

