import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FacturaVentaData} from '../../interfaces/FacturaVenta.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './FacturaVenta-card.component.html',
  styleUrls: ['./FacturaVenta-card.component.scss']
})
export class FacturaVentaCardComponent implements OnInit {

  @Input() contact: FacturaVentaData;
  @Output() openContact = new EventEmitter<FacturaVentaData['c_Id_Producto']>();
  @Output() toggleStar = new EventEmitter<FacturaVentaData['c_Id_Producto']>();

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: FacturaVentaData['c_Id_Producto']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
