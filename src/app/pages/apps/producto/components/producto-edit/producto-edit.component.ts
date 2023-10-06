import { Component,ChangeDetectionStrategy,ChangeDetectorRef,NgZone, Inject, OnInit,HostListener  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import jwt_decode from "jwt-decode";
import { UntypedFormBuilder,FormControl,FormGroup, Validators,UntypedFormGroup, ReactiveFormsModule, FormArray, FormBuilder,AbstractControl } from '@angular/forms';
import { ProductoData } from '../../interfaces/producto.interface';
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


export let contactIdCounter = 50;




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
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.scss']
})
export class ProductoEditComponent implements OnInit {

  c_nombre: string[] = [];
  c_Img_Base: string[] = [];
  C_ArrayCampos: string[] = [];
  Categoria: any[];
  imagen: string = "";
  Id_Usuario: string = "";
  Id_Sucursal: string = "";
  titulo: string = "";
  valido: boolean = true;
  razon: string = "";
verificar: boolean = false;
ancho: string = "15rem";
largo: string = "25rem";
  data: any;
  form: UntypedFormGroup ; 
  validos: boolean = false;
  mostrarCampoTexto = false;

  selectedImage: File | null = null;
  selectedImageURL: string | ArrayBuffer | null =
    "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Servicios.jpg";


    imagenPorDefectoURL: string = 'https://img.srvcentral.com/Sistema/ImagenPorDefecto/Servicios.jpg';


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
  buttonText = 'Sumar';
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


  constructor(@Inject(MAT_DIALOG_DATA) public contactId:ProductoData['c_Id_Producto'],
              private dialogRef: MatDialogRef<ProductoEditComponent>,
              private fb: UntypedFormBuilder,
              private cdr: ChangeDetectorRef,
              private ngZone: NgZone,
              private snackBar: MatSnackBar,
              private catalogoService: CatalogoService,
              private ProductoService:ProductoService,
              public dialog: MatDialog,
              private FormBuilder: FormBuilder,
             ) { 

              console.log(this.contactId);
              const token = localStorage.getItem("token"); 

              const decodedToken: any = jwt_decode(token);

              const idUsuario = decodedToken.IdUsuario;
              const idSucursal = decodedToken.IdSucursal;

              this.Id_Sucursal = idSucursal;

              this.Id_Usuario = idUsuario;

              this.form = this.fb.group({
                
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
                c_Cantidad:[0],
                c_Img_Base: ["0"],
                c_Precio: ['0.00', [Validators.required, this.precioValidator]],
                Razon: [""],
                c_Usuario_CoM: this.Id_Usuario,

              });

            

                this.agregarCampo();

        
             }




        

            precioValidator(control: AbstractControl): { [key: string]: any } | null {
              const precio = control.value;
            
              if (precio === null || precio === '') {
                return null; // La validación pasa si el campo está vacío o nulo
              }
            
              const precioPattern = /^\d+(\.\d{1,2})?$/; // Expresión regular para validar números enteros y decimales con hasta 2 decimales
            
              if (!precioPattern.test(precio)) {
                return { 'precioInvalido': true };
              }
            
              return null; // La validación pasa
            }
            
    
            
            formatearPrecio() {
              let c_PrecioControl = this.form.get('c_Precio');
              let precioString = c_PrecioControl.value ? c_PrecioControl.value.toString() : '';
          
              // Elimina cualquier caracter no numérico y asegura que solo haya un punto decimal
              precioString = precioString.replace(/[^\d.]/g, '');
              const precioParts = precioString.split('.');
              if (precioString === '') {
                precioString = '0.00';
               
              }else
               if (precioParts.length === 1) {
                precioString = `${precioParts[0]}.00`;
              } else if (precioParts.length === 2 && precioParts[1].length === 1) {
               
                precioString = `${precioParts[0]}.${precioParts[1]}0`;
              }

              c_PrecioControl.setValue(precioString);
            }



