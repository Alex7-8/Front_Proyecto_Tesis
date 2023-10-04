import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorTableRoutingModule } from './Proveedor_table.routing.module';
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
import { ProveedorTableComponent } from './Proveedor_table.component';
import { ProveedorDataTableComponent } from './Proveedor-data-table/Proveedor_data_table.component';
import { ProveedorEditModule } from '../components/Proveedor-edit/Proveedor-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProveedorTableMenuComponent } from './Proveedor-table-menu/Proveedor_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [ProveedorTableComponent, ProveedorDataTableComponent, ProveedorTableMenuComponent],
  imports: [
    CommonModule,
    ProveedorTableRoutingModule,

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
    ProveedorEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    ComponentsSlideToggleModule,
    MatSlideToggleModule

  ]
})
export class ProveedorTableModule {
}
