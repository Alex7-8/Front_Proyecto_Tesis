import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsTableRoutingModule } from './listar_empleado_table.routing.module';
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
import { ListarEmpleadoTableComponent } from './listar_empleado_table.component';
import { ListarEmpleadosDataTableComponent } from './contacts-data-table/listar_empleados_data_table.component';
import { ContactsEditModule } from '../components/contacts-edit/contacts-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarEmpleadoTableMenuComponent } from './contacts-table-menu/listar_empleado_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [ListarEmpleadoTableComponent, ListarEmpleadosDataTableComponent, ListarEmpleadoTableMenuComponent],
  imports: [
    CommonModule,
    ContactsTableRoutingModule,

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
    ContactsEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,

  ]
})
export class ListarEmpleadoTableModule {
}
