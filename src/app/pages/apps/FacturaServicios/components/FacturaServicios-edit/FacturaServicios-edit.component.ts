import { Component,ChangeDetectionStrategy,ChangeDetectorRef,NgZone, Inject, OnInit,HostListener  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import jwt_decode from "jwt-decode";
import { UntypedFormBuilder,FormControl,FormGroup, Validators,UntypedFormGroup, ReactiveFormsModule, FormArray, FormBuilder,AbstractControl,UntypedFormControl } from '@angular/forms';
import { FacturaServiciosData } from '../../interfaces/FacturaServicios.interface';
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
import {ServicioService} from 'src/app/Service/Servicio.service'; 
import { ThisReceiver } from '@angular/compiler';


export let contactIdCounter = 50;


interface Producto {
  c_Nombre_Producto: string;
  c_Id_Servicio: string;
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
  c_Id_Servicio: string;
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


export interface Servicios {
  Id: string;
  name: string;   
  Url_IMG: string;
}

export interface FacturaData {
  c_Url_IMG: string;
  c_Id_Servicio: number;
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
  selector: 'vex-contacts-edit',
  templateUrl: './FacturaServicios-edit.component.html',
  styleUrls: ['./FacturaServicios-edit.component.scss']
})
export class FacturaServiciosEditComponent implements OnInit {

  c_nombre: string[] = [];
  c_Img_Base: string[] = [];
  C_ArrayCampos: string[] = [];
  generos: any[];
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
  ServiciosCtrl = new UntypedFormControl();
  filteredFacturacion$: Observable<Facturacion[]>;
  filteredServicios$: Observable<Servicios[]>;
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
  camposExtras: FormGroup[] = [];
  urlsImagenes: string[] = [] ;
  SucCtrl = new FormControl();
  MarcaCtrl = new FormControl();
  empleado: Empleado;
  c_Tipo_Mov: string = "SM";
  toggleChecked = false;
  CCliente = false
  VCliente = false;
  CCTexto: string = "Consumidor Final";
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

DeptoCtrl = new FormControl();
MunCtrl = new FormControl();

filteredDepartamento$: Observable<Departamento[]>;
filteredMunicipio$: Observable<Municipio[]>;

  maxDate: Date; 
  minDate: Date;
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


  constructor(@Inject(MAT_DIALOG_DATA) public contactId:FacturaServiciosData['c_Id_Factura'],
              private dialogRef: MatDialogRef<FacturaServiciosEditComponent>,
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
              private ServicioService: ServicioService,
           
             ) { 

              this.maxDate = new Date();
              this.minDate = new Date();
              this.minDate.setFullYear(this.minDate.getFullYear() - 100);
              this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

              console.log(this.contactId);
              const token = localStorage.getItem("token"); 

              const decodedToken: any = jwt_decode(token);

              const idUsuario = decodedToken.IdUsuario;
              const idSucursal = decodedToken.IdSucursal;

              this.Id_Sucursal = idSucursal;

              this.Id_Usuario = idUsuario;

              this.form = this.fb.group({
                c_Id_Serie : [],
                c_Id_Servicio: [],
                c_Nombre_Producto: ["",Validators.compose([
                  Validators.required,
                  Validators.minLength(1),
                  Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
                ])],

                c_Nombres: ["",Validators.compose([
                  Validators.required,
                  Validators.minLength(1),
                  Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
                ])],

                c_Apellidos: ["",Validators.compose([
                  Validators.required,
                  Validators.minLength(1),
                  Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
                ])],
                c_NIT: ["", Validators.compose([
                  Validators.minLength(8),
                  Validators.maxLength(12),
                  Validators.pattern(/^[\d-]*$/)
                ]),
                ],
                c_Direccion: ["",Validators.compose([
                  Validators.required,
                  Validators.minLength(1),
                  Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
                ])],
                c_Numero_Telefono: ["", Validators.compose([
                  Validators.required,
                  Validators.minLength(8),
                  Validators.maxLength(8),
                  Validators.pattern(/^[0-9]*$/)
                ]),],
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

              this.registerForm.get('c_Id_Servicio')?.reset();
              this.registerForm.get('c_Id_Servicio')?.disable();

                this.agregarCampo();
                this.Campo();


             }

             get Servicio(){
              return this.registerForm.get('campo') as FormArray;
            }
          
            registerForm = this.FormBuilder.group({
            
              c_Nombre_Producto: ["",Validators.compose([
                Validators.required,
                Validators.minLength(1),
                Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
              ])],

              c_Nombres: ["",Validators.compose([
                Validators.required,
                Validators.minLength(1),
                Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
              ])],

              c_Apellidos: ["",Validators.compose([
                Validators.required,
                Validators.minLength(1),
                Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
              ])],
              c_Id_Departamento:[,Validators.required],
              c_Id_Municipio:[,Validators.required],
              c_Id_Genero:[,Validators.required],
              Fecha_Nacimiento:["", [Validators.required, this.ageRangeValidator.bind(this)]],
              c_NIT: ["", Validators.compose([
                Validators.minLength(8),
                Validators.maxLength(12),
                Validators.pattern(/^[\d-]*$/)
              ]),
              ],
              c_Direccion: ["",Validators.compose([
                Validators.required,
                Validators.minLength(1),
                Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
              ])],
              c_Numero_Telefono: ["", Validators.compose([
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(8),
                Validators.pattern(/^[0-9]*$/)
              ]),],
              c_Id_Serie:[],
              c_Id_Servicio: [],
              c_Cantidad: [],
              c_Saldo: [],
              c_Tipo_Cuenta: [],
              c_Id_Persona : [],
              c_ValorB: [],
              c_Monto: [],
              
              campo: this.FormBuilder.array([])
            });

        


            agregarCampo(){
           
              this.registerForm
              .get("c_Cantidad")
              .valueChanges.subscribe((newValue) => {

                if(newValue >0){
                  
                  this.registerForm.get('c_Id_Servicio')?.reset();
                  this.registerForm.get('c_Id_Servicio')?.enable();
                }else{
                 
                  this.registerForm.get('c_Id_Servicio')?.reset();
                  this.registerForm.get('c_Id_Servicio')?.disable();  
                 
                }

              });

              this.registerForm
              .get("c_Id_Servicio")
              .valueChanges.subscribe((newValue) => {
               if(newValue != undefined){
                this.ServicioService.getMarcaById(newValue).subscribe(
                  (data: any) => {
                    if(this.vc == 1){
                      this.vc = 2;
                      this.removerCampo(0);
                    }
                    this.vc++;
                    this.ValidarBoton = true;
                    this.arrayIndiceProductos.forEach(([posicion, idServicio]) => {

                      if(newValue == idServicio){

                       this.IdProducto = idServicio;
                        this.snackBar.open("El servicio ya ha sido agregado", "Cerrar", {
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
                       const IVA = (data.response.c_Precio_Final * Cantidad) * 0.12;
                       const C_IVA = parseFloat(IVA.toFixed(2)); // Convertir a número con dos decimales
                       const s: number =  (data.response.c_Precio_Final * Cantidad) - C_IVA;
                       const C_SubTotal = parseFloat(s.toFixed(2)); 
                       const C_Total = data.response.c_Precio_Final * Cantidad;
                     
                       this.urlsImagenes = [...this.urlsImagenes, data.response.c_Url_IMG];
                      

                       const FormGroup  = this.FormBuilder.group({
                         c_Id_Persona: this.registerForm.get("c_Id_Persona").value,
                         c_Id_Servicio: data.response.c_Id_Servicio,
                         c_Img_Base: data.response.c_Url_IMG,
                         c_Nombre_Producto: data.response.c_Nombre_Servicio,
                         c_Cantidad: Cantidad,
                         c_Precio_Venta: data.response.c_Precio_Final,
                         c_SubTotal: C_SubTotal,
                         c_IVA: C_IVA,
                         c_Total: (data.response.c_Precio_Final*Cantidad),
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




ValidarFormulario(dato:any)
{
  let cont = dato.length;
   const valor = cont.split(";");
  


  if(valor.length > 0){
  // cont = cont + 1;
    this.ValidarBoton = true;

  }else{

    this.ValidarBoton = false;
  }

}



            Campo(){
              if(this.vc <= 0){
                this.vc =1;
                console.log(this.vc);
                const FormGroup  = this.FormBuilder.group({
                  c_Img_Base: this.imagenPorDefectoURL,
                  c_Nombre_Producto: "Servicio",
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

              if(cantidad.length <= 0 || precioVenta.length <= 0)
              {
                this.ValidarBoton = false;
              }else{
                this.ValidarBoton = true;
              }

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
              this.registerForm.get('c_Cantidad')?.setValue(numericValue);
            }





            onInputArrayChange(event: any, formIndex: number) {
              const formGroup = this.registerForm.controls['campo'].get(formIndex.toString()) as FormGroup;
              const inputValue = event.target.value;
              const numericValue = inputValue.replace(/[^0-9]/g, ''); 
              formGroup.patchValue({
                c_Cantidad: numericValue,
              });
            }

            onInputArrayChangeP(event: any, formIndex: number) {
              const formGroup = this.registerForm.controls['campo'].get(formIndex.toString()) as FormGroup;
              const inputValue = event.target.value;
            
              // Reemplaza todos los caracteres que no sean dígitos ni el punto decimal
              const numericValue = inputValue.replace(/[^0-9.]/g, '');
            
              // Divide el valor en partes decimal y entera
              const parts = numericValue.split('.');
              
              if (parts.length > 2 || parts[1]?.length > 2) {
                // Si hay más de un punto decimal o más de dos dígitos después del punto, no actualices el valor
                return;
              }
            
              // Formatea el valor final con un punto decimal si es necesario
              const formattedValue = parts.join('.');
            
              formGroup.patchValue({
                c_Precio_Venta: formattedValue,
              });
            }
            
            


  ngOnInit() {


  

    

    this.registerForm.get('c_Tipo_Cuenta')?.reset();
    this.registerForm.get('c_Tipo_Cuenta')?.disable();

    this.registerForm.get('c_Id_Serie')?.reset();
    this.registerForm.get('c_Id_Serie')?.disable();

 
    this.filteredDepartamento$ = this.DeptoCtrl.valueChanges.pipe(
      startWith(""),
      switchMap((states) => this.catalogoService.getDepartamentos(states)),
      map((States) => States.slice())
    );


    this.registerForm
      .get("c_Id_Departamento")
      .valueChanges.subscribe((newValue) => {
        this.filteredMunicipio$ =
          this.catalogoService.getMunicipioXDepartamentos(newValue, "");
      });




    this.filteredFacturacion$ = this.FacturacionCtrl.valueChanges.pipe(
      startWith(""),
      switchMap((states) => this.CS.getPersonaFacturacionByParametro(states)),
      map((States) =>  States.slice())
    );
  


    this.filteredServicios$ = this.ServiciosCtrl.valueChanges.pipe(
      startWith(""),
      switchMap((Id_Sucursal) => this.ServicioService.getServicios()),
      map((States) =>  States.slice())
   );


   this.catalogoService.getGenero("").subscribe((response: any) => {
    this.generos = response.response;
  });

   
    this.registerForm
    .get("c_ValorB")
    .valueChanges.subscribe((newValue) => {

      if(newValue != undefined && newValue != 33){
       
        this.VPersona = true;
        this.BuscarParametros(newValue);
      }else{
      
        this.VPersona = false;
      }
      
     
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

   // this.ProductoService.getProductoById(this.contactId).subscribe()





if(this.contactId != null){
  this.valido = true;
  this.form.get('Razon')?.reset();
  this.form.get('Razon')?.disable();
  this.form.get('c_Stock_Disponible')?.reset();
  this.form.get('c_Stock_Disponible')?.disable();

 



  this.FacturaService.getDetalleFacturaServiciosById(this.contactId).subscribe((data: any) => {
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
        row.insertCell(0).textContent = item.c_Id_Servicio;
        row.insertCell(1).textContent = item.c_Nombre_Servicio;
        row.insertCell(2).textContent = item.c_Cantidad; // Agrega la propiedad 'c_Descripcion' si está disponible en tus datos
        row.insertCell(3).textContent = item.c_Precio;
        row.insertCell(4).textContent = item.c_SubTotal;
        row.insertCell(5).textContent = item.c_IVA;
        row.insertCell(6).textContent = item.c_Total;
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


   





 


  }

  ageRangeValidator(control) {
    const selectedDate = new Date(control.value);
    if (selectedDate >= this.minDate && selectedDate <= this.maxDate) {
      return null; // La fecha está dentro del rango
    } else {
      return { ageRange: true }; // La fecha está fuera del rango
    }
  }



  BuscarCliente(id: any ) {
   

    if(id == 33){
     this.VCliente = true;
    
    }else{
      this.VCliente = false;
    }

    this.CS.getPersonaFacturacionById(id).subscribe(
      (data: any) => {
        if(data.ok == true && id != 33){
          this.Texto = "Verificar Saldo";
          this.cuentaExists = false;
          this.toggleChecked = true;
          this.buttonText = 'Pagar con Saldo';
          this.Saldo  = data.response.c_Saldo;
          this.c_Tipo_Mov ="Y"
          this.registerForm.patchValue({
            c_Saldo: data.response.c_Saldo,
            c_Tipo_Cuenta: "Cliente con Cuenta",
            c_Id_Persona: data.response.c_Id_Persona,
            c_Monto: data.response.c_MontoMax,
  
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


  
  BuscarParametros(Valor: string ) {
   
    this.filteredFacturacion$ = this.FacturacionCtrl.valueChanges.pipe(
      startWith(""),
      switchMap((states) => this.CS.getPersonaFacturacionByParametro(Valor)),
      map((States) =>  States.slice())
    );
  }

  onToggleChange(event: any): void {
    if (event.checked ) {
      this.toggleChecked = true;
      this.Texto = "Verificar Saldo";
      this.buttonText = 'Pagar con Saldo';
      this.CCTexto = "Registrar Cliente";
      this.c_Tipo_Mov ="Y"
      
    } else if (!event.checked  ) {
      this.toggleChecked = false;
      this.buttonText = 'Pagar en Efectivo';
      this.Texto = "Registrar Factura";
      this.CCTexto = "Consumidor Final"; 
      this.c_Tipo_Mov ="RM"

    }

   
  }


  Toggle(event: any): void {
    if (event.checked ) {
      this.cdr.detectChanges();
      this.CCliente = true;
      this.CCTexto = "Registrar Cliente";
      this.c_Tipo_Mov ="RM"

      
    } else if (!event.checked  ) {
      this.CCliente = false;
      this.CCTexto = "Consumidor Final"; 
      this.c_Tipo_Mov ="RM"
      this.cdr.detectChanges();
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

  if(this.registerForm.get('c_ValorB')?.value == "C/F" ){
    this.VPersona = false;
  }

    if(this.CCliente == true)
    {

      const nombresCompletos = this.registerForm.get('c_Nombres')?.value;
      const nombresSeparados = nombresCompletos.split(' ');
      
      const Primer_Nombre = nombresSeparados[0] || ''; 
      const Segundo_Nombre = nombresSeparados[1] || ''; 
      const Tercer_Nombre = nombresSeparados[2] || ''; 

      const apellidosCompletos = this.registerForm.get('c_Apellidos')?.value;
      const apellidosSeparados = apellidosCompletos.split(' ');
      
      let Primer_Apellido = '';
      let Segundo_Apellido = '';
      let Apellido_Casada = '';
      
      for (let i = 0; i < apellidosSeparados.length; i++) {
        const palabra = apellidosSeparados[i];
        if (palabra.toLowerCase() === 'de' && i < apellidosSeparados.length - 1) {
          Apellido_Casada = apellidosSeparados.slice(i).join(' ');
          break;
        } else {
          if (i === 0) {
            Primer_Apellido = palabra;
          } else if (i === 1) {
            Segundo_Apellido = palabra;
          } else {
            if (Apellido_Casada) {
              Apellido_Casada += ' ' + palabra;
            } else {
              Apellido_Casada = palabra;
            }
          }
        }
      }
      


      const C_NIT = this.registerForm.get('c_NIT')?.value;
      const C_Direccion = this.registerForm.get('c_Direccion')?.value;
      const C_Numero_Telefono = this.registerForm.get('c_Numero_Telefono')?.value;
      const C_Id_Departamento = this.registerForm.get('c_Id_Departamento')?.value;
      const C_Id_Municipio = this.registerForm.get('c_Id_Municipio')?.value;
      const C_Id_Genero = this.registerForm.get('c_Id_Genero')?.value;
      const Fecha_Nacimiento = this.registerForm.get('Fecha_Nacimiento')?.value;
      const C_Img_Base = '0';
this.CS.setCliente
(
  2,
"RM",
"1",
this.Id_Sucursal,
C_Id_Genero,
C_Id_Municipio,
Primer_Nombre,
Segundo_Nombre,
Tercer_Nombre,
Primer_Apellido,
Segundo_Apellido,
Apellido_Casada,
"",
C_NIT,
C_Direccion,
C_Numero_Telefono,
"",
"",
C_Img_Base,
"",
Fecha_Nacimiento,
this.Id_Usuario

).subscribe((data: any) => {
  if(data.ok == true){
   
    this.snackBar.open("Cliente registrado con éxito", "Cerrar", {
      duration: 5000,
      panelClass: ["green-snackbar"],
    });
    this.CCliente = false;
    this.CCTexto = "Consumidor Final"; 
    this.c_Tipo_Mov ="RM"
    console.log(data.c_Id_Persona)
    console.log(data)
    this.registerForm.patchValue({
      c_Id_Persona: data.c_Id_Persona,
      c_Tipo_Cuenta: "Cliente sin Cuenta",

    });
    this.VPersona = true;
  }else{
    this.VPersona = false;
    this.snackBar.open("Error al registrar el cliente", "Cerrar", {
      duration: 5000,
      panelClass: ["red-snackbar"],
    });
  }
});



    }
    
    const nombresControl = this.registerForm.get('campo') as FormGroup;
    
    nombresControl.get('c_Precio_Venta')?.enable();



    this.Texto = "Verificando";
    this.valido = false;

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
         // const MontoMax = this.registerForm.get('c_MontoMax')?.value;
      
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
             "c_Cantidad": "",
             "c_Precio": "",
             "c_SubTotal": "",
             "c_IVA": "",
             "c_Total": "",
             "c_Id_Sucursal": this.Id_Sucursal,
             "c_Usuario_Creacion": this.Id_Usuario,
           };

          

       
           productos.forEach((producto, index) => {

             this.body.c_Id_Servicio += producto.c_Id_Servicio + (index < productos.length - 1 ? ";" : "");
             this.body.c_Cantidad += producto.c_Cantidad + (index < productos.length - 1 ? ";" : "");
             this.body.c_Precio += producto.c_Precio_Venta + (index < productos.length - 1 ? ";" : "");
             this.body.c_SubTotal += producto.c_SubTotal + (index < productos.length - 1 ? ";" : "");
             this.body.c_IVA += producto.c_IVA + (index < productos.length - 1 ? ";" : "");
             this.body.c_Total += producto.c_Total + (index < productos.length - 1 ? ";" : "");
           });

          

           const Productos: Producto[] = this.registerForm.get('campo')?.value as Producto[];
           this.BodyFactura = {
             "c_Id_Servicio": "",
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
            this.BodyFactura.c_Id_Servicio += producto.c_Id_Servicio + (index < Productos.length - 1 ? ";" : "");
            this.BodyFactura.c_Nombre_Producto += producto.c_Nombre_Producto + (index < Productos .length - 1 ? ";" : "");
            this.BodyFactura.c_Cantidad += producto.c_Cantidad + (index < Productos.length - 1 ? ";" : "");
            this.BodyFactura.c_Precio += producto.c_Precio_Venta + (index < Productos.length - 1 ? ";" : "");
          });

          const Product: Producto[] = this.registerForm.get('campo')?.value as Producto[];

          // Inicializa arreglos vacíos para los diferentes campos
          const Id_Servicio: string[] = [];
          const cantidades: string[] = [];
          const precios: string[] = [];
          const nombres: string[] = [];
          const iva: string[] = [];
          const subTotal: string[] = [];
          const total: string[] = [];
          // Itera a través de los productos y agrega sus valores a los arreglos
          Product.forEach((producto) => {
            Id_Servicio.push(producto.c_Id_Servicio.toString());
            cantidades.push(producto.c_Cantidad.toString());
            precios.push(producto.c_Precio_Venta.toString());
            nombres.push(producto.c_Nombre_Producto);
            iva.push(producto.c_IVA.toString());
            subTotal.push(producto.c_SubTotal.toString());
            total.push(producto.c_Total.toString());
          });
          const c_Id_Servicio = Id_Servicio.join(';');
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


          this.transferenciaService.RecibirDatosFactura(c_Id_Servicio,c_Nombre_Producto, c_Cantidad, c_Precio, this.SubTotalFinal, this.IVATotal, this.sumaTotal);





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
          this.router.navigate(['/pages/FacturaServicios']);
        
  
          }
        

        }
      }
      }
    );

    
  }
}
