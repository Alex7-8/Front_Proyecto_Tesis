import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaCardComponent } from './categoria-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [CategoriaCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [CategoriaCardComponent]
})
export class CategoriaCardModule {
}
