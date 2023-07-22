import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-coming-soon',
  templateUrl: './Validar.component.html',
  styleUrls: ['./Validar.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class ValidarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
