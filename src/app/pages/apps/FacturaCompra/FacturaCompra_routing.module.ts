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
        loadChildren: () => import('./FacturaCompra-grid/FacturaCompra-grid.module').then(m => m.FacturaCompraGridModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./FacturaCompra-table/FacturaCompra_table.module').then(m => m.FacturaCompraTableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class FacturaCompraRoutingModule {
}
