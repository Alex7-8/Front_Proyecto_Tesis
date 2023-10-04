import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaGridRoutingModule } from './Factura-grid-routing.module';
import { FacturaGridComponent } from './Factura-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FacturaEditModule } from '../components/Factura-edit/Factura-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FacturaCardModule } from '../components/Factura-card/Factura-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [FacturaGridComponent],
  imports: [
    CommonModule,
    FacturaGridRoutingModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    FacturaEditModule,
    MatIconModule,
    MatTooltipModule,
    FacturaCardModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,

  ]
})
export class FacturaGridModule {
}
