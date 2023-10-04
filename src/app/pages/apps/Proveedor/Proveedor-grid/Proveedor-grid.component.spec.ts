import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProveedorGridComponent } from './Proveedor-grid.component';

describe('ProveedorGridComponent', () => {
  let component: ProveedorGridComponent;
  let fixture: ComponentFixture<ProveedorGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
