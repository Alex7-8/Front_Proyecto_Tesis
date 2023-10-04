import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicioData} from '../../interfaces/servicio.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './servicio-card.component.html',
  styleUrls: ['./servicio-card.component.scss']
})
export class ServicioCardComponent implements OnInit {

  @Input() contact: ServicioData;
  @Output() openContact = new EventEmitter<ServicioData['c_Id_Servicio']>();
  @Output() toggleStar = new EventEmitter<ServicioData['c_Id_Servicio']>();

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: ServicioData['c_Id_Servicio']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
