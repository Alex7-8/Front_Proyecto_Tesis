import { Component, OnInit,ChangeDetectorRef,NgZone } from '@angular/core';
import { FriendSuggestion } from '../social.component';
import { friendSuggestions } from '../../../../../static-data/friend-suggestions';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import jwt_decode from "jwt-decode";
import { UntypedFormBuilder,FormControl,FormGroup, Validators,AbstractControl } from '@angular/forms';
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { CrearUsuariosService } from 'src/app/Service/CrearUsuarios.service';
import { CatalogoService } from "src/app/Service/Catalogo.service";
import { MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, combineLatest, of } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { TranferenciaService} from "src/app/Service/Transferencia.service";
import { Empleado } from '../../../../../@vex/interfaces/Empleado.interface';




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
  selector: 'vex-social-profile',
  templateUrl: './social-profile.component.html',
  styleUrls: ['./social-profile.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms
  ]
})
export class SocialProfileComponent implements OnInit {

  suggestions = friendSuggestions;
  Id_Usuario: string = "";
  Id_UsuarioM: string = "";
  Id_Sucursal: string = "";
  foto: string = "";
  form: FormGroup; 
  titulo: string = "";
  contactId: string = null;
  valido: boolean = false;
  generos: any[];
  inputType = 'password';
  visibleA = false;
  visibleN = false;
  razon: string;
  maxDate: Date; // Fecha máxima permitida (100 años atrás desde la fecha actual)
  minDate: Date;
  formularioHabilitado: boolean = false;

  DeptoCtrl = new FormControl();

  MunCtrl = new FormControl();
  SucCtrl = new FormControl();
  filteredDepartamento$: Observable<Departamento[]>;
  filteredMunicipio$: Observable<Municipio[]>;
  filteredEmpleado$: Observable<Empleado[]>;
  empleado: Empleado;

  constructor(private fb: UntypedFormBuilder,
              public dialog: MatDialog,
             private snackBar: MatSnackBar,
             private catalogoService: CatalogoService,
             private CrearUsuariosService:CrearUsuariosService,
             private cdr: ChangeDetectorRef,
             private ngZone: NgZone,
             private TService:TranferenciaService
              ) {
                this.maxDate = new Date();
                this.minDate = new Date();
                this.minDate.setFullYear(this.minDate.getFullYear() - 100);
                this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
                }

