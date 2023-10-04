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
        loadChildren: () => import('./Cliente-table/Cliente_table.module').then(m => m.ClienteTableModule)
      },
      {
        path: 'grid',
        loadChildren: () => import('./Cliente-grid/Cliente-grid.module').then(m => m.ClienteGridModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ClienteRoutingModule {
}