            formatearPrecioSet() {
              const campoArray = this.registerForm.get('campo') as FormArray;
          
              campoArray.controls.forEach((campoControl: FormGroup) => {
                const c_PrecioControl = campoControl.get('c_Precio');
          
                if (c_PrecioControl.value !== undefined && c_PrecioControl.value !== null) {
                  let precioString = c_PrecioControl.value.toString();
                  let Precio = c_PrecioControl.value.toString();
                  
                  // Verificar si se ha eliminado el punto decimal sin borrar los decimales
                  if (this.originalPrecioValue && precioString.indexOf('.') === -1 && precioString !== '') {
                  console.log(this.originalPrecioValue);
                    precioString = this.originalPrecioValue;
                  }
          
                  // Elimina cualquier caracter no numérico y asegura que solo haya un punto decimal
                  precioString = precioString.replace(/[^\d.]/g, '');
                  const precioParts = precioString.split('.');
                  const PrecioParts = Precio.split('.');
          
                  if (precioString === '') {
                    console.log('a',Precio);
                    precioString = '0.00';
                  } else if (precioParts.length === 1 ) {
                    
                    precioString = `${precioParts[0]}.00`;
                    console.log('aqui');
                  } else if (precioParts.length === 2 && precioParts[1].length === 1) {
                    precioString = `${precioParts[0]}.${precioParts[1]}0`;
                    console.log('aca');
                  }  
                   
                  
          
                  // Actualizar el valor original después del formateo
                  
                  if(this.originalPrecioValue == '0.00'){

                    console.log('aca');
                    c_PrecioControl.setValue(Precio);
                  }else{
                    console.log('aqui');
                    c_PrecioControl.setValue(precioString);
                  }

                  this.originalPrecioValue = precioString;
                  
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
                c_Id_Marca: ['', [Validators.required]],
                c_Id_Categoria: ['', [Validators.required]],
                c_Stock_Disponible: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
                c_Precio_Compra: ['', [Validators.required, this.precioValidator]],
                c_Precio_Venta: ['', [Validators.required, this.precioValidator]],
              c_Id_Sucursal: this.Id_Sucursal,
                c_Usuario_Creacion: this.Id_Usuario,
              });
             
              // c_Id_Producto: [],
              // c_Nombre_Producto: ["",Validators.compose([
              //   Validators.required,
              //   Validators.minLength(1),
              //   Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
              // ])],
              // c_Id_Marca:[],
              // c_Id_Sucursal:[],
              // c_Id_Categoria:[],
              // c_Stock_Disponible:[],
              // c_Precio_Compra:[],
              // c_Precio_Venta:[],
              // c_Cantidad:[],
              // c_Img_Base: ["0"],
              // c_Precio: ['0.00', [Validators.required, this.precioValidator]],
              // Razon: [""],
              // c_Usuario_CoM: this.Id_Usuario,
              
              this.Servicio.push(FormGroup);
            }
          
            removerCampo(indice: number) {
              this.Servicio.removeAt(indice);
              this.urlsImagenes.splice(indice, 1);

              this.form.get('c_Img_Base')?.setValue('');

            }


  ngOnInit() {







if(this.contactId != null){
  this.valido = true;
  this.form.get('Razon')?.reset();
  this.form.get('Razon')?.disable();
  this.form.get('c_Stock_Disponible')?.reset();
  this.form.get('c_Stock_Disponible')?.disable();


    this.ProductoService.getProductoById(this.contactId).subscribe(
      (data: any) => {
       // console.log(data.response);
        this.empleado = data;
        this.form.patchValue({
          Nombre: "Actualizar Servicio",
          c_Id_Producto: data.response.c_Id_Producto,
          c_Id_Marca: data.response.c_Id_Marca,
          c_Id_Sucursal: data.response.c_Id_Sucursal,
          c_Id_Categoria: data.response.c_Id_Categoria,
          c_Nombre_Producto: data.response.c_Nombre_Producto,
          c_Stock_Disponible: data.response.c_Stock_Disponible,
          c_Precio_Compra: data.response.c_Precio_Compra,
          c_Precio_Venta: data.response.c_Precio_Venta,
          Razon: data.response.c_Descripcion,
        }

          );
        this.selectedImageURL = data.response.c_Url_IMG ? `${data.response.c_Url_IMG}` : "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Servicios.jpg";
        this.ngZone.run(() => {
          this.form.get('c_Img_Base')?.setValue(data.response.c_Url_IMG);
        });
        this.cdr.detectChanges();

      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
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

    this.catalogoService.getCategoria("").subscribe((response: any) => {
      this.Categoria = response.response;
    });



   this.ngZone.run(() => {
          // this.form.get("c_Usuario_CoM")?.setValue(this.Id_Usuario);
          // const rolesSistemaSeleccionados = this.form.get("c_ID_ROL").value as string[];
          // const rolesEnFormatoString = rolesSistemaSeleccionados.map(num => num.toString());
          // this.form.get("c_ID_ROL")?.patchValue(rolesEnFormatoString); 
        });


  }



  onToggleChange(event: any): void {
    this.toggleChecked = !event.checked;
    this.buttonText = this.toggleChecked ? 'Restar' : 'Sumar';
    if (event.checked ) {
      this.c_Tipo_Mov ="SM"
      
    } else if (!event.checked  ) {
      this.c_Tipo_Mov ="RM"

    }

    console.log(this.c_Tipo_Mov)
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

var res = 0;

      if (result != false) {
        if(this.contactId == null){
          this.valido = false;
          const formData = this.registerForm.get('campo')?.value;
          from(formData).pipe(
            concatMap(element => this.ProductoService.setProducto(element)
            
            ),
            
            filter(response => response.transaccion_Estado === 0 && response.ok === true)
          ).subscribe(
            response => {
            res = res+1
            
              if(response.ok === true && res === formData.length){
                this.valido = true;
                this.snackBar.open(response.transaccion_Mensaje, 'Cerrar', {
                  duration: 5000,
                  panelClass: ['success-snackbar'],
                });
                this.dialogRef.close();
             
                location.reload();
              }else  if(response.ok === false){
                this.valido = true;
                this.snackBar.open(response.transaccion_Mensaje, 'Cerrar', {
                  duration: 5000,
                  panelClass: ['red-snackbar'],
                });
              }
           
            },
            error => {
              this.valido = true;
              this.snackBar.open('Error: ' + error.message, 'Cerrar', {
                duration: 10000,
                panelClass: ['red-snackbar'],
              });
            }
          );

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
