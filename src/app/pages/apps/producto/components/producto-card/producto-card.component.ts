import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonaData} from '../../interfaces/persona.interface';
import { EmpleadoDatas } from '../../../../../../static-data/Empleado';
import {PersonaGridComponent} from '../../persona-grid/persona-grid.component';
import { privateDecrypt } from 'crypto';
import { MatDialog } from '@angular/material/dialog';
import { PersonaEditComponent } from '../../components/persona-edit/persona-edit.component';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './persona-card.component.html',
  styleUrls: ['./persona-card.component.scss']
})
export class PersonaCardComponent implements OnInit {
  //tableData: PersonaData[] = [];
  @Input() contact: PersonaData;
  @Output() OpenContact = new EventEmitter<PersonaData['c_Id_Persona']>();
  @Output() toggleStar = new EventEmitter<PersonaData['c_Id_Persona']>();
  @Input() searchStr: string;

  constructor(
    private dialog: MatDialog,
    private pgc: PersonaGridComponent
  ) {
    
   }

  ngOnInit() {
  // this.tableData = this.pgc.tableData;
   //console.log(this.pgc.contacts);

  }



 


  emitToggleStar(event: MouseEvent, contactId: PersonaData['c_Id_Persona']  ) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
    //console.log(contactId);
  }
}
