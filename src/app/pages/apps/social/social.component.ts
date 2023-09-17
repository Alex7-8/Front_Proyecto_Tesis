import { Component, OnInit,ChangeDetectorRef,NgZone } from '@angular/core';
import { Link } from '../../../../@vex/interfaces/link.interface';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import jwt_decode from "jwt-decode";
import { TranferenciaService} from "src/app/Service/Transferencia.service";

export interface FriendSuggestion {
  name: string;
  imageSrc: string;
  friends: number;
  added: boolean;
}



@Component({
  selector: 'vex-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms
  ]
})
export class SocialComponent implements OnInit {

Nombre: string = "";
foto: string = "";

selectedImage: File | null = null;
  selectedImageURL: string | ArrayBuffer | null =
    "https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png";


  links: Link[] = [
    {
      label: 'ABOUT',
      route: './',
      routerLinkActiveOptions: { exact: true }
    },
    {
      label: 'TIMELINE',
      route: './timeline'
    },
    {
      label: 'FRIENDS',
      route: '',
      disabled: true
    },
    {
      label: 'PHOTOS',
      route: '',
      disabled: true
    }
  ];

  constructor( private cdr: ChangeDetectorRef,
               private ngZone: NgZone,
               private TService:TranferenciaService) { }

  ngOnInit() {

    const token = localStorage.getItem("token");
    const decodedToken: any = jwt_decode(token);

    const nombre = decodedToken.IdUsuario;
    const foto = decodedToken.FotoEmpleado;

    this.Nombre = nombre;
    this.selectedImageURL = foto;
  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedImage = input.files[0];
      this.loadImage();
      

    }
  }

  loadImage(): void {
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        this.ngZone.run(() => {
          this.selectedImageURL = reader.result;
          const stringValue: string = this.selectedImageURL as string;
          const parts = stringValue.split(',');
          this.foto = parts[1];

          this.ngZone.run(() => {
          //  this.form.get('c_Img_Base')?.setValue(this.imagen);
           this.TService.foto = this.foto; 
          });
          this.cdr.detectChanges();
        

        });
      };
      reader.readAsDataURL(this.selectedImage);

    }
  }
}
