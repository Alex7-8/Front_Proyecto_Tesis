import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SerieFacturaEditComponent } from './SerieFactura-edit.component';

describe('SerieFacturaEditComponent', () => {
  let component: SerieFacturaEditComponent;
  let fixture: ComponentFixture<SerieFacturaEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SerieFacturaEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieFacturaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
