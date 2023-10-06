import { DecimalPipe } from "@angular/common";

export interface FacturaVentaData {
  c_Id_Producto: number;
  c_Id_Marca: number;
  c_Nombre_Marca: string;
  c_Id_Sucursal: number;
  c_Id_Categoria: number;
  c_Nombre_Producto: string;
  c_Stock_Disponible: number;
  c_Precio_Compra: DecimalPipe;
  c_Precio_Venta: DecimalPipe;
  c_Url_IMG: string;
  c_Descripcion: string;
  c_Estado: number;
  c_Usuario_Creacion: string;
  c_Fecha_Creacion: string;
  c_Usuario_Modificacion: string;
  c_Fecha_Modificacion: string;

}


