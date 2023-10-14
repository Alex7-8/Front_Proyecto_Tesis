import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaVentaGridComponent } from './FacturaVenta-grid.component';

describe('FacturaVentaGridComponent', () => {
  let component: FacturaVentaGridComponent;
  let fixture: ComponentFixture<FacturaVentaGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaVentaGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaVentaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
