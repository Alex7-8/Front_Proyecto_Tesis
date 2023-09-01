import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { ContactsEditComponent } from '../components/contacts-edit/contacts-edit.component';
import { EmpleadoData } from '../interfaces/listar_empleado.interface';
import { he, th } from 'date-fns/locale';
import { style } from '@angular/animations';
import { EmpleadoTableColumn } from 'src/@vex/interfaces/empleado_table_column.interface';
import { CrearUsuariosService } from 'src/app/Service/CrearUsuarios.service';
import { contactsData } from '../../../../../static-data/contacts';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { Contact } from '../../contacts/interfaces/contact.interface';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from "jwt-decode";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from "@angular/material/snack-bar";


export interface ContactsTableMenu {
  type: 'link' | 'subheading';
  id?: 'Activo' | 'Inactivo' | 'all' | 'family' | 'friends' | 'colleagues' | 'business';
  icon?: string;
  label: string;
  classes?: {
    icon?: string;
  };
}







export interface EmpleadoModal {

  c_Id_Persona: number;
  c_Id_Sucursal: number;
  c_Id_Genero: number;
  c_Id_Municipio: number;
  c_Primer_Nombre: string;
  c_Segundo_Nombre: string;
  c_Tercer_Nombre: string;
  c_Primer_Apellido: string;
  c_Segundo_Apellido: string;
  c_Apellido_Casada: string;
  c_DPI: string;
  c_NIT: string;
  c_Direccion: string;
  c_PNumero_Telefono: string;
  c_SNumero_Telefono: string;
  c_Correo: string;
  c_Fecha_Nacimiento: any;
  c_Img_Base: string;

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

  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
   
  );
  c_Id_Usuario: string;
  c_Id_UsuarioModificacion: string;
  titulo: string;
  estado: number = 1;
  Color: string[] = ['font-medium'];
  empleado: EmpleadoData[] = [];
  menuOpen = false;

 




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
  

  @Output() filterChange = new EventEmitter<EmpleadoData[]>();
  @Output() openAddNew = new EventEmitter<void>();
  @Input() items: ContactsTableMenu[] = [
    
    {
      type: 'link',
      id: 'Activo',
      icon: 'mat:label',
      label: 'Empleados Activos',
      classes: {
        icon: 'text-green'
      }
    },
    {
      type: 'link',
      id: 'Inactivo',
      icon: 'mat:label',
      label: 'Empleados Inactivos',
      classes: {
        icon: 'text-gray'
      }
    },
  ];



  constructor(private dialog: MatDialog,
    private CrearUsuariosService:CrearUsuariosService,
    private snackBar: MatSnackBar,

   ) { }

  ngOnInit() {



     this.obtenerTablaData()



  }


  setFilter(category: ContactsTableMenu['id']) {
    this.activeCategory = category;


    if (category === 'Activo') {
      this.Color = ['text-green'];
      this.tableData = this.empleado.filter(c => c.c_Estado === 1);
      this.Color = ['text-green'];
      console.log(this.Color)
    }
   if (category === 'Inactivo') {
    this.tableData = this.empleado.filter(c => c.c_Estado === 2);
    this.Color = ['text-red'];
   }
 }

 isActive(category: ContactsTableMenu['id']) {
   return this.activeCategory === category;
 }


  obtenerTablaData() {
    this.CrearUsuariosService.getEmpleadoActivo("").subscribe((response: any) => {
      this.empleado = response.response;
      this.tableData = this.empleado.filter(c => c.c_Estado === this.estado);
    });
    
  }

  openContact(c_Id_Persona?: EmpleadoData['c_Id_Persona']) {
    this.dialog.open(ContactsEditComponent, {
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
      this.estado = 1;
          
    }else{
      this.titulo = '¿Estás seguro de que deseas activar el empleado?';
      this.estado = 2;
    }


    console.log(this.titulo,this.activeCategory);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '15rem',
      width: '25rem', 
      data: { title: this.titulo }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.CrearUsuariosService.CambiarEstadoEmpleado(c_Id_Persona,contact.c_Id_Usuario,this.c_Id_UsuarioModificacion).subscribe((response) => {
          console.log(response);
          if(response.ok){
            this.snackBar.open(response.transaccion_Mensaje, "Cerrar", {
              duration: 5000,
              panelClass: ["success-snackbar"], 
            });
            this.obtenerTablaData();
          }else{
            this.snackBar.open("No se ha cambiado el estado del empleado", "Cerrar", {
              duration: 4000,
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
}
