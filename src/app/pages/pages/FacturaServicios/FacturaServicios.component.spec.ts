import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaServiciosComponent } from './FacturaServicios.component';

describe('FacturaServiciosComponent', () => {
  let component: FacturaServiciosComponent;
  let fixture: ComponentFixture<FacturaServiciosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaServiciosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
