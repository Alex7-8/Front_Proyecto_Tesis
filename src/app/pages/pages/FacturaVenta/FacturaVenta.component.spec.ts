import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaVentaComponent } from './FacturaVenta.component';

describe('FacturaVentaComponent', () => {
  let component: FacturaVentaComponent;
  let fixture: ComponentFixture<FacturaVentaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaVentaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
