import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioGridRoutingModule } from './servicio-grid-routing.module';
import { ServicioGridComponent } from './servicio-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ServicioEditModule } from '../components/servicio-edit/servicio-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ServicioCardModule } from '../components/servicio-card/servicio-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [ServicioGridComponent],
  imports: [
    CommonModule,
    ServicioGridRoutingModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    ServicioEditModule,
    MatIconModule,
    MatTooltipModule,
    ServicioCardModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,

  ]
})
export class ServicioGridModule {
}
