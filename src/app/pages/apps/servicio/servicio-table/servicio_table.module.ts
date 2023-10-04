import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioTableRoutingModule } from './servicio_table.routing.module';
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
import { ServicioTableComponent } from './servicio_table.component';
import { ServicioDataTableComponent } from './servicio-data-table/servicio_data_table.component';
import { ServicioEditModule } from '../components/servicio-edit/servicio-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioTableMenuComponent } from './servicio-table-menu/servicio_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [ServicioTableComponent, ServicioDataTableComponent, ServicioTableMenuComponent],
  imports: [
    CommonModule,
    ServicioTableRoutingModule,
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
    ServicioEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule

  ]
})
export class ServicioTableModule {
}
