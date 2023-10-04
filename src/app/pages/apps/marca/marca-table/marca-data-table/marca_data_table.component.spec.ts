import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {MarcaDataTableComponent } from './marca_data_table.component';

describe('ContactsTableComponent', () => {
  let component: MarcaDataTableComponent;
  let fixture: ComponentFixture<MarcaDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MarcaDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
