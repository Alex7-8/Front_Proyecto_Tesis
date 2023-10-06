import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieFacturaGridRoutingModule } from './SerieFactura-grid-routing.module';
import { SerieFacturaGridComponent } from './SerieFactura-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SerieFacturaEditModule } from '../components/SerieFactura-edit/SerieFactura-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SerieFacturaCardModule } from '../components/SerieFactura-card/SerieFactura-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [SerieFacturaGridComponent],
  imports: [
    CommonModule,
    SerieFacturaGridRoutingModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    SerieFacturaEditModule,
    MatIconModule,
    MatTooltipModule,
    SerieFacturaCardModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,

  ]
})
export class SerieFacturaGridModule {
}
