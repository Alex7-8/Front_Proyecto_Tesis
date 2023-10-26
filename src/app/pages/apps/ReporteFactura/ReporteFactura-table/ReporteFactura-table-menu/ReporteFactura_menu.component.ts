import { Component, EventEmitter, Input, OnInit, Output,Renderer2, HostListener } from '@angular/core';
import { CrearUsuariosService } from 'src/app/Service/GetPersona.service';
import { ReporteFacturaDiaData} from '../../interfaces/ReporteFactura.interface';
import { fadeInRight400ms } from '../../../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../../../@vex/animations/stagger.animation';
import { BehaviorSubject } from 'rxjs';
import { ReporteFacturaDiaTableComponent } from '../ReporteFactura_table.component';
import { Router } from '@angular/router';
import { GraficaService } from 'src/app/Service/Grafica.service';
export interface ContactsTableMenu {
  type: 'link' | 'subheading';
  id?: 'Activo' | 'Inactivo' | 'all' | 'family' | 'friends' | 'colleagues' | 'business';
  icon?: string;
  label: string;
  classes?: {
    icon?: string;
  };
}

@Component({
  selector: 'vex-contacts-table-menu',
  templateUrl: './ReporteFactura_menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class ReporteFacturaDiaTableMenuComponent implements OnInit {
  Producto: ReporteFacturaDiaData[] = [];

  GananciaPD: string;
  GananciaPM: string;
  GananciaPA: string;
  VentasPD: string;
  
  GananciaSD: string;
  GananciaSM: string;
  GananciaSA: string;


  @Input() items: ContactsTableMenu[] = [
    
    {
      type: 'link',
      id: 'Activo',
      icon: 'mat:label',
      label: 'Facturas Activas',
      classes: {
        icon: 'text-green'
      }
    },
    {
      type: 'link',
      id: 'Inactivo',
      icon: 'mat:label',
      label: 'Facturas Inactivas',
      classes: {
        icon: 'text-gray'
      }
    },
  ];

  @Output() filterChange = new EventEmitter<ReporteFacturaDiaData[]>();
  @Output() openAddNew = new EventEmitter<void>();

  activeCategory: ContactsTableMenu['id'] = 'all';
  private tablaDataSubject = new BehaviorSubject<any[]>([]);
  tablaData$ = this.tablaDataSubject.asObservable();

  constructor(private CrearUsuariosService:CrearUsuariosService,
              private em:ReporteFacturaDiaTableComponent,
              private router: Router, private renderer: Renderer2,
              private graficaService: GraficaService
              ) {


                this.graficaService.getGananciasSDia("").subscribe((data) => {
                  this.GananciaSD = data.response.c_Ganancias;
                 
              });
            
                
              this.graficaService.getGananciasSMes("").subscribe((data) => {
                this.GananciaSM = data.response.c_Ganancias;
             
            });
            
            this.graficaService.getGananciasSAnio("").subscribe((data) => {
              this.GananciaSA = data.response.c_Ganancias;
            
            });
            
            
            
            this.graficaService.getGananciasPDia("").subscribe((data) => {
              this.GananciaPD = data.response.c_Ganancias;
              this.VentasPD = data.response.c_Ventas;
            });
            
            
            this.graficaService.getGananciasPMes("").subscribe((data) => {
              this.GananciaPM = data.response.c_Ganancias;
            
            });
            
            this.graficaService.getGananciasPAnio("").subscribe((data) => {
              this.GananciaPA = data.response.c_Ganancias;
            
            });
               }

  ngOnInit() {
    
 
  }

  
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.checkScreenSize();
  // }


 


  
  setFilter(category: ContactsTableMenu['id']) {
     this.activeCategory = category;
     
    //  if (category === 'Activo') {
    //   this.em.activeCategory = 'Activo';
    //   this.em.tableData = this.em.Servicio.filter(c => c.c_Id_Estado_Factura === 1);

    // }
    
    // if (category === 'Inactivo') {
    //   this.em.activeCategory = 'Inactivo';
    //   this.em.tableData = this.em.Servicio.filter(c => c.c_Id_Estado_Factura === 5);
    // }
  }

  isActive(category: ContactsTableMenu['id']) {
    return this.activeCategory === category;
  }
}
