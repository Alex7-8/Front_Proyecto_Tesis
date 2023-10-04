import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaCardComponent } from './Factura-card.component';

describe('CategoriaCardComponent', () => {
  let component: FacturaCardComponent;
  let fixture: ComponentFixture<FacturaCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
