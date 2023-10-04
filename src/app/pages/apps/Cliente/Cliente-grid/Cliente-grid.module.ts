import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteGridRoutingModule } from './Cliente-grid-routing.module';
import { ClienteGridComponent } from './Cliente-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ClienteEditModule } from '../components/Cliente-edit/Cliente-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClienteCardModule } from '../components/Cliente-card/Cliente-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [ClienteGridComponent],
  imports: [
    CommonModule,
    ClienteGridRoutingModule,
    MatTabsModule,

    MatButtonModule,
    MatDialogModule,
    ClienteEditModule,
    MatIconModule,
    MatTooltipModule,
    ClienteCardModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,
  ]
})
export class ClienteGridModule {
}
