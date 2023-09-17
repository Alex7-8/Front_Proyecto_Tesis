import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonaEditComponent } from './persona-edit.component';

describe('ContactsEditComponent', () => {
  let component: PersonaEditComponent;
  let fixture: ComponentFixture<PersonaEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
