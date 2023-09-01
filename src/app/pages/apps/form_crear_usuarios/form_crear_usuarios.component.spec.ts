import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormCrearUsuariosComponent } from './form_crear_usuarios.component';

describe('FormElementsComponent', () => {
  let component: FormCrearUsuariosComponent;
  let fixture: ComponentFixture<FormCrearUsuariosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FormCrearUsuariosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCrearUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
