import { Component,EventEmitter, Input, OnInit, Output, Renderer2, HostListener  } from '@angular/core';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { ProveedorEditComponent } from '../components/Proveedor-edit/Proveedor-edit.component';
import { ProveedorData } from '../interfaces/Proveedor.interface';
import { EmpleadoTableColumn } from 'src/@vex/interfaces/empleado_table_column.interface';
import { CrearUsuariosService } from 'src/app/Service/GetPersona.service';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from "jwt-decode";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';


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
  templateUrl: './Proveedor_table.component.html',
  styleUrls: ['./Proveedor_table.component.scss'],
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
export class ProveedorTableComponent implements OnInit {

  private tablaDataSubject = new BehaviorSubject<any[]>([]);
  tablaData$ = this.tablaDataSubject.asObservable();

  searchCtrl = new UntypedFormControl();

  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)
   
  );
  c_Id_Usuario: string;
  c_Id_UsuarioModificacion: string;
  tipo: string;
  titulo: string;
  razon: string;
  estado: number = this.CrearUsuariosService.estado;
  Color: string[] = ['font-medium'];
  persona: ProveedorData[] = [];
  menuOpen = false;


 




  activeCategory: ContactsTableMenu['id'] = 'Activo';
  tableData = this.persona;
  tableColumns: EmpleadoTableColumn<ProveedorData>[] = [


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
      label: 'Tipo',
      property: 'c_Tipo', 
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
  

  @Output() filterChange = new EventEmitter<ProveedorData[]>();
  @Output() openAddNew = new EventEmitter<void>();
  @Input() items: ContactsTableMenu[] = [
    
    {
      type: 'link',
      id: 'Activo',
      icon: 'mat:label',
      label: 'Activos',
      classes: {
        icon: 'text-green'
      }
    },
    {
      type: 'link',
      id: 'Inactivo',
      icon: 'mat:label',
      label: 'Inactivos',
      classes: {
        icon: 'text-gray'
      }
    },
  ];



  constructor(private dialog: MatDialog,
    private CrearUsuariosService:CrearUsuariosService,
    private snackBar: MatSnackBar,
    private router: Router, private renderer: Renderer2

   ) { }

  ngOnInit() {
    this.checkScreenSize(); 
     this.obtenerTablaData()



  }


  setFilter(category: ContactsTableMenu['id']) {
    this.activeCategory = category;


    if (category === 'Activo') {
      this.Color = ['text-green'];
      this.tableData = this.persona.filter(c => c.c_Estado === 1);
      this.Color = ['text-green'];
     // console.log(this.Color)
    }
   if (category === 'Inactivo') {
    this.tableData = this.persona.filter(c => c.c_Estado === 2);
    this.Color = ['text-red'];
   }
 }

 isActive(category: ContactsTableMenu['id']) {
   return this.activeCategory === category;
 }


  obtenerTablaData() {
    this.CrearUsuariosService.getProveedor("").subscribe((response: any) => {
      this.persona = response.response;
      this.tableData = this.persona.filter(c => c.c_Estado === this.estado);
    //  console.log(this.tableData);
    });
   
  }

  openContact(c_Id_Persona?: ProveedorData['c_Id_Persona']) {
    this.dialog.open(ProveedorEditComponent, {
      data: c_Id_Persona || null,
      width: '70rem'

    });
  }

  toggleStar(c_Id_Persona: ProveedorData['c_Id_Persona']) {
    const contact = this.persona.find(c => c.c_Id_Persona === c_Id_Persona);
 
    const token = localStorage.getItem("token"); 
    const decodedToken: any = jwt_decode(token);
    const idUsuario = decodedToken.IdUsuario;
    this.c_Id_UsuarioModificacion = idUsuario;
    if(contact.c_Tipo =="PROVEEDOR"){
      this.tipo = "Proveedor";
    }
    if(contact.c_Tipo =="CLIENTE"){
      this.tipo = "Cliente";
    }
   


    if(this.activeCategory == 'Activo'){

      this.titulo = "¿Estás seguro que deseas desactivar el" + " " + this.tipo + "?";
      this.razon = "Razon por la cual se desactiva el registro";
      this.estado = 1;
          
    }else{
      this.titulo = "¿Estás seguro de que deseas activar el " + " " + this.tipo + "?";
      this.razon = "Razon por la cual se activa el registro";
      this.estado = 2;
    }


    console.log(this.titulo,this.activeCategory);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '20rem',
      width: '28rem', 
      data: { title: this.titulo, textAreaValue: '', razon: this.razon, valido: true   }  

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.CrearUsuariosService.CambiarEstadoPersona(c_Id_Persona,this.c_Id_UsuarioModificacion,result).subscribe((response) => {
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

  setData(data: ProveedorData[]) {
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
      this.router.navigate(['/apps/persona/grid/activos']); // Cambiar a la vista en tarjetas
    }
  }

}


