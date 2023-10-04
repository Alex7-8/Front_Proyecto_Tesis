import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProveedorCardComponent } from './Proveedor-card.component';

describe('ProveedorCardComponent', () => {
  let component: ProveedorCardComponent;
  let fixture: ComponentFixture<ProveedorCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
