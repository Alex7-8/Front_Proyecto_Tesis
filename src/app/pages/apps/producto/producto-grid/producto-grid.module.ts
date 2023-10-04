import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoGridRoutingModule } from './producto-grid-routing.module';
import { ProductoGridComponent } from './producto-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductoEditModule } from '../components/producto-edit/producto-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProductoCardModule } from '../components/producto-card/producto-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [ProductoGridComponent],
  imports: [
    CommonModule,
    ProductoGridRoutingModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    ProductoEditModule,
    MatIconModule,
    MatTooltipModule,
    ProductoCardModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,

  ]
})
export class ProductoGridModule {
}
