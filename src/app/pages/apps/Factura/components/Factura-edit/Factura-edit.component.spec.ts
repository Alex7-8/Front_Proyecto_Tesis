import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaEditComponent } from './Factura-edit.component';

describe('MarcaEditComponent', () => {
  let component: FacturaEditComponent;
  let fixture: ComponentFixture<FacturaEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
