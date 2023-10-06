import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { FacturaService } from 'src/app/Service/Factura.service';
import {TranferenciaService} from 'src/app/Service/Transferencia.service';
import { UntypedFormBuilder,FormControl,FormGroup, Validators,UntypedFormGroup, ReactiveFormsModule, FormArray, FormBuilder,AbstractControl,UntypedFormControl } from '@angular/forms';
import * as html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; 
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

Numero_Serie: string;
Numero_Factura: string;
NombreProducto: string ;
IMG_Sucursal: string = "../../../../assets/Factura.jpg";
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
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; // Los meses comienzan en 0, así que sumamos 1
    const dia = fechaActual.getDate();

    const fechaEnTexto = `${año}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;
    this.Fecha = fechaEnTexto;

   // this.Total = this.tranferenciaService.Total 
    // this.Iva = this.tranferenciaService.IVA
    // this.SubTotal = this.tranferenciaService.SubTotal
    this.NombreProducto = this.tranferenciaService.NombreProducto
    this.Cantidad = this.tranferenciaService.Cantidad
    this.Precio = this.tranferenciaService.Precio

    this.Total =  this.formatearPrecio(this.tranferenciaService.Total);
    this.Iva = this.formatearPrecio(this.tranferenciaService.IVA);
    this.SubTotal = this.formatearPrecio(this.tranferenciaService.SubTotal);





console.log(this.tranferenciaService.NombreProducto);
console.log(this.tranferenciaService.Cantidad);
console.log(this.tranferenciaService.Precio);


// Obtener la tabla
const tablaBody = document.getElementById("tabla-body");

// Separar los datos por punto y coma


// const nombreProductoFormateado = this.NombreProducto.replace(/\s+/g, "").split(";");
// const cantidadFormateada = this.Cantidad.split(";");
// const precioFormateado =this.Precio.replace(",", ".").split(";");


    const productos = this.NombreProducto.split(';');
    const precios = this.Precio.split(';');
    const cantidades = this.Cantidad.split(';');
    //const PrecioFinal = precios.map((precio) => this.formatearPrecio(precio));
    
  
    //const tbody = document.getElementById('tabla-body');

    for (let i = 0; i < productos.length; i++) {
      const producto = this.NombreProducto.split(';');
      const precio = this.Precio.split(';');
      const cantidad = this.Cantidad.split(';');
      //const totales = precio * cantidad;


      const fila = document.createElement("tr");


    // Celda de Producto
    const celdaProducto = document.createElement("td");
    celdaProducto.textContent = producto[i];
    celdaProducto.classList.add("py-6", "border-b");

    // Celda de Precio
    const celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = parseFloat(precio[i]).toFixed(2);
    celdaPrecio.classList.add("py-6", "border-b");

    // Celda de Cantidad
    const celdaCantidad = document.createElement("td");
    celdaCantidad.textContent = cantidad[i];
    celdaCantidad.classList.add("py-6", "border-b");

    // Celda de Total (Precio * Cantidad)
    const total = parseFloat(precio[i]) * parseInt(cantidad[i], 10);
    const celdaTotal = document.createElement("td");
    celdaTotal.style.textAlign = "right"; // Alinear a la derecha
    celdaTotal.classList.add("py-6", "border-b", "font-medium");
    celdaTotal.textContent = total.toFixed(2);

    // Agregar las celdas a la fila
    fila.appendChild(celdaProducto);
    fila.appendChild(celdaPrecio);
    fila.appendChild(celdaCantidad);
    fila.appendChild(celdaTotal);

    // Agregar la fila a la tabla
    tablaBody.appendChild(fila);
     
      
  }


// const productosArray = this.NombreProducto[0].split("; ");
// const preciosArray = this.Precio[0].split("; ");
// const cantidadesArray = this.Cantidad[0].split(", ");

// // Verificar que tengan la misma longitud
// if (nombreProductoFormateado.length === precioFormateado.length && precioFormateado.length === cantidadFormateada.length) {
//   // Crear filas de tabla
//   for (let i = 0; i < productosArray.length; i++) {
//     const fila = document.createElement("tr");
//     console.log(productosArray[i]);

//     // Celda de Producto
//     const celdaProducto = document.createElement("td");
//     celdaProducto.textContent = productosArray[i];
//     celdaProducto.classList.add("py-6", "border-b");

//     // Celda de Precio
//     const celdaPrecio = document.createElement("td");
//     celdaPrecio.textContent = parseFloat(preciosArray[i]).toFixed(2);
//     celdaPrecio.classList.add("py-6", "border-b");

//     // Celda de Cantidad
//     const celdaCantidad = document.createElement("td");
//     celdaCantidad.textContent = cantidadesArray[i];
//     celdaCantidad.classList.add("py-6", "border-b");

//     // Celda de Total (Precio * Cantidad)
//     const total = parseFloat(preciosArray[i]) * parseInt(cantidadesArray[i], 10);
//     const celdaTotal = document.createElement("td");
//     celdaTotal.style.textAlign = "right"; // Alinear a la derecha
//     celdaTotal.classList.add("py-6", "border-b", "font-medium");
//     celdaTotal.textContent = total.toFixed(2);

//     // Agregar las celdas a la fila
//     fila.appendChild(celdaProducto);
//     fila.appendChild(celdaPrecio);
//     fila.appendChild(celdaCantidad);
//     fila.appendChild(celdaTotal);

//     // Agregar la fila a la tabla
//     tablaBody.appendChild(fila);
//   }
// } else {
//   console.error("Los arreglos tienen longitudes diferentes.");
// }











// const NombreProducto = "Pintura Tucan Azul Porque es el azul;Pintura Tucan Verde;Pintura Tucan Morada";
// const Precio = "4.5;4.5;4.5";
// const Cantidad = "3;4;5";
// const IVA = "1.4;2.1;4.5"

// // Divide las cadenas en arreglos
// const productos = NombreProducto.split(';');
// const precios = Precio.split(';');
// const cantidades = Cantidad.split(';');

//     // const productos = this.NombreProducto.split(';');
//     // const precios = this.Precio.split(';');
//     // const cantidades = this.Cantidad.split(';');
    
//     // Obtén la referencia al tbody de la tabla
//     const tbody = document.getElementById('tabla-body');

//     for (let i = 0; i < productos.length; i++) {
//       const producto = productos[i];
//       const precio = parseFloat(precios[i]);
//       const cantidad = parseInt(cantidades[i], 10);
//       const total = precio * cantidad;
//       const iva = parseFloat(IVA[i]);
    
//       // Crea una fila y la llena con los datos
//       const fila = document.createElement('tr');

//       fila.innerHTML = `
//       <td style="padding: 6px; border-bottom: 1px solid #ccc;">${producto}</td>
//       <td style="padding: 6px; border-bottom: 1px solid #ccc;">Q${precio.toFixed(2)}</td>
//       <td style="padding: 6px; border-bottom: 1px solid #ccc;">${cantidad}</td>
//       <td style="padding: 6px; border-bottom: 1px solid #ccc; text-align: right;">Q${total.toFixed(2)}</td>
//     `;
    


