import { Component,EventEmitter, Input, OnInit, Output,HostListener,Renderer2 } from '@angular/core';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadoEditComponent } from '../components/empleado-edit/empleado-edit.component';
import { EmpleadoData } from '../interfaces/listar_empleado.interface';
import { he, th } from 'date-fns/locale';
import { style } from '@angular/animations';
import { EmpleadoTableColumn } from 'src/@vex/interfaces/empleado_table_column.interface';
import { CrearUsuariosService } from 'src/app/Service/GetPersona.service';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from "jwt-decode";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { UntypedFormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
export interface ContactsTableMenu {
  type: 'link' | 'subheading';
  id?: 'Activo' | 'Inactivo' | 'all' | 'family' | 'friends' | 'colleagues' | 'business';
  icon?: string;
  label: string;
  classes?: {
    icon?: string;
  };
}

@Component({
  selector: 'vex-contacts-table',
  templateUrl: './listar_empleado_table.component.html',
  styleUrls: ['./listar_empleados_table.component.scss'],
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ],
  styles: [`
    .mat-drawer-container {
      background: transparent !important;
    }
  `]
})
export class ListarEmpleadoTableComponent implements OnInit {

  private tablaDataSubject = new BehaviorSubject<any[]>([]);
  tablaData$ = this.tablaDataSubject.asObservable();

 searchCtrl = new UntypedFormControl();


  c_Id_Usuario: string;
  c_Id_UsuarioModificacion: string;
  titulo: string;
  estado: number = this.CrearUsuariosService.estado;
  Color: string[] = ['font-medium'];
  empleado: EmpleadoData[] = [];
  menuOpen = false;
  form: FormGroup; 
  razon: string;
 
  
  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)

  );



  activeCategory: ContactsTableMenu['id'] = 'Activo';
  tableData = this.empleado;
  tableColumns: EmpleadoTableColumn<EmpleadoData>[] = [


    {
      label: '',
      property: 'c_Img_Base',
      type: 'image',
      cssClasses: ['h-9 rounded-full'],
    },
    {
      label: 'Nombre',
      property: 'c_Primer_Nombre',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Sucursal',
      property: 'c_Sucursal',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Departamento',
      property: 'c_Departamento',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Municipio',
      property: 'c_Municipio',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Usuario que lo creo',
      property: 'c_Usuario_Creacion',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Usuario que lo modifico',
      property: 'c_Usuario_Modificacion',
      type: 'text',
      cssClasses: ['font-medium']
    },

  {
      label: 'Fecha de creacion',
      property: 'c_Fecha_Creacion',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Fecha de modificacion',
      property: 'c_Fecha_Modificacion',
      type: 'text',
      cssClasses: ['font-medium']
    },

    {
      label: 'Rol',
      property: 'c_ID_ROL',
      type: 'text',
      cssClasses:   this.Color
    },
    {
      label: 'Cambiar Estado',
      property: 'starred',
      type: 'button',

      cssClasses: ['text-secondary w-10']

    },

    
  ];
  

  constructor(private dialog: MatDialog,
    private CrearUsuariosService:CrearUsuariosService,
    private snackBar: MatSnackBar,
    private router: Router, private renderer: Renderer2,
    private fb: UntypedFormBuilder,

   ) { }

  ngOnInit() {
     this.obtenerTablaData();
     this.checkScreenSize();

  }


  setFilter(category: ContactsTableMenu['id']) {
    this.activeCategory = category;


    if (category === 'Activo') {
      this.Color = ['text-green'];
      this.tableData = this.empleado.filter(c => c.c_Estado === 1);
      this.estado = 1;
      this.Color = ['text-green'];
      console.log(this.Color)
    }
   if (category === 'Inactivo') {
    this.tableData = this.empleado.filter(c => c.c_Estado === 2);
    this.estado = 2;
    this.Color = ['text-red'];
   }
 }

 isActive(category: ContactsTableMenu['id']) {
   return this.activeCategory === category;
 }


  obtenerTablaData() {
    this.CrearUsuariosService.getEmpleado("").subscribe((response: any) => {
      this.empleado = response.response;
      this.tableData = this.empleado.filter(c => c.c_Estado === this.estado);
    });
    
  }

  openContact(c_Id_Persona?: EmpleadoData['c_Id_Persona']) {
    this.dialog.open(EmpleadoEditComponent, {
      data: c_Id_Persona || null,
      width: '70rem'

    });
  }

  toggleStar(c_Id_Persona: EmpleadoData['c_Id_Persona']) {
    const contact = this.empleado.find(c => c.c_Id_Persona === c_Id_Persona);
 
    const token = localStorage.getItem("token"); 
    const decodedToken: any = jwt_decode(token);
    const idUsuario = decodedToken.IdUsuario;
    this.c_Id_UsuarioModificacion = idUsuario;


    if(this.activeCategory == 'Activo'){
      this.titulo = "¿Estás seguro que deseas desactivar el empleado?";
      this.razon = "Razon por la cual se desactiva el registro";
      this.estado = 1;
          
    }else{
      this.titulo = '¿Estás seguro de que deseas activar el empleado?';
      this.razon = "Razon por la cual se activa el registro";
      this.estado = 2;
    }


    console.log(this.titulo,this.activeCategory);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '20rem',
      width: '28rem', 
      data: { title: this.titulo,textAreaValue: '', razon: this.razon,valido: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.CrearUsuariosService.CambiarEstadoEmpleado(c_Id_Persona,contact.c_Id_Usuario,this.c_Id_UsuarioModificacion,result).subscribe((response) => {
          console.log(response);
          if(response.ok){
            this.snackBar.open(response.transaccion_Mensaje, "Cerrar", {
              duration: 5000,
              panelClass: ["success-snackbar"], 
            });
            this.obtenerTablaData();
          }else{
            this.snackBar.open("Codigo de Error: "+response.transaccion_Estado+" "+ "Mensje: "+response.transaccion_Mensaje, "Cerrar", {
              duration: 10000,
              panelClass: ["red-snackbar"]
            });
          }
        });
      }
    });

   
  

  }

  setData(data: EmpleadoData[]) {
    this.tableData = data;
    this.menuOpen = false;
  }

  openMenu() {
    this.menuOpen = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    if (window.innerWidth < 768) {
      this.router.navigate(['/apps/empleado/grid/activos']); 
    }
  }

}
