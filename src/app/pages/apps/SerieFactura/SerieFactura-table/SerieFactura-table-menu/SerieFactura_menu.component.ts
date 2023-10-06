import { Component, EventEmitter, Input, OnInit, Output,Renderer2, HostListener } from '@angular/core';
import { CrearUsuariosService } from 'src/app/Service/GetPersona.service';
import { SerieFacturaData} from '../../interfaces/SerieFactura.interface';
import { fadeInRight400ms } from '../../../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../../../@vex/animations/stagger.animation';
import { BehaviorSubject } from 'rxjs';
import { SerieFacturaTableComponent } from '../SerieFactura_table.component';
import { Router } from '@angular/router';

export interface SerieFacturaTableMenu {
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
  templateUrl: './SerieFactura_menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class SerieFacturaTableMenuComponent implements OnInit {
  Categoria: SerieFacturaData[] = [];
  @Input() items: SerieFacturaTableMenu[] = [
    
    {
      type: 'link',
      id: 'Activo',
      icon: 'mat:label',
      label: 'Categorias Activas',
      classes: {
        icon: 'text-green'
      }
    },
    {
      type: 'link',
      id: 'Inactivo',
      icon: 'mat:label',
      label: 'Categorias Inactivas',
      classes: {
        icon: 'text-gray'
      }
    },
  ];

  @Output() filterChange = new EventEmitter<SerieFacturaData[]>();
  @Output() openAddNew = new EventEmitter<void>();

  activeCategory: SerieFacturaTableMenu['id'] = 'all';
  private tablaDataSubject = new BehaviorSubject<any[]>([]);
  tablaData$ = this.tablaDataSubject.asObservable();

  constructor(private CrearUsuariosService:CrearUsuariosService,
              private em:SerieFacturaTableComponent,
              private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    
   
  }

  
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.checkScreenSize();
  // }


  onToggleChange(event: any): void {
     
    if (event.checked  &&  this.em.activeCategory == 'Activo') {
    
      this.router.navigate(['/apps/SerieFactura/grid/activos']);
      this.em.activeCategory = 'Activo';
    } else if (event.checked  &&  this.em.activeCategory == 'Inactivo') {
      this.router.navigate(['/apps/SerieFactura/grid/inactivos']);

    }
  }


  
  setFilter(category:SerieFacturaTableMenu['id']) {
     this.activeCategory = category;
     
     if (category === 'Activo') {
      this.em.activeCategory = 'Activo';
      this.em.tableData = this.em.Categoria.filter(c => c.c_Estado === 1);

    }
    
    if (category === 'Inactivo') {
      this.em.activeCategory = 'Inactivo';
      this.em.tableData = this.em.Categoria.filter(c => c.c_Estado === 2);
    }
  }

  isActive(category: SerieFacturaTableMenu['id']) {
    return this.activeCategory === category;
  }
}
