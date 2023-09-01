import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrearUsuariosService } from 'src/app/Service/CrearUsuarios.service';
import { EmpleadoData} from '../../interfaces/listar_empleado.interface';
import { fadeInRight400ms } from '../../../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../../../@vex/animations/stagger.animation';
import { BehaviorSubject } from 'rxjs';
import { ListarEmpleadoTableComponent } from '../listar_empleado_table.component';

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
  templateUrl: './listar_empleado_menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class ListarEmpleadoTableMenuComponent implements OnInit {
  empleado: EmpleadoData[] = [];
  @Input() items: ContactsTableMenu[] = [
    
    {
      type: 'link',
      id: 'Activo',
      icon: 'mat:label',
      label: 'Empleados Activos',
      classes: {
        icon: 'text-green'
      }
    },
    {
      type: 'link',
      id: 'Inactivo',
      icon: 'mat:label',
      label: 'Empleados Inactivos',
      classes: {
        icon: 'text-gray'
      }
    },
  ];

  @Output() filterChange = new EventEmitter<EmpleadoData[]>();
  @Output() openAddNew = new EventEmitter<void>();

  activeCategory: ContactsTableMenu['id'] = 'all';
  private tablaDataSubject = new BehaviorSubject<any[]>([]);
  tablaData$ = this.tablaDataSubject.asObservable();

  constructor(private CrearUsuariosService:CrearUsuariosService,
              private em:ListarEmpleadoTableComponent) { }

  ngOnInit() {
    
   
  }


  setFilter(category: ContactsTableMenu['id']) {
     this.activeCategory = category;
     console.log(this.empleado)
     if (category === 'Activo') {
      this.filterChange.emit(this.empleado.filter(c => c.c_Estado === 1));
    }
    
    if (category === 'Inactivo') {
      this.filterChange.emit(this.empleado.filter(c => c.c_Estado === 0));
    }

  //   if (category === 'all') {
  //  return this.filterChange.emit(EmpleadoData);
  //   }

    // if (category === 'frequently'
    //   || category === 'family'
    //   || category === 'friends'
    //   || category === 'colleagues'
    //   || category === 'business') {
    //   return this.filterChange.emit([]);
    // }
  }

  isActive(category: ContactsTableMenu['id']) {
    return this.activeCategory === category;
  }
}
