import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormActualizarUsuariosComponent } from './form_actualizar_usuarios.component';

describe('FormElementsComponent', () => {
  let component: FormActualizarUsuariosComponent;
  let fixture: ComponentFixture<FormActualizarUsuariosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FormActualizarUsuariosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActualizarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
