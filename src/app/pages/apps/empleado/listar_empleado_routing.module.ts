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
        loadChildren: () => import('./contacts-grid/contacts-grid.module').then(m => m.ContactsGridModule)
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
