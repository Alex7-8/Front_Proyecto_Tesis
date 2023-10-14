import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoCardComponent } from './empleado-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [EmpleadoCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [EmpleadoCardComponent]
})
export class EmpleadoCardModule {
}
