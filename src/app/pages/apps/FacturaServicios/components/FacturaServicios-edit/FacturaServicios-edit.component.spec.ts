import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaVentaEditComponent } from './FacturaVenta-edit.component';

describe('FacturaVentaEditComponent', () => {
  let component: FacturaVentaEditComponent;
  let fixture: ComponentFixture<FacturaVentaEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaVentaEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaVentaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
