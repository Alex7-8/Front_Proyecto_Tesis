import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SerieFacturaData} from '../../interfaces/SerieFactura.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './SerieFactura-card.component.html',
  styleUrls: ['./SerieFactura-card.component.scss']
})
export class SerieFacturaCardComponent implements OnInit {

  @Input() contact: SerieFacturaData;
  @Output() openContact = new EventEmitter<SerieFacturaData['c_Id_Serie']>();
  @Output() toggleStar = new EventEmitter<SerieFacturaData['c_Id_Serie']>();

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: SerieFacturaData['c_Id_Serie']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
