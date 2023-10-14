import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaServiciosTableRoutingModule } from './FacturaServicios_table.routing.module';
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
import { FacturaServiciosTableComponent } from './FacturaServicios_table.component';
import { FacturaServiciosDataTableComponent } from './FacturaServicios-data-table/FacturaServicios_data_table.component';
import { FacturaServiciosEditModule } from '../components/FacturaServicios-edit/FacturaServicios-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FacturaServiciosTableMenuComponent } from './FacturaServicios-table-menu/FacturaServicios_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [FacturaServiciosTableComponent, FacturaServiciosDataTableComponent, FacturaServiciosTableMenuComponent],
  imports: [
    CommonModule,
   FacturaServiciosTableRoutingModule,
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
   FacturaServiciosEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule

  ]
})
export class FacturaServiciosTableModule {
}
