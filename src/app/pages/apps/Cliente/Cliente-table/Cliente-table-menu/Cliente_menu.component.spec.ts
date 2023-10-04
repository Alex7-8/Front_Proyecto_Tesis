import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClienteTableMenuComponent } from './Cliente_menu.component';

describe('ClienteTableMenuComponent', () => {
  let component: ClienteTableMenuComponent;
  let fixture: ComponentFixture<ClienteTableMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
