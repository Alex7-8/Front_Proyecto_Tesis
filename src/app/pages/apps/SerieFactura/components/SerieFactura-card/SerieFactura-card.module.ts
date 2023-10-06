import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieFacturaCardComponent } from './SerieFactura-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [SerieFacturaCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [SerieFacturaCardComponent]
})
export class SerieFacturaCardModule {
}
