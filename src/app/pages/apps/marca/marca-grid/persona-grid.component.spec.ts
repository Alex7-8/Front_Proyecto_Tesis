import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonaGridComponent } from './persona-grid.component';

describe('PersonaGridComponent', () => {
  let component: PersonaGridComponent;
  let fixture: ComponentFixture<PersonaGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
