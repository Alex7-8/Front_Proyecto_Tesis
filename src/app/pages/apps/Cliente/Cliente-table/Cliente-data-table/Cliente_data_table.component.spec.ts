import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClienteDataTableComponent } from './Cliente_data_table.component';

describe('ClienteTableComponent', () => {
  let component:  ClienteDataTableComponent;
  let fixture: ComponentFixture<ClienteDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
