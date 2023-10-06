import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuard } from '../../src/app/guards/auth.guard';
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
       // canActivate: [AuthGuard] 
      },
      {
        path: 'apps',
        children: [
          
          {
            path: 'chat',
            loadChildren: () => import('./pages/apps/chat/chat.module').then(m => m.ChatModule),
            data: {
              toolbarShadowEnabled: true
            }
          },
        
          {
            path: 'mail',
            loadChildren: () => import('./pages/apps/mail/mail.module').then(m => m.MailModule),
            data: {
              toolbarShadowEnabled: true,
              scrollDisabled: true
            }
          },
          
          {
            path: 'social',
            loadChildren: () => import('./pages/apps/social/social.module').then(m => m.SocialModule)
          },
          {
            path: 'contacts',
            loadChildren: () => import('./pages/apps/contacts/contacts.module').then(m => m.ContactsModule)
          },
          {
            path: 'empleado',
            loadChildren: () => import('./pages/apps/empleado/listar_empleado.module').then(m => m.ListarEmpleadoModule)
          },
          {
            path: 'persona',
            loadChildren: () => import('./pages/apps/persona/persona.module').then(m => m.PersonaModule)
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
            loadChildren: () => import('./pages/apps/servicio/servicio.module').then(m => m.ServicioModule)
          },
          {
            path: 'categoria',
            loadChildren: () => import('./pages/apps/categoria/categoria.module').then(m => m.CategoriaModule)
          },
          {
            path: 'factura',
            loadChildren: () => import('./pages/apps/Factura/Factura.module').then(m => m.FacturaModule)
          },
          {
            path: 'SerieFactura',
            loadChildren: () => import('./pages/apps/SerieFactura/SerieFactura.module').then(m => m.SerieFacturaModule)
          },
          {
            path: 'FacturaVenta',
            loadChildren: () => import('./pages/apps/FacturaVenta/FacturaVenta.module').then(m => m.FacturaVentaModule)
          },
          // {
          //   path: 'factura',
          //   loadChildren: () => import('./pages/apps/servicio/servicio.module').then(m => m.ServicioModule)
          // },
          {
            path: 'venta',
            loadChildren: () => import('./pages/apps/venta/venta.module').then(m => m.VentaModule)
          },
          {
            path: 'calendar',
            loadChildren: () => import('./pages/apps/calendar/calendar.module').then(m => m.CalendarModule),
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'aio-table',
            loadChildren: () => import('./pages/apps/aio-table/aio-table.module').then(m => m.AioTableModule),
          },
          {
            path: 'help-center',
            loadChildren: () => import('./pages/apps/help-center/help-center.module').then(m => m.HelpCenterModule),
          },
          {
            path: 'scrumboard',
            loadChildren: () => import('./pages/apps/scrumboard/scrumboard.module').then(m => m.ScrumboardModule),
          },
          {
            path: 'editor',
            loadChildren: () => import('./pages/apps/editor/editor.module').then(m => m.EditorModule),
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
            path: 'ActualizarUsuarios',
            loadChildren: () => import('./pages/apps/form_actualizar_usuarios/form_actualizar_usuarios.module').then(m => m.FormActualizarUsuariosModule)
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
            path: 'guides',
            loadChildren: () => import('./pages/pages/guides/guides.module').then(m => m.GuidesModule)
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
