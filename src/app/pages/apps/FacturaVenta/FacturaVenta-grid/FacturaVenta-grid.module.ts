import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaVentaGridRoutingModule } from './FacturaVenta-grid-routing.module';
import { FacturaVentaGridComponent } from './FacturaVenta-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FacturaVentaEditModule } from '../components/FacturaVenta-edit/FacturaVenta-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FacturaVentaCardModule } from '../components/FacturaVenta-card/FacturaVenta-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [FacturaVentaGridComponent],
  imports: [
    CommonModule,
    FacturaVentaGridRoutingModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    FacturaVentaEditModule,
    MatIconModule,
    MatTooltipModule,
    FacturaVentaCardModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,

  ]
})
export class FacturaVentaGridModule {
}
