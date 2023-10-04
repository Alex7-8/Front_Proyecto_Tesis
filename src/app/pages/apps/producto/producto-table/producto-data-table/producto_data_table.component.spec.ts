import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {ProductoDataTableComponent } from './producto_data_table.component';

describe('ProductoTableComponent', () => {
  let component: ProductoDataTableComponent;
  let fixture: ComponentFixture<ProductoDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
