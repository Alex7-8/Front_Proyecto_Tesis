import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListarEmpleadoTableMenuComponent } from './listar_empleado_menu.component';

describe('ContactsTableMenuComponent', () => {
  let component: ListarEmpleadoTableMenuComponent;
  let fixture: ComponentFixture<ListarEmpleadoTableMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEmpleadoTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmpleadoTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
