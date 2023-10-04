import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorGridRoutingModule } from './Proveedor-grid-routing.module';
import { ProveedorGridComponent } from './Proveedor-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ProveedorEditModule } from '../components/Proveedor-edit/Proveedor-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProveedorCardModule } from '../components/Proveedor-card/Proveedor-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [ProveedorGridComponent],
  imports: [
    CommonModule,
    ProveedorGridRoutingModule,
    MatTabsModule,

    MatButtonModule,
    MatDialogModule,
    ProveedorEditModule,
    MatIconModule,
    MatTooltipModule,
    ProveedorCardModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,
  ]
})
export class ProveedorGridModule {
}
