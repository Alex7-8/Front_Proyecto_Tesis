import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoData} from '../../interfaces/producto.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.scss']
})
export class ProductoCardComponent implements OnInit {

  @Input() contact: ProductoData;
  @Output() openContact = new EventEmitter<ProductoData['c_Id_Producto']>();
  @Output() toggleStar = new EventEmitter<ProductoData['c_Id_Producto']>();

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: ProductoData['c_Id_Producto']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
