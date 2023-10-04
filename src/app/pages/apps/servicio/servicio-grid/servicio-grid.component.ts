import { Component, OnInit,ViewChild,Renderer2, ElementRef,HostListener } from '@angular/core';
import { Link } from '../../../../../@vex/interfaces/link.interface';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { ServicioEditComponent } from '../components/servicio-edit/servicio-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { ServicioData } from '../interfaces/servicio.interface';
import {  of, Observable } from 'rxjs';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ServicioService } from 'src/app/Service/Servicio.service';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import jwt_decode from "jwt-decode";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { timeStamp } from 'console';

export function trackById<T extends { c_Id_Servicio: string | number }>(index: number, item: T) {
  return item.c_Id_Servicio;
}

@Component({
  selector: 'vex-contacts-grid',
  templateUrl: './servicio-grid.component.html',
  styleUrls: ['./servicio-grid.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class ServicioGridComponent implements OnInit {

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  c_Id_UsuarioModificacion: string;
  titulo: string;
  estado: number = 1;
  Servicio: ServicioData[] = [];
  razon: string;

  buscar() {
    const searchTerm = this.searchInput.nativeElement.value.toLowerCase();
  
    // Realiza el filtrado basado en searchTerm
    if (searchTerm) {
      const filteredServicio = this.Servicio.filter(item => {
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
           return  filteredServicio.filter(c => c.c_Estado === 1);
            }
    
            case 'inactivos': {
              this.activeCategory = activeCategory;
              return filteredServicio.filter(c => c.c_Estado === 2);
            }
    
            default: {
              return filteredServicio;
            }
          }
        })
        
      );
     
    } else {
      
    }
  }
  filteredContacts$: Observable<ServicioData[]> = of([]);
  loadingData = true;
  activeCategory = 'activos';
  tableData = this.Servicio;




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
              private ServicioService:ServicioService,
              private router: Router, private renderer: Renderer2,
              private snackBar: MatSnackBar,
             ) { }

  ngOnInit() {
    this.obtenerTablaData();
  }


  obtenerTablaData() {

    this.ServicioService.getMarca("").subscribe((response: any) => {
    this.Servicio = response.response;
    this.tableData = this.Servicio.filter(c => c.c_Estado === this.estado);
    
    this.filteredContacts$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('activeCategory')),
      map(activeCategory => {
        switch (activeCategory) {
          
          case 'activos': {
            this.activeCategory = activeCategory;
         return  this.Servicio.filter(c => c.c_Estado === 1);
          }
  
          case 'inactivos': {
            this.activeCategory = activeCategory;
            return this.Servicio.filter(c => c.c_Estado === 2);
          }
  
          default: {
            return this.Servicio;
          }
        }
      })
      
    );
  
  });
  
   }
  openContact(id?: ServicioData['c_Id_Servicio']) {
    this.dialog.open(ServicioEditComponent, {
      data: id || null,
      width: '45rem'
    });
  }


  toggleStar(c_Id_Servicio: ServicioData['c_Id_Servicio']) {
    const contact = this.Servicio.find(c => c.c_Id_Servicio === c_Id_Servicio);
 
    const token = localStorage.getItem("token"); 
    const decodedToken: any = jwt_decode(token);
    const idUsuario = decodedToken.IdUsuario;
    this.c_Id_UsuarioModificacion = idUsuario;


    if(this.activeCategory == 'activos'){
      this.titulo = "¿Estás seguro que deseas desactivar la marca?";
      this.razon = "Razon por la cual se desactiva el registro";
      this.estado = 1;
          
    }else{
      this.titulo = '¿Estás seguro de que deseas activar la marca?';
      this.razon = "Razon por la cual se activa el registro";
      this.estado = 2;
    }


    console.log(this.titulo,this.activeCategory);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '20rem',
      width: '28rem', 
      data: { title: this.titulo, textAreaValue: '', razon: this.razon,valido: true  }  

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       // console.log('Valor del textarea:', result);
        this.ServicioService.CambiarEstadoServicio(c_Id_Servicio,this.c_Id_UsuarioModificacion,result).subscribe((response) => {
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
                 return  this.Servicio.filter(c => c.c_Estado === 1);
                  }
          
                  case 'inactivos': {
                    this.activeCategory = activeCategory;
                    return this.Servicio.filter(c => c.c_Estado === 2);
                  }
          
                  default: {
                    return this.Servicio;
                  }
                }
              })
              
            );
          }else{
            this.snackBar.open("Codigo de Error: "+response.transaccion_Estado+" "+ "Mensje: "+response.transaccion_Mensaje, "Cerrar", {
              duration: 10000,
              panelClass: ["red-snackbar"]
            });
          }
        });
      }
    });

   
  

  }
 

  onToggleChange(event: any): void {
    if (event.checked &&  this.activeCategory == 'activos') {
      this.ServicioService.estado = 1;
      this.router.navigate(['/apps/servicio/table']);
    } else if(event.checked &&  this.activeCategory == 'inactivos'){
      this.ServicioService.estado = 2;
      this.router.navigate(['/apps/servicio/table']);
    }
  }

}
