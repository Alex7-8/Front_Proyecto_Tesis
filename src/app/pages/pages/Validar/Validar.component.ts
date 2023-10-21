import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import jwt_decode from 'jwt-decode';
import { ValidarService } from '../../../../../src/app/Service/Validar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'vex-coming-soon',
  templateUrl: './Validar.component.html',
  styleUrls: ['./Validar.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class ValidarComponent implements OnInit {

   private Id_Usuario: string = '';
   private uniqueID: string = '';
   private token: string = '';

  constructor(

     private router: Router,
     private snackbar: MatSnackBar,
      private ValidarService: ValidarService
  ) {}

  
  ngOnInit() {
    

    const currentUrl = window.location.href;
    const urlSearchParams = new URLSearchParams(window.location.search);
const tokenValue = urlSearchParams.get("token");
    if (tokenValue) {
     
      
      const decodedToken = decodeURIComponent(tokenValue);
      const DToken: any = jwt_decode(decodedToken);
      localStorage.setItem('token_Temporal', decodedToken);

      const tokenTemp = localStorage.getItem('token_Temporal');
      const decodedTokenTemp: any = jwt_decode(tokenTemp);
    
  if (decodedTokenTemp.IdUsuario && decodedTokenTemp.IdDispositivo) {

    this.Id_Usuario = decodedTokenTemp.IdUsuario;
    this.uniqueID = decodedTokenTemp.IdDispositivo;
    this.token = tokenTemp;

          //  console.log(this.Id_Usuario, this.uniqueID,this.token);
      }
          // window.location.href = currentUrl;
    }
  }
  


  send() {
   
    
console.log(this.Id_Usuario, this.uniqueID, this.token)
    this.ValidarService.Validar(this.Id_Usuario, this.uniqueID, this.token).subscribe(
      response => {
        console.log(response);
        if (response.ok === true) {
          const mensaje = response.transaccion_Mensaje;
         // localStorage.setItem('token_dispositivo', this.uniqueID);
          this.snackbar.open(mensaje, 'OK', { 
            duration: 5000
          });
          // Redirige a la página principal
       //   console.clear();
           this.router.navigate(['/login']);

           localStorage.removeItem('token_Temporal');
        } else {
          // Si la solicitud no fue exitosa, muestra el mensaje de error personalizado
          const estado = "20";
          const mensaje = "El link ya no es válido";
    
          this.snackbar.open(`Error: ${estado}, Mensaje: ${mensaje}`, 'OK', {
            duration: 5000
          });
         // console.clear();
          this.router.navigate(['/login']);
          localStorage.removeItem('token_Temporal');
        }
      },
      error => {
        // En caso de error en la solicitud HTTP (por ejemplo, falta de conexión), muestra el mensaje de error personalizado
        const estado = "20";
        const mensaje = "El link ya no es válido";
    
        this.snackbar.open(`Error: ${estado}, Mensaje: ${mensaje}`, 'OK', {
          duration: 5000
        });
        //console.clear();
        this.router.navigate(['/login']);
        localStorage.removeItem('token_Temporal');
       // console.error(error);
      }
    );
    
  }

}