  ngOnInit(): void {

  const token = localStorage.getItem("token"); // Reemplaza 'nombreDelToken' con el nombre real de tu token en el localStorage

  const decodedToken: any = jwt_decode(token);

  const idUsuario = decodedToken.IdUsuario;
  const idSucursal = decodedToken.IdSucursal;
  const nombre = decodedToken.Nombre;
  const correo = decodedToken.Correo;
  
  this.Id_Usuario = idUsuario;
  this.Id_Sucursal = idSucursal;
  
 

  this.form = this.fb.group({
    Nombre:[""],
    c_Id_Usuario: ["",Validators.compose([
      //Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]*$/),
      Validators.minLength(4),
      Validators.maxLength(24),
    ]),],
    c_ContraseniaA: ["",Validators.compose([
     // Validators.required,
      Validators.minLength(8),
    ]),],
    c_ContraseniaN: ["",Validators.compose([
      //Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).*$/)
    ]),],
    c_Img_Base: ["0"],
    Id_Empleado: [],
    c_Id_Genero: [, Validators.required],
    Primer_Nombre: ["", Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/)
    ])],
    Segundo_Nombre: ["",Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/)
    ])],
    Tercer_Nombre: ["",Validators.compose([
      Validators.minLength(1),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/)
    ])],
    Primer_Apellido: ["",Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/)
    ])],
    Segundo_Apellido: ["",Validators.compose([
     Validators.required,
      Validators.minLength(1),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/)
    ])],
    Apellido_Casada: ["",Validators.compose([
      Validators.minLength(1),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/)
    ])],
    c_Id_Departamento : [, 
     Validators.required
    ],
    c_Id_Municipio: [, 
    Validators.required
    ],
    DPI: ["", Validators.compose([
     Validators.required,
      Validators.minLength(13),
      Validators.maxLength(13),
    ]),],
    NIT: ["", Validators.compose([
      Validators.minLength(8),
      Validators.maxLength(12),
      Validators.pattern(/^[\d-]*$/)
    ]),
    ],
    Direccion:  ["",Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,-]*$/)
    ])],
    Telefono_Principal: ["", Validators.compose([
     Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8),
      Validators.pattern(/^[0-9]*$/)
    ]),],
    Telefono_Secundario: ["", Validators.compose([
      Validators.minLength(8),
      Validators.maxLength(8),
      Validators.pattern(/^[0-9]*$/)
    ]),],
    Correo: ["", [
      Validators.required, 
      Validators.email]],
      Fecha_Nacimiento: ["", [Validators.required, this.ageRangeValidator.bind(this)]],
    c_Usuario_CoM: [""],
   
    // Razon: ["", Validators.compose([
    //   Validators.required,
    //   Validators.minLength(15),
    //   Validators.maxLength(199),
    //   Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s,.]*$/)
    // ]),],


  });





  this.CrearUsuariosService.getEmpleadoByIdUsuario(this.Id_Usuario).subscribe(
    (data: any) => {
      this.empleado = data;
    
      this.form.patchValue({
        Nombre: "Actualizar Empleado",
        c_Id_Usuario: data.response.c_Id_Usuario,
        Id_Empleado:data.response.c_Id_Persona,
        c_Id_Genero: data.response.c_Id_Genero,
        Primer_Nombre: data.response.c_Primer_Nombre,
        Segundo_Nombre: data.response.c_Segundo_Nombre,
        Tercer_Nombre: data.response.c_Tercer_Nombre,
        Primer_Apellido: data.response.c_Primer_Apellido,
        Segundo_Apellido: data.response.c_Segundo_Apellido,
        Apellido_Casada: data.response.c_Apellido_Casada,
        c_Id_Departamento : data.response.c_Id_Departamento,
        c_Id_Municipio: data.response.c_Id_Municipio,
        DPI: data.response.c_DPI,
        NIT: data.response.c_NIT,
        Direccion: data.response.c_Direccion,
        Telefono_Principal: data.response.c_PNumero_Telefono,
        Telefono_Secundario: data.response.c_SNumero_Telefono,
        Correo: data.response.c_Correo,
        Fecha_Nacimiento: data.response.c_Fecha_Nacimiento
      }

        );
      this.TService.selectedImageURL = data.response.c_Img_Base ? `${data.response.c_Img_Base}` : "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png";
      this.ngZone.run(() => {
        this.form.get('c_Img_Base')?.setValue(this.TService.selectedImageURL);
        this.form.get('c_Usuario_CoM')?.setValue(this.Id_Usuario);
      });
      this.cdr.detectChanges();

    },
    (error) => {
      console.error('Error fetching employee data:', error);
    }

    
  );
  

  this.ngZone.run(() => {
    this.form.disable();
    this.form.get('c_Img_Base')?.setValue(this.foto);
  });
  this.cdr.detectChanges();




      
  this.filteredDepartamento$ = this.DeptoCtrl.valueChanges.pipe(
    startWith(""),
    switchMap((states) => this.catalogoService.getDepartamentos(states)),
    map((States) => States.slice())
  );


  this.form
    .get("c_Id_Departamento")
    .valueChanges.subscribe((newValue) => {
      this.filteredMunicipio$ =
        this.catalogoService.getMunicipioXDepartamentos(newValue, "");
    });

    this.catalogoService.getGenero("").subscribe((response: any) => {
      this.generos = response.response;
    });
}

