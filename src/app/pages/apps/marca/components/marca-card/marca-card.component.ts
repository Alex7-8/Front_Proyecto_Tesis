import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarcaData} from '../../interfaces/marca.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './marca-card.component.html',
  styleUrls: ['./marca-card.component.scss']
})
export class MarcaCardComponent implements OnInit {

  @Input() contact: MarcaData;
  @Output() openContact = new EventEmitter<MarcaData['c_Id_Marca']>();
  @Output() toggleStar = new EventEmitter<MarcaData['c_Id_Marca']>();

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: MarcaData['c_Id_Marca']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
