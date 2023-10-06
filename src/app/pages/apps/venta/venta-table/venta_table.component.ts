import { Component,EventEmitter, Input,ChangeDetectorRef, NgZone,OnInit, Output,HostListener,Renderer2 } from '@angular/core';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { VentaEditComponent } from '../components/venta-edit/venta-edit.component';
import { VentaData } from '../interfaces/venta.interface';
import { he, th } from 'date-fns/locale';
import { style } from '@angular/animations';
import { EmpleadoTableColumn } from 'src/@vex/interfaces/empleado_table_column.interface';
import { ProductoService } from 'src/app/Service/Productos.service';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from "jwt-decode";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { UntypedFormBuilder,FormControl,FormGroup, Validators,FormBuilder,FormArray } from '@angular/forms';
import { EMPTY, Observable, combineLatest, of } from "rxjs";
import { startWith, map, switchMap } from "rxjs/operators";
import { CrearUsuariosService } from 'src/app/Service/GetPersona.service'; 
import { Persona } from '../../../../../@vex/interfaces/Empleado.interface';
import { SerieFacturaService } from 'src/app/Service/SerieFactura.service';
export interface ContactsTableMenu {
  type: 'link' | 'subheading';
  id?: 'Activo' | 'Inactivo' | 'all' | 'family' | 'friends' | 'colleagues' | 'business';
  icon?: string;
  label: string;
  classes?: {
    icon?: string;
  };
}

// export const Data: FacturaData[] = 
// [
//   {
//     c_Url_IMG: 'https://distribuidoralosescudos.com/web/image/product.product/24128/image_1024/%5BDIST04370%5D%20TEMPERA%20TUCAN%2016%20ONZ%20COLOR%20ROSADO?unique=c32f572',
//     c_Id_Producto: 3,
//     c_Nombre: 'PINTURA TUCAN ROSA',
//     c_Cantidad: 1,
//     c_Precio: 4.5,
//     c_IVA: 0.5,
//     c_Total: 5
   
//   }
 

// ];


export interface Facturacion {
  Id: string;
  name: string;   
  Url_IMG: string;
}


export interface Productos {
  Id: string;
  name: string;   
  Url_IMG: string;
}

export interface FacturaData {
  c_Url_IMG: string;
  c_Id_Producto: number;
  c_Nombre: string;
  c_Cantidad: number;
  c_Precio: number;
  c_IVA: number;
  c_Total: number;

}



