import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableColumn } from '../../../../../../@vex/interfaces/table-column.interface';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger20ms } from '../../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../../@vex/animations/fade-in-up.animation';
import { EmpleadoData } from '../../interfaces/listar_empleado.interface';
import { scaleFadeIn400ms } from '../../../../../../@vex/animations/scale-fade-in.animation';

@Component({
  selector: 'vex-contacts-data-table',
  templateUrl: './listar_empleados_data_table.component.html',
  styleUrls: ['./listar_empleados_data_table.component.scss'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill'
      } as MatFormFieldDefaultOptions
    }
  ],
  animations: [
    stagger20ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class ListarEmpleadosDataTableComponent<T> implements OnInit, OnChanges, AfterViewInit {

  @Input() data: T[];
  @Input() columns: TableColumn<T>[];
  @Input() pageSize = 15;
  @Input() pageSizeOptions = [15, 20,50];
  @Input() searchStr: string;

  @Output() toggleStar = new EventEmitter<EmpleadoData['c_Id_Persona']>();
  @Output() openContact = new EventEmitter<EmpleadoData['c_Id_Persona']>();

  visibleColumns: Array<keyof T | string>;
  dataSource = new MatTableDataSource<T>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns) {
      this.visibleColumns = this.columns.map(column => column.property);
    }

    if (changes.data) {
      this.dataSource.data = this.data;
    }

    if (changes.searchStr) {
      this.dataSource.filter = (this.searchStr || '').trim().toLowerCase();
    }
  }

  emitToggleStar(event: Event, id: EmpleadoData['c_Id_Persona']) {
    event.stopPropagation();
    this.toggleStar.emit(id);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}