import { Component,ChangeDetectionStrategy,ChangeDetectorRef,NgZone, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import jwt_decode from "jwt-decode";
import { UntypedFormBuilder,FormControl,FormGroup, Validators,UntypedFormGroup, ReactiveFormsModule, FormArray, FormBuilder } from '@angular/forms';
import { FacturaData } from '../../interfaces/Factura.interface';
import { Empleado } from '../../../../../../@vex/interfaces/Empleado.interface';
import { CatalogoService } from "../../../../../Service/Catalogo.service";
import { Observable, combineLatest, of } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { CategoriaService } from 'src/app/Service/Categoria.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { concatMap, filter } from 'rxjs/operators';
import { from } from 'rxjs';


export let contactIdCounter = 50;





@Component({
  selector: 'vex-contacts-edit',
  templateUrl: './Factura-edit.component.html',
  styleUrls: ['./Factura-edit.component.scss']
})
export class FacturaEditComponent implements OnInit {

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
    "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Marca.jpg";


    imagenPorDefectoURL: string = 'https://img.srvcentral.com/Sistema/ImagenPorDefecto/Marca.jpg';


  isFormActive: boolean = true;
 
  camposExtras: FormGroup[] = [];
  urlsImagenes: string[] = [] ;

  empleado: Empleado;

  get isEdit(): boolean {

    return !!this.contactId;

  }




  constructor(@Inject(MAT_DIALOG_DATA) public contactId:FacturaData['c_Id_Categoria'],
              private dialogRef: MatDialogRef<FacturaEditComponent>,
              private fb: UntypedFormBuilder,
              private cdr: ChangeDetectorRef,
              private ngZone: NgZone,
              private snackBar: MatSnackBar,
              private CategoriaService:CategoriaService,
              public dialog: MatDialog,
              private FormBuilder: FormBuilder,
             ) { 
console.log(this.contactId)

              const token = localStorage.getItem("token"); 

              const decodedToken: any = jwt_decode(token);

              const idUsuario = decodedToken.IdUsuario;

              this.Id_Usuario = idUsuario;

              this.form = this.fb.group({
                c_Id_Categoria: [],
                c_Nombre_Categoria: ["",Validators.compose([
                  Validators.required,
                  Validators.minLength(1),
                  Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
                ])],
                Razon: [""],
                c_Usuario_CoM: this.Id_Usuario,

              });

            

                this.agregarCampo();

        
             }


             get Categoria(){
              return this.registerForm.get('campo') as FormArray;
            }
          
            registerForm = this.FormBuilder.group({
              campo: this.FormBuilder.array([])
            });

            agregarCampo(){
              const FormGroup  = this.FormBuilder.group({
                c_Nombre_Categoria: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/), Validators.minLength(4), Validators.maxLength(24)]],
                c_Usuario_Creacion: this.Id_Usuario,
              });
             
              
              this.Categoria.push(FormGroup);
            }
          
            removerCampo(indice: number) {
              this.Categoria.removeAt(indice);
            }


  ngOnInit() {


    if(this.contactId == null){
      this.form.patchValue({
        Nombre: "Registrar Categoria",
        c_Usuario_CoM: this.Id_Usuario,
      });
      this.cdr.detectChanges();
    }




if(this.contactId != null){
  this.valido = true;
  this.form.get('Razon')?.reset();
  this.form.get('Razon')?.disable();


    this.CategoriaService.getCategoriaById(this.contactId).subscribe(
      (data: any) => {
       // console.log(data.response);
        this.empleado = data;
        this.form.patchValue({
          Nombre: "Actualizar Marca",
          c_Id_Categoria: data.response.c_Id_Marca,
          c_Nombre_Categoria: data.response.c_Nombre_Categoria,
          Razon: data.response.c_Descripcion,
        }

          );
       

      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
    }
   




  }









  openConfirmDialog() {

   
    










    if(this.contactId != null){
      this.titulo = "¿Estás seguro que deseas actualizar la marca?";
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
            concatMap(element => this.CategoriaService.setCategoria(element)
            
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
               const C_Id_Categoria = this.form.get("c_Id_Marca").value;
                 const C_Nombre_Categoria = this.form.get("c_Nombre").value;
                 const C_Descripcion = result
                 const c_Usuario_Modificacion = this.form.get("c_Usuario_CoM").value;

                 this.CategoriaService.putCategoria(
                  C_Id_Categoria,
                  C_Nombre_Categoria,
                   C_Descripcion,
                   c_Usuario_Modificacion
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
