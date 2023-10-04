import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorCardComponent } from './Proveedor-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [ProveedorCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [ProveedorCardComponent]
})
export class ProveedorCardModule {
}
