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
import { CrearUsuariosService } from "../../../Service/CrearUsuarios.service";
import { MatDialog} from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { ConfirmDialogModule } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.module';



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
  templateUrl: "./form_actualizar_usuarios.component.html",
  styleUrls: ["./form_actualizar_usuarios.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [stagger60ms, fadeInUp400ms],
 

})



export class FormActualizarUsuariosComponent implements OnInit {
  roles: any[];
  rols: any[];
  generos: any[];
  TipoCuenta: any[];
  departamentos: Departamento[] = [];
  imagen: string = "";
  Id_Usuario: string = "";
  Id_Sucursal: string = "";
  usuarioForm: FormGroup; 

  IdRol: any[];
  inputType = "password";
  visible = false;
  showConfirmDialog = false;
  selectedImage: File | null = null;
  selectedImageURL: string | ArrayBuffer | null =
    "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png";

  DeptoCtrl = new FormControl();
  MunCtrl = new FormControl();
  filteredDepartamento$: Observable<Departamento[]>;
  filteredMunicipio$: Observable<Municipio[]>;

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
  ) {}

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
    this.usuarioForm = this.fb.group({
      
      c_Id_Usuario: ["",Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]*$/),
        Validators.minLength(4),
        Validators.maxLength(24),
      ]),],
      c_ID_Rol_Persona: [, Validators.required],
      c_ID_ROL: [[], Validators.required],
      c_Tipo_Cuenta: [,Validators.required],
      c_Id_Sucursal: [, Validators.required],
      c_Id_Genero: [, Validators.required],
      c_Id_Departamento: [, Validators.required],
      c_Id_Municipio: [, Validators.required],
      c_Primer_Nombre: ["", Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ]*$/)
      ])],
      c_Segundo_Nombre: ["",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ]*$/)
      ])],
      c_Tercer_Nombre: ["",Validators.compose([

        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ]*$/)
      ])],
      c_Primer_Apellido: ["",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ]*$/)
      ])],
      c_Segundo_Apellido: ["",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ]*$/)
      ])],
      c_Apellido_Casada: ["",Validators.compose([

        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ]*$/)
      ])],
      c_DPI: ["", Validators.compose([
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13),
      ]),],
      c_NIT: ["", Validators.compose([
        
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^[0-9]*$/)
      ]),
      ],
      c_Direccion: ["",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s\d,-]*$/)
      ])],
      c_PNumero_Telefono: ["", Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^[0-9]*$/)
      ]),],
      c_SNumero_Telefono: ["", Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^[0-9]*$/)
      ]),],
      c_Correo: ["", [Validators.required, Validators.email]],
      c_Img_Base: ["0"],
      c_Fecha_Nacimiento: ["", Validators.required],
      c_Usuario_Creacion: [""],
    });

    this.filteredDepartamento$ = this.DeptoCtrl.valueChanges.pipe(
      startWith(""),
      switchMap((states) => this.catalogoService.getDepartamentos(states)),
      map((States) => States.slice())
    );


    this.usuarioForm
      .get("c_Id_Departamento")
      .valueChanges.subscribe((newValue) => {
        this.filteredMunicipio$ =
          this.catalogoService.getMunicipioXDepartamentos(newValue, "zacapa");
      });

    this.catalogoService.getRolPersona("").subscribe((response: any) => {
      this.roles = response.response;
    });

    this.catalogoService.getRolUsuario("").subscribe((response: any) => {
      this.rols = response.response;
    });

    this.catalogoService.getGenero("").subscribe((response: any) => {
      this.generos = response.response;
    });

    this.catalogoService.getTipoCuenta("").subscribe((response: any) => {
      this.TipoCuenta = response.response;
    });

    const token = localStorage.getItem("token"); // Reemplaza 'nombreDelToken' con el nombre real de tu token en el localStorage

    const decodedToken: any = jwt_decode(token);

    const idUsuario = decodedToken.IdUsuario;
    const idSucursal = decodedToken.IdSucursal;

    this.Id_Usuario = idUsuario;
    this.Id_Sucursal = idSucursal;

    this.ngZone.run(() => {
      this.usuarioForm.get("c_Usuario_Creacion")?.setValue(this.Id_Usuario);
      this.usuarioForm.get("c_Id_Sucursal")?.setValue(this.Id_Sucursal);


      const rolesSistemaSeleccionados = this.usuarioForm.get("c_ID_ROL").value as string[];
      const rolesEnFormatoString = rolesSistemaSeleccionados.map(num => num.toString());
      
      this.usuarioForm.get("c_ID_ROL")?.patchValue(rolesEnFormatoString); 
      

     


    });
  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedImage = input.files[0];
      this.loadImage();
      

    }
  }

  loadImage(): void {
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        this.ngZone.run(() => {
          this.selectedImageURL = reader.result;
          const stringValue: string = this.selectedImageURL as string;
          const parts = stringValue.split(',');
          this.imagen = parts[1];

          this.ngZone.run(() => {
            this.usuarioForm.get('c_Img_Base')?.setValue(this.imagen);
            
          });
          this.cdr.detectChanges();
        

        });
      };
      reader.readAsDataURL(this.selectedImage);

    }
  }

 
  onSubmit() {


 
   const C_Id_Usuario = this.usuarioForm.get("c_Id_Usuario").value;
    const C_ID_Rol_Persona = this.usuarioForm.get("c_ID_Rol_Persona").value;
    const C_ID_ROL = this.usuarioForm.get("c_ID_ROL").value;
    const C_Tipo_Cuenta = this.usuarioForm.get("c_Tipo_Cuenta").value;
    const C_Id_Sucursal = this.usuarioForm.get("c_Id_Sucursal").value;
    const C_Id_Genero = this.usuarioForm.get("c_Id_Genero").value;
    const C_Id_Municipio = this.usuarioForm.get("c_Id_Municipio").value;
    const C_Primer_Nombre = this.usuarioForm.get("c_Primer_Nombre").value;
    const C_Segundo_Nombre = this.usuarioForm.get("c_Segundo_Nombre").value;
    const C_Tercer_Nombre = this.usuarioForm.get("c_Tercer_Nombre").value;
    const C_Primer_Apellido = this.usuarioForm.get("c_Primer_Apellido").value;
    const C_Segundo_Apellido = this.usuarioForm.get("c_Segundo_Apellido").value;
    const C_Apellido_Casada = this.usuarioForm.get("c_Apellido_Casada").value;
    const C_DPI = this.usuarioForm.get("c_DPI").value;
    const C_NIT = this.usuarioForm.get("c_NIT").value;
    const C_Direccion = this.usuarioForm.get("c_Direccion").value;
    const C_PNumero_Telefono = this.usuarioForm.get("c_PNumero_Telefono").value;
    const C_SNumero_Telefono = this.usuarioForm.get("c_SNumero_Telefono").value;
    const C_Correo = this.usuarioForm.get("c_Correo").value;
    const C_Img_Base = this.usuarioForm.get("c_Img_Base").value;
    const C_Descripcion = "";
    const C_Fecha_Nacimiento = this.usuarioForm.get("c_Fecha_Nacimiento").value;
    const C_Usuario_Creacion = this.usuarioForm.get("c_Usuario_Creacion").value;

    
    this.crearUsuariosService.setEmpleado(C_Id_Usuario,
      C_ID_ROL,
      C_ID_Rol_Persona,
      C_Tipo_Cuenta,
      C_Id_Sucursal,
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
  
        this.snackBar.open("Error Inesperado", "Cerrar", {
          duration: 15000,
          panelClass: ["error-snackbar"], 
        });

      }
    );
  }
}
