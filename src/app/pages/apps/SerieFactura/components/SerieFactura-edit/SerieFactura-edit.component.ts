import { Component,ChangeDetectionStrategy,ChangeDetectorRef,NgZone, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import jwt_decode from "jwt-decode";
import { UntypedFormBuilder,FormControl,FormGroup, Validators,UntypedFormGroup, ReactiveFormsModule, FormArray, FormBuilder } from '@angular/forms';
import { SerieFacturaData } from '../../interfaces/SerieFactura.interface';
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
import { SerieFacturaService } from 'src/app/Service/SerieFactura.service';


export let contactIdCounter = 50;



export interface Sucursal {
  name: string;
  Id: string;
  flag: string;
}

@Component({
  selector: 'vex-contacts-edit',
  templateUrl: './SerieFactura-edit.component.html',
  styleUrls: ['./SerieFactura-edit.component.scss']
})
export class SerieFacturaEditComponent implements OnInit {
  SucCtrl = new FormControl();
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
  body: any;


  selectedImage: File | null = null;
  selectedImageURL: string | ArrayBuffer | null =
    "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Marca.jpg";


    imagenPorDefectoURL: string = 'https://img.srvcentral.com/Sistema/ImagenPorDefecto/Marca.jpg';


  isFormActive: boolean = true;
  filteredSucursal$: Observable<Sucursal[]>;
  camposExtras: FormGroup[] = [];
  urlsImagenes: string[] = [] ;

  empleado: Empleado;

  get isEdit(): boolean {

    return !!this.contactId;

  }




  constructor(@Inject(MAT_DIALOG_DATA) public contactId:SerieFacturaData['c_Id_Serie'],
              private dialogRef: MatDialogRef<SerieFacturaEditComponent>,
              private fb: UntypedFormBuilder,
              private cdr: ChangeDetectorRef,
              private ngZone: NgZone,
              private snackBar: MatSnackBar,
              private CategoriaService:CategoriaService,
              public dialog: MatDialog,
              private FormBuilder: FormBuilder,
              private catalogoService: CatalogoService,
              private SerieFacturaService: SerieFacturaService,
             ) { 

              const token = localStorage.getItem("token"); 

              const decodedToken: any = jwt_decode(token);

              const idUsuario = decodedToken.IdUsuario;

              this.Id_Usuario = idUsuario;
              this.Id_Sucursal = decodedToken.IdSucursal;

              this.form = this.fb.group({
                c_Id_Serie: [],
                c_Id_Sl: [],
                c_Nombre: ["",Validators.compose([
                  Validators.required,
                  Validators.minLength(1),
                  Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
                ])],
                c_Descripcion: [""],
                c_Usuario_CoM: this.Id_Usuario,
              });

            

                this.agregarCampo();

        
             }


             get SerieFactura(){
              return this.registerForm.get('campo') as FormArray;
            }
          
            registerForm = this.FormBuilder.group({
              campo: this.FormBuilder.array([])
            });

            agregarCampo(){
              console.log(this.Id_Sucursal)
              const FormGroup  = this.FormBuilder.group({
                c_Id_Sl: [this.Id_Sucursal, [Validators.required]],
                c_Nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/), Validators.minLength(4), Validators.maxLength(24)]],
                c_Usuario_Creacion: this.Id_Usuario,
              });
              
              this.SerieFactura.push(FormGroup);
            }
          
            removerCampo(indice: number) {
              this.SerieFactura.removeAt(indice);
            }


  ngOnInit() {


    if(this.contactId == null){
      this.form.patchValue({
        Nombre: "Registrar Serie",
        c_Usuario_CoM: this.Id_Usuario,
      });
      this.cdr.detectChanges();
    }




if(this.contactId != null){
  this.valido = true;
  this.form.get('c_Descripcion')?.reset();
  this.form.get('c_Descripcion')?.disable();


    this.SerieFacturaService.getSerieFacturaById(this.contactId).subscribe(
      (data: any) => {
       // console.log(data.response);
        this.empleado = data;
        this.form.patchValue({
          Nombre: "Actualizar Serie",
          c_Id_Serie: data.response.c_Id_Serie,
          c_Id_Sl: data.response.c_Id_Sl,
          c_Nombre: data.response.c_Nombre,
          c_Descripcion: data.response.c_Descripcion,
        }

          );
       

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





  }









  openConfirmDialog() {

   
    










    if(this.contactId != null){
      this.titulo = "¿Estás seguro que deseas actualizar la Serie";
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
            concatMap(element => this.SerieFacturaService.setSerieFactura(element)
            
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
                 const c_Id_Serie= this.form.get("c_Id_Serie").value;
                 const c_Id_Sl= this.form.get("c_Id_Serie").value;
                 const c_Nombre = this.form.get("c_Nombre").value;
                 const c_Descripcion = result
                 const c_Usuario_Modificacion = this.form.get("c_Usuario_CoM").value;

                this.body  = {
                    c_Id_Serie,
                    c_Id_Sl,
                    c_Nombre,
                    c_Descripcion,
                    c_Usuario_Modificacion
                  }

          
                

                




                 this.SerieFacturaService.putSerieFactura(this.body).subscribe(
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