//       // fila.innerHTML = `
//       //   <td class="py-6 border-b ">${producto}</td>
//       //   <td class="py-6 border-b ">Q${precio}</td>
//       //   <td class="py-6 border-b ">${cantidad}</td>
//       //   <td class="py-6 border-b font-medium text-right">Q${total}</td>
//       // `;
    
//       // Agrega la fila al tbody
//       tbody.appendChild(fila);
//     }


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
  const element = document.getElementById('pdf-content');

  // Descargar la imagen y luego continuar
  fetch(this.IMG_Sucursal)
    .then(response => response.blob())
    .then(blob => {
      // Crear una URL temporal para la imagen descargada
      const imgUrl = URL.createObjectURL(blob);

      // Renderizar la imagen en un canvas
      const imgCanvas = document.createElement('canvas');
      const imgContext = imgCanvas.getContext('2d');
      const imgElement = new Image();

      imgElement.onload = () => {
        imgCanvas.width = imgElement.width;
        imgCanvas.height = imgElement.height;
        imgContext.drawImage(imgElement, 0, 0);

        // Opciones para html2pdf
        const opt = {
          margin: 0,
          filename: 'factura.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Generar PDF
        html2pdf().set(opt).from(element).save();

        // Liberar la URL temporal creada
        URL.revokeObjectURL(imgUrl);
      };

      imgElement.src = imgUrl;
    })
    .catch(error => {
      console.error('Error al descargar la imagen:', error);
    });
}





// GenerarPDF() {

//   // Obtener elemento a convertir
//   const element = document.getElementById('pdf-content');

