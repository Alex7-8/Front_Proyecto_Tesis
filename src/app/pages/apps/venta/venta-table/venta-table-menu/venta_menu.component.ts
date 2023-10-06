import { Component, EventEmitter, Input, OnInit, Output,Renderer2, HostListener } from '@angular/core';
import { CrearUsuariosService } from 'src/app/Service/GetPersona.service';
import { VentaData} from '../../interfaces/venta.interface';
import { fadeInRight400ms } from '../../../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../../../@vex/animations/stagger.animation';
import { BehaviorSubject } from 'rxjs';
import { VentaTableComponent } from '../venta_table.component';
import { Router } from '@angular/router';
import { UntypedFormBuilder,FormControl,FormGroup, Validators,UntypedFormGroup, ReactiveFormsModule, FormArray, FormBuilder,AbstractControl } from '@angular/forms';













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
  templateUrl: './venta_menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class VentaTableMenuComponent implements OnInit {
  Venta: VentaData[] = [];

  @Input() items: ContactsTableMenu[] = [
    
    {
      type: 'link',
      id: 'Activo',
      icon: 'mat:label',
      label: 'Productos Activos',
      classes: {
        icon: 'text-green'
      }
    },
    {
      type: 'link',
      id: 'Inactivo',
      icon: 'mat:label',
      label: 'Productos Inactivos',
      classes: {
        icon: 'text-gray'
      }
    },
  ];

  @Output() filterChange = new EventEmitter<VentaData[]>();
  @Output() openAddNew = new EventEmitter<void>();

  activeCategory: ContactsTableMenu['id'] = 'all';
  private tablaDataSubject = new BehaviorSubject<any[]>([]);
  tablaData$ = this.tablaDataSubject.asObservable();

  constructor(private CrearUsuariosService:CrearUsuariosService,
              private em:VentaTableComponent,
              private router: Router, private renderer: Renderer2,
             
              ) { }

  ngOnInit() {
    
    

   
  }

  
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.checkScreenSize();
  // }


  onToggleChange(event: any): void {
     
    if (event.checked  &&  this.em.activeCategory == 'Activo') {
    
      this.router.navigate(['/apps/producto/grid/activos']);
      this.em.activeCategory = 'Activo';
    } else if (event.checked  &&  this.em.activeCategory == 'Inactivo') {
      this.router.navigate(['/apps/producto/grid/inactivos']);

    }
  }


  
  setFilter(category: ContactsTableMenu['id']) {
     this.activeCategory = category;
     
     if (category === 'Activo') {
      this.em.activeCategory = 'Activo';
  //    this.em.tableData = this.em.Servicio.filter(c => c.c_Estado === 1);

    }
    
    if (category === 'Inactivo') {
      this.em.activeCategory = 'Inactivo';
    //  this.em.tableData = this.em.Servicio.filter(c => c.c_Estado === 2);
    }
  }

  isActive(category: ContactsTableMenu['id']) {
    return this.activeCategory === category;
  }
}
