import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { FacturaService } from 'src/app/Service/Factura.service';
import {TranferenciaService} from 'src/app/Service/Transferencia.service';
import { UntypedFormBuilder,FormControl,FormGroup, Validators,UntypedFormGroup, ReactiveFormsModule, FormArray, FormBuilder,AbstractControl,UntypedFormControl } from '@angular/forms';
import * as html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; 
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute,Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'vex-invoice',
  templateUrl: './FacturaVenta.component.html',
  styleUrls: ['./FacturaVenta.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class FacturaVentaComponent implements OnInit {
factura: any;
Precio: string;
Cantidad: string;
SubTotal: string ="0.00";
Iva: string ="0.00";
Total: string ="0.00";
valido: boolean = false;
Texto: string = "Factura de Venta";
body: any;
ancho: string = "500px";
largo: string = "500px";
titulo: string = "Razon de Anulacion";
razon: string = "";
verificar: boolean = false;

Numero_Serie: string;
Numero_Factura: string;
Id_Producto: string;
NombreProducto: string ;
IMG_Sucursal: string = "../../../../assets/sucursal.jpg";
Nombre_Sucursal: string;
Direccion_Sucursal: string;
Departamento_Sucursal: string;
Municipio_Sucursal: string;
Telefono_Sucursal: string;
Correo_Sucursal: string;
NIT_Sucursal: string;
Fecha: string;
Nombre_Cliente: string = "C/F";
NIT_Cliente: string = "";
Direccion_Cliente: string  = "";
Departamento_Cliente: string  = "";
Municipio_Cliente: string  = "";
Telefono_Cliente: string  = "";

form: FormGroup;  

  constructor(
    private facturaService: FacturaService,
    private tranferenciaService: TranferenciaService,
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog,
  ) {

    this.form = this.fb.group({
      Nombre:[""],
      c_Img_Base: ["0"],
      Id_Empleado: [],
      c_ID_Rol_Persona:[,Validators.required],
      c_Id_Sucursal: [, Validators.required],
      c_Id_Genero: [, Validators.required],
      c_Tipo_Cuenta: [,Validators.required],
      Primer_Nombre: ["", Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/)
      ])],
      Segundo_Nombre: ["",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/)
      ])],
      Tercer_Nombre: ["",Validators.compose([
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/)
      ])],
      Primer_Apellido: ["",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/)
      ])],
      Segundo_Apellido: ["",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/)
      ])],
      Apellido_Casada: ["",Validators.compose([
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]*$/)
      ])],
      c_Id_Departamento : [, Validators.required],
      c_Id_Municipio: [, Validators.required],
      DPI: ["", Validators.compose([
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13),
      ]),],
      NIT: ["", Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(12),
        Validators.pattern(/^[\d-]*$/)
      ]),
      ],
      Direccion:  ["",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
      ])],
      Telefono_Principal: ["", Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^[0-9]*$/)
      ]),],
      Telefono_Secundario: ["", Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^[0-9]*$/)
      ]),],
      Correo: ["", [Validators.required, Validators.email]],
      Fecha_Nacimiento: [""],
      c_Usuario_CoM: [""],
      Razon: [""],
      Id_Cuenta: [""],
      Empresa:["", Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\d,.-]*$/)
      ])],

    });

   }

  ngOnInit() {

    if(this.tranferenciaService.validarFactura == false)
    {
      this.tranferenciaService.validarFactura = false;
      this.router.navigate(['/apps/FacturaVenta/table']);
    }else{
      this.tranferenciaService.validarFactura = true;
    }
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; // Los meses comienzan en 0, así que sumamos 1
    const dia = fechaActual.getDate();

    const fechaEnTexto = `${año}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;
    this.Fecha = fechaEnTexto;

    this.Id_Producto = this.tranferenciaService.idProducto;
    this.NombreProducto = this.tranferenciaService.NombreProducto
    this.Cantidad = this.tranferenciaService.Cantidad
    this.Precio = this.tranferenciaService.Precio

    this.Total =  this.formatearPrecio(this.tranferenciaService.Total);
    this.Iva = this.formatearPrecio(this.tranferenciaService.IVA);
    this.SubTotal = this.formatearPrecio(this.tranferenciaService.SubTotal);





// Obtener la tabla
const tablaBody = document.getElementById("tabla-body");


    const productos = this.NombreProducto.split(';');
  
    //const PrecioFinal = precios.map((precio) => this.formatearPrecio(precio));
    
  
    //const tbody = document.getElementById('tabla-body');

    for (let i = 0; i < productos.length; i++) {
      const idProducto = this.Id_Producto.split(';');
      const producto = this.NombreProducto.split(';');
      const precio = this.Precio.split(';');
      const cantidad = this.Cantidad.split(';');
      //const totales = precio * cantidad;
      console.log(idProducto[i]);

      const fila = document.createElement("tr");
      fila.classList.add("text-gray-700");


    const celdaIdProducto = document.createElement("td");
    celdaIdProducto.textContent = idProducto[i];
    // Celda de Producto
    const celdaProducto = document.createElement("td");
    celdaProducto.textContent = producto[i];
 

    // Celda de Precio
    const celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = parseFloat(precio[i]).toFixed(2);
   

    // Celda de Cantidad
    const celdaCantidad = document.createElement("td");
    celdaCantidad.textContent = cantidad[i];
   

    // Celda de Total (Precio * Cantidad)
    const total = parseFloat(precio[i]) * parseInt(cantidad[i], 10);
    const celdaTotal = document.createElement("td");
    celdaTotal.style.textAlign = "right"; // Alinear a la derecha
    celdaTotal.classList.add("font-medium");
    celdaTotal.textContent = total.toFixed(2);

    // Agregar las celdas a la fila
    fila.appendChild(celdaIdProducto);
    fila.appendChild(celdaProducto);
    fila.appendChild(celdaPrecio);
    fila.appendChild(celdaCantidad);
    fila.appendChild(celdaTotal);

    // Agregar la fila a la tabla
    tablaBody.appendChild(fila);
     
      
  }




   if(this.tranferenciaService.VPersona == true)
   {
  
    this.GenerarFacturaCliente();
   }else{
    this.GenerarFacturaCF();
   }

  }


  formatearPrecio(precio: string): string {
    // Convertir a número y redondear a dos decimales
    let numero: number = parseFloat(precio);
    numero = parseFloat(numero.toFixed(2));
  
    // Convertir de nuevo a cadena con dos decimales
    return numero.toLocaleString("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  


  

GenerarFacturaCliente()
{
this.facturaService.getFacturaVentaCliente(this.tranferenciaService.idSerie, this.tranferenciaService.idsl,this.tranferenciaService.idPersona)
.subscribe(
  (data: any) => 
  
  {
    console.log(data)
    
    this.Numero_Serie = data.response.c_Numero_Serie;
    this.Numero_Factura = data.response.c_Numero_Factura;
    this.Nombre_Sucursal = data.response.c_Nombre_Sucursal;
    this.Departamento_Sucursal = data.response.c_Departamento_Sucursal;
    this.Municipio_Sucursal = data.response.c_Municipio_Sucursal;
    this.Direccion_Sucursal = data.response.c_Direccion_Sucursal;
    this.Correo_Sucursal = data.response.c_Correo_Sucursal;
    this.Telefono_Sucursal = data.response.c_Numero_Telefono;
    this.NIT_Sucursal = data.response.c_NIT_Sucursal;
    this.IMG_Sucursal = data.response.c_IMG_Sucursal;
    this.Nombre_Cliente = data.response.c_Nombre_Cliente;
    this.NIT_Cliente = data.response.c_NIT;
    this.Direccion_Cliente = data.response.c_Direccion;
    this.Departamento_Cliente = data.response.c_Departamento;
    this.Municipio_Cliente = data.response.c_Municipio;
    this.Telefono_Cliente = data.response.c_Telefono;


  }
);

}


GenerarFacturaCF()
{
  this.facturaService.getFacturaVentaCF(this.tranferenciaService.idSerie, this.tranferenciaService.idsl).subscribe(

    (data: any) => {
     console.log(data);
      this.Numero_Serie = data.response.c_Numero_Serie;
      this.Numero_Factura = data.response.c_Numero_Factura;
      this.Nombre_Sucursal = data.response.c_Nombre_Sucursal;
      this.Departamento_Sucursal = data.response.c_Departamento_Sucursal;
      this.Municipio_Sucursal = data.response.c_Municipio_Sucursal;
      this.Direccion_Sucursal = data.response.c_Direccion_Sucursal;
      this.Correo_Sucursal = data.response.c_Correo_Sucursal;
      this.Telefono_Sucursal = data.response.c_Numero_Telefono;
      this.NIT_Sucursal = data.response.c_NIT_Sucursal;
      this.IMG_Sucursal = data.response.c_IMG_Sucursal;
   }
 );
}







generarPDF(): void {
  const elementoParaPDF = document.getElementById('pdf-content');

  // Configura las opciones de conversión (personalízalas según tus necesidades)
  const opciones = {
    margin: 10,
    filename: 'mi_archivo.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Utiliza html2pdf para generar el PDF
  html2pdf().from(elementoParaPDF).set(opciones).outputPdf((pdf) => {
    // Aquí puedes guardar o mostrar el PDF generado según tus necesidades
    // Por ejemplo, puedes abrir el PDF en una nueva ventana
    pdf.output('dataurlnewwindow');
  });
}








GenerarPDF() {
  let result = false;
  const element = document.getElementById('pdf-content');

  // Crear una Promesa que se resolverá cuando la imagen se cargue
  const cargarImagen = new Promise((resolve, reject) => {
    const imgElement = new Image();

    // Establecer la URL de la imagen
    imgElement.src = this.IMG_Sucursal; // Reemplaza 'URL_DE_LA_IMAGEN' con la URL de tu imagen

    imgElement.onload = () => {
      resolve(imgElement);
    };

    imgElement.onerror = (error) => {
      reject(error);
    };
  });

  cargarImagen
    .then((imgElement) => {
      result = true;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.drawImage(imgElement as HTMLImageElement, 0, 0, canvas.width, canvas.height);

      // Configurar opciones para la generación de PDF
      const opt = {
        margin: 0,
        filename: 'factura.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };

      // Usar html2pdf() para generar el PDF
      html2pdf().set(opt).from(element).save();

      // Limpieza si es necesario
      URL.revokeObjectURL((imgElement as HTMLImageElement).src);
    })
    .catch((error) => {
      result = false;
      console.error('Error al cargar la imagen:', error);
    });
    return result;
}



Cerrar(resultado: boolean)
{

    this.titulo = '¿Estás seguro de que deseas cancelar la factura?';
    this.razon = "Razon por la cual se crea el registro";
    this.verificar = false;
    this.ancho = "15rem";
    this.largo = "25rem";
  

  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    height: this.ancho,
    width: this.largo,  
    data: { title: this.titulo,razon:this.razon, valido: this.verificar }
  });

  dialogRef.afterClosed().subscribe(result => {


if(result != false)
{
 
          this.router.navigate(['/apps/FacturaVenta/table']);
          this.snackBar.open("Factura Cancelada", "Cerrar", {
            duration: 5000,
            panelClass: ["success-snackbar"], 
          });


}
  



   
    }
  );





 

}


Facturar(resultado: boolean)
{

    this.titulo = '¿Estás seguro de que deseas guardar la factura?';
    this.razon = "Razon por la cual se crea el registro";
    this.verificar = false;
    this.ancho = "15rem";
    this.largo = "25rem";
  

  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    height: this.ancho,
    width: this.largo,  
    data: { title: this.titulo,razon:this.razon, valido: this.verificar }
  });

  dialogRef.afterClosed().subscribe(result => {

var res = 0;

if(result != false)
{
  console.log("entro");
  this.body = this.tranferenciaService.body;
console.log(this.body);
  this.facturaService.setFactura(this.body).subscribe(
      (response) => {
        if (response.ok) {
         this.valido = true;
         this.tranferenciaService.validarFactura = false;
         if(this.GenerarPDF() == true)
         {
          this.router.navigate(['/apps/FacturaVenta/table']);
         }else{
          
          this.snackBar.open("Error al Generar PDF", "Cerrar", {
            duration: 15000,
            panelClass: ["error-snackbar"], 
          });
          this.router.navigate(['/apps/FacturaVenta/table']);
         }
        

        
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
  );





 

}








}