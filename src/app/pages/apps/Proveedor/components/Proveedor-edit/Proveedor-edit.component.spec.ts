import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProveedorEditComponent } from './Proveedor-edit.component';

describe('ProveedorEditComponent', () => {
  let component: ProveedorEditComponent;
  let fixture: ComponentFixture<ProveedorEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
