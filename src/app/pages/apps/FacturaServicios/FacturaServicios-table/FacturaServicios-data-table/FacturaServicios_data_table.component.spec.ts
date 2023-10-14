import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {FacturaServiciosDataTableComponent } from './FacturaServicios_data_table.component';

describe('FacturaServiciosTableComponent', () => {
  let component: FacturaServiciosDataTableComponent;
  let fixture: ComponentFixture<FacturaServiciosDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaServiciosDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaServiciosDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
