import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ValidarComponent } from './Validar.component';

describe('ComingSoonComponent', () => {
  let component: ValidarComponent;
  let fixture: ComponentFixture<ValidarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ValidarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
