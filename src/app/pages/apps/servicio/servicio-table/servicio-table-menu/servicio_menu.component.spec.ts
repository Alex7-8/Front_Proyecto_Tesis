import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarcaTableMenuComponent } from './servicio_menu.component';

describe('ServicioTableMenuComponent', () => {
  let component: MarcaTableMenuComponent;
  let fixture: ComponentFixture<MarcaTableMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MarcaTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
