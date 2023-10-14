import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FacturaCompraData} from '../../interfaces/FacturaCompra.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './FacturaCompra-card.component.html',
  styleUrls: ['./FacturaCompra-card.component.scss']
})
export class FacturaCompraCardComponent implements OnInit {

  @Input() contact: FacturaCompraData;
  @Output() openContact = new EventEmitter<FacturaCompraData['c_Id_Factura']>();
  @Output() toggleStar = new EventEmitter<FacturaCompraData['c_Id_Factura']>();

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: FacturaCompraData['c_Id_Factura']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
