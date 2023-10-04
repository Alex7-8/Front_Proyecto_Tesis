import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarcaTableMenuComponent } from './marca_menu.component';

describe('ContactsTableMenuComponent', () => {
  let component: MarcaTableMenuComponent;
  let fixture: ComponentFixture<MarcaTableMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MarcaTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
