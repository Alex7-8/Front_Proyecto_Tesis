import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SerieFacturaCardComponent } from './SerieFactura-card.component';

describe('SerieFacturaCardComponent', () => {
  let component: SerieFacturaCardComponent;
  let fixture: ComponentFixture<SerieFacturaCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SerieFacturaCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieFacturaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
