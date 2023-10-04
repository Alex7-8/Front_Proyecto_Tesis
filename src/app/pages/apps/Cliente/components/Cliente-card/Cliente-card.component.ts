import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClienteData} from '../../interfaces/Cliente.interface';
import { EmpleadoDatas } from '../../../../../../static-data/Empleado';
import {ClienteGridComponent} from '../../Cliente-grid/Cliente-grid.component';
import { privateDecrypt } from 'crypto';
import { MatDialog } from '@angular/material/dialog';
import { ClienteEditComponent } from '../../components/Cliente-edit/Cliente-edit.component';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './Cliente-card.component.html',
  styleUrls: ['./Cliente-card.component.scss']
})
export class ClienteCardComponent implements OnInit {
  //tableData: PersonaData[] = [];
  @Input() contact: ClienteData;
  @Output() OpenContact = new EventEmitter<ClienteData['c_Id_Persona']>();
  @Output() toggleStar = new EventEmitter<ClienteData['c_Id_Persona']>();
  @Input() searchStr: string;

  constructor(
    private dialog: MatDialog,
    private pgc:ClienteGridComponent
  ) {
    
   }

  ngOnInit() {
  // this.tableData = this.pgc.tableData;
   //console.log(this.pgc.contacts);

  }



 


  emitToggleStar(event: MouseEvent, contactId: ClienteData['c_Id_Persona']  ) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
    //console.log(contactId);
  }
}
