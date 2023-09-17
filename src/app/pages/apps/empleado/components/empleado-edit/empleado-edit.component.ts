import { Component,ChangeDetectionStrategy,ChangeDetectorRef,NgZone, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import jwt_decode from "jwt-decode";
import { UntypedFormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { EmpleadoData } from '../../interfaces/listar_empleado.interface';
import { Empleado } from '../../../../../../@vex/interfaces/Empleado.interface';
import { CatalogoService } from "../../../../../Service/Catalogo.service";
import { Observable, combineLatest, of } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { CrearUsuariosService } from 'src/app/Service/CrearUsuarios.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { MatDialog} from '@angular/material/dialog';

export let contactIdCounter = 50;



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

export interface Sucursal {
  name: string;
  Id: string;
  flag: string;
}


@Component({
  selector: 'vex-contacts-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.scss']
})
export class EmpleadoEditComponent implements OnInit {

  roles: any[];
  rols: any[];
  generos: any[];
  TipoCuenta: any[];
  departamentos: Departamento[] = [];
  municipios: Municipio[] = [];
  sucursal: Sucursal[] = [];
  imagen: string = "";
  Id_Usuario: string = "";
  Id_Sucursal: string = "";
  titulo: string = "";
  valido: boolean = false;
  razon: string = "";
verificar: boolean = false;
ancho: string = "15rem";
largo: string = "25rem";
  data: any;
  form: FormGroup; 
  validos: boolean = false;
  mostrarCampoTexto = false;

  selectedImage: File | null = null;
  selectedImageURL: string | ArrayBuffer | null =
    "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png";

  DeptoCtrl = new FormControl();
  MunCtrl = new FormControl();
  SucCtrl = new FormControl();
  filteredDepartamento$: Observable<Departamento[]>;
  filteredMunicipio$: Observable<Municipio[]>;
  filteredSucursal$: Observable<Sucursal[]>;
  filteredEmpleado$: Observable<Empleado[]>;
  isFormActive: boolean = true;
  maxDate: Date; // Fecha máxima permitida (100 años atrás desde la fecha actual)
  minDate: Date;


  empleado: Empleado;

  get isEdit(): boolean {
    return !!this.contactId;
  }



  constructor(@Inject(MAT_DIALOG_DATA) public contactId: EmpleadoData['c_Id_Persona'],
              private dialogRef: MatDialogRef<EmpleadoEditComponent>,
              private fb: UntypedFormBuilder,
              private catalogoService: CatalogoService,
              private cdr: ChangeDetectorRef,
              private ngZone: NgZone,
              private snackBar: MatSnackBar,
              private CrearUsuariosService:CrearUsuariosService,
              public dialog: MatDialog,
             ) { 
              this.maxDate = new Date();
              this.minDate = new Date();
              this.minDate.setFullYear(this.minDate.getFullYear() - 100);
              this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
             }

  ngOnInit() {


   

    this.form = this.fb.group({
      Nombre:[""],
      c_Id_Usuario: ["",Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]*$/),
        Validators.minLength(4),
        Validators.maxLength(24),
      ]),],
      c_Img_Base: ["0"],
      Id_Empleado: [],
      c_Id_Sucursal: [, Validators.required],
      c_Id_Genero: [, Validators.required],
      c_ID_ROL: [[], Validators.required],
      c_Tipo_Cuenta: [,Validators.required],
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
      c_Id_Departamento : [, Validators.required],
      c_Id_Municipio: [, Validators.required],
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
      Correo: ["", [Validators.required, Validators.email]],
      Fecha_Nacimiento: ["", [Validators.required, this.ageRangeValidator.bind(this)]],
      c_Usuario_CoM: [""],
      Razon: [""],
      Id_Cuenta: [""],
    });

    const token = localStorage.getItem("token"); 

    const decodedToken: any = jwt_decode(token);

    const idUsuario = decodedToken.IdUsuario;
    const idSucursal = decodedToken.IdSucursal;

    this.Id_Usuario = idUsuario;
    this.Id_Sucursal = idSucursal;

    if(this.contactId == null){
      this.form.patchValue({
        Nombre: "Registrar Empleado",
        c_Usuario_CoM: this.Id_Usuario,
        c_Id_Sucursal: parseInt(this.Id_Sucursal, 10)
      });
      this.cdr.detectChanges();
    }




