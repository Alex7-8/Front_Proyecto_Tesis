import { Component, Inject, LOCALE_ID, Renderer2 } from '@angular/core';
import { ConfigService } from '../@vex/config/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import { LayoutService } from '../@vex/services/layout.service';
import { ActivatedRoute } from '@angular/router';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { VexConfigName } from '../@vex/config/config-name.model';
import { ColorSchemeName } from '../@vex/config/colorSchemeName';
import { MatIconRegistry, SafeResourceUrlWithIconOptions } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ColorVariable, colorVariables } from '../@vex/components/config-panel/color-variables';
import { TokenService } from './Service/token.service';
import { AuthGuard } from './guards/auth.guard';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rol: string[] = [];
  r: string;
  em: string[] = [];
  isAdmin: boolean = false;
  constructor(private configService: ConfigService,
              private renderer: Renderer2,
              private platform: Platform,
              @Inject(DOCUMENT) private document: Document,
              @Inject(LOCALE_ID) private localeId: string,
              private layoutService: LayoutService,
              private route: ActivatedRoute,
              private navigationService: NavigationService,
              private splashScreenService: SplashScreenService,
              private readonly matIconRegistry: MatIconRegistry,
              private readonly domSanitizer: DomSanitizer,
              private TokenService: TokenService) 
              {
    Settings.defaultLocale = this.localeId;
    // this.isAdmin = this.rol.includes('ADMINISTRADOR');

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.matIconRegistry.addSvgIconResolver(
      (
        name: string,
        namespace: string
      ): SafeResourceUrl | SafeResourceUrlWithIconOptions | null => {
        switch (namespace) {
          case 'mat':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/material-design-icons/two-tone/${name}.svg`
            );

          case 'logo':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/logos/${name}.svg`
            );

          case 'flag':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/flags/${name}.svg`
            );
        }
      }
    );

    /**
     * Customize the template to your needs with the ConfigService
     * Example:
     *  this.configService.updateConfig({
     *    sidenav: {
     *      title: 'Custom App',
     *      imageUrl: '//placehold.it/100x100',
     *      showCollapsePin: false
     *    },
     *    footer: {
     *      visible: false
     *    }
     *  });
     */

    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.route.queryParamMap.subscribe(queryParamMap => {
      if (queryParamMap.has('layout')) {
        this.configService.setConfig(queryParamMap.get('layout') as VexConfigName);
      }

      if (queryParamMap.has('style')) {
        this.configService.updateConfig({
          style: {
            colorScheme: queryParamMap.get('style') as ColorSchemeName
          }
        });
      }

      if (queryParamMap.has('primaryColor')) {
        const color: ColorVariable = colorVariables[queryParamMap.get('primaryColor')];

        if (color) {
          this.configService.updateConfig({
            style: {
              colors: {
                primary: color
              }
            }
          });
        }
      }

      if (queryParamMap.has('rtl')) {
        this.configService.updateConfig({
          direction: coerceBooleanProperty(queryParamMap.get('rtl')) ? 'rtl' : 'ltr'
        });
      }
    });
//this.r = '/apps/contacts/table';


///analytics
this.configureMenu();
  }



  configureMenu() {
    

    if (this.TokenService.TokenAdmin() == true) {

      this.navigationService.items = [
        {
          type: 'subheading',
          label: 'Ganancias',
          children: [
            {
              type: 'link',
              label: 'Ganancias',
              route: '/analytics',
              icon: 'mat:insights',
              routerLinkActiveOptions: { exact: false }
            },
          ]
        },
        {
          type: 'subheading',
          label: 'Aplicaciones',
          children: [
     
            {
              type: 'dropdown',
              label: 'Facturacion',
              icon: 'mat:payment',
              children: [
                {
                  type: 'link',
                  label: 'Factura Servicios',
                  route: '/apps/FacturaServicios/table',
                },
                {
                  type: 'link',
                  label: 'Factura Venta',
                  route: '/apps/FacturaVenta/table',
                },
                // {
                //   type: 'link',
                //   label: 'Compras',
                //   route: '/pages/CrearUsuarios',
                // },
                {
                  type: 'link',
                  label: 'Depositos',
                  route: '/pages/Depositos&Retiros',
                }
                
              ]
            },
            {
              type: 'dropdown',
              label: 'Administracion',
              icon: 'mat:assignment',
              
              children: [
                {
    
                  type: 'link',
                  label: 'Empleados',
                  route: '/apps/empleado/table',
                },
                {
                  type: 'link',
                  label: 'Clientes y Proveedores',
                  route: '/apps/persona/table',
                }
                ,
                {
                  type: 'link',
                  label: 'Marcas',
                  route: '/apps/marca/table',
                },
                {
                  type: 'link',
                  label: 'Productos',
                  route: '/apps/producto/table',
                },
                {
                  type: 'link',
                  label: 'Servicios',
                  route: '/apps/servicio/table',
                },
                {
                  type: 'link',
                  label: 'Categorias',
                  route: '/apps/categoria/table',
                },              
                {
                  type: 'link',
                  label: 'Serie de Facturas',
                  route: '/apps/SerieFactura/table',
                }
               
              ]
            }
            ,{
              type: 'dropdown',
              label: 'Reportes',
              icon: 'mat:assessment',
              children: [
                {
                  type: 'link',
                  label: 'Reporte de Empleados',
                  route: '/apps/persona/grid',
                },
                 {
                  type: 'link',
                  label: 'Reporte de Clientes',
                  route: '/apps/persona/grid',
                },
                {
                 type: 'link',
                 label: 'Reporte de Proveedores',
                 route: '/apps/persona/grid',
               },
               {
                type: 'link',
                label: 'Reporte de Facturas',
                route: '/apps/persona/table',
              },
    
              ],
              
            }
            
          ]
        },
      ];
    }else
    if(this.TokenService.TokenGerente() == true){

      this.navigationService.items = [
        {
          type: 'subheading',
          label: 'Dashboards',
          children: [
            {
              type: 'link',
              label: 'Grafica',
              route: '/analytics',
              icon: 'mat:insights',
              routerLinkActiveOptions: { exact: true }
            },
            /*
            {
              type: 'link',
              label: 'Finance',
              route: '/',
              icon: icLayers,
              routerLinkActiveOptions: { exact: true }
            },
             */
          ]
        },
        {
          type: 'subheading',
          label: 'Aplicaciones',
          children: [
     
            // {
            //   type: 'dropdown',
            //   label: 'Facturacion',
            //   icon: 'mat:payment',
            //   children: [
            //     {
            //       type: 'link',
            //       label: 'Compras',
            //       route: '/apps/contacts/table',
            //     }
            //   ]
            // },
           
            {
              type: 'dropdown',
              label: 'Administracion Gerente',
              icon: 'mat:assignment',
              children: [
                {
                  type: 'link',
                  label: 'Empleados',
                  route: '/apps/EmpleadoG/table',
                },
                {
                  type: 'link',
                  label: 'Proveedores',
                  route: '/apps/Proveedor/table',
                }
                ,
                {
                  type: 'link',
                  label: 'Clientes',
                  route: '/apps/Cliente/table',
                },
                {
                  type: 'link',
                  label: 'Productos',
                  route: '/apps/producto/table',
                },
                {
                  type: 'link',
                  label: 'Categorias',
                  route: '/apps/categoria/table',
                },
                {
                  type: 'link',
                  label: 'Serie de Facturas',
                  route: '/apps/factura/table',
                }
               
              ]
            }
            ,{
              type: 'dropdown',
              label: 'Reportes',
              icon: 'mat:assessment',
              children: [
                {
                  type: 'link',
                  label: 'Reporte de Empleados',
                  route: '/apps/persona/grid',
                },
                 {
                  type: 'link',
                  label: 'Reporte de Clientes',
                  route: '/apps/persona/grid',
                },
                {
                 type: 'link',
                 label: 'Reporte de Proveedores',
                 route: '/apps/persona/grid',
               },
               {
                type: 'link',
                label: 'Reporte de Facturas',
                route: '/apps/persona/table',
               }
               ,
               {
                type: 'link',
                label: 'Reporte de Inventario',
                route: '/apps/persona/table',
               }
              ]
            }
            ,
          ]
        },
      ];
    }else    
    if(this.TokenService.TokenCajero() == true){

      this.navigationService.items = [
        {
          type: 'subheading',
          label: 'Dashboards',
          children: [
            {
              type: 'link',
              label: 'Grafica',
              route: '/analytics',
              icon: 'mat:insights',
              routerLinkActiveOptions: { exact: true }
            },
            /*
            {
              type: 'link',
              label: 'Finance',
              route: '/',
              icon: icLayers,
              routerLinkActiveOptions: { exact: true }
            },
             */
          ]
        },
        {
          type: 'subheading',
          label: 'Aplicaciones',
          children: [
     
            {
              type: 'dropdown',
              label: 'Facturacion',
              icon: 'mat:payment',
              children: [
                {
                  type: 'link',
                  label: 'Factura Servicios',
                  route: '/apps/contacts/table',
                },
                {
                  type: 'link',
                  label: 'Factura Venta',
                  route: '/apps/FacturaVenta/table',
                },
                {
                  type: 'link',
                  label: 'Depositos',
                  route: '/apps/contacts/table',
                }
              ]
            },
           
            {
              type: 'dropdown',
              label: 'Administracion Cajero',
              icon: 'mat:assignment',
              children: [
                
               
                {
                  type: 'link',
                  label: 'Clientes',
                  route: '/apps/Cliente/table',
                },
                {
                  type: 'link',
                  label: 'Reporte de Productos',
                  route: '/apps/producto/table',
                },
                {
                  type: 'link',
                  label: 'Reporte de Facturas',
                  route: '/apps/factura/table',
                }
               
              ]
            }
            ,{
              type: 'dropdown',
              label: 'Reportes',
              icon: 'mat:assessment',
              children: [
                {
                  type: 'link',
                  label: 'Reporte de Empleados',
                  route: '/apps/persona/grid',
                },
                 {
                  type: 'link',
                  label: 'Reporte de Clientes',
                  route: '/apps/persona/grid',
                },
                {
                 type: 'link',
                 label: 'Reporte de Proveedores',
                 route: '/apps/persona/grid',
               },
               {
                type: 'link',
                label: 'Reporte de Facturas',
                route: '/apps/persona/table',
              }
  
              ]
            }
            ,
          ]
        },
      ];
    }

 }

}
