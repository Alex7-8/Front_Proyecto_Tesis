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
        loadChildren: () => import('./Proveedor-table/Proveedor_table.module').then(m => m.ProveedorTableModule)
      },
      {
        path: 'grid',
        loadChildren: () => import('./Proveedor-grid/Proveedor-grid.module').then(m => m.ProveedorGridModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ProveedorRoutingModule {
}
