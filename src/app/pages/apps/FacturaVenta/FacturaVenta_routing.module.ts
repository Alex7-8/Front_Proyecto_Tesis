import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      {
        path: 'grid',
        loadChildren: () => import('./FacturaVenta-grid/FacturaVenta-grid.module').then(m => m.FacturaVentaGridModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./FacturaVenta-table/FacturaVenta_table.module').then(m => m.FacturaVentaTableModule)
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
