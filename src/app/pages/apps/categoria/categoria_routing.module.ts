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
        loadChildren: () => import('./categoria-grid/categoria-grid.module').then(m => m.CategoriaGridModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./categoria-table/categoria_table.module').then(m => m.CategoriaTableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class CategoriaRoutingModule {
}
