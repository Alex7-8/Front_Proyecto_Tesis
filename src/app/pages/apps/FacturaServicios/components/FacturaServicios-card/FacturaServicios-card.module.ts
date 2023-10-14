import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaServiciosCardComponent } from './FacturaServicios-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [FacturaServiciosCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [FacturaServiciosCardComponent]
})
export class FacturaServiciosCardModule {
}
