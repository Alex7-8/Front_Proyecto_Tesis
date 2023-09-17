import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmpleadoData} from '../../interfaces/listar_empleado.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './empleado-card.component.html',
  styleUrls: ['./empleado-card.component.scss']
})
export class EmpleadoCardComponent implements OnInit {

  @Input() contact: EmpleadoData;
  @Output() openContact = new EventEmitter<EmpleadoData['c_Id_Persona']>();
  @Output() toggleStar = new EventEmitter<EmpleadoData['c_Id_Persona']>();

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: EmpleadoData['c_Id_Persona']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
