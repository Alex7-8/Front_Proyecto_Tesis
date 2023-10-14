import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaServiciosGridRoutingModule } from './FacturaServicios-grid-routing.module';
import { FacturaServiciosGridComponent } from './FacturaServicios-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FacturaServiciosEditModule } from '../components/FacturaServicios-edit/FacturaServicios-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FacturaServiciosCardModule } from '../components/FacturaServicios-card/FacturaServicios-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [FacturaServiciosGridComponent],
  imports: [
    CommonModule,
    FacturaServiciosGridRoutingModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    FacturaServiciosEditModule,
    MatIconModule,
    MatTooltipModule,
    FacturaServiciosCardModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,

  ]
})
export class FacturaServiciosGridModule {
}