if(this.contactId != null){
  this.valido = true;
  this.form.get('c_Id_Usuario')?.reset();
  this.form.get('c_Id_Usuario')?.disable();
  this.form.get('Id_Cuenta')?.reset();
  this.form.get('Id_Cuenta')?.disable();
  this.form.get('Razon')?.reset();
  this.form.get('Razon')?.disable();
  
    this.CrearUsuariosService.getEmpleadoById(this.contactId).subscribe(
      (data: any) => {
        this.empleado = data;
      
        this.form.patchValue({
          Nombre: "Actualizar Empleado",
          c_Id_Usuario: data.response.c_Id_Usuario,
          Id_Empleado:data.response.c_Id_Persona,
          c_ID_ROL: data.response.c_ID_ROL.map(id => parseInt(id, 10)),
          c_Tipo_Cuenta: data.response.c_Id_Tipo_Cuenta,
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
          Fecha_Nacimiento: data.response.c_Fecha_Nacimiento,
          c_Id_Sucursal: data.response.c_Id_Sucursal,
          Id_Cuenta: data.response.c_Id_Cuenta,
          Razon: data.response.c_Descripcion,
        }

          );
        this.selectedImageURL = data.response.c_Img_Base ? `${data.response.c_Img_Base}` : "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png";
        this.ngZone.run(() => {
          this.form.get('c_Img_Base')?.setValue(data.response.c_Img_Base);
        });
        this.cdr.detectChanges();

      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
    }else
    {
      this.form.get('Razon')?.reset();
      this.form.get('Razon')?.disable();
    }


   this.ngZone.run(() => {
          this.form.get("c_Usuario_CoM")?.setValue(this.Id_Usuario);
          const rolesSistemaSeleccionados = this.form.get("c_ID_ROL").value as string[];
          const rolesEnFormatoString = rolesSistemaSeleccionados.map(num => num.toString());
          this.form.get("c_ID_ROL")?.patchValue(rolesEnFormatoString); 
        });

    
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

      this.filteredSucursal$ = this.SucCtrl.valueChanges.pipe(
        startWith(""),
        switchMap((Sl) => this.catalogoService.getSucursal(Sl)
        ),
        map((Sl) => Sl.slice())
      );

    this.catalogoService.getRolUsuario("").subscribe((response: any) => {
      this.rols = response.response;
    });

    this.catalogoService.getGenero("").subscribe((response: any) => {
      this.generos = response.response;
    });

    this.catalogoService.getTipoCuenta("").subscribe((response: any) => {
      this.TipoCuenta = response.response;
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
            this.form.get('c_Img_Base')?.setValue(this.imagen);
            
          });
          this.cdr.detectChanges();
        

        });
      };
      reader.readAsDataURL(this.selectedImage);

    }
  }


  openConfirmDialog() {
    if(this.contactId != null){
      this.titulo = "¿Estás seguro que deseas actualizar el empleado?";
      this.razon = "Razon por la cual se actualiza el registro";
      this.verificar = true;
      this.ancho = "20rem";
      this.largo = "28rem";
          
    }else{
      this.titulo = '¿Estás seguro de que deseas guardar los cambios?';
      this.razon = "Razon por la cual se crea el registro";
      this.verificar = false;
      this.ancho = "15rem";
      this.largo = "25rem";
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: this.ancho,
      width: this.largo,  
      data: { title: this.titulo,razon:this.razon, valido: this.verificar }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != false) {
       

          if(this.contactId == null){
             this.valido = false;
             const C_Id_Usuario = this.form.get("c_Id_Usuario").value;
             const C_ID_Rol_Persona = 1;
             const C_ID_ROL = this.form.get("c_ID_ROL").value;
             const C_Tipo_Cuenta = this.form.get("c_Tipo_Cuenta").value;
             const C_Id_Sucursal = this.form.get("c_Id_Sucursal").value;
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
             const C_Img_Base = this.form.get("c_Img_Base").value;
             const C_Descripcion = "Creacion de Empleado"
             const C_Fecha_Nacimiento = this.form.get("Fecha_Nacimiento").value;
             const C_Usuario_Creacion = this.form.get("c_Usuario_CoM").value;
         
             
             this.CrearUsuariosService.setEmpleado(C_Id_Usuario,
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
                 //  this.lm.obtenerTablaData();
                   this.dialogRef.close();
                   location.reload();
                   this.snackBar.open(response.transaccion_Mensaje, "Cerrar", {
                     duration: 5000,
                     panelClass: ["success-snackbar"], 
                   });
         
         
                 } else {
           
                   this.snackBar.open("Codigo de Error: "+response.transaccion_Estado+" "+ "Mensje: "+response.transaccion_Mensaje, "Cerrar", {
                     duration: 10000,
                     panelClass: ["red-snackbar"]
                   });
         
                 }
               },
               (error) => {
           
                 this.snackBar.open("Error Inesperado", "Cerrar", {
                   duration: 15000,
                   panelClass: ["error-snackbar"], 
                 });
         
               }
             );
           }else{
             const C_Id_Persona = this.form.get("Id_Empleado").value;
             const C_Id_Usuario = this.form.get("c_Id_Usuario").value;
             const C_ID_Rol_Persona = 1;
             const C_ID_ROL = this.form.get("c_ID_ROL").value;
             const c_Id_Tipo_Cuenta = this.form.get("c_Tipo_Cuenta").value;
             const C_Id_Sucursal = this.form.get("c_Id_Sucursal").value;
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
             const C_Img_Base = this.form.get("c_Img_Base").value;
             const C_Descripcion = result
             const C_Fecha_Nacimiento = this.form.get("Fecha_Nacimiento").value;
             const c_Usuario_Modificacion = this.form.get("c_Usuario_CoM").value;
         
          
            this.valido = true;
             this.CrearUsuariosService.putEmpleado(
               C_Id_Persona,
               C_Id_Usuario,
               C_ID_ROL,
               C_ID_Rol_Persona,
               c_Id_Tipo_Cuenta,
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
               c_Usuario_Modificacion
               ).subscribe(
               (response) => {
                 if (response.ok) {
                   //this.lm.obtenerTablaData();
                   this.dialogRef.close();
                   location.reload();
                   this.snackBar.open(response.transaccion_Mensaje, "Cerrar", {
                     duration: 5000,
                     panelClass: ["success-snackbar"], 
                   });
         
                 } else {
                   this.snackBar.open("Codigo de Error: "+response.transaccion_Estado+" "+ "Mensje: "+response.transaccion_Mensaje, "Cerrar", {
                     duration: 10000,
                     panelClass: ["red-snackbar"]
                   });
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
      }
    );
  }


 



}
