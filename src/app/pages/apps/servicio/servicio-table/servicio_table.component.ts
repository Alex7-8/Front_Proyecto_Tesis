import { Component,EventEmitter, Input, OnInit, Output,HostListener,Renderer2 } from '@angular/core';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { ServicioEditComponent } from '../components/servicio-edit/servicio-edit.component';
import { ServicioData } from '../interfaces/servicio.interface';
import { he, th } from 'date-fns/locale';
import { style } from '@angular/animations';
import { EmpleadoTableColumn } from 'src/@vex/interfaces/empleado_table_column.interface';
import { ServicioService } from 'src/app/Service/Servicio.service';
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



export interface MarcaDatas {
  c_Id_Marca: number;
  c_Nombre: string;
  c_Descripcion: string;
  c_Url_IMG: string;
  c_Estado: number;
  c_Usuario_Creacion: string;
  c_Fecha_Creacion: string;
  c_Usuario_Modificacion: string;
  c_Fecha_Modificacion: string;
}



@Component({
  selector: 'vex-contacts-table',
  templateUrl: './servicio_table.component.html',
  styleUrls: ['./servicio_table.component.scss'],
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
export class ServicioTableComponent implements OnInit {

  private tablaDataSubject = new BehaviorSubject<any[]>([]);
  tablaData$ = this.tablaDataSubject.asObservable();

 searchCtrl = new UntypedFormControl();


  c_Id_Usuario: string;
  c_Id_UsuarioModificacion: string;
  titulo: string;
  estado: number = this.ServicioService.estado;
  Color: string[] = ['font-medium'];
  Servicio: ServicioData[] = [];
  menuOpen = false;
  form: FormGroup; 
  razon: string;
 
  
  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)

  );



  activeCategory: ContactsTableMenu['id'] = 'Activo';
  tableData = this.Servicio;
  tableColumns: EmpleadoTableColumn<ServicioData>[] = [


    {
      label: '',
      property: 'c_Url_IMG',
      type: 'image',
      cssClasses: ['h-9 rounded-full'],
    },
    {
      label: 'Nombre',
      property: 'c_Nombre_Servicio',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Precio',
      property: 'c_Precio_Final',
      type: 'text',
      cssClasses: ['font-medium'],
    },
    {
      label: 'Razon de Actualizacion',
      property: 'c_Descripcion',
      type: 'text',
      cssClasses: ['font-medium'],
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
      cssClasses: ['font-medium,']
    },
    {
      label: 'Fecha de modificacion',
      property: 'c_Fecha_Modificacion',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Cambiar Estado',
      property: 'starred',
      type: 'button',

      cssClasses: ['text-secondary w-10']

    },

    
  ];
  

  constructor(private dialog: MatDialog,
    private ServicioService:ServicioService, 
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
      this.tableData = this.Servicio.filter(c => c.c_Estado === 1);
      this.estado = 1;
      this.Color = ['text-green'];
      console.log(this.Color)
    }
   if (category === 'Inactivo') {
    this.tableData = this.Servicio.filter(c => c.c_Estado === 2);
    this.estado = 2;
    this.Color = ['text-red'];
   }
 }

 isActive(category: ContactsTableMenu['id']) {
   return this.activeCategory === category;
 }


  obtenerTablaData() {
    this.ServicioService.getMarca("").subscribe((response: any) => {
      this.Servicio = response.response;
      this.tableData = this.Servicio.filter(c => c.c_Estado === this.estado);
    });
    
  }

  openContact(c_Id_Marca?: ServicioData['c_Id_Servicio']) {
    this.dialog.open(ServicioEditComponent, {
      data: c_Id_Marca || null,
      width: '45rem'

    });
  }

  toggleStar(c_Id_Servicio: ServicioData['c_Id_Servicio']) {
    const contact = this.Servicio.find(c => c.c_Id_Servicio === c_Id_Servicio);
 

   

  

    const token = localStorage.getItem("token"); 
    const decodedToken: any = jwt_decode(token);
    const idUsuario = decodedToken.IdUsuario;
    this.c_Id_UsuarioModificacion = idUsuario;


    if(this.activeCategory == 'Activo'){
      this.titulo = "¿Estás seguro que deseas desactivar la marca?";
      this.razon = "Razon por la cual se desactiva el registro";
      this.estado = 1;
          
    }else{
      this.titulo = '¿Estás seguro de que deseas activar la marca?';
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
        this.ServicioService.CambiarEstadoServicio(c_Id_Servicio,this.c_Id_UsuarioModificacion,result).subscribe((response) => {
          
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

  setData(data: ServicioData[]) {
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
      this.router.navigate(['/apps/marca/grid/activos']); 
    }
  }

}
