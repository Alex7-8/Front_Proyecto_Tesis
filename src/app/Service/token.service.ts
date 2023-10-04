import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root',
})
export class TokenService {
  rol : string[] = [];
  constructor() {
    
  }
  saveToken(token: string) {
    localStorage.setItem('token', token);
    sessionStorage.setItem('token', token);
  }
  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
  deleteToken() {
    sessionStorage.clear();
    localStorage.removeItem('userInfo');
    localStorage.removeItem('remember');
    localStorage.removeItem('token');
    this.rol = [];
  }

  deleteTokenUnico() {
    localStorage.removeItem('token');
    
  }


  TokenAdmin() {
    let res: boolean = true;
    if(sessionStorage.getItem("token") == null){
      res = false;
    }else{
      const token = sessionStorage.getItem("token"); 
      const decodedToken: any = jwt_decode(token);
      if(decodedToken.role.includes("ADMINISTRADOR"))
      {
        res = true;
      }else{
        res = false;
      }
      
    }
    console.log(res);
    //  console.log(this.rol);
    return res;
  }
  
  
  
  TokenGerente() {
    let res: boolean = true;
    if(sessionStorage.getItem("token") == null){
      res = false;
    }else{
      const token = sessionStorage.getItem("token"); 
      const decodedToken: any = jwt_decode(token);
      if(decodedToken.role.includes("GERENTE"))
      {
        res = true;
      }else{
        res = false;
      }
      
    }
     
    //  console.log(this.rol);
    return res;
    }
  
    TokenCajero() {
      let res: boolean = true;
      if(sessionStorage.getItem("token") == null){
        res = false;
      }else{
        const token = sessionStorage.getItem("token"); 
        const decodedToken: any = jwt_decode(token);
        if(decodedToken.role == "CAJERO")
        {
          res = true;
        }else{
          res = false;
        }
        
      }
       
       console.log(res);
      return res;
      }
  
  
  
}
