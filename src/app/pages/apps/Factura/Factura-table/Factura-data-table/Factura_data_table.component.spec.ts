import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {FacturaDataTableComponent } from './Factura_data_table.component';

describe('FacturaTableComponent', () => {
  let component: FacturaDataTableComponent;
  let fixture: ComponentFixture<FacturaDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
