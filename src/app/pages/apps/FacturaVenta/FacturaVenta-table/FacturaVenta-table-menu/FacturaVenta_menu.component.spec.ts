import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaVentaTableMenuComponent } from './FacturaVenta_menu.component';

describe('FacturaVentaFacturaVentaTableMenuComponent', () => {
  let component: FacturaVentaTableMenuComponent;
  let fixture: ComponentFixture<FacturaVentaTableMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaVentaTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaVentaTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
