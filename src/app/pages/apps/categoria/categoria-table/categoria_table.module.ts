import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaTableRoutingModule } from './categoria_table.routing.module';
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
import { CategoriaTableComponent } from './categoria_table.component';
import { CategoriaDataTableComponent } from './categoria-data-table/categoria_data_table.component';
import { CategoriaEditModule } from '../components/categoria-edit/categoria-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriaTableMenuComponent } from './categoria-table-menu/categoria_menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [CategoriaTableComponent, CategoriaDataTableComponent, CategoriaTableMenuComponent],
  imports: [
    CommonModule,
    CategoriaTableRoutingModule,
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
    CategoriaEditModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule

  ]
})
export class CategoriaTableModule {
}
