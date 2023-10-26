import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ReporteFacturaDiaTableComponent } from './ReporteFactura_table.component';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: ReporteFacturaDiaTableComponent,
    data: {
      scrollDisabled: true,
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ReporteFacturaDiaTableRoutingModule {
}
