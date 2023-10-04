import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {CategoriaDataTableComponent } from './categoria_data_table.component';

describe('CategoriaTableComponent', () => {
  let component: CategoriaDataTableComponent;
  let fixture: ComponentFixture<CategoriaDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
