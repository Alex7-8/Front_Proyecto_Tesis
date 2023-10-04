import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaGridRoutingModule } from './marca-grid-routing.module';
import { MarcaGridComponent } from './marca-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MarcaEditModule } from '../components/marca-edit/marca-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MarcaCardModule } from '../components/marca-card/marca-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [MarcaGridComponent],
  imports: [
    CommonModule,
    MarcaGridRoutingModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MarcaEditModule,
    MatIconModule,
    MatTooltipModule,
    MarcaCardModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,

  ]
})
export class MarcaGridModule {
}
