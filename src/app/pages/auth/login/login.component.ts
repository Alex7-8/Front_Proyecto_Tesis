import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { LoginService } from '../../../../../src/app/Service/Login.service';
import { DatosService } from '../../../Service/datos.service';








@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup;
  inputType = 'password';
  visible = false;

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private snackbar: MatSnackBar,
    private loginService: LoginService,
    private datosService: DatosService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    
  }
 
  send() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    const dirIP = this.datosService.getDirIP();
   const uniqueID = this.datosService.getUniqueID();
  //  console.log('DIRIP:', dirIP);
  //   console.log('UniqueID:', uniqueID);

    this.loginService.LogIn(email, password, dirIP, uniqueID).subscribe(
      response => {
       // console.log(response);
        if (response.ok === true) {
          const mensaje = response.transaccion_Mensaje;
          const token = response.token || '';
         
          if (token !== '') {
            localStorage.setItem('token', token);
          }

         

          this.snackbar.open(mensaje, 'OK', {
            duration: 5000
          });

          // Redirige a la página principal
          this.router.navigate(['/']);
        } else {
          const tokenDispositivo = response.token_Dispositivo || '';
          if (tokenDispositivo !== '0') {
            localStorage.setItem('token_dispositivo', tokenDispositivo);
            localStorage.removeItem("uniqueID");
           
          }

          const estado = response.transaccion_Estado;
          const mensaje = response.transaccion_Mensaje;

          this.snackbar.open(`Estado: ${estado}, Mensaje: ${mensaje}`, 'OK', {
            duration: 5000
          });
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
    } else {
      this.inputType = 'text';
      this.visible = true;
    }
  }
}
