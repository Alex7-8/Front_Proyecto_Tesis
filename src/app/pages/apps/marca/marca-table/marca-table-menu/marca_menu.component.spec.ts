import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonaTableMenuComponent } from './persona_menu.component';

describe('ContactsTableMenuComponent', () => {
  let component: PersonaTableMenuComponent;
  let fixture: ComponentFixture<PersonaTableMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
