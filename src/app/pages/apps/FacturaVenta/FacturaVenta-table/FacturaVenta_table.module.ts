import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaVentaTableRoutingModule } from './FacturaVenta_table.routing.module';
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
import { FacturaVentaTableComponent } from './FacturaVenta_table.component';
import { FacturaVentaDataTableComponent } from './FacturaVenta-data-table/FacturaVenta_data_table.component';
import { FacturaVentaEditModule } from '../components/FacturaVenta-edit/FacturaVenta-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FacturaVentaTableMenuComponent } from './FacturaVenta-table-menu/FacturaVenta_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [FacturaVentaTableComponent, FacturaVentaDataTableComponent, FacturaVentaTableMenuComponent],
  imports: [
    CommonModule,
   FacturaVentaTableRoutingModule,
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
   FacturaVentaEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule

  ]
})
export class FacturaVentaTableModule {
}
