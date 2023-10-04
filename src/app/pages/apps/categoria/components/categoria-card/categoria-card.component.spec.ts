import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CategoriaCardComponent } from './categoria-card.component';

describe('CategoriaCardComponent', () => {
  let component: CategoriaCardComponent;
  let fixture: ComponentFixture<CategoriaCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
