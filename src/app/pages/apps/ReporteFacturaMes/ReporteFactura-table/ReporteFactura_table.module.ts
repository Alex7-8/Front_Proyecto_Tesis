import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteFacturaDiaTableRoutingModule } from './ReporteFactura_table.routing.module';
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
import { ReporteFacturaDiaTableComponent } from './ReporteFactura_table.component';
import { ReporteFacturaDiaDataTableComponent } from './ReporteFactura-data-table/ReporteFactura_data_table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReporteFacturaDiaTableMenuComponent } from './ReporteFactura-table-menu/ReporteFactura_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [ReporteFacturaDiaTableComponent, ReporteFacturaDiaDataTableComponent, ReporteFacturaDiaTableMenuComponent],
  imports: [
    CommonModule,
    ReporteFacturaDiaTableRoutingModule,
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

    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatSelectModule
    

  ]
})
export class FacturaVentaTableModule {
}
