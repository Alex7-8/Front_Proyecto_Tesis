import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SerieFacturaGridComponent } from './SerieFactura-grid.component';

describe('SerieFacturaGridComponent', () => {
  let component: SerieFacturaGridComponent;
  let fixture: ComponentFixture<SerieFacturaGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SerieFacturaGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieFacturaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
