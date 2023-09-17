import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaCardComponent } from './persona-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [PersonaCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [PersonaCardComponent]
})
export class PersonaCardModule {
}
