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
        loadChildren: () => import('./persona-table/persona_table.module').then(m => m.PersonaTableModule)
      },
      {
        path: 'grid',
        loadChildren: () => import('./persona-grid/persona-grid.module').then(m => m.PersonaGridModule)
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
