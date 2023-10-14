import { Component,ChangeDetectionStrategy,ChangeDetectorRef,NgZone, Inject, OnInit,HostListener  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import jwt_decode from "jwt-decode";
import { UntypedFormBuilder,FormControl,FormGroup, Validators,UntypedFormGroup, ReactiveFormsModule, FormArray, FormBuilder,AbstractControl,UntypedFormControl } from '@angular/forms';
import { FacturaCompraData } from '../../interfaces/FacturaCompra.interface';
import { Empleado } from '../../../../../../@vex/interfaces/Empleado.interface';
import { CatalogoService } from "../../../../../Service/Catalogo.service";
import { EMPTY, Observable, combineLatest, of } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { ProductoService } from 'src/app/Service/Productos.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { concatMap, filter } from 'rxjs/operators';
import { from } from 'rxjs';
import { SerieFacturaService } from 'src/app/Service/SerieFactura.service';
import { CrearUsuariosService } from 'src/app/Service/GetPersona.service'; 
import { FacturaService } from 'src/app/Service/Factura.service';
import { da } from 'date-fns/locale';
import { RouterLink } from '@angular/router';
import { ActivatedRoute,Router } from '@angular/router';
import { TokenService } from 'src/app/Service/token.service';
import { TranferenciaService } from 'src/app/Service/Transferencia.service'; 


export let contactIdCounter = 50;


interface Producto {
  c_Nombre_Producto: string;
  c_Id_Producto: string;
  c_Cantidad: string;
  c_Precio_Venta: string;
  c_SubTotal: string;
  c_IVA: string;
  c_Total: string;
  c_Id_Sucursal: string;
  c_Id_Usuario: string;
}

interface Person {
  c_Nombre_Producto: string;
  c_Id_Producto: string;
  c_Cantidad: string;
  c_Precio_Venta: string;
  c_SubTotal: string;
  c_IVA: string;
  c_Total: string;
  c_Id_Sucursal: string;
  c_Id_Usuario: string;
}


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



export interface Sucursal {
  name: string;
  Id: string;
  flag: string;
}

export interface Marca {
  name: string;
  Id: string;
  flag: string;
}

@Component({
  selector: 'vex-contacts-edit',
  templateUrl: './FacturaCompra-edit.component.html',
  styleUrls: ['./FacturaCompra-edit.component.scss']
})
export class FacturaCompraEditComponent implements OnInit {

  c_nombre: string[] = [];
  c_Img_Base: string[] = [];
  C_ArrayCampos: string[] = [];
  Categoria: any[];
  imagen: string = "";
  Id_Usuario: string = "";
  Id_Sucursal: number;
  titulo: string = "";
  valido: boolean = true;
  ValidarBoton: boolean = false;
  razon: string = "";
verificar: boolean = false;
ancho: string = "15rem";
largo: string = "25rem";
  data: any;
  form: UntypedFormGroup ; 
  validos: boolean = false;
  mostrarCampoTexto = false;
  Serie: any[];
  searchCtrl = new UntypedFormControl();
  FacturacionCtrl = new UntypedFormControl();
  ProductosCtrl = new UntypedFormControl();
  filteredFacturacion$: Observable<Facturacion[]>;
  filteredProductos$: Observable<Productos[]>;
  arrayIndiceProductos: [number, number][] = [];
  posicionActual: number = 0;
  selectedImage: File | null = null;
  selectedImageURL: string | ArrayBuffer | null =
    "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Servicios.jpg";


    imagenPorDefectoURL: string = 'https://img.srvcentral.com/Sistema/ImagenPorDefecto/Servicios.jpg';

    SerieSeleccionada: string;
  isFormActive: boolean = true;
  originalPrecioValue: string | null = null;
  filteredSucursal$: Observable<Sucursal[]>;
  filteredMarca$: Observable<Marca[]>;
  camposExtras: FormGroup[] = [];
  urlsImagenes: string[] = [] ;
  SucCtrl = new FormControl();
  MarcaCtrl = new FormControl();
  empleado: Empleado;
  c_Tipo_Mov: string = "SM";
  toggleChecked = false;
  cuentaExists: boolean = true;
  buttonText = 'Pagar en Efectivo';
  vlc: boolean = false;
  vc: number = 0;
IdProducto : number = 0;
body: any;
persona: any;
Saldo : number = 0;
validarCuenta: boolean = false;
Texto: string = "Registrar Factura";
TotalFinal : any ;
sumaTotal : any;
IVATotal : any;
SubTotalFinal : any;
VPersona : boolean = false;
BodyFactura : any;
  get isEdit(): boolean {

    return !!this.contactId;

  }

  applyMarginBottom = false;
  applyMarginTop = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.applyMarginBottom = window.innerWidth < 768;
    this.applyMarginTop = window.innerWidth >= 768;
  }


  constructor(@Inject(MAT_DIALOG_DATA) public contactId:FacturaCompraData['c_Id_Factura'],
              private dialogRef: MatDialogRef<FacturaCompraEditComponent>,
              private fb: UntypedFormBuilder,
              private cdr: ChangeDetectorRef,
              private ngZone: NgZone,
              private snackBar: MatSnackBar,
              private catalogoService: CatalogoService,
              private ProductoService:ProductoService,
              public dialog: MatDialog,
              private FormBuilder: FormBuilder,
              private CS: CrearUsuariosService,
              private SerieFacturaService: SerieFacturaService,
              private FacturaService: FacturaService,
              private router: Router,
              private tokenService: TokenService,
              private transferenciaService: TranferenciaService,
           
             ) { 

              console.log(this.contactId);
              const token = localStorage.getItem("token"); 

              const decodedToken: any = jwt_decode(token);

              const idUsuario = decodedToken.IdUsuario;
              const idSucursal = decodedToken.IdSucursal;

              this.Id_Sucursal = idSucursal;

              this.Id_Usuario = idUsuario;

              this.form = this.fb.group({
                c_Id_Serie : [],
                c_Id_Producto: [],
                c_Nombre_Producto: ["",Validators.compose([
                  Validators.required,
                  Validators.minLength(1),
                  Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
                ])],
                c_Id_Marca:[],
                c_Id_Sucursal:[],
                c_Id_Categoria:[],
                c_Stock_Disponible:[],
                c_Precio_Compra:[],
                c_Precio_Venta:[],
                c_Cantidad:[,Validators.required],
                c_Img_Base: ["0"],
                c_Precio: ['0.00', [Validators.required]],
                Razon: [""],
                c_Usuario_CoM: this.Id_Usuario,

              });

              this.registerForm.get('c_Id_Producto')?.reset();
              this.registerForm.get('c_Id_Producto')?.disable();

                this.agregarCampo();
                this.Campo();


             }

             get Servicio(){
              return this.registerForm.get('campo') as FormArray;
            }
          
            registerForm = this.FormBuilder.group({
              c_Id_Serie:[],
              c_Id_Producto: [],
              c_Cantidad: [],
              c_Saldo: [],
              c_Tipo_Cuenta: [],
              c_Id_Persona : [],
              
              campo: this.FormBuilder.array([])
            });

            agregarCampo(){
           
              this.registerForm
              .get("c_Cantidad")
              .valueChanges.subscribe((newValue) => {

                if(newValue >0){
                  
                  this.registerForm.get('c_Id_Producto')?.reset();
                  this.registerForm.get('c_Id_Producto')?.enable();
                }else{
                 
                  this.registerForm.get('c_Id_Producto')?.reset();
                  this.registerForm.get('c_Id_Producto')?.disable();  
                 
                }

              });

              this.registerForm
              .get("c_Id_Producto")
              .valueChanges.subscribe((newValue) => {
               if(newValue != undefined){
                this.ProductoService.getProductoFacturacionById(newValue).subscribe(
                  (data: any) => {
                    if(this.vc == 1){
                      this.vc = 2;
                      this.removerCampo(0);
                    }
                    this.vc++;
                    this.ValidarBoton = true;
                    this.arrayIndiceProductos.forEach(([posicion, idProducto]) => {
                     
                     // const posicionActual = posicion; 
                      
                      if(newValue == idProducto){
                        
                       this.IdProducto = idProducto;
                        this.snackBar.open("El producto ya ha sido agregado", "Cerrar", {
                          duration: 5000,
                          panelClass: ["red-snackbar"],
                        });
                       
                      }

                    });
                      console.log(this.IdProducto);
                     if(this.IdProducto != newValue)
                     {
                  
                       this.arrayIndiceProductos.push([this.posicionActual, newValue]);
                       this.posicionActual++;

                      

                       const Cantidad = this.registerForm.get("c_Cantidad").value;
                       const IVA = (data.response.c_Precio_Venta * Cantidad) * 0.12;
                       const C_IVA = parseFloat(IVA.toFixed(2)); // Convertir a número con dos decimales
                       const s: number =  (data.response.c_Precio_Venta * Cantidad) - C_IVA;
                       const C_SubTotal = parseFloat(s.toFixed(2)); 
                       const C_Total = data.response.c_Precio_Venta * Cantidad;
                      // this.verificarTotal(); 
                       this.urlsImagenes = [...this.urlsImagenes, data.response.c_Url_IMG];
                      

                       const FormGroup  = this.FormBuilder.group({
                         c_Id_Persona: this.registerForm.get("c_Id_Persona").value,
                         c_Id_Producto: data.response.c_Id_Producto,
                         c_Img_Base: data.response.c_Url_IMG,
                         c_Nombre_Producto: data.response.c_Nombre_Producto,
                         c_Cantidad: Cantidad,
                         c_Precio_Venta: data.response.c_Precio_Venta,
                         c_SubTotal: C_SubTotal,
                         c_IVA: C_IVA,
                         c_Total: (data.response.c_Precio_Venta*Cantidad),
                         c_Usuario_Creacion: this.Id_Usuario,
                       });

                       this.Servicio.push(FormGroup);
                     }

                  },
                  (error) => {
                    console.error('Error fetching employee data:', error);
                  }
                );
               }
              
               
              });


            }



            Campo(){
              if(this.vc <= 0){
                this.vc =1;
                console.log(this.vc);
                const FormGroup  = this.FormBuilder.group({
                  c_Img_Base: this.imagenPorDefectoURL,
                  c_Nombre_Producto: "Producto",
                  c_Cantidad: [],
                  c_Precio_Venta: [],
                  c_SubTotal: [],
                  c_IVA: [],
                  c_Total: [],
                  c_Usuario_Creacion: this.Id_Usuario,
                });
                
                this.Servicio.push(FormGroup);
              }
            }


            actualizarCalculos(formIndex: number) {

              const formGroup = this.registerForm.controls['campo'].get(formIndex.toString()) as FormGroup;
              const cantidad = formGroup.get('c_Cantidad').value;
              const precioVenta = formGroup.get('c_Precio_Venta').value;
              const iva = (precioVenta * cantidad) * 0.12;
              const C_IVA =  parseFloat(iva.toFixed(2));
              const subtotal = (precioVenta * cantidad)-C_IVA ;
              const C_SubTotal = parseFloat(subtotal.toFixed(2));
              const C_Total = precioVenta * cantidad;
              formGroup.patchValue({
                c_SubTotal: C_SubTotal,
                c_IVA: C_IVA, 
                c_Total: C_Total, 
              });
            }

            removerCampo(indice: number) {
              this.Servicio.removeAt(indice);
              this.urlsImagenes.splice(indice, 1);
              if(this.vc !=2){
               console.log(this.verificarTotal()) 
                console.log(this.vc);
                this.arrayIndiceProductos.splice(indice, 1);
              }
              this.form.get('c_Img_Base')?.setValue('');
              if (this.arrayIndiceProductos.length === 0) 
              {
                this.ValidarBoton = false;
              }else{
                this.ValidarBoton = true;
              }
            }



            onInputChange(event: any) {
              const inputValue = event.target.value;
              const numericValue = inputValue.replace(/[^0-9]/g, ''); // Elimina cualquier carácter no numérico
          
              // Actualiza el valor del campo con solo números
              this.registerForm.get('c_Cantidad')?.setValue(numericValue);
            }


  ngOnInit() {


  

    

    this.registerForm.get('c_Tipo_Cuenta')?.reset();
    this.registerForm.get('c_Tipo_Cuenta')?.disable();

    this.registerForm.get('c_Id_Serie')?.reset();
    this.registerForm.get('c_Id_Serie')?.disable();


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


    this.registerForm
    .get("c_Id_Persona")
    .valueChanges.subscribe((newValue) => {
      if(newValue != undefined){
        this.VPersona = true;
      }else{
        this.VPersona = false;
      }
      this.BuscarCliente(newValue);
    });

   


    
    this.SerieFacturaService.getSerieFacturaBySL(this.Id_Sucursal).subscribe((response: any) => {
      this.Serie = response.response;
      
      if (this.Serie.length > 0) {
        this.registerForm.patchValue({
         c_Id_Serie: this.Serie[0].c_Id_Serie,
        });
        this.SerieSeleccionada = this.Serie[0]; 
      }
    });

    this.ProductoService.getProductoById(this.contactId).subscribe()





if(this.contactId != null){
  this.valido = true;
  this.form.get('Razon')?.reset();
  this.form.get('Razon')?.disable();
  this.form.get('c_Stock_Disponible')?.reset();
  this.form.get('c_Stock_Disponible')?.disable();

 



  this.FacturaService.getDetalleFacturaById(this.contactId).subscribe((data: any) => {
    this.empleado = data;

    if (Array.isArray(data.response)) {
      // Obtén la referencia a la tabla
      const tabla = document.querySelector('#tabla-body') as HTMLTableSectionElement;

      // Limpia el contenido anterior de la tabla
      while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
      }

      // Itera a través de los objetos en 'data.response' y crea filas en la tabla
      data.response.forEach((item: any) => {
        const row = tabla.insertRow();
        row.insertCell(0).textContent = item.c_Id_Producto;
        row.insertCell(1).textContent = item.c_Nombre_Producto; // Agrega la propiedad 'c_Descripcion' si está disponible en tus datos
        row.insertCell(2).textContent = item.c_Precio;
        row.insertCell(3).textContent = item.c_Cantidad;
        row.insertCell(4).textContent = item.c_SubTotal;
        // Puedes agregar más columnas según sea necesario
      });
    } else {
      console.error('Los datos no son un array');
    }
  });




  
  
  
  }
   
    this.filteredSucursal$ = this.SucCtrl.valueChanges.pipe(
      startWith(""),
      switchMap((Sl) => this.catalogoService.getSucursal(Sl)
      ),
      map((Sl) => Sl.slice())
    );


    this.filteredMarca$ = this.MarcaCtrl.valueChanges.pipe(
      startWith(""),
      switchMap((Sl) => this.catalogoService.getMarca(Sl)
      ),
      map((Sl) => Sl.slice())
    );





 


  }

  verificarTotal(){
   
   
  
  }



  BuscarProducto(id: number ) {
   

    this.CS.getPersonaFacturacionById(id).subscribe(
      (data: any) => {

      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }



  BuscarCliente(id: number ) {
   

    this.CS.getPersonaFacturacionById(id).subscribe(
      (data: any) => {
        if(data.ok == true){
          this.Texto = "Verificar Saldo";
          this.cuentaExists = false;
          this.toggleChecked = true;
          this.buttonText = 'Pagar con Saldo';
          this.Saldo  = data.response.c_Saldo;
          this.c_Tipo_Mov ="Y"
          this.registerForm.patchValue({
            c_Saldo: data.response.c_Saldo,
            c_Tipo_Cuenta: "Cliente con Cuenta",
  
          });
        }else{
          this.Texto = "Registrar Factura";
          this.cuentaExists = true;
          this.toggleChecked = false;
          this.buttonText = 'Pagar en Efectivo';
          this.c_Tipo_Mov ="RM"
          this.registerForm.patchValue({
            
            c_Saldo: 0,
            c_Tipo_Cuenta: "Cliente sin Cuenta",
  
          });
        }
        
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );



  }

  onToggleChange(event: any): void {
    if (event.checked ) {
      this.toggleChecked = true;
      this.Texto = "Verificar Saldo";
      this.buttonText = 'Pagar con Saldo';
      this.c_Tipo_Mov ="Y"
      
    } else if (!event.checked  ) {
      this.toggleChecked = false;
      this.buttonText = 'Pagar en Efectivo';
      this.Texto = "Registrar Factura";
      this.c_Tipo_Mov ="RM"

    }

   
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
  



  openConfirmDialog() {


    
    const nombresControl = this.registerForm.get('campo') as FormGroup;
    
    nombresControl.get('c_Precio_Venta')?.enable();

    //console.log(nombresControl.value);

    this.Texto = "Verificando";
    this.valido = false;
//console.log(this.registerForm.get('campo')?.value);
    if(this.contactId != null){
      this.titulo = "¿Estás seguro que deseas actualizar el servicio?";
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
this.valido = true;
var res = 0;

      if (result != false) {
        if(this.contactId == null){
          this.valido = false;
         

        

          const productos: Producto[] = this.registerForm.get('campo')?.value as Producto[];
          this.body = {
            "c_Total": "",
          };
      
          productos.forEach((producto, index) => {
            this.body.c_Total += producto.c_Total + (index < productos.length - 1 ? ";" : "");
          });

      
          const c_Total = this.body.c_Total;
          const valoresComoCadenas = c_Total.split(';');

          this.sumaTotal = valoresComoCadenas.reduce((total, valor) => total + parseFloat(valor), 0);
          this.IVATotal = this.sumaTotal * 0.12;
          this.SubTotalFinal = this.sumaTotal - this.IVATotal;
          const saldo = this.registerForm.get('c_Saldo')?.value;
      
          if(this.sumaTotal > saldo && this.toggleChecked == true){
            this.snackBar.open("El saldo es insuficiente", "Cerrar", {
              duration: 5000,
              panelClass: ["red-snackbar"],
            });
      
            this.Texto = "Registrar Factura";
            this.buttonText = 'Pagar en Efectivo';
            this.c_Tipo_Mov ="RM"
            this.toggleChecked = false;
            this.ValidarBoton = true;
            this.valido = true;
          }else{
           if(this.toggleChecked == true ){
 
            this.c_Tipo_Mov ="Y"
            this.Texto = "Registrar Factura";
            this.buttonText = 'Pagar con Saldo';
            this.toggleChecked = true;
           }else{
            this.c_Tipo_Mov ="RM"
            this.Texto = "Registrar Factura";
            this.buttonText = 'Pagar en Efectivo';
            this.toggleChecked = true;
           }

           const c_Id_Persona = this.registerForm.get('c_Id_Persona')?.value || 0;

           const productos: Producto[] = this.registerForm.get('campo')?.value as Producto[];
           this.body = {
            "c_Id_Estado": "1",
            "c_Id_Servicio": "",
            "c_Validar": this.c_Tipo_Mov,
             "c_Id_Serie": this.registerForm.get('c_Id_Serie')?.value,
             "c_Id_Persona": c_Id_Persona,
             "c_Id_Producto": "",
             "c_Cantidad": "",
             "c_Precio": "",
             "c_SubTotal": "",
             "c_IVA": "",
             "c_Total": "",
             "c_Id_Sucursal": this.Id_Sucursal,
             "c_Usuario_Creacion": this.Id_Usuario,
           };

          

       
           productos.forEach((producto, index) => {

             this.body.c_Id_Producto += producto.c_Id_Producto + (index < productos.length - 1 ? ";" : "");
             this.body.c_Cantidad += producto.c_Cantidad + (index < productos.length - 1 ? ";" : "");
             this.body.c_Precio += producto.c_Precio_Venta + (index < productos.length - 1 ? ";" : "");
             this.body.c_SubTotal += producto.c_SubTotal + (index < productos.length - 1 ? ";" : "");
             this.body.c_IVA += producto.c_IVA + (index < productos.length - 1 ? ";" : "");
             this.body.c_Total += producto.c_Total + (index < productos.length - 1 ? ";" : "");
           });

          

           const Productos: Producto[] = this.registerForm.get('campo')?.value as Producto[];
           this.BodyFactura = {
             "c_Id_Producto": "",
             "c_Nombre_Producto": "",
             "c_Cantidad": "",
             "c_Precio": "",
             "c_SubTotal": this.SubTotalFinal,
             "c_IVA": this.IVATotal,
             "c_Total": this.sumaTotal,
             "c_Id_Sucursal": this.Id_Sucursal,
             "c_Usuario_Creacion": this.Id_Usuario,
           };

           Productos.forEach((producto, index) => {
           
            this.BodyFactura.c_Id_Producto += producto.c_Id_Producto + (index < Productos.length - 1 ? ";" : "");
            this.BodyFactura.c_Nombre_Producto += producto.c_Nombre_Producto + (index < Productos .length - 1 ? ";" : "");
            this.BodyFactura.c_Cantidad += producto.c_Cantidad + (index < Productos.length - 1 ? ";" : "");
            this.BodyFactura.c_Precio += producto.c_Precio_Venta + (index < Productos.length - 1 ? ";" : "");
          });




          const Product: Producto[] = this.registerForm.get('campo')?.value as Producto[];

          // Inicializa arreglos vacíos para los diferentes campos
          const Id_Producto: string[] = [];
          const cantidades: string[] = [];
          const precios: string[] = [];
          const nombres: string[] = [];
          const iva: string[] = [];
          const subTotal: string[] = [];
          const total: string[] = [];
          
          // Itera a través de los productos y agrega sus valores a los arreglos
          Product.forEach((producto) => {
            Id_Producto.push(producto.c_Id_Producto.toString());
            cantidades.push(producto.c_Cantidad.toString());
            precios.push(producto.c_Precio_Venta.toString());
            nombres.push(producto.c_Nombre_Producto);
            iva.push(producto.c_IVA.toString());
            subTotal.push(producto.c_SubTotal.toString());
            total.push(producto.c_Total.toString());
          });
          
          const c_Id_Producto = Id_Producto.join(';');
          const c_Cantidad = cantidades.join(';');
          const c_Precio = precios.join(';');
          const c_Nombre_Producto = nombres.join(';');
          const c_IVA = iva.join(';');
          const c_SubTotal = subTotal.join(';');
          const c_Total = total.join(';');

          const CadenaTotal = c_Total.split(';');
          const CadenaSubTotal = c_SubTotal.split(';');
          const CadenaIVA = c_IVA.split(';');

          this.sumaTotal = CadenaTotal.reduce((total, valor) => total + parseFloat(valor), 0);
          this.sumaTotal = parseFloat(this.sumaTotal.toFixed(2));
          this.IVATotal = CadenaIVA.reduce((total, valor) => total + parseFloat(valor), 0);
          this.IVATotal = parseFloat(this.IVATotal.toFixed(2));
          this.SubTotalFinal = CadenaSubTotal.reduce((total, valor) => total + parseFloat(valor), 0);
          this.SubTotalFinal = parseFloat(this.SubTotalFinal.toFixed(2));


          this.transferenciaService.RecibirDatosFactura(c_Id_Producto,c_Nombre_Producto, c_Cantidad, c_Precio, this.SubTotalFinal, this.IVATotal, this.sumaTotal);





           if(this.VPersona === true)
           {
            this.transferenciaService.VerificarPersona(this.VPersona)
            const idp = this.registerForm.get('c_Id_Persona')?.value
            this.Id_Sucursal
           const idS = this.registerForm.get('c_Id_Serie')?.value
           this.transferenciaService.RecibirFacturaCliente(idS,this.Id_Sucursal,idp)
  
         
 
 
           }else{
            this.transferenciaService.VerificarPersona(this.VPersona)
            const idp = this.registerForm.get('c_Id_Persona')?.value
            this.Id_Sucursal
           const idS = this.registerForm.get('c_Id_Serie')?.value
           
           this.transferenciaService.RecibirFacturaCF(idS,this.Id_Sucursal)
        

           }
          




         
           this.transferenciaService.validarFactura = true;
           this.transferenciaService.RecibirBody(this.body)
          this.dialogRef.close();
          this.router.navigate(['/pages/FacturaVenta']);
        
  
          }
        

        }else{
          this.valido = false;
                const  C_Tipo_Mov = this.c_Tipo_Mov;
                 const C_Id_Producto = this.form.get("c_Id_Producto").value;
                 const C_Nombre_Producto = this.form.get("c_Nombre_Producto").value;
                 const C_Id_Marca = this.form.get("c_Id_Marca").value;
                 const C_Id_Sucursal = this.form.get("c_Id_Sucursal").value;
                 const C_Id_Categoria = this.form.get("c_Id_Categoria").value;
                const C_Stock_Disponible = this.form.get("c_Stock_Disponible").value;
                const C_Precio_Compra = this.form.get("c_Precio_Compra").value;
                  const C_Precio_Venta = this.form.get("c_Precio_Venta").value;
                  const C_Cantidad = this.form.get("c_Cantidad").value;
                 const C_Img_Base = this.form.get("c_Img_Base").value;
                 const C_Descripcion = result
                 const C_Usuario_Modificacion = this.form.get("c_Usuario_CoM").value;

                 this.ProductoService.putProducto(
                    C_Tipo_Mov,
                    C_Id_Producto,
                    C_Nombre_Producto,
                    C_Id_Marca,
                    C_Id_Sucursal,
                    C_Id_Categoria,
                    C_Stock_Disponible,
                    C_Precio_Compra,
                    C_Precio_Venta,
                    C_Cantidad,
                    C_Img_Base,
                    C_Descripcion,
                    C_Usuario_Modificacion
                   ).subscribe(
                   (response) => {
                     if (response.ok) {
                      this.valido = true;
                       //this.lm.obtenerTablaData();
                       this.dialogRef.close();
                       location.reload();
                       this.snackBar.open(response.transaccion_Mensaje, "Cerrar", {
                         duration: 5000,
                         panelClass: ["success-snackbar"], 
                       });
             
                     } else {
                      this.valido = true;
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
