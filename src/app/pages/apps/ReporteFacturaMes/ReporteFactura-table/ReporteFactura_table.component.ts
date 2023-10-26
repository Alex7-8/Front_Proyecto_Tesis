import { Component,EventEmitter, Input, NgZone,OnInit, Output,HostListener,Renderer2 } from '@angular/core';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { ReporteFacturaDiaData } from '../interfaces/ReporteFactura.interface';
import { he, th } from 'date-fns/locale';
import { style } from '@angular/animations';
import { EmpleadoTableColumn } from 'src/@vex/interfaces/empleado_table_column.interface';
import { ProductoService } from 'src/app/Service/Productos.service';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from "jwt-decode";
import { ConfirmDialogComponent } from 'src/app/pages/ui/components/component-confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { UntypedFormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import {FacturaService} from 'src/app/Service/Factura.service';
import { ReporteService } from 'src/app/Service/Reporte.service';
export interface ContactsTableMenu {
  type: 'link' | 'subheading';
  id?: 'Activo' | 'Inactivo' | 'all' | 'family' | 'friends' | 'colleagues' | 'business';
  icon?: string;
  label: string;
  classes?: {
    icon?: string;
  };
}







@Component({
  selector: 'vex-contacts-table',
  templateUrl: './ReporteFactura_table.component.html',
  styleUrls: ['./ReporteFactura_table.component.scss'],
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms
  ],
  styles: [`
    .mat-drawer-container {
      background: transparent !important;
    }
  `]
})
export class ReporteFacturaDiaTableComponent implements OnInit {

  private tablaDataSubject = new BehaviorSubject<any[]>([]);
  tablaData$ = this.tablaDataSubject.asObservable();

 searchCtrl = new UntypedFormControl();

 RTotal: string = "N/A"
  c_Id_Usuario: string;
  c_Id_UsuarioModificacion: string;
  titulo: string;
  estado: number = this.ProductoService.estado;
  Color: string[] = ['font-medium'];
  Servicio: ReporteFacturaDiaData[] = [];
  menuOpen = false;
  form: FormGroup; 
  razon: string;
 
  
  searchStr$ = this.searchCtrl.valueChanges.pipe(
    debounceTime(10)

  );



  activeCategory: ContactsTableMenu['id'] = 'Activo';
  tableData = this.Servicio;
  tableColumns: EmpleadoTableColumn<ReporteFacturaDiaData>[] = [


   
    {
      label: 'No. de Factura',
      property: 'c_Numero_Factura',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Codigo',
      property: 'c_Codigo',
      type: 'text',
      cssClasses: ['font-medium'],
    },
    {
      label: 'Nombre',
      property: 'c_Nombre',
      type: 'text',
      cssClasses: ['font-medium'],
    },
    {
      label: 'Cantidad',
      property: 'c_Cantidad',
      type: 'text',
      cssClasses: ['font-medium'],
    },
    {
      label: 'Precio',
      property: 'c_Precio',
      type: 'text',
      cssClasses: ['font-medium'],
    },
    {
      label: 'SubTotal',
      property: 'c_SubTotal',
      type: 'text',
      cssClasses: ['font-medium'],
    },
    {
      label: 'IVA',
      property: 'c_IVA',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Total',
      property: 'c_Total',
      type: 'text',
      cssClasses: ['font-medium']
    },

  {
      label: 'Fecha',
      property: 'c_Fecha',
      type: 'text',
      cssClasses: ['font-medium,']
    },
    {
      label: 'Usuario',
      property: 'c_Usuario',
      type: 'text',
      cssClasses: ['font-medium']
    },
    {
      label: 'Tipo',
      property: 'c_Tipo',
      type: 'text',
      cssClasses: ['font-medium']
    }


    
  ];
  

  constructor(private dialog: MatDialog,
    private ProductoService:ProductoService, 
    private snackBar: MatSnackBar,
    private router: Router, private renderer: Renderer2,
    private fb: UntypedFormBuilder,
    private ngZone: NgZone,
    private FacturaService: FacturaService,
    private ReporteService: ReporteService,

   ) { 



   }

  ngOnInit() {
     this.obtenerTablaData()
    
  }


  

  setFilter(category: ContactsTableMenu['id']) {
    this.activeCategory = category;


 }

 isActive(category: ContactsTableMenu['id']) {
   return this.activeCategory === category;
 }


  obtenerTablaData() {
    this.ReporteService.getReporteFacturaByTipo("GM").subscribe((response: any) => {
      this.Servicio = response.response;
      this.tableData = this.Servicio;

      const totalSum = response.response.reduce((accumulator, item) => {
        const total = parseFloat(item.c_Total);
        if (!isNaN(total)) {
          return accumulator + total;
        }
        return accumulator;
      }, 0);
      
      // Convierte la suma en una cadena
      const totalSumString = totalSum.toFixed(2);
      //this.TranferenciaService.RTotal = totalSumString;

      this.RTotal = totalSumString
    });
    
  }



  setData(data: ReporteFacturaDiaData[]) {
    this.tableData = data;
    this.menuOpen = false;
  }

  openMenu() {
    this.menuOpen = true;
  }





  



}
