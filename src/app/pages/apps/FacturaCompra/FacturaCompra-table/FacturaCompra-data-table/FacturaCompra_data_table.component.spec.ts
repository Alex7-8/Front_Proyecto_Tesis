import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {FacturaVentaDataTableComponent } from './FacturaVenta_data_table.component';

describe('FacturaVentaTableComponent', () => {
  let component: ProductoDataTableComponent;
  let fixture: ComponentFixture<FacturaVentaDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaVentaDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaVentaDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
