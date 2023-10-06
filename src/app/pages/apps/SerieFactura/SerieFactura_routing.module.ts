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
        loadChildren: () => import('./SerieFactura-grid/SerieFactura-grid.module').then(m => m.SerieFacturaGridModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./SerieFactura-table/SerieFactura_table.module').then(m => m.SerieFacturaTableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class SerieFacturaRoutingModule {
}
