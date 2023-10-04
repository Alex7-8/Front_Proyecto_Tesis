import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaCardComponent } from './marca-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [MarcaCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [MarcaCardComponent]
})
export class MarcaCardModule {
}
