import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaTableRoutingModule } from './Factura_table.routing.module';
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
import { FacturaTableComponent } from './Factura_table.component';
import { FacturaDataTableComponent } from './Factura-data-table/Factura_data_table.component';
import { FacturaEditModule } from '../components/Factura-edit/Factura-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FacturaTableMenuComponent } from './Factura-table-menu/Factura_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [FacturaTableComponent, FacturaDataTableComponent, FacturaTableMenuComponent],
  imports: [
    CommonModule,
    FacturaTableRoutingModule,
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
    FacturaEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule

  ]
})
export class FacturaTableModule {
}
