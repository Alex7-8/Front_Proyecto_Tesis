import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TranferenciaService {
body: any;
idSerie: number;
idsl: number;
idPersona: number;
foto: string;
bodyFactura: any;
NombreProducto: string;
Cantidad: string;
Precio: string;
SubTotal: string;
IVA: string;
Total: string;
VPersona: boolean = false;
validarFactura: boolean = false;
idProducto: string;

selectedImageURL: string | ArrayBuffer | null =
"https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png";

RecibirFacturaCF(idSerie: number, idsl: number) {
  
    this.idSerie = idSerie;
    this.idsl = idsl;
}

RecibirFacturaCliente(idSerie: number, idsl: number , idPersona: number) {
  
    this.idSerie = idSerie;
    this.idsl = idsl;
    this.idPersona = idPersona;
}

RecibirBody(body: any) {
    this.body = body;
  

}

RecibirDatosFactura(IdProducto: string,NombreProducto: string, Cantidad: string, Precio: string, SubTotal: string, IVA: string, Total: string) { 
    this.idProducto = IdProducto;
    this.NombreProducto = NombreProducto;
    this.Cantidad = Cantidad;
    this.Precio = Precio;
    this.SubTotal = SubTotal;
    this.IVA = IVA;
    this.Total = Total;
}

VerificarPersona(VPersona: boolean) {
    this.VPersona = VPersona;
}




}
