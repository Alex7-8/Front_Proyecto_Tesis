import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VentaGridComponent } from './venta-grid.component';

describe('VentaGridComponent', () => {
  let component: VentaGridComponent;
  let fixture: ComponentFixture<VentaGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VentaGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
