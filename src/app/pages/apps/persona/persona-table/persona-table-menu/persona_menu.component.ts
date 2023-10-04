import { Component, EventEmitter, Input, OnInit, Output,Renderer2, HostListener } from '@angular/core';
import { CrearUsuariosService } from 'src/app/Service/GetPersona.service';
import { PersonaData} from '../../interfaces/persona.interface';
import { fadeInRight400ms } from '../../../../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../../../../@vex/animations/stagger.animation';
import { BehaviorSubject } from 'rxjs';
import { PersonaTableComponent } from '../persona_table.component';
import { Router } from '@angular/router';

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
  templateUrl: './persona_menu.component.html',
  animations: [fadeInRight400ms, stagger40ms]
})
export class PersonaTableMenuComponent implements OnInit {
  empleado: PersonaData[] = [];
  @Input() items: ContactsTableMenu[] = [
    
    {
      type: 'link',
      id: 'Activo',
      icon: 'mat:label',
      label: 'Activos',
      classes: {
        icon: 'text-green'
      }
    },
    {
      type: 'link',
      id: 'Inactivo',
      icon: 'mat:label',
      label: 'Inactivos',
      classes: {
        icon: 'text-gray'
      }
    },
  ];

  @Output() filterChange = new EventEmitter<PersonaData[]>();
  @Output() openAddNew = new EventEmitter<void>();

  activeCategory: ContactsTableMenu['id'] = 'all';
  private tablaDataSubject = new BehaviorSubject<any[]>([]);
  tablaData$ = this.tablaDataSubject.asObservable();

  constructor(private CrearUsuariosService:CrearUsuariosService,
              private PTC:PersonaTableComponent,
              private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    
   
  }

  onToggleChange(event: any): void {
     
    if (event.checked  &&  this.PTC.activeCategory == 'Activo') {
    
      this.router.navigate(['/apps/persona/grid/activos']);
      this.PTC.activeCategory = 'Activo';
    } else if (event.checked  &&  this.PTC.activeCategory == 'Inactivo') {
      this.router.navigate(['/apps/persona/grid/inactivos']);

    }
  }

  setFilter(category: ContactsTableMenu['id']) {
     this.activeCategory = category;
    
     if (category === 'Activo') {
      this.PTC.activeCategory = 'Activo';
      this.PTC.tableData  = this.PTC.persona.filter(c => c.c_Estado === 1);

    }
    
    if (category === 'Inactivo') {
      this.PTC.activeCategory = 'Inactivo';
      this.PTC.tableData  = this.PTC.persona.filter(c => c.c_Estado === 2);
    }
  }

  isActive(category: ContactsTableMenu['id']) {
    return this.activeCategory === category;
  }
}
