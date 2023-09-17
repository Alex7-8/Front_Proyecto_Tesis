import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonaDataTableComponent } from './persona_data_table.component';

describe('ContactsTableComponent', () => {
  let component:  PersonaDataTableComponent;
  let fixture: ComponentFixture<PersonaDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
