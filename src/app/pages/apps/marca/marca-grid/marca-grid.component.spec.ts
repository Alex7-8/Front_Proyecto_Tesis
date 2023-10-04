import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarcaGridComponent } from './marca-grid.component';

describe('MarcaGridComponent', () => {
  let component: MarcaGridComponent;
  let fixture: ComponentFixture<MarcaGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MarcaGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
