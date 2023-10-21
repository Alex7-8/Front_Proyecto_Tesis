import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  NgZone,
} from "@angular/core";
import { UntypedFormControl, FormControl } from "@angular/forms";
import { map, startWith } from "rxjs/operators";
import { fadeInUp400ms } from "../../../../@vex/animations/fade-in-up.animation";
import { stagger60ms } from "../../../../@vex/animations/stagger.animation";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import jwt_decode from "jwt-decode";
import { Observable, combineLatest, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

import { Router } from "@angular/router";
import { CatalogoService } from "../../../Service/Catalogo.service";
import { CrearUsuariosService } from "../../../Service/GetPersona.service";
import { MatDialog} from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { ConfirmDialogModule } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.module';
import { CuentaService } from "src/app/Service/Cuenta.service";



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


@Component({
  selector: "vex-form-elements",
  templateUrl: "./Cuentas.component.html",
  styleUrls: ["./Cuentas.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [stagger60ms, fadeInUp400ms],
 

})



export class CuentasComponent implements OnInit {
  roles: any[];
  rols: any[];
  generos: any[];
  TipoCuenta: any[];
  departamentos: Departamento[] = [];
  imagen: string = "";
  Id_Usuario: string = "";
  Id_Sucursal: string = "";
  usuarioForm: FormGroup; 
  toggleChecked = true;
  cuentaExists: boolean = true;
  buttonText = 'Deposito';
  Texto = "Registrar Factura";

  IdRol: any[];
  inputType = "password";
  visible = false;
  showConfirmDialog = false;
  body: any;
  c_Tipo_Mov: number = 1;
  Vmonto: boolean = true;
  Vformulario: boolean = false;
  btntext: string = 'Deposito';

  SaldoTotal: number = 0;
  Monto: number = 0;
  MontoMaximo: number = 0;
  STotal: number = 0;


  selectedImage: File | null = null;
  selectedImageURL: string | ArrayBuffer | null =
    "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png";
  constructor(
    private cd: ChangeDetectorRef,
    private ngZone: NgZone,
    private fb: UntypedFormBuilder,
    private catalogoService: CatalogoService,
    private crearUsuariosService: CrearUsuariosService,
    private router: Router,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    private ServicioService: CuentaService,
  ) {


    this.usuarioForm = this.fb.group({
      
      c_Id_Cuenta: ["", Validators.compose([
        Validators.required,
        Validators.pattern(/^[\d-]+$/),  // Patrón modificado para permitir solo números y guiones
        Validators.minLength(4),
        Validators.maxLength(25),
    ])],
    c_Monto: ["", Validators.compose([
      Validators.required,
      Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/), // Permite valores decimales con hasta 2 decimales
      Validators.maxLength(8)
  ])]
    ,  
      c_Nombre_Completo: ["", Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ]*$/)
      ])],
      c_Nombre_Sucursal: ["", Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ]*$/)
      ])],
      c_Url_Img: [""],
      c_Usuario_Creacion: [""],
      c_Usuario_Modificacion: [""],
      c_Fecha_Creacion: [""],
      c_Fecha_Modificacion: [""],
      c_Tipo_Cuenta: ["", Validators.required],
      c_Estado_Cuenta: ["", Validators.required],
      c_Saldo: [""],
      c_Monto_Maximo: [""],
    });


    this.BuscarCuenta()
    this.VerficarDeposito();
  }


