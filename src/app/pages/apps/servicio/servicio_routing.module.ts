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
        loadChildren: () => import('./servicio-grid/servicio-grid.module').then(m => m.ServicioGridModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./servicio-table/servicio_table.module').then(m => m.ServicioTableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ServicioRoutingModule {
}
