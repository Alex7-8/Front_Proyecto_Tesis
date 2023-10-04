import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoCardComponent } from './producto-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [ProductoCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [ProductoCardComponent]
})
export class ProductoCardModule {
}
