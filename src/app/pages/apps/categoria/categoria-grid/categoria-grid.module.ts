import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaGridRoutingModule } from './categoria-grid-routing.module';
import { CategoriaGridComponent } from './categoria-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoriaEditModule } from '../components/categoria-edit/categoria-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CategoriaCardModule } from '../components/categoria-card/categoria-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [CategoriaGridComponent],
  imports: [
    CommonModule,
    CategoriaGridRoutingModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    CategoriaEditModule,
    MatIconModule,
    MatTooltipModule,
    CategoriaCardModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,

  ]
})
export class CategoriaGridModule {
}
