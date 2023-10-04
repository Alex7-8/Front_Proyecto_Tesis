import { Input,Component, OnInit,Renderer2, HostListener,ChangeDetectionStrategy,
  ChangeDetectorRef,  NgZone,ViewChild, ElementRef } from '@angular/core';
import { Link } from '../../../../../@vex/interfaces/link.interface';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { ClienteEditComponent } from '../components/Cliente-edit/Cliente-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { ClienteData } from '../interfaces/Cliente.interface';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';
import { ActivatedRoute } from '@angular/router';
import { CrearUsuariosService } from 'src/app/Service/GetPersona.service';
import { Router } from '@angular/router';
import {  of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import jwt_decode from "jwt-decode";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from "@angular/material/snack-bar";


export function trackById<T extends { c_Id_Persona: string | number }>(index: number, item: T) {
  return item.c_Id_Persona;
}

@Component({
  selector: 'vex-contacts-grid',
  templateUrl: './Cliente-grid.component.html',
  styleUrls: ['./Cliente-grid.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class ClienteGridComponent implements OnInit {

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  titulo: string;
  estado: number = 1;
  razon: string;
  c_Id_UsuarioModificacion: string;
  persona: ClienteData[] = [];
  tipo: string;
  rol: string[] = [];

  buscar() {
    const searchTerm = this.searchInput.nativeElement.value.toLowerCase();
  
    // Realiza el filtrado basado en searchTerm
    if (searchTerm) {
      const filteredPersona = this.persona.filter(item => {
        for (const propiedad in item) {
          if (item.hasOwnProperty(propiedad) && typeof item[propiedad] === 'string') {
            const valor = item[propiedad].toLowerCase();
            if (valor.includes(searchTerm)) {
              return true; 
            }
          }
        }
        return false;
      });
  
      this.filteredContacts$ = this.route.paramMap.pipe(
        map(paramMap => paramMap.get('activeCategory')),
        map(activeCategory => {
          switch (activeCategory) {
            case 'activos': {
              this.activeCategory = activeCategory;
           return  filteredPersona.filter(c => c.c_Estado === 1);
            }
    
            case 'inactivos': {
              this.activeCategory = activeCategory;
              return filteredPersona.filter(c => c.c_Estado === 2);
            }
    
            default: {
              return filteredPersona;
            }
          }
        })
        
      );
     
    } else {
      
    }
  }
  filteredContacts$: Observable<ClienteData[]> = of([]);
  loadingData = true;

  tableData = this.persona;
  activeCategory = 'activos';
  links: Link[] = [
    {
      label: 'Activos',
      route: '../activos'
    },
    {
      label: 'Inactivos',
      route: '../inactivos'
    },
  ];

  trackById = trackById;


  constructor(private dialog: MatDialog,
              private route: ActivatedRoute,
              private CrearUsuariosService:CrearUsuariosService,
              private router: Router, private renderer: Renderer2,
              private cd: ChangeDetectorRef,
              private ngZone: NgZone,
              private snackBar: MatSnackBar,
            ) { }

  ngOnInit() {
   this.obtenerTablaData();
   // this.checkScreenSize();

   const token = localStorage.getItem("token"); 

    const decodedToken: any = jwt_decode(token);

    this.rol = decodedToken.role;


}

  






  obtenerTablaData() {

  this.CrearUsuariosService.getPersona("").subscribe((response: any) => {
  this.persona = response.response;
  this.tableData = this.persona.filter(c => c.c_Estado === this.estado);
  
  this.filteredContacts$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('activeCategory')),
    map(activeCategory => {
      switch (activeCategory) {
        case 'activos': {
          this.activeCategory = activeCategory;
       return  this.persona.filter(c => c.c_Estado === 1);
        }

        case 'inactivos': {
          this.activeCategory = activeCategory;
          return this.persona.filter(c => c.c_Estado === 2);
        }

        default: {
          return this.persona;
        }
      }
    })
    
  );

});

 }

  OpenContact(id?: ClienteData['c_Id_Persona']) {
    this.dialog.open(ClienteEditComponent, {
      data: id || null,
      width: '60rem'

    });
  }

    // toggleStar(id: PersonaData['c_Id_Persona']) {
    //   const contact = this.persona.find(c => c.c_Id_Persona === id);

    //   if (contact) {
    //     contact.c_Estado = !contact.c_Estado ? 1 : 2;
    //   }

    
    // }

    toggleStar(c_Id_Persona: ClienteData['c_Id_Persona']) {
      const contact = this.persona.find(c => c.c_Id_Persona === c_Id_Persona);
      const token = localStorage.getItem("token"); 
      const decodedToken: any = jwt_decode(token);
      const idUsuario = decodedToken.IdUsuario;
      this.c_Id_UsuarioModificacion = idUsuario;

      this.c_Id_UsuarioModificacion = idUsuario;
      if(contact.c_Tipo =="PROVEEDOR"){
        this.tipo = "Proveedor";
      }
      if(contact.c_Tipo =="CLIENTE"){
        this.tipo = "Cliente";
      }

      if(this.activeCategory == 'activos'){
        this.titulo = "¿Estás seguro que deseas desactivar el  " + this.tipo + "?";
        this.razon = "Razon por la cual se desactiva el registro";
        this.estado = 1;
      }else{
        this.titulo = "¿Estás seguro de que deseas activar el "+ this.tipo  + "?";
        this.razon = "Razon por la cual se activa el registro";
        this.estado = 2;
      }

      
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        height: '20rem',
        width: '28rem', 
        data: { title: this.titulo, textAreaValue: '', razon: this.razon,valido: true  }  
  
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
         
          this.CrearUsuariosService.CambiarEstadoPersona(contact.c_Id_Persona,this.c_Id_UsuarioModificacion,result).subscribe((response) => {
            // console.log(response);
            if(response.ok){
              this.snackBar.open(response.transaccion_Mensaje, "Cerrar", {
                duration: 5000,
                panelClass: ["success-snackbar"], 
              });
              this.obtenerTablaData();
              this.filteredContacts$ = this.route.paramMap.pipe(
                map(paramMap => paramMap.get('activeCategory')),
                map(activeCategory => {
                  switch (activeCategory) {
                    case 'activos': {
                      this.activeCategory = activeCategory;
                   return  this.persona.filter(c => c.c_Estado === 1);
                    }
                    case 'inactivos': {
                      this.activeCategory = activeCategory;
                      return this.persona.filter(c => c.c_Estado === 2);
                    }
                    default: {
                      return this.persona;
                    }
                  }
                })

              );
            }else{
              this.snackBar.open("Codigo de Error: "+response.transaccion_Estado+" "+ "Mensje: "+response.transaccion_Mensaje, "Cerrar", {
                duration: 4000,
                panelClass: ["red-snackbar"]
              });
            }
          });
        }
      });
    }

    onToggleChange(event: any): void {
      if (this.activeCategory == 'activos') {
        this.CrearUsuariosService.estado = 1;
        this.router.navigate(['/apps/Cliente/table']);
      } else if(event.checked &&  this.activeCategory == 'inactivos'){
        this.CrearUsuariosService.estado = 2;
        this.router.navigate(['/apps/Cliente/table']);
      }

    }


  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.checkScreenSize();
  // }

  // private checkScreenSize() {
  //   if (window.innerWidth > 768) {
  //     this.router.navigate(['/apps/persona/table']); 
  //   }
  // }
}