@Component({
  selector: 'vex-contacts-table',
  templateUrl: './venta_table.component.html',
  styleUrls: ['./venta_table.component.scss'],
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
export class VentaTableComponent implements OnInit {


  Data: FacturaData[] = [
    // {
    //   c_Url_IMG: 'https://distribuidoralosescudos.com/web/image/product.product/24128/image_1024/%5BDIST04370%5D%20TEMPERA%20TUCAN%2016%20ONZ%20COLOR%20ROSADO?unique=c32f572',
    //   c_Id_Producto: 3,
    //   c_Nombre: 'PINTURA TUCAN ROSA',
    //   c_Cantidad: 1,
    //   c_Precio: 4.5,
    //   c_IVA: 0.5,
    //   c_Total: 5
    // }
  ];





  private tablaDataSubject = new BehaviorSubject<any[]>([]);
  tablaData$ = this.tablaDataSubject.asObservable();




  imagen: string = "";
  MarcaCtrl = new FormControl();
  searchCtrl = new UntypedFormControl();
  FacturacionCtrl = new UntypedFormControl();
  ProductosCtrl = new UntypedFormControl();
  filteredFacturacion$: Observable<Facturacion[]>;
  filteredProductos$: Observable<Productos[]>;

  c_Id_Usuario: string;
  c_Id_UsuarioModificacion: string;
  titulo: string;
  estado: number = this.ProductoService.estado;
  Color: string[] = ['font-medium'];
  //Servicio: VentaData[] = [];
  menuOpen = false;
  form: FormGroup; 
  usuarioForm: FormGroup; 
  razon: string;
  Id_Sucursal: number;
  busqueda: number;
  Serie: any[];
  persona: Persona;
  SerieSeleccionada: string;
   c_Id_Producto: number[][] = [[1, 2], [3, 4], [5, 6]];
   urlsImagenes: string[] = [] ;
   selectedImage: File | null = null;
   selectedImageURL: string | ArrayBuffer | null =
     "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Servicios.jpg";
 
 
     imagenPorDefectoURL: string = 'https://img.srvcentral.com/Sistema/ImagenPorDefecto/Servicios.jpg';
 
     valido: boolean = true;
 
 
 
 
 
   searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)

  );


 



  activeCategory: ContactsTableMenu['id'] = 'Activo';
  tableData = this.Data;
  tableColumns: EmpleadoTableColumn<FacturaData>[] = [
    {
      label: '',
      property: 'c_Url_IMG',
      type: 'image',
      cssClasses: ['h-9 rounded-full'],
    },
    {
      label: 'Descripcion',
      property: 'c_Nombre',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Cantidad',
      property: 'c_Cantidad',
      type: 'text',
      cssClasses: ['font-medium'],
    },
    {
      label: 'Precio',
      property: 'c_Precio',
      type: 'text',
      cssClasses: ['font-medium'],
    },
    {
      label: 'IVA',
      property: 'c_IVA',
      type: 'text',
      cssClasses: ['font-medium'],
    },

    {
      label: 'Total',
      property: 'c_Total',
      type: 'text',
      cssClasses: ['font-medium'],
    },

  ];
  


  
  applyMarginBottom = false;
  applyMarginTop = false;

  @HostListener('window:resize', ['$event'])
  onResizae(event: any) {
    this.applyMarginBottom = window.innerWidth < 768;
    this.applyMarginTop = window.innerWidth >= 768;
  }
  constructor(private dialog: MatDialog,
    private ProductoService:ProductoService, 
    private snackBar: MatSnackBar,
    private router: Router, private renderer: Renderer2,
    private fb: UntypedFormBuilder,
    private ngZone: NgZone,
    private CS: CrearUsuariosService,
    private cdr: ChangeDetectorRef,
    private SerieFacturaService: SerieFacturaService,
    private FormBuilder: FormBuilder,
  

   ) { 

    const token = localStorage.getItem("token"); 

    const decodedToken: any = jwt_decode(token);

    const idUsuario = decodedToken.IdUsuario;
    const idSucursal = decodedToken.IdSucursal;

    this.c_Id_Usuario = idUsuario;
    this.Id_Sucursal = idSucursal;

    

    this.agregarCampo();
   }

  ngOnInit() {
  // this.obtenerTablaData()
     this.checkScreenSize();

   


     this.usuarioForm = this.fb.group({
      
      c_Id_Persona: [],
      c_Id_Producto: [[0]],
      c_Id_Sucursal: [],
      c_Id_Serie: [],
      c_NIT: [],
      c_Direccion: [],
      c_Img_Base: ["0"],
      c_Fecha_Nacimiento: ["", Validators.required],
      c_Usuario_Creacion: [""],
    });





    this.usuarioForm.patchValue({
      c_Usuario_Creacion: this.c_Id_Usuario,
      c_Id_Sucursal: this.Id_Sucursal
    });
 




    this.filteredFacturacion$ = this.FacturacionCtrl.valueChanges.pipe(
      startWith(""),
      switchMap((states) => this.CS.getPersonaFacturacion(states)),
      map((States) =>  States.slice())
    );


    this.filteredProductos$ = this.ProductosCtrl.valueChanges.pipe(
      startWith(""),
      switchMap((Id_Sucursal) => this.ProductoService.getProductoFacturacion(this.Id_Sucursal)),
      map((States) =>  States.slice())
    );


    this.usuarioForm
    .get("c_Id_Persona")
    .valueChanges.subscribe((newValue) => {
      this.BuscarCliente(newValue);
    });


    
    this.SerieFacturaService.getSerieFacturaBySL(this.Id_Sucursal).subscribe((response: any) => {
      this.Serie = response.response;
      
      if (this.Serie.length > 0) {
        this.usuarioForm.patchValue({
          c_Id_Serie: this.Serie[0].c_Id_Serie,
        });
     //   this.SerieSeleccionada = this.Serie[0]; // Selecciona la primera serie
      }
    });
    }



    get Servicio(){
      return this.registerForm.get('campo') as FormArray;
    }
  
    registerForm = this.FormBuilder.group({
      campo: this.FormBuilder.array([])
    });
    agregarCampo(){
      const FormGroup  = this.FormBuilder.group({
        c_Img_Base: '0',
        c_Nombre_Producto: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/), Validators.minLength(4), Validators.maxLength(24)]],
        c_Cantidad: ['',],
        c_Precio_Venta: [''],
        c_IVA: [''],
        c_SubTotal: [''] ,
        c_Total: [''] ,
         c_Id_Sucursal: this.Id_Sucursal,
        c_Usuario_Creacion: this.c_Id_Usuario,
      });
    }

  
    removerCampo(indice: number) {
      this.Servicio.removeAt(indice);
      this.urlsImagenes.splice(indice, 1);

      this.form.get('c_Img_Base')?.setValue('');

    }
    onFileSelecteds(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input?.files?.length) {
        this.selectedImage = input.files[0];
        this.loadImages();
        
    
      }
    }
    
    loadImages(): void {
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
    
    
      onFileSelected(event: Event, index: number): void {
        const input = event.target as HTMLInputElement;
        if (input?.files?.length) {
          const selectedImage = input.files[0];
          this.loadImage(selectedImage, index); // Llama a loadImage con el índice correspondiente
        }
       
      }
    
      loadImage(selectedImage: File, index: number): void {
        if (selectedImage) {
    
          const reader = new FileReader();
          reader.onload = () => {
            this.ngZone.run(() => {
              const selectedImageURL = reader.result as string;
              this.urlsImagenes[index] = selectedImageURL; // Asigna la URL de imagen al índice correspondiente
              const stringValue: string = selectedImageURL;
              const parts = stringValue.split(',');
              this.imagen = parts[1];
    
              const FormGroup = this.Servicio.at(index) as FormGroup;
              FormGroup.get('c_Img_Base')?.setValue(this.imagen);
             
              this.cdr.detectChanges();
             
            });
          };
          reader.readAsDataURL(selectedImage);
        } 
      }
      





































































































  setFilter(category: ContactsTableMenu['id']) {
    this.activeCategory = category;


  //   if (category === 'Activo') {
  //     this.Color = ['text-green'];
  //     this.tableData = this.Servicio.filter(c => c.c_Estado === 1);
  //     this.estado = 1;
  //     this.Color = ['text-green'];
  //     console.log(this.Color)
  //   }
  //  if (category === 'Inactivo') {
  //   this.tableData = this.Servicio.filter(c => c.c_Estado === 2);
  //   this.estado = 2;
  //   this.Color = ['text-red'];
  //  }
 }

 isActive(category: ContactsTableMenu['id']) {
   return this.activeCategory === category;
 }

 
 
//   obtenerTablaData() {

//     const productos: any[] = [];

//     for (const ids of this.c_Id_Producto) {
//       for (const id of ids) {
//         this.ProductoService.getProductoFacturacionById(id).subscribe((response: any) => {
//           this.Data.push({
//             c_Url_IMG: response.response.c_Url_IMG,
//             c_Id_Producto: response.response.c_Id_Producto,
//             c_Nombre: response.response.c_Nombre,
//             c_Cantidad: 2,
//             c_Precio: response.response.c_Precio_Venta,
//             c_IVA: 1.0,
//             c_Total: 10.99
//           });
          
//         });
//       }
//       console.log(productos)
//     }





//   // this.ProductoService.getProductoFacturacionById(id).subscribe((response: any) => {
//   //   this.Servicio = response.response;
//   //  // this.tableData = this.Servicio.filter(c => c.c_Estado === this.estado);
//   //   this.tablaDataSubject.next(this.Servicio);
//   //}
//  // );

//    // this.tablaDataSubject = new BehaviorSubject<any[]>([]);
//   //  this.tableData = this.usuarioForm.get("c_Id_Producto").valueChanges.pipe(
//   //   startWith(""),
//   //   switchMap((Id_Producto) => this.ProductoService.getProducto(Id_Producto)),
//   //   map((States) =>  States.slice())  
//   // );
//     // this.ProductoService.getProducto("").subscribe((response: any) => {
//     //   this.Servicio = response.response;
//     //   this.tableData = this.Servicio.filter(c => c.c_Estado === this.estado);
//     // });
    
//   }



  // agregarNuevoProducto() {

  //   this.Data.push({
  //     c_Url_IMG: 'https://nueva-imagen.com',
  //     c_Id_Producto: 4,
  //     c_Nombre: 'Nuevo Producto',
  //     c_Cantidad: 2,
  //     c_Precio: 9.99,
  //     c_IVA: 1.0,
  //     c_Total: 10.99
  //   });
  // }






  BuscarCliente(id: number ) {
   

    this.CS.getPersonaFacturacionById(id).subscribe(
      (data: any) => {
        this.persona = data;
        console.log(this.persona);
        this.usuarioForm.patchValue({
          c_NIT: data.response.c_NIT,
          c_Direccion: data.response.c_Direccion,
        });
        this.cdr.detectChanges();

      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );



  }
  openContact(c_Id_Producto?: VentaData['c_Id_Producto']) {
    this.dialog.open(VentaEditComponent, {
      data: c_Id_Producto || null,
      width: '65rem'

    });
  }

  // toggleStar(c_Id_Producto: VentaData['c_Id_Producto']) {
  //   const contact = this.Servicio.find(c => c.c_Id_Producto === c_Id_Producto);
 

   

  

  //   const token = localStorage.getItem("token"); 
  //   const decodedToken: any = jwt_decode(token);
  //   const idUsuario = decodedToken.IdUsuario;
  //   this.c_Id_UsuarioModificacion = idUsuario;


  //   if(this.activeCategory == 'Activo'){
  //     this.titulo = "¿Estás seguro que deseas desactivar el producto?";
  //     this.razon = "Razon por la cual se desactiva el registro";
  //     this.estado = 1;
          
  //   }else{
  //     this.titulo = '¿Estás seguro de que deseas activar el producto?';
  //     this.razon = "Razon por la cual se activa el registro";
  //     this.estado = 2;
  //   }


  //   console.log(this.titulo,this.activeCategory);
  //   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  //     height: '20rem',
  //     width: '28rem', 
  //     data: { title: this.titulo,textAreaValue: '', razon: this.razon,valido: true }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //      if (result) {
  //       this.ProductoService.CambiarEstadoProducto(c_Id_Producto,this.c_Id_UsuarioModificacion,result).subscribe((response) => {
          
  //         if(response.ok){
  //           this.snackBar.open(response.transaccion_Mensaje, "Cerrar", {
  //             duration: 5000,
  //             panelClass: ["success-snackbar"], 
  //           });

  //           this.obtenerTablaData();
  //         }else{
  //           this.snackBar.open("Codigo de Error: "+response.transaccion_Estado+" "+ "Mensje: "+response.transaccion_Mensaje, "Cerrar", {
  //             duration: 10000,
  //             panelClass: ["red-snackbar"]
  //           });
  //         }
  //       });
  //      }
  //   });


  // }

  setData(data: VentaData[]) {
    //this.tableData = data;
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
      this.router.navigate(['/apps/producto/grid/activos']);
    }
  }
}
