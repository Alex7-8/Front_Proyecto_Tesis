import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { PersonaGridComponent } from './persona-grid.component';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    redirectTo: 'activos',
    pathMatch: 'full'
  },
  {
    path: ':activeCategory',
    component: PersonaGridComponent,
    data: {
      scrollDisabled: true,
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ContactsGridRoutingModule {
}
