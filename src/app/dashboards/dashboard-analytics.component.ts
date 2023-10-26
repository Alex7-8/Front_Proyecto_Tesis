
import { defaultChartOptions } from '../../@vex/utils/default-chart-options';
import { Order, tableSalesData } from '../../static-data/table-sales-data';
import { TableColumn } from '../../@vex/interfaces/table-column.interface';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficaService } from '../Service/Grafica.service';
import { da } from 'date-fns/locale';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'vex-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
   styleUrls: ['./dashboard-analytics.component.scss']
})
export class DashboardAnalyticsComponent {
GananciaPD: string;
GananciaPM: string;
GananciaPA: string;
VentasPD: string;

GananciaSD: string;
GananciaSM: string;
GananciaSA: string;
multi: any[];



  single: { name: string; value: any; };
  MesP: { name: string; value: any; };
  AnioP: { name: string; value: any; };
  DiaS: { name: string; value: any; };
  MesS: { name: string; value: any; };
  AnioS: { name: string; value: any; };

  view:[number,number] = [700, 250];
 legendPosition: LegendPosition = LegendPosition.Below;

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;



  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#0077B5', '#FF6F61', '#5F9EA0', '#FFC857', '#58508D', '#00A8CC']

  };

  colorMesP: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#0077B5', '#FF6F61', '#5F9EA0', '#FFC857', '#58508D', '#00A8CC']
  };

  colorAnioP: any = {
    domain: ['#4B0082', '#40E0D0', '#FFA07A', '#483D8B', '#8B4513', '#D2691E', '#5F9EA0', '#FFD700', '#4169E1', '#CD5C5C']
  };


  
  colorDiaS: any = {
    domain: ['#800080', '#808000', '#6B8E23', '#8B008B', '#B8860B', '#9ACD32', '#9932CC', '#B0E0E6', '#8B4513', '#2F4F4F']
  };

  colorMesS: any = {
    domain: ['#9370DB', '#FA8072', '#FFE4E1', '#8B4513', '#483D8B', '#4B0082', '#40E0D0', '#7FFF00', '#DDA0DD', '#008000']
  };

  colorAnioS: any = {
    domain: ['#4B0082', '#20B2AA', '#FF69B4', '#F0E68C', '#B0C4DE', '#32CD32', '#D2B48C', '#B0E0E6', '#D2691E', '#006400',]
  };

  
  constructor(
    private graficaService: GraficaService
    
  ) {

    this.graficaService.getGraficaByDia("").subscribe((data) => {
      this.single = data.response.map(item => ({
        name: item.c_Nombre,
        value: parseFloat(item.c_Total)
      }));
    });
    

    this.graficaService.getGraficaByMes("").subscribe((data) => {
      this.MesP = data.response.map(item => ({
        name: item.c_Nombre,
        value: parseFloat(item.c_Total)
      }));
    });

    
    this.graficaService.getGraficaByAnio("").subscribe((data) => {
      this.AnioP = data.response.map(item => ({
        name: item.c_Nombre,
        value: parseFloat(item.c_Total)
      }));
    });


    this.graficaService.getGraficaSByDia("").subscribe((data) => {
      this.DiaS = data.response.map(item => ({
        name: item.c_Nombre,
        value: parseFloat(item.c_Total)
      }));
    });
    

    this.graficaService.getGraficaSByMes("").subscribe((data) => {
      this.MesS = data.response.map(item => ({
        name: item.c_Nombre,
        value: parseFloat(item.c_Total)
      }));
    });

    
    this.graficaService.getGraficaSByAnio("").subscribe((data) => {
      this.AnioS = data.response.map(item => ({
        name: item.c_Nombre,
        value: parseFloat(item.c_Total)
      }));
    });
  
    
  
    this.graficaService.getGananciasSDia("").subscribe((data) => {
      this.GananciaSD = data.response.c_Ganancias;
     
  });

    
  this.graficaService.getGananciasSMes("").subscribe((data) => {
    this.GananciaSM = data.response.c_Ganancias;
 
});

this.graficaService.getGananciasSAnio("").subscribe((data) => {
  this.GananciaSA = data.response.c_Ganancias;

});



this.graficaService.getGananciasPDia("").subscribe((data) => {
  this.GananciaPD = data.response.c_Ganancias;
  this.VentasPD = data.response.c_Ventas;
});


this.graficaService.getGananciasPMes("").subscribe((data) => {
  this.GananciaPM = data.response.c_Ganancias;

});

this.graficaService.getGananciasPAnio("").subscribe((data) => {
  this.GananciaPA = data.response.c_Ganancias;

});

}
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


 
}






















