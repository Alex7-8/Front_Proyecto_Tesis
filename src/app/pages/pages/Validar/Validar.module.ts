import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Validar } from './Validar-routing.module';
import { ValidarComponent } from './Validar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Asegúrate de importar MatSnackBarModule



@NgModule({
  declarations: [ValidarComponent],
  imports: [
    CommonModule,
    Validar,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ]
})
export class ValidarModule {
}
