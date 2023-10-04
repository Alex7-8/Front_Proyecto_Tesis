import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductoGridComponent } from './producto-grid.component';

describe('ProductoGridComponent', () => {
  let component: ProductoGridComponent;
  let fixture: ComponentFixture<ProductoGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