Transferencia()
{


  this.body = {
    c_Id_Cuenta: this.usuarioForm.get("c_Id_Cuenta").value,
    c_Monto: this.usuarioForm.get("c_Monto").value,
    c_Id_Tipo: this.c_Tipo_Mov,
    c_Usuario_Creacion: this.Id_Usuario,
    c_Usuario_Modificacion: this.Id_Usuario
  };
  this.ServicioService.setCuenta(this.body).subscribe(
    (response) => {
    
      if(response.ok){
        this.snackBar.open(response.transaccion_Mensaje, "Cerrar", {
          duration: 5000,
          panelClass: ["success-snackbar"], 
        });

        this.BuscarCuenta();
    }else{
      this.snackBar.open(response.transaccion_Mensaje, "Cerrar",  {
        duration: 5000,
        panelClass: ["error-snackbar"], 
      });
    }
    
    
    
    
    }
    
    );


}


  VerficarDeposito()
  {
    this.usuarioForm
    .get("c_Monto")
    .valueChanges.subscribe((newValue) => {

     
     
     if(newValue != undefined )
     {
      var MontoMax = this.usuarioForm.get("c_Monto_Maximo").value?.toString();
      var saldo = this.usuarioForm.get("c_Saldo").value?.toString();

      
      if(MontoMax != undefined ){
   
        this.Monto = parseFloat(newValue)
        this.MontoMaximo = parseFloat(MontoMax)
        this.SaldoTotal = parseFloat(saldo)
        this.STotal = this.SaldoTotal+this.Monto;

     console.log(this.STotal)
      console.log(this.MontoMaximo)
      console.log(this.Monto)
        if(this.STotal >= this.MontoMaximo && this.c_Tipo_Mov == 1){
          this.snackBar.open("El monto es mayor al monto maximo de la cuenta", "Cerrar", {
            duration: 5000,
            panelClass: ["error-snackbar"], 
          });
        }else{
          this.Vformulario = true;
       

      }
     }
    }
  });
     
    }



  BuscarCuenta() { 
    this.usuarioForm
    .get("c_Id_Cuenta")
    .valueChanges.subscribe((newValue) => {
     
     if(newValue != undefined && newValue.length > 10){
      
      this.ServicioService.getCuentaById(newValue).subscribe(
        (data: any) => {
          this.Vmonto = true;
          if(data.response.c_Transaccion_Estado === 33){
            this.selectedImageURL = "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png";
            this.snackBar.open("La cuenta no existe", "Cerrar", {
              duration: 5000,
              panelClass: ["error-snackbar"], 
            });



            this.usuarioForm.patchValue(
            
              {
                c_Nombre_Completo: "",
                c_Nombre_Sucursal: "",
                c_Url_Img: "",
                c_Usuario_Creacion: "",
                c_Usuario_Modificacion: "",
                c_Fecha_Creacion: "",
                c_Fecha_Modificacion: "",
                c_Tipo_Cuenta: "",
                c_Estado_Cuenta: "",
                c_Saldo: "",
                c_Monto_Maximo: "",
              }
             
    
               
                );
          }else
          {
            this.Vmonto = false;
            this.usuarioForm.patchValue(
            
              {
                c_Nombre_Completo: data.response.c_Nombre_Completo,
                c_Nombre_Sucursal: data.response.c_Sucursal,
                c_Url_Img: data.response.c_Url_Img,
                c_Usuario_Creacion: data.response.c_Usuario_Creacion,
                c_Usuario_Modificacion: data.response.c_Usuario_Modificacion,
                c_Fecha_Creacion: data.response.c_Fecha_Creacion,
                c_Fecha_Modificacion: data.response.c_Fecha_Modificacion,
                c_Tipo_Cuenta: data.response.c_Id_Tipo == "1" ? "Debito" : "Credito",
                c_Estado_Cuenta: data.response.c_Id_Estado == "1" ? "Activa" : "Inactiva",
                c_Saldo: data.response.c_Saldo,
                c_Monto_Maximo: data.response.c_Monto_Maximo,
              }
             
    
               
                );
    
                this.selectedImageURL = data.response.c_Url_Img;
            
          }
         
          this.cdr.detectChanges();
        },
        (error) => {
          
          console.error('Error fetching employee data:', error);
        }
      );

     }else
     {
      this.selectedImageURL = "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png";
     }
    });
  }



  IniciarTransferencia(){

  }


  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '15rem',
      width: '25rem', 
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
        this.onSubmit();
      }
    });
  }

  ngOnInit() {
   

    // this.catalogoService.getTipoCuenta("").subscribe((response: any) => {
    //   this.TipoCuenta = response.response;
    // });



    const token = localStorage.getItem("token"); // Reemplaza 'nombreDelToken' con el nombre real de tu token en el localStorage

    const decodedToken: any = jwt_decode(token);

    const idUsuario = decodedToken.IdUsuario;
    const idSucursal = decodedToken.IdSucursal;

    this.Id_Usuario = idUsuario;
    this.Id_Sucursal = idSucursal;

    // this.ngZone.run(() => {
    //   this.usuarioForm.get("c_Usuario_Creacion")?.setValue(this.Id_Usuario);
    //   this.usuarioForm.get("c_Id_Sucursal")?.setValue(this.Id_Sucursal);


    //   const rolesSistemaSeleccionados = this.usuarioForm.get("c_ID_ROL").value as string[];
    //   const rolesEnFormatoString = rolesSistemaSeleccionados.map(num => num.toString());
      
    //   this.usuarioForm.get("c_ID_ROL")?.patchValue(rolesEnFormatoString); 
      

     


    // });
  }



  onToggleChange(event: any): void {
    if (event.checked ) {
      this.toggleChecked = true;
    //  this.Texto = "Verificar Saldo";
      this.btntext = 'Deposito';
      this.c_Tipo_Mov = 1;
      
    } else if (!event.checked  ) {
      this.toggleChecked = false;
      this.btntext = 'Retiro';
      //this.Texto = "Registrar Factura";
     this.c_Tipo_Mov =2;

    }

   
  }



  onSubmit() {


  

 
    // const C_Id_Usuario = this.usuarioForm.get("c_Id_Usuario").value;
    // const C_ID_Rol_Persona = this.usuarioForm.get("c_ID_Rol_Persona").value;
    // const C_ID_ROL = this.usuarioForm.get("c_ID_ROL").value;
    // const C_Tipo_Cuenta = this.usuarioForm.get("c_Tipo_Cuenta").value;
    // const C_Id_Sucursal = this.usuarioForm.get("c_Id_Sucursal").value;
    // const C_Id_Genero = this.usuarioForm.get("c_Id_Genero").value;
    // const C_Id_Municipio = this.usuarioForm.get("c_Id_Municipio").value;
    // const C_Primer_Nombre = this.usuarioForm.get("c_Primer_Nombre").value;
    // const C_Segundo_Nombre = this.usuarioForm.get("c_Segundo_Nombre").value;
    // const C_Tercer_Nombre = this.usuarioForm.get("c_Tercer_Nombre").value;
    // const C_Primer_Apellido = this.usuarioForm.get("c_Primer_Apellido").value;
    // const C_Segundo_Apellido = this.usuarioForm.get("c_Segundo_Apellido").value;
    // const C_Apellido_Casada = this.usuarioForm.get("c_Apellido_Casada").value;
    // const C_DPI = this.usuarioForm.get("c_DPI").value;
    // const C_NIT = this.usuarioForm.get("c_NIT").value;
    // const C_Direccion = this.usuarioForm.get("c_Direccion").value;
    // const C_PNumero_Telefono = this.usuarioForm.get("c_PNumero_Telefono").value;
    // const C_SNumero_Telefono = this.usuarioForm.get("c_SNumero_Telefono").value;
    // const C_Correo = this.usuarioForm.get("c_Correo").value;
    // const C_Img_Base = this.usuarioForm.get("c_Img_Base").value;
    // const C_Descripcion = "";
    // const C_Fecha_Nacimiento = this.usuarioForm.get("c_Fecha_Nacimiento").value;
    // const C_Usuario_Creacion = this.usuarioForm.get("c_Usuario_Creacion").value;

    
    // this.crearUsuariosService.setEmpleado(C_Id_Usuario,
    //   C_ID_ROL,
    //   C_ID_Rol_Persona,
    //   C_Tipo_Cuenta,
    //   C_Id_Sucursal,
    //   C_Id_Genero,
    //   C_Id_Municipio,
    //   C_Primer_Nombre,
    //   C_Segundo_Nombre,
    //   C_Tercer_Nombre,
    //   C_Primer_Apellido,
    //   C_Segundo_Apellido,
    //   C_Apellido_Casada,
    //   C_DPI,
    //   C_NIT,
    //   C_Direccion,
    //   C_PNumero_Telefono,
    //   C_SNumero_Telefono,
    //   C_Correo,
    //   C_Img_Base,
    //   C_Descripcion,
    //   C_Fecha_Nacimiento,
    //   C_Usuario_Creacion
    //   ).subscribe(
    //   (response) => {
    //     if (response.ok) {
      
    //       this.snackBar.open(response.transaccion_Mensaje, "Cerrar", {
    //         duration: 5000,
    //         panelClass: ["success-snackbar"], 
    //       });


    //     } else {
  
    //       this.snackBar.open(
    //         `Error: ${response.transaccion_Estado} ${response.transaccion_Mensaje}`,
    //         "Cerrar",
    //         {
    //           duration: 10000, 
    //           panelClass: ["error-snackbar"], 
    //         }
    //       );

    //     }
    //   },
    //   (error) => {
  
    //     this.snackBar.open("Error Inesperado", "Cerrar", {
    //       duration: 15000,
    //       panelClass: ["error-snackbar"], 
    //     });

    //   }
    // );
  
  
  
  
  }
}
