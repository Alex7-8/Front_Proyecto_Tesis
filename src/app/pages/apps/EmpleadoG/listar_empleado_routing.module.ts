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
        loadChildren: () => import('./empleado-grid/empleado-grid.module').then(m => m.EmpleadoGridModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./empleado-table/listar_empleado_table.module').then(m => m.ListarEmpleadoTableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ListarEmpleadoRoutingModule {
}
