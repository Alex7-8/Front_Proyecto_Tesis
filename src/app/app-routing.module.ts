import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuard } from '../../src/app/guards/auth.guard';
import { AuthGuardAdmin } from '../../src/app/guards/auth_admin.guard';
import { DashboardAnalyticsComponent } from './dashboards/dashboard-analytics.component';
import {PersonaGridComponent} from './pages/apps/persona/persona-grid/persona-grid.component';
import { PersonaTableComponent } from './pages/apps/persona/persona-table/persona_table.component';

const routes: VexRoutes = [
  {
  path: '',
  component: CustomLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
      
    },
    {
      path: 'dashboards/analytics',
      redirectTo: '/analytics', // Revisa esta redirección, ¿es correcta?
      pathMatch: 'full',
      
    },
  ]
  
  },
  { path: 'table', component: PersonaTableComponent },
  { path: 'cards', component: PersonaGridComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' },


  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule),
  }
  ,
  // {
  //   path: 'register',
  //   loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule),
  // },
  // {
  //   path: 'forgot-password',
  //   loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  // },
  // {
  //   path: 'coming-soon',
  //   loadChildren: () => import('./pages/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  // },

  {
    path: 'Validar',
    loadChildren: () => import('./pages/pages/Validar/Validar.module').then(m => m.ValidarModule)
  },
  {
    path: '',
    component: CustomLayoutComponent,
    canActivate: [AuthGuard] ,
    children: [

      {
        path: 'dashboards',
        redirectTo: '/analytics',
        pathMatch: 'full',
        
      },
      {
        path: 'analytics',
        loadChildren: () => import('./dashboards/dashboard-analytics.module').then(m => m.DashboardAnalyticsModule),
        
        
      },
      {
        path: 'apps',
        children: [
          
         
        
          
         
          {
            path: 'empleado',
            loadChildren: () => import('./pages/apps/empleado/listar_empleado.module').then(m => m.ListarEmpleadoModule),
            canActivate: [AuthGuardAdmin]
          },
          {
            path: 'EmpleadoG',
            loadChildren: () => import('./pages/apps/EmpleadoG/listar_empleado.module').then(m => m.ListarEmpleadoModule)
          },
          {
            path: 'persona',
            loadChildren: () => import('./pages/apps/persona/persona.module').then(m => m.PersonaModule),
            canActivate: [AuthGuardAdmin]
          },
          {
            path: 'Proveedor',
            loadChildren: () => import('./pages/apps/Proveedor/Proveedor.module').then(m => m.ProveedorModule)
          },
          {
            path: 'Cliente',
            loadChildren: () => import('./pages/apps/Cliente/Cliente.module').then(m => m.ClienteModule)
          },
          {
            path: 'marca',
            loadChildren: () => import('./pages/apps/marca/marca.module').then(m => m.MarcaModule)
          },
          {
            path: 'producto',
            loadChildren: () => import('./pages/apps/producto/producto.module').then(m => m.ProductoModule)
          },
          {
            path: 'servicio',
            loadChildren: () => import('./pages/apps/servicio/servicio.module').then(m => m.ServicioModule),
            canActivate: [AuthGuardAdmin]
          },
          {
            path: 'categoria',
            loadChildren: () => import('./pages/apps/categoria/categoria.module').then(m => m.CategoriaModule)
          },
     
          {
            path: 'SerieFactura',
            loadChildren: () => import('./pages/apps/SerieFactura/SerieFactura.module').then(m => m.SerieFacturaModule)
          },
          {
            path: 'FacturaVenta',
            loadChildren: () => import('./pages/apps/FacturaVenta/FacturaVenta.module').then(m => m.FacturaVentaModule)
          },
          {
            path: 'ReporteFacturaDia',
            loadChildren: () => import('./pages/apps/ReporteFactura/ReporteFactura.module').then(m => m.FacturaVentaModule)
          },
          {
            path: 'ReporteFacturaSemana',
            loadChildren: () => import('./pages/apps/ReporteFacturaSemana/ReporteFactura.module').then(m => m.FacturaVentaModule)
          },
          {
            path: 'ReporteFacturaMes',
            loadChildren: () => import('./pages/apps/ReporteFacturaMes/ReporteFactura.module').then(m => m.FacturaVentaModule)
          },
          {
            path: 'ReporteFacturaAnio',
            loadChildren: () => import('./pages/apps/ReporteFacturaAnio/ReporteFactura.module').then(m => m.FacturaVentaModule)
          },
          {
            path: 'ReporteFacturaTodoT',
            loadChildren: () => import('./pages/apps/ReporteFacturaTodo/ReporteFactura.module').then(m => m.FacturaVentaModule)
          },
          // {
          //   path: 'FacturaCompra',
          //   loadChildren: () => import('./pages/apps/FacturaCompra/FacturaCompra.module').then(m => m.FacturaCompraModule)
          // },
          {
            path: 'FacturaServicios',
            loadChildren: () => import('./pages/apps/FacturaServicios/FacturaServicios.module').then(m => m.FacturaServiciosModule)
          },
          // {
          //   path: 'factura',
          //   loadChildren: () => import('./pages/apps/servicio/servicio.module').then(m => m.ServicioModule)
          // },
          {
            path: 'venta',
            loadChildren: () => import('./pages/apps/venta/venta.module').then(m => m.VentaModule)
          },
          
          
        ]
      },
      {
        path: 'pages',
        children: [
          {
            path: 'CrearUsuarios',
            loadChildren: () => import('./pages/apps/form_crear_usuarios/form_crear_usuarios.module').then(m => m.FormCrearUsuariosModule)
          },
          {
            path: 'Depositos&Retiros',
            loadChildren: () => import('./pages/apps/Cuentas/Cuentas.module').then(m => m.FormActualizarUsuariosModule)
          },
          {
            path: 'pricing',
            loadChildren: () => import('./pages/pages/pricing/pricing.module').then(m => m.PricingModule)
          },
          
          {
            path: 'faq',
            loadChildren: () => import('./pages/pages/faq/faq.module').then(m => m.FaqModule)
          },
          {
            path: 'invoice',
            loadChildren: () => import('./pages/pages/invoice/invoice.module').then(m => m.InvoiceModule)
          },
          {
            path: 'FacturaVenta',
            loadChildren: () => import('./pages/pages/FacturaVenta/FacturaVenta.module').then(m => m.FacturaVentaModule)
          },
          {
            path: 'FacturaServicios',
            loadChildren: () => import('./pages/pages/FacturaServicios/FacturaServicios.module').then(m => m.FacturaServiciosModule)
          },
          {
            path: 'error-404',
            loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
          },
          {
            path: 'error-500',
            loadChildren: () => import('./pages/pages/errors/error-500/error-500.module').then(m => m.Error500Module)
          }
        ]
      },
      {
        path: 'ui',
        children: [
          {
            path: 'components',
            loadChildren: () => import('./pages/ui/components/components.module').then(m => m.ComponentsModule),
          },
          {
            path: 'forms/form-elements',
            loadChildren: () => import('./pages/ui/forms/form-elements/form-elements.module').then(m => m.FormElementsModule),
            data: {
              containerEnabled: true
            }
          },
          {
            path: 'forms/form-wizard',
            loadChildren: () => import('./pages/ui/forms/form-wizard/form-wizard.module').then(m => m.FormWizardModule),
            data: {
              containerEnabled: true
            }
          },
          {
            path: 'icons',
            loadChildren: () => import('./pages/ui/icons/icons.module').then(m => m.IconsModule)
          },
          {
            path: 'page-layouts',
            loadChildren: () => import('./pages/ui/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule),
          },
        ]
      },
      // {
      //   path: 'documentation',
      //   loadChildren: () => import('./pages/documentation/documentation.module').then(m => m.DocumentationModule),
      // },
      {
        path: '**',
        loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: QuicklinkStrategy,
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
    })],
    exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule {
}
