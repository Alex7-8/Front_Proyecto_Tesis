import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
 import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [CommonModule, MatDialogModule,FormsModule,MatNativeDateModule,MatIconModule,MatInputModule,MatDividerModule,MatDatepickerModule,ReactiveFormsModule,MatMenuModule,MatButtonModule,MatSelectModule],
  exports: [ConfirmDialogComponent],
})
export class ConfirmDialogModule {}
