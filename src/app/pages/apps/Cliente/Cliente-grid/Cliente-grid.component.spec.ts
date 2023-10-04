import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClienteGridComponent } from './Cliente-grid.component';

describe('ClienteGridComponent', () => {
  let component: ClienteGridComponent;
  let fixture: ComponentFixture<ClienteGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
