import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsGridRoutingModule } from './persona-grid-routing.module';
import { PersonaGridComponent } from './persona-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PersonaEditModule } from '../components/persona-edit/persona-edit.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PersonaCardModule } from '../components/persona-card/persona-card.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [PersonaGridComponent],
  imports: [
    CommonModule,
    ContactsGridRoutingModule,
    MatTabsModule,

    MatButtonModule,
    MatDialogModule,
    PersonaEditModule,
    MatIconModule,
    MatTooltipModule,
    PersonaCardModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,
  ]
})
export class PersonaGridModule {
}
