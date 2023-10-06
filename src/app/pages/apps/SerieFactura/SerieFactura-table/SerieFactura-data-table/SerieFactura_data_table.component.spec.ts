import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {SerieFacturaDataTableComponent } from './SerieFactura_data_table.component';

describe('SerieFacturaTableComponent', () => {
  let component: SerieFacturaDataTableComponent;
  let fixture: ComponentFixture<SerieFacturaDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SerieFacturaDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieFacturaDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
