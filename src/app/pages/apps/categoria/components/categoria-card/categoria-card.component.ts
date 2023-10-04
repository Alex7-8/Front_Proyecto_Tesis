import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoriaData} from '../../interfaces/categoria.interface';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './categoria-card.component.html',
  styleUrls: ['./categoria-card.component.scss']
})
export class CategoriaCardComponent implements OnInit {

  @Input() contact: CategoriaData;
  @Output() openContact = new EventEmitter<CategoriaData['c_Id_Categoria']>();
  @Output() toggleStar = new EventEmitter<CategoriaData['c_Id_Categoria']>();

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: CategoriaData['c_Id_Categoria']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
