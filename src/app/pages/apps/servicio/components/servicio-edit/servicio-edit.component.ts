import { Component,ChangeDetectionStrategy,ChangeDetectorRef,NgZone, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import jwt_decode from "jwt-decode";
import { UntypedFormBuilder,FormControl,FormGroup, Validators,UntypedFormGroup, ReactiveFormsModule, FormArray, FormBuilder,AbstractControl } from '@angular/forms';
import { ServicioData } from '../../interfaces/servicio.interface';
import { Empleado } from '../../../../../../@vex/interfaces/Empleado.interface';
import { CatalogoService } from "../../../../../Service/Catalogo.service";
import { EMPTY, Observable, combineLatest, of } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { ServicioService } from 'src/app/Service/Servicio.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { concatMap, filter } from 'rxjs/operators';
import { from } from 'rxjs';


export let contactIdCounter = 50;





@Component({
  selector: 'vex-contacts-edit',
  templateUrl: './servicio-edit.component.html',
  styleUrls: ['./servicio-edit.component.scss']
})
export class ServicioEditComponent implements OnInit {

  c_nombre: string[] = [];
  c_Img_Base: string[] = [];
  C_ArrayCampos: string[] = [];
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

  camposExtras: FormGroup[] = [];
  urlsImagenes: string[] = [] ;

  empleado: Empleado;

  get isEdit(): boolean {

    return !!this.contactId;

  }




  constructor(@Inject(MAT_DIALOG_DATA) public contactId:ServicioData['c_Id_Servicio'],
              private dialogRef: MatDialogRef<ServicioEditComponent>,
              private fb: UntypedFormBuilder,
              private cdr: ChangeDetectorRef,
              private ngZone: NgZone,
              private snackBar: MatSnackBar,
              private ServicioService:ServicioService,
              public dialog: MatDialog,
              private FormBuilder: FormBuilder,
             ) { 
              const token = localStorage.getItem("token"); 

              const decodedToken: any = jwt_decode(token);

              const idUsuario = decodedToken.IdUsuario;

              this.Id_Usuario = idUsuario;

              this.form = this.fb.group({
                
                c_Nombre_Servicio: ["",Validators.compose([
                  Validators.required,
                  Validators.minLength(1),
                  Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/),
                  Validators.maxLength(50)
                ])],
                c_Img_Base: ["0"],
                c_Id_Servicio: [],
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



            // formatearPrecioSet() {
            //   const campoArray = this.registerForm.get('campo') as FormArray;
            
            //   campoArray.controls.forEach((campoControl: FormGroup) => {
            //     const c_PrecioControl = campoControl.get('c_Precio');
                
            //     if (c_PrecioControl.value !== undefined && c_PrecioControl.value !== null) {
            //       let precioString = c_PrecioControl.value.toString();
            //       const tienePuntoOriginal = precioString.includes('.');
            //       const posicionPuntoOriginal = precioString.indexOf('.');
                  
            //       // Elimina cualquier caracter no numérico y asegura que solo haya un punto decimal
            //       precioString = precioString.replace(/[^\d.]/g, '');
            //       const precioParts = precioString.split('.');
            
            //       if (precioString === '') {
            //         precioString = '0.00';
            //       } else if (precioParts.length === 1) {
            //         precioString = `${precioParts[0]}.00`;
            //       } else if (precioParts.length === 2 && precioParts[1].length === 1) {
            //         precioString = `${precioParts[0]}.${precioParts[1]}0`;
            //       }
            
            //       // Vuelve a colocar el punto en la posición original si estaba presente
            //       if (tienePuntoOriginal) {
            //         const parteEntera = precioString.substring(0, posicionPuntoOriginal);
            //         const parteDecimal = precioString.substring(posicionPuntoOriginal);
            //         precioString = `${parteEntera}.${parteDecimal}`;
            //       }
                  
            //       c_PrecioControl.setValue(precioString);
            //     }
            //   });
            // }
            

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
            


            // formatearPrecioSet() {
            //   const campoArray = this.registerForm.get('campo') as FormArray;
            
            //   campoArray.controls.forEach((campoControl: FormGroup) => {
            //     const c_PrecioControl = campoControl.get('c_Precio');
                
                
            //     if (c_PrecioControl.value !== undefined && c_PrecioControl.value !== null) {
            //       let precioString = c_PrecioControl.value.toString();
            //       const precioParts = precioString.split('.');
            
            //       if (precioString === '') {
            //         precioString = '0.00';
            //       } else if (precioParts.length === 1) {
            //         precioString = `${precioParts[0]}.00`;
            //       } else if (precioParts.length === 2 && precioParts[1].length === 1) {
            //         precioString = `${precioParts[0]}.${precioParts[1]}0`;
            //       }
                
            //       c_PrecioControl.setValue(precioString);
            //     }
            //   });
            // }
            

            // formatearPrecioSet() {
            //   const c_PrecioControl = this.registerForm.get('campo.c_Precio');
            //   let precioString = c_PrecioControl.value ? c_PrecioControl.value.toString() : '';
            
            //   // Elimina cualquier caracter no numérico y asegura que solo haya un punto decimal
            //   precioString = precioString.replace(/[^\d.]/g, '');
            //   const precioParts = precioString.split('.');
            
             
           
            




             get Servicio(){
              return this.registerForm.get('campo') as FormArray;
            }
          
            registerForm = this.FormBuilder.group({
              campo: this.FormBuilder.array([])
            });

            agregarCampo(){
              const FormGroup  = this.FormBuilder.group({
                c_Img_Base: '0',
                c_Nombre_Servicio: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/), Validators.minLength(4), Validators.maxLength(50)]],
                c_Precio: ['', [Validators.required, this.precioValidator]],
                c_Usuario_Creacion: this.Id_Usuario,
              });
             
              
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


    this.ServicioService.getMarcaById(this.contactId).subscribe(
      (data: any) => {
       // console.log(data.response);
        this.empleado = data;
        this.form.patchValue({
          Nombre: "Actualizar Servicio",
          c_Id_Servicio: data.response.c_Id_Servicio,
          c_Nombre_Servicio: data.response.c_Nombre_Servicio,
          c_Precio: data.response.c_Precio_Final,
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
   


   this.ngZone.run(() => {
          // this.form.get("c_Usuario_CoM")?.setValue(this.Id_Usuario);
          // const rolesSistemaSeleccionados = this.form.get("c_ID_ROL").value as string[];
          // const rolesEnFormatoString = rolesSistemaSeleccionados.map(num => num.toString());
          // this.form.get("c_ID_ROL")?.patchValue(rolesEnFormatoString); 
        });


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
          console.log(formData);
          from(formData).pipe( 
            concatMap(element => this.ServicioService.setServicio(element)
            
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
              }
                if(response.ok === false){
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
                 const C_Id_Servicio = this.form.get("c_Id_Servicio").value;
                 const C_Nombre_Servicio = this.form.get("c_Nombre_Servicio").value;
                 const C_Precio = this.form.get("c_Precio").value;
      
                 const C_Img_Base = this.form.get("c_Img_Base").value;
                 const C_Descripcion = result
             
                 const c_Usuario_Modificacion = this.form.get("c_Usuario_CoM").value;
             
              
               
                 this.ServicioService.putServicio(
                   C_Id_Servicio,
                   C_Nombre_Servicio,
                   C_Img_Base,
                   C_Descripcion,
                   c_Usuario_Modificacion,
                   C_Precio
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
