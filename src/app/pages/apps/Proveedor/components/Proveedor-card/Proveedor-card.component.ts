import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProveedorData} from '../../interfaces/Proveedor.interface';
import { EmpleadoDatas } from '../../../../../../static-data/Empleado';
import {ProveedorGridComponent} from '../../Proveedor-grid/Proveedor-grid.component';
import { privateDecrypt } from 'crypto';
import { MatDialog } from '@angular/material/dialog';
import { ProveedorEditComponent } from '../../components/Proveedor-edit/Proveedor-edit.component';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './Proveedor-card.component.html',
  styleUrls: ['./Proveedor-card.component.scss']
})
export class ProveedorCardComponent implements OnInit {
  //tableData: PersonaData[] = [];
  @Input() contact: ProveedorData;
  @Output() OpenContact = new EventEmitter<ProveedorData['c_Id_Persona']>();
  @Output() toggleStar = new EventEmitter<ProveedorData['c_Id_Persona']>();
  @Input() searchStr: string;

  constructor(
    private dialog: MatDialog,
    private pgc: ProveedorGridComponent
  ) {
    
   }

  ngOnInit() {
  // this.tableData = this.pgc.tableData;
   //console.log(this.pgc.contacts);

  }



 


  emitToggleStar(event: MouseEvent, contactId: ProveedorData['c_Id_Persona']  ) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
    //console.log(contactId);
  }
}
