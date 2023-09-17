import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { SocialComponent } from './social.component';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { ComponentsSlideToggleModule } from '../../../../app/pages/ui/components/components-slide-toggle/components-slide-toggle.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';





@NgModule({
  declarations: [SocialComponent],
  imports: [
    CommonModule,
    SocialRoutingModule,
    PageLayoutModule,
    MatTabsModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatSlideToggleModule,
    ComponentsSlideToggleModule,
    MatTooltipModule
  
  ]
})
export class SocialModule {
}
