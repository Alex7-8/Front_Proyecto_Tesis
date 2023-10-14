import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaCompraCardComponent } from './FacturaCompra-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [FacturaCompraCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [FacturaCompraCardComponent]
})
export class FacturaCompraCardModule {
}