//   // Precargar imagen
//   const image = new Image();
//   image.src = this.IMG_Sucursal; 
//   image.onload = () => {

//     // Renderizar imagen a canvas
//     const imgCanvas = document.createElement('canvas');
//     const imgContext = imgCanvas.getContext('2d');
//     imgContext.drawImage(image, 0, 0);
//     const imgDataURL = imgCanvas.toDataURL('image/png');

//     // Asignar DataURL a elemento img
//     const imgElement = document.getElementById('logoImg') as HTMLImageElement;
//     imgElement.src = imgDataURL;

//     // Opciones de html2pdf
//     const opt = {
//       margin: 0,
//       filename: 'factura.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     // Generar PDF
//     html2pdf().set(opt).from(element).save();

//   }

// }





















// GenerarPDF() {

//   const element = document.getElementById('pdf-content');
  
//   const opt = {
//     margin:       0,
//     filename:     'factura.pdf',
//     image:        { type: 'jpeg', quality: 0.98 },
//     html2canvas:  { scale: 2 },
//     jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//   };

//   // Usar html2pdf() para generar el PDF
//   html2pdf().set(opt).from(element).save();

// }















// GenerarPDF() {
//   const elemento = document.getElementById('pdf-content') as HTMLDivElement;
//   const imgLogo = "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Factura.jpg" // Reemplaza 'URL_DE_TU_IMAGEN' con la URL de tu imagen

//   if (!elemento) {
//     console.error('No se encontró el elemento con el ID "pdf-content".');
//     return;
//   }

//   html2canvas(elemento).then(canvas => {
//     const pdf = new jsPDF();

//     // Cargar imagen
//     const img = new Image();
//     img.src = imgLogo;

//     img.onload = () => {
//       // Convertir imagen a Data URL
//       const imgData = canvas.toDataURL('image/png');

//       // Agregar imagen al PDF
//       pdf.addImage(imgData, 'PNG', 10, 10, 40, 40);

//       // Convertir elemento HTML a imagen
//       const htmlData = canvas.toDataURL('image/png');

//       // Configurar dimensiones para la imagen HTML en el PDF
//       const imgWidth = 180; // Ancho de la imagen en el PDF
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       let position = 50;

//       // Agregar la imagen HTML al PDF
//       pdf.addImage(htmlData, 'PNG', 10, position, imgWidth, imgHeight);

//       // Guardar el PDF
//       pdf.save('factura.pdf');
//     };
//   });
// }






























// GenerarPDF() {

//   // Obtener elemento HTML
//   const elemento = document.getElementById('pdf-content');

//   // Obtener URL de imagen de logo
//   const imgLogo = (document.querySelector('#logoImg') as HTMLImageElement).src;

//   // Convertir HTML a canvas
//   html2canvas(elemento).then(canvas => {

//     // Inicializar PDF
//     const pdf = new jsPDF();
    
//     // Convertir logo a imagen
//     const img = new Image();
//     img.src = imgLogo;
//     img.onload = () => {
//       pdf.addImage(img, 'PNG', 10, 10, 40, 40);

//       // Convertir el canvas a imagen
//       const imgData = canvas.toDataURL('image/png');
//       const imgWidth = 210;
//       const pageHeight = pdf.internal.pageSize.getHeight();
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       let heightLeft = imgHeight;
//       let position = 50; // empieza después del logo

//       // Agregar páginas hasta completar altura
//       do {
//         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;
//         position -= heightLeft;
//       } while (heightLeft >= 0);

//       // Guardar PDF
//       pdf.save('factura.pdf');
//     };

      
//   });

// }


// GenerarPDF() {
//   // Obtiene el elemento HTML que quieres convertir
//   const elemento = document.getElementById('pdf-content'); 
  
//   // Convierte el elemento HTML a una imagen utilizando html2canvas
//   html2canvas(elemento).then(canvas => {
  
//     // Inicializa jsPDF
//     const pdf = new jsPDF();
    
//     // Agrega la imagen al PDF
//     const imgData = canvas.toDataURL('image/png');
//     const imgWidth = 210; 
//     const pageHeight = pdf.internal.pageSize.getHeight();
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
//     let heightLeft = imgHeight;
//     let position = 0;

//     // Añade imagenes hasta completar la altura de la página
//     do {
//       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;
//       position -= heightLeft;
//     } while (heightLeft >= 0);

