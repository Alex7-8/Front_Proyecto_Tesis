import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaCardComponent } from './Factura-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [FacturaCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [FacturaCardComponent]
})
export class FacturaCardModule {
}
