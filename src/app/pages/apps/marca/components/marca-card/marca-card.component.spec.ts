import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarcaCardComponent } from './marca-card.component';

describe('MarcaCardComponent', () => {
  let component: MarcaCardComponent;
  let fixture: ComponentFixture<MarcaCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MarcaCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
