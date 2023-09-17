import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListarEmpleadosDataTableComponent } from './listar_empleados_data_table.component';

describe('ContactsTableComponent', () => {
  let component: ListarEmpleadosDataTableComponent;
  let fixture: ComponentFixture<ListarEmpleadosDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEmpleadosDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmpleadosDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
