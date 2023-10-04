import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioCardComponent } from './servicio-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [ServicioCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [ServicioCardComponent]
})
export class ServicioCardModule {
}
