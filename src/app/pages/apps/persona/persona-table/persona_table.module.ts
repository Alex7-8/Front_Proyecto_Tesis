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
import { PersonaDataTableComponent } from './persona-data-table/persona_data_table.component';
import { PersonaEditModule } from '../components/persona-edit/persona-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonaTableMenuComponent } from './persona-table-menu/persona_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
    ComponentsSlideToggleModule,
    MatSlideToggleModule

  ]
})
export class PersonaTableModule {
}
