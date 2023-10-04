import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProveedorTableMenuComponent } from './Proveedor_menu.component';

describe('ProveedorTableMenuComponent', () => {
  let component: ProveedorTableMenuComponent;
  let fixture: ComponentFixture<ProveedorTableMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
