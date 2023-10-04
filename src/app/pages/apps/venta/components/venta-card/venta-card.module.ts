import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaCardComponent } from './venta-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [VentaCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [VentaCardComponent]
})
export class VentaCardModule {
}
