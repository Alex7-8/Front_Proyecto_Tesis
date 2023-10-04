import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaGridComponent } from './Factura-grid.component';

describe('FacturaGridComponent', () => {
  let component: FacturaGridComponent;
  let fixture: ComponentFixture<FacturaGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
