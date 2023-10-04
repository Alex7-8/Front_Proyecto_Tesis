import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FacturaData} from '../../interfaces/Factura.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './Factura-card.component.html',
  styleUrls: ['./Factura-card.component.scss']
})
export class FacturaCardComponent implements OnInit {

  @Input() contact: FacturaData;
  @Output() openContact = new EventEmitter<FacturaData['c_Id_Categoria']>();
  @Output() toggleStar = new EventEmitter<FacturaData['c_Id_Categoria']>();

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: FacturaData['c_Id_Categoria']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
