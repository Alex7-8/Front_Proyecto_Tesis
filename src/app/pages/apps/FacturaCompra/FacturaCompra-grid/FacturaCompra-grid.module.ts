import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaCompraGridRoutingModule } from './FacturaCompra-grid-routing.module';
import { FacturaCompraGridComponent } from './FacturaCompra-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FacturaCompraEditModule } from '../components/FacturaCompra-edit/FacturaCompra-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FacturaCompraCardModule } from '../components/FacturaCompra-card/FacturaCompra-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [FacturaCompraGridComponent],
  imports: [
    CommonModule,
    FacturaCompraGridRoutingModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    FacturaCompraEditModule,
    MatIconModule,
    MatTooltipModule,
    FacturaCompraCardModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,

  ]
})
export class FacturaCompraGridModule {
}
