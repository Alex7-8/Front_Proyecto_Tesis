import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmpleadoData} from '../../interfaces/persona.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './contacts-card.component.html',
  styleUrls: ['./contacts-card.component.scss']
})
export class ContactsCardComponent implements OnInit {

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
