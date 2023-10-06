import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaVentaCardComponent } from './FacturaVenta-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [FacturaVentaCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [FacturaVentaCardComponent]
})
export class FacturaVentaCardModule {
}
