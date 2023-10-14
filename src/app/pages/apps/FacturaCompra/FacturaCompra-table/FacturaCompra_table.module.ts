import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaCompraTableRoutingModule } from './FacturaCompra_table.routing.module';
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
import { FacturaCompraTableComponent } from './FacturaCompra_table.component';
import { FacturaCompraDataTableComponent } from './FacturaCompra-data-table/FacturaCompra_data_table.component';
import { FacturaCompraEditModule } from '../components/FacturaCompra-edit/FacturaCompra-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FacturaCompraTableMenuComponent } from './FacturaCompra-table-menu/FacturaCompra_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [FacturaCompraTableComponent, FacturaCompraDataTableComponent,FacturaCompraTableMenuComponent],
  imports: [
    CommonModule,
   FacturaCompraTableRoutingModule,
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
   FacturaCompraEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule

  ]
})
export class FacturaCompraTableModule {
}
