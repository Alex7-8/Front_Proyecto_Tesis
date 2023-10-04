import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VentaCardComponent } from './venta-card.component';

describe('VentaCardComponent', () => {
  let component: VentaCardComponent;
  let fixture: ComponentFixture<VentaCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VentaCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
