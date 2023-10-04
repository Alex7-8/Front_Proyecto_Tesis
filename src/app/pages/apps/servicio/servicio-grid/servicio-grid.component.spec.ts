import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServicioGridComponent } from './servicio-grid.component';

describe('ServicioGridComponent', () => {
  let component: ServicioGridComponent;
  let fixture: ComponentFixture<ServicioGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ServicioGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
