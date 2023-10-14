import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaVentaCardComponent } from './FacturaVenta-card.component';

describe('FacturaVentaCardComponent', () => {
  let component: FacturaVentaCardComponent;
  let fixture: ComponentFixture<FacturaVentaCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaVentaCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaVentaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
