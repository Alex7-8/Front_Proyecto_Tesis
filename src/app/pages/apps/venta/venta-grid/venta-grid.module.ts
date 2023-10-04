import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaGridRoutingModule } from './venta-grid-routing.module';
import { VentaGridComponent } from './venta-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { VentaEditModule } from '../components/venta-edit/venta-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VentaCardModule } from '../components/venta-card/venta-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [VentaGridComponent],
  imports: [
    CommonModule,
    VentaGridRoutingModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    VentaEditModule,
    MatIconModule,
    MatTooltipModule,
    VentaCardModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,

  ]
})
export class VentaGridModule {
}
