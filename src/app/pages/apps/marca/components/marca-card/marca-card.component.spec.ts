import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonaCardComponent } from './persona-card.component';

describe('ContactsCardComponent', () => {
  let component: PersonaCardComponent;
  let fixture: ComponentFixture<PersonaCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
