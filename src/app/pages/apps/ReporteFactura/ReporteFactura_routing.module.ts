import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      
      {
        path: 'table',
        loadChildren: () => import('./ReporteFactura-table/ReporteFactura_table.module').then(m => m.FacturaVentaTableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class FacturaVentaRoutingModule {
}
