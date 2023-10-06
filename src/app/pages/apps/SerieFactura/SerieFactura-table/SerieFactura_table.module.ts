import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerieFacturaTableRoutingModule } from './SerieFactura_table.routing.module';
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
import { SerieFacturaTableComponent } from './SerieFactura_table.component';
import { SerieFacturaDataTableComponent } from './SerieFactura-data-table/SerieFactura_data_table.component';
import { SerieFacturaEditModule } from '../components/SerieFactura-edit/SerieFactura-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SerieFacturaTableMenuComponent } from './SerieFactura-table-menu/SerieFactura_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [SerieFacturaTableComponent, SerieFacturaDataTableComponent, SerieFacturaTableMenuComponent],
  imports: [
    CommonModule,
    SerieFacturaTableRoutingModule,
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
    SerieFacturaEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule

  ]
})
export class SerieFacturaTableModule {
}
