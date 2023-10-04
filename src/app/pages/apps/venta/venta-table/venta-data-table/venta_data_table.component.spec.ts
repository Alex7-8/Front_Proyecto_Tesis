import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {VentaDataTableComponent } from './venta_data_table.component';

describe('ProductoTableComponent', () => {
  let component: VentaDataTableComponent;
  let fixture: ComponentFixture<VentaDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VentaDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
