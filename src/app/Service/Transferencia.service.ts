import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TranferenciaService {

foto: string;
selectedImageURL: string | ArrayBuffer | null =
"https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png";

}