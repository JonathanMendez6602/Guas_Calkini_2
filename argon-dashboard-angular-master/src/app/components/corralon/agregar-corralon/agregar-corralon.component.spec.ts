import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCorralonComponent } from './agregar-corralon.component';

describe('AgregarCorralonComponent', () => {
  let component: AgregarCorralonComponent;
  let fixture: ComponentFixture<AgregarCorralonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCorralonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCorralonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
