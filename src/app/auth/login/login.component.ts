import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { LoginService } from '../../../../src/app/Service/Login.service';
import { DatosService } from '../../Service/datos.service';


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
  loading = false;


  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private snackbar: MatSnackBar,
    private loginService: LoginService,
    private datosService: DatosService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}


  

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false, []]
    });
    
  }
 
  send() {
    const c_Id_Usuario = this.form.get('email').value;
    const c_Contrasenia = this.form.get('password').value;
    const c_Direccion_IP = this.datosService.getDirIP();
   const c_Id_Dispositivo = this.datosService.getUniqueID();
   const c_Tipo_Dispositivo = this.datosService.getTipoDispositivo();
   const remember = this.form.get('remember').value;
  //   console.log('UniqueID:', uniqueID);
  this.loading = true;

    this.loginService.LogIn(c_Id_Usuario, c_Contrasenia, c_Direccion_IP,c_Id_Dispositivo,c_Tipo_Dispositivo,remember).subscribe(
      response => {
       // console.log(response);
       this.loading = false;
      this.cd.detectChanges();
        if (response.ok === true) {

        
          const mensaje = response.transaccion_Mensaje;

          this.snackbar.open(mensaje, 'OK', {
            duration: 5000
          });

          // Redirige a la página principal
          this.router.navigate(['/analytics']);
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
        this.snackbar.open(`Mensaje: ${error}`, 'OK', {
          duration: 5000
        });
        this.loading = false;
      this.cd.detectChanges();
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