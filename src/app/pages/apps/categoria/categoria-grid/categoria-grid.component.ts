import { Component, OnInit,ViewChild,Renderer2, ElementRef,HostListener } from '@angular/core';
import { Link } from '../../../../../@vex/interfaces/link.interface';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { CategoriaEditComponent } from '../components/categoria-edit/categoria-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaData } from '../interfaces/categoria.interface';
import {  of, Observable } from 'rxjs';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MarcaService } from 'src/app/Service/Marca.service';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import jwt_decode from "jwt-decode";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { timeStamp } from 'console';
import { CategoriaService } from 'src/app/Service/Categoria.service'; 

export function trackById<T extends { c_Id_Categoria: string | number }>(index: number, item: T) {
  return item.c_Id_Categoria;
}

@Component({
  selector: 'vex-contacts-grid',
  templateUrl: './categoria-grid.component.html',
  styleUrls: ['./categoria-grid.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class CategoriaGridComponent implements OnInit {

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  c_Id_UsuarioModificacion: string;
  titulo: string;
  estado: number = 1;
  Categoria: CategoriaData[] = [];
  razon: string;

  buscar() {
    const searchTerm = this.searchInput.nativeElement.value.toLowerCase();
  
    // Realiza el filtrado basado en searchTerm
    if (searchTerm) {
      const filteredMarca = this.Categoria.filter(item => {
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
           return  filteredMarca.filter(c => c.c_Estado === 1);
            }
    
            case 'inactivos': {
              this.activeCategory = activeCategory;
              return filteredMarca.filter(c => c.c_Estado === 2);
            }
    
            default: {
              return filteredMarca;
            }
          }
        })
        
      );
     
    } else {
      
    }
  }
  filteredContacts$: Observable<CategoriaData[]> = of([]);
  loadingData = true;
  activeCategory = 'activos';
  tableData = this.Categoria;




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
              private MarcaService:MarcaService,
              private router: Router, private renderer: Renderer2,
              private snackBar: MatSnackBar,
              private CategoriaService:CategoriaService
             ) { }

  ngOnInit() {
    this.obtenerTablaData();
  }


  obtenerTablaData() {

    this.CategoriaService.getCategoria("").subscribe((response: any) => {
    this.Categoria = response.response;
    this.tableData = this.Categoria.filter(c => c.c_Estado === this.estado);
    
    this.filteredContacts$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('activeCategory')),
      map(activeCategory => {
        switch (activeCategory) {
          
          case 'activos': {
            this.activeCategory = activeCategory;
         return  this.Categoria.filter(c => c.c_Estado === 1);
          }
  
          case 'inactivos': {
            this.activeCategory = activeCategory;
            return this.Categoria.filter(c => c.c_Estado === 2);
          }
  
          default: {
            return this.Categoria;
          }
        }
      })
      
    );
  
  });
  
   }
  openContact(id?: CategoriaData['c_Id_Categoria']) {
    this.dialog.open(CategoriaEditComponent, {
      data: id || null,
      width: '45rem'
    });
  }


  toggleStar(c_Id_Categoria: CategoriaData['c_Id_Categoria']) {
    const contact = this.Categoria.find(c => c.c_Id_Categoria === c_Id_Categoria);
 
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
        this.CategoriaService.CambiarEstadoCategoria(c_Id_Categoria,this.c_Id_UsuarioModificacion,result).subscribe((response) => {
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
                 return  this.Categoria.filter(c => c.c_Estado === 1);
                  }
          
                  case 'inactivos': {
                    this.activeCategory = activeCategory;
                    return this.Categoria.filter(c => c.c_Estado === 2);
                  }
          
                  default: {
                    return this.Categoria;
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
      this.MarcaService.estado = 1;
      this.router.navigate(['/apps/categoria/table']);
    } else if(event.checked &&  this.activeCategory == 'inactivos'){
      this.MarcaService.estado = 2;
      this.router.navigate(['/apps/categoria/table']);
    }
  }

}
