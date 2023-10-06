import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SerieFacturaMenuComponent } from './SerieFactura_menu.component';

describe('SerieFacturaTableMenuComponent', () => {
  let component: SerieFacturaTableMenuComponent;
  let fixture: ComponentFixture<SerieFacturaTableMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SerieFacturaTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieFacturaTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
