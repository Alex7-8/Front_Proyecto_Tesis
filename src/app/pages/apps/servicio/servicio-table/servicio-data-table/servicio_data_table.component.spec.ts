import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {ServicioDataTableComponent } from './servicio_data_table.component';

describe('ContactsTableComponent', () => {
  let component: ServicioDataTableComponent;
  let fixture: ComponentFixture<ServicioDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ServicioDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
