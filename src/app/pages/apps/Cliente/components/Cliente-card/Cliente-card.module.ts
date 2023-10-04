import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCardComponent } from './Cliente-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [ClienteCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [ClienteCardComponent]
})
export class ClienteCardModule {
}
