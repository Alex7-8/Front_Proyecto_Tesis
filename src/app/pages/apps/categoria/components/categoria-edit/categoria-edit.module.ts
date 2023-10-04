import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoriaEditComponent } from './categoria-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
 import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [CategoriaEditComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSnackBarModule,
   ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    FormsModule,

  ]
})
export class CategoriaEditModule {
}
