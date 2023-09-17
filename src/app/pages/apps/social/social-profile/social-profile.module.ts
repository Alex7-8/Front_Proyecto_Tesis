import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialProfileRoutingModule } from './social-profile-routing.module';
import { SocialProfileComponent } from './social-profile.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ComponentsSlideToggleModule } from '../../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';




@NgModule({
  declarations: [SocialProfileComponent],
  exports: [
    SocialProfileComponent
  ],
  imports: [
    CommonModule,
    SocialProfileRoutingModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,  
    ComponentsSlideToggleModule,
    MatSlideToggleModule,
    MatTooltipModule 
   
    
  ]
})
export class SocialProfileModule {
}
