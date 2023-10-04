import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteTableRoutingModule } from './Cliente_table.routing.module';
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
import { ClienteTableComponent } from './Cliente_table.component';
import { ClienteDataTableComponent } from './Cliente-data-table/Cliente_data_table.component';
import { ClienteEditModule } from '../components/Cliente-edit/Cliente-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteTableMenuComponent } from './Cliente-table-menu/Cliente_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [ClienteTableComponent, ClienteDataTableComponent, ClienteTableMenuComponent],
  imports: [
    CommonModule,
    ClienteTableRoutingModule,

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
    ClienteEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    ComponentsSlideToggleModule,
    MatSlideToggleModule

  ]
})
export class ClienteTableModule {
}
