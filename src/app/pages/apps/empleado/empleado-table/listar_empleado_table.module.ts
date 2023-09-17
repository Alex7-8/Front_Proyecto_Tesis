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
import { ListarEmpleadosDataTableComponent } from './empleado-data-table/listar_empleados_data_table.component';
import { EmpleadoEditModule } from '../components/empleado-edit/empleado-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarEmpleadoTableMenuComponent } from './empleado-table-menu/listar_empleado_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [ListarEmpleadoTableComponent, ListarEmpleadosDataTableComponent, ListarEmpleadoTableMenuComponent],
  imports: [
    CommonModule,
    ContactsTableRoutingModule,
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
    EmpleadoEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule

  ]
})
export class ListarEmpleadoTableModule {
}
