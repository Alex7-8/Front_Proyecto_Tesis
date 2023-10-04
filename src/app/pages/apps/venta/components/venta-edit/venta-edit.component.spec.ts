import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VentaEditComponent } from './venta-edit.component';

describe('VentaEditComponent', () => {
  let component: VentaEditComponent;
  let fixture: ComponentFixture<VentaEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VentaEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
