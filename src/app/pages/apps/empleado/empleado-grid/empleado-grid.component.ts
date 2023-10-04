import { Component, OnInit,ViewChild,Renderer2, ElementRef,HostListener } from '@angular/core';
import { Link } from '../../../../../@vex/interfaces/link.interface';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { EmpleadoEditComponent } from '../components/empleado-edit/empleado-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadoData } from '../interfaces/listar_empleado.interface';
import {  of, Observable } from 'rxjs';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CrearUsuariosService } from 'src/app/Service/GetPersona.service';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import jwt_decode from "jwt-decode";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { timeStamp } from 'console';

export function trackById<T extends { c_Id_Persona: string | number }>(index: number, item: T) {
  return item.c_Id_Persona;
}

@Component({
  selector: 'vex-contacts-grid',
  templateUrl: './empleado-grid.component.html',
  styleUrls: ['./empleado-grid.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class EmpleadoGridComponent implements OnInit {

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  c_Id_UsuarioModificacion: string;
  titulo: string;
  estado: number = 1;
  empleado: EmpleadoData[] = [];
  razon: string;

  buscar() {
    const searchTerm = this.searchInput.nativeElement.value.toLowerCase();
  
    // Realiza el filtrado basado en searchTerm
    if (searchTerm) {
      const filteredEmpleado = this.empleado.filter(item => {
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
           return  filteredEmpleado.filter(c => c.c_Estado === 1);
            }
    
            case 'inactivos': {
              this.activeCategory = activeCategory;
              return filteredEmpleado.filter(c => c.c_Estado === 2);
            }
    
            default: {
              return filteredEmpleado;
            }
          }
        })
        
      );
     
    } else {
      
    }
  }
  filteredContacts$: Observable<EmpleadoData[]> = of([]);
  loadingData = true;
  activeCategory = 'activos';
  tableData = this.empleado;



  // contacts = EmpleadoDatas;
  // filteredContacts$ = this.route.paramMap.pipe(
  //   map(paramMap => paramMap.get('activeCategory')),
  //   map(activeCategory => {
  //     switch (activeCategory) {
  //       case 'all': {
  //         return EmpleadoDatas;
  //       }

  //       case 'starred': {
  //         return EmpleadoDatas.filter(c => c.c_Estado === 1);
  //       }

  //       default: {
  //         return [];
  //       }
  //     }
  //   })
  // );

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
              private snackBar: MatSnackBar,
             ) { }

  ngOnInit() {
    this.obtenerTablaData();
  }


  obtenerTablaData() {

    this.CrearUsuariosService.getEmpleado("").subscribe((response: any) => {
    this.empleado = response.response;
    this.tableData = this.empleado.filter(c => c.c_Estado === this.estado);
    
    this.filteredContacts$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('activeCategory')),
      map(activeCategory => {
        switch (activeCategory) {
          
          case 'activos': {
            this.activeCategory = activeCategory;
         return  this.empleado.filter(c => c.c_Estado === 1);
          }
  
          case 'inactivos': {
            this.activeCategory = activeCategory;
            return this.empleado.filter(c => c.c_Estado === 2);
          }
  
          default: {
            return this.empleado;
          }
        }
      })
      
    );
  
  });
  
   }
  openContact(id?: EmpleadoData['c_Id_Persona']) {
    this.dialog.open(EmpleadoEditComponent, {
      data: id || null,
      width: '70rem'
    });
  }


  toggleStar(c_Id_Persona: EmpleadoData['c_Id_Persona']) {
    const contact = this.empleado.find(c => c.c_Id_Persona === c_Id_Persona);
 
    const token = localStorage.getItem("token"); 
    const decodedToken: any = jwt_decode(token);
    const idUsuario = decodedToken.IdUsuario;
    this.c_Id_UsuarioModificacion = idUsuario;


    if(this.activeCategory == 'activos'){
      this.titulo = "¿Estás seguro que deseas desactivar el empleado?";
      this.razon = "Razon por la cual se desactiva el registro";
      this.estado = 1;
          
    }else{
      this.titulo = '¿Estás seguro de que deseas activar el empleado?';
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
        this.CrearUsuariosService.CambiarEstadoEmpleado(c_Id_Persona,contact.c_Id_Usuario,this.c_Id_UsuarioModificacion,result).subscribe((response) => {
          console.log(response);
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
                 return  this.empleado.filter(c => c.c_Estado === 1);
                  }
          
                  case 'inactivos': {
                    this.activeCategory = activeCategory;
                    return this.empleado.filter(c => c.c_Estado === 2);
                  }
          
                  default: {
                    return this.empleado;
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
      this.CrearUsuariosService.estado = 1;
      this.router.navigate(['/apps/empleado/table']);
    } else if(event.checked &&  this.activeCategory == 'inactivos'){
      this.CrearUsuariosService.estado = 2;
      this.router.navigate(['/apps/empleado/table']);
    }
  }

}