//     // Guarda el PDF
//     pdf.save('factura.pdf');
//   });
// }





}





  
    //  const NombreProducto = this.tranferenciaService.bodyFactura.c_Nombre_Producto.split(';');
    //  const cantidadArray = this.tranferenciaService.bodyFactura.c_Cantidad.split(';');
    //  const precioArray = this.tranferenciaService.bodyFactura.c_Precio.split(';');
    //  const subtotalArray = this.tranferenciaService.bodyFactura.c_SubTotal;
    //  const ivaArray = this.tranferenciaService.bodyFactura.c_IVA;
    //  const totalArray = this.tranferenciaService.bodyFactura.c_Total;

    
//      const dataArray = [];
//      for (let i = 0; i < cantidadArray.length; i++) {
//       const datas = {
//         "c_Fecha": fechaEnTexto,
//         "c_Numero_Serie": data.response.c_Numero_Serie,
//         "c_Numero_Factura": data.response.c_Numero_Factura,
//         "c_Nombre_Sucursal": data.response.c_Nombre_Sucursal,
//         "c_Departamento_Sucursal": data.response.c_Departamento_Sucursal,
//         "c_Municipio_Sucursal": data.response.c_Municipio_Sucursal,
//         "c_Direccion_Sucursal": data.response.c_Direccion_Sucursal,
//         "c_Correo": data.response.c_Correo_Sucursal,
//         "c_Telefono_Sucursal": data.response.c_Numero_Telefono,
//         "c_NIT_Sucursal": data.response.c_NIT_Sucursal,
//         "c_IMG_Sucursal": data.response.c_IMG_Sucursal,
//         "c_Nombre_Producto": NombreProducto[i], 
//         "c_Cantidad": cantidadArray[i],
//         "c_Precio": precioArray[i],
//         "c_SubTotal": subtotalArray[i],
//         "c_IVA": ivaArray[i],
//         "c_Total": totalArray[i]
//       };
    
//       dataArray.push(datas);

//     }
  
// console.log(dataArray);

// this.factura = {
//        "c_Fecha": fechaEnTexto,
//        "c_Numero_Serie": data.response.c_Numero_Serie,
//        "c_Numero_Factura": data.response.c_Numero_Factura,
//        "c_Nombre_Sucursal": data.response.c_Nombre_Sucursal,
//        "c_Departamento_Sucursal": data.response.c_Departamento_Sucursal,
//        "c_Municipio_Sucursal": data.response.c_Municipio_Sucursal,
//        "c_Direccion_Sucursal": data.response.c_Direccion_Sucursal,
//        "c_Correo": data.response.c_Correo_Sucursal,
//        "c_Telefono_Sucursal": data.response.c_Numero_Telefono,
//        "c_NIT_Sucursal": data.response.c_NIT_Sucursal,
//        "c_IMG_Sucursal": data.response.c_IMG_Sucursal,
//         "c_Nombre_Producto": this.tranferenciaService.NombreProducto,
//         "c_Cantidad": this.tranferenciaService.Cantidad,
//         "c_Precio": this.tranferenciaService.Precio,
//         "c_SubTotal": this.tranferenciaService.SubTotal,
//         "c_IVA": this.tranferenciaService.IVA,
//         "c_Total": this.tranferenciaService.Total,

//      }
//      console.log(this.factura);
       // this.persona = {
       //   "c_Fecha": fechaEnTexto,
       //   "c_Numero_Serie": data.response.c_Numero_Serie,
       //   "c_Numero_Factura": data.response.c_Numero_Factura,
       //   "c_Nombre_Sucursal": data.response.c_Nombre_Sucursal,
       //   "c_Departamento_Sucursal": data.response.c_Departamento_Sucursal,
       //   "c_Municipio_Sucursal": data.response.c_Municipio_Sucursal,
       //   "c_Direccion_Sucursal": data.response.c_Direccion_Sucursal,
       //   "c_Correo": data.response.c_Correo_Sucursal,
       //   "c_Telefono_Sucursal": data.response.c_Numero_Telefono,
       //   "c_NIT_Sucursal": data.response.c_NIT_Sucursal,
       //   "c_IMG_Sucursal": data.response.c_IMG_Sucursal,
       //    "c_Nombre_Producto": "",
       //    "c_Cantidad": "",
       //    "c_Precio": "",
       //    "c_SubTotal": this.SubTotalFinal,
       //    "c_IVA": this.IVATotal,
       //    "c_Total": this.sumaTotal,
       //  };

        
      //console.log(Data);