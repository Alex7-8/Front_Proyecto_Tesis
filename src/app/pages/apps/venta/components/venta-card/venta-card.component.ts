import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VentaData} from '../../interfaces/venta.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './venta-card.component.html',
  styleUrls: ['./venta-card.component.scss']
})
export class VentaCardComponent implements OnInit {

  @Input() contact: VentaData;
  @Output() openContact = new EventEmitter<VentaData['c_Id_Producto']>();
  @Output() toggleStar = new EventEmitter<VentaData['c_Id_Producto']>();

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: VentaData['c_Id_Producto']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
