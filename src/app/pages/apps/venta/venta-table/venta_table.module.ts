import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaTableRoutingModule } from './venta_table.routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollbarModule } from '../../../../../@vex/components/scrollbar/scrollbar.module';
import { VentaTableComponent } from './venta_table.component';
import { VentaDataTableComponent } from './venta-data-table/venta_data_table.component';
import { VentaEditModule } from '../components/venta-edit/venta-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VentaTableMenuComponent } from './venta-table-menu/venta_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



import { MatAutocompleteModule } from '@angular/material/autocomplete';








@NgModule({
  declarations: [VentaTableComponent, VentaDataTableComponent, VentaTableMenuComponent],
  imports: [
    CommonModule,
    VentaTableRoutingModule,
    ComponentsSlideToggleModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatDialogModule,
    ScrollbarModule,
    VentaEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule
  ]
})
export class VentaTableModule {
}
