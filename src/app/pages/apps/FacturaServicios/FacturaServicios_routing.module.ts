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
        loadChildren: () => import('./FacturaServicios-grid/FacturaServicios-grid.module').then(m => m.FacturaServiciosGridModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./FacturaServicios-table/FacturaServicios_table.module').then(m => m.FacturaServiciosTableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class FacturaServiciosRoutingModule {
}
