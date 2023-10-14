import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoGridRoutingModule } from './empleado-grid-routing.module';
import { EmpleadoGridComponent } from './empleado-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { EmpleadoEditModule } from '../components/empleado-edit/empleado-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EmpleadoCardModule } from '../components/empleado-card/empleado-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [EmpleadoGridComponent],
  imports: [
    CommonModule,
    EmpleadoGridRoutingModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    EmpleadoEditModule,
    MatIconModule,
    MatTooltipModule,
    EmpleadoCardModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,

  ]
})
export class EmpleadoGridModule {
}
