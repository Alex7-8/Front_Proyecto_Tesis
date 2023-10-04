import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaTableMenuComponent } from './Factura_menu.component';

describe('FacturaTableMenuComponent', () => {
  let component: FacturaTableMenuComponent;
  let fixture: ComponentFixture<FacturaTableMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
