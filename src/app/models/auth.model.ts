export interface Auth {
    ok: boolean;
    msg: string;
    token: string;
    id_Usuario: string;
    nombre: string;
    correo: string;
    roles: string[];
    organizacion: [];
    id_Organizacion: [];
    url_imagen: string;
    transaccion_Estado: string;
    transaccion_Mensaje: string;
    token_Dispositivo: string;
  }
  