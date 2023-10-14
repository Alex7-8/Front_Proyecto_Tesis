import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FacturaServiciosData} from '../../interfaces/FacturaServicios.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './FacturaServicios-card.component.html',
  styleUrls: ['./FacturaServicios-card.component.scss']
})
export class FacturaServiciosCardComponent implements OnInit {

  @Input() contact: FacturaServiciosData;
  @Output() openContact = new EventEmitter<FacturaServiciosData['c_Id_Factura']>();
  @Output() toggleStar = new EventEmitter<FacturaServiciosData['c_Id_Factura']>();

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: FacturaServiciosData['c_Id_Factura']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