ageRangeValidator(control) {
  const selectedDate = new Date(control.value);
  if (selectedDate >= this.minDate && selectedDate <= this.maxDate) {
    return null; // La fecha está dentro del rango
  } else {
    return { ageRange: true }; // La fecha está fuera del rango
  }
}
openConfirmDialog() {
    
  this.titulo = "¿Estás seguro que deseas actualizar el empleado?";
  this.razon = "Razon por la cual se actualizan los datos";
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    height: '20rem',
    width: '28rem', 
    data: { title: this.titulo, textAreaValue: '', razon: this.razon,valido: true   }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
    



      const C_Id_Persona = this.form.get("Id_Empleado").value;
     const C_Id_Usuario = this.form.get("c_Id_Usuario").value;
     const C_ContraseniaA = this.form.get("c_ContraseniaA").value;
     const C_ContraseniaN = this.form.get("c_ContraseniaN").value;
     const C_Id_Genero = this.form.get("c_Id_Genero").value;
     const C_Id_Municipio = this.form.get("c_Id_Municipio").value;
     const C_Primer_Nombre = this.form.get("Primer_Nombre").value;
     const C_Segundo_Nombre = this.form.get("Segundo_Nombre").value;
     const C_Tercer_Nombre = this.form.get("Tercer_Nombre").value;
     const C_Primer_Apellido = this.form.get("Primer_Apellido").value;
     const C_Segundo_Apellido = this.form.get("Segundo_Apellido").value;
     const C_Apellido_Casada = this.form.get("Apellido_Casada").value;
     const C_DPI = this.form.get("DPI").value;
     const C_NIT = this.form.get("NIT").value;
     const C_Direccion = this.form.get("Direccion").value;
     const C_PNumero_Telefono = this.form.get("Telefono_Principal").value;
     const C_SNumero_Telefono = this.form.get("Telefono_Secundario").value;
     const C_Correo = this.form.get("Correo").value;
     const C_Img_Base =  this.form.get('c_Img_Base').value;
     const C_Descripcion = result
     const C_Fecha_Nacimiento = this.form.get("Fecha_Nacimiento").value;
     const C_Usuario_Creacion = this.form.get("c_Usuario_CoM").value;


     this.CrearUsuariosService.putEmpleadoByIdUsuario(
       C_Id_Persona,
       C_Id_Usuario,
       C_ContraseniaA,
       C_ContraseniaN,
       C_Id_Genero,
       C_Id_Municipio,
       C_Primer_Nombre,
       C_Segundo_Nombre,
       C_Tercer_Nombre,
       C_Primer_Apellido,
       C_Segundo_Apellido,
       C_Apellido_Casada,
       C_DPI,
       C_NIT,
       C_Direccion,
       C_PNumero_Telefono,
       C_SNumero_Telefono,
       C_Correo,
       C_Img_Base,
       C_Descripcion,
       C_Fecha_Nacimiento,
       C_Usuario_Creacion
       ).subscribe(
       (response) => {
         if (response.ok) {
         //  this.lm.obtenerTablaData();
          // this.dialogRef.close();

           location.reload();
           this.snackBar.open(response.transaccion_Mensaje, "Cerrar", {
             duration: 5000,
             panelClass: ["success-snackbar"], 
           });
 
 
         } else {
   
           this.snackBar.open(
             `Error: ${response.transaccion_Estado} ${response.transaccion_Mensaje}`,
             "Cerrar",
             {
               duration: 10000, 
               panelClass: ["error-snackbar"], 
             }
           );
 
         }
       },
       (error) => {
         console.log(error);
         this.snackBar.open("Error Inesperado", "Cerrar", {
           duration: 15000,
           panelClass: ["error-snackbar"], 
         });
 
       }
     );
    
    
    
    }
  });
}

toggleVisibilityA() {
  if (this.visibleA) {
    this.inputType = 'password';
    this.visibleA = false;
  } else {
    this.inputType = 'text';
    this.visibleA = true;
  }
}

toggleVisibilityN() {
  if (this.visibleN) {
    this.inputType = 'password';
    this.visibleN = false;
  } else {
    this.inputType = 'text';
    this.visibleN = true;
  }
}


onToggleChange(event: any): void {
  if (event.checked == true) {
    this.form.enable();
    console.log('activado')
  } else if(event.checked == false){
    this.form.disable();
    console.log('desactivado')
  }

}


}
