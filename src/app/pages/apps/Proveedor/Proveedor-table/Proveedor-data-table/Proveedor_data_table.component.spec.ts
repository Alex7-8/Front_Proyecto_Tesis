import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProveedorDataTableComponent } from './Proveedor_data_table.component';

describe('ProveedorTableComponent', () => {
  let component:  ProveedorDataTableComponent;
  let fixture: ComponentFixture<ProveedorDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
