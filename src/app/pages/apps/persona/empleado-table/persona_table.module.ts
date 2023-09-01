import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaTableRoutingModule } from './persona_table.routing.module';
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
import { PersonaTableComponent } from './persona_table.component';
import { PersonaDataTableComponent } from './contacts-data-table/persona_data_table.component';
import { PersonaEditModule } from '../components/contacts-edit/persona-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonaTableMenuComponent } from './contacts-table-menu/persona_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [PersonaTableComponent, PersonaDataTableComponent, PersonaTableMenuComponent],
  imports: [
    CommonModule,
    PersonaTableRoutingModule,

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
    PersonaEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,

  ]
})
export class PersonaTableModule {
}
