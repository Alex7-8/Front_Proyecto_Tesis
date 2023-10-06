import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaVentaRoutingModule } from './FacturaVenta-routing.module';
import { FacturaVentaComponent } from './FacturaVenta.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [FacturaVentaComponent],
  imports: [
    CommonModule,
    FacturaVentaRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSlideToggleModule
    
  ]
})
export class FacturaVentaModule {
}
