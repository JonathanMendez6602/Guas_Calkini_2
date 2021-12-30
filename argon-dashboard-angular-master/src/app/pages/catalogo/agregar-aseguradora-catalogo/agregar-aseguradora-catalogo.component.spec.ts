import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAseguradoraCatalogoComponent } from './agregar-aseguradora-catalogo.component';

describe('AgregarAseguradoraCatalogoComponent', () => {
  let component: AgregarAseguradoraCatalogoComponent;
  let fixture: ComponentFixture<AgregarAseguradoraCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAseguradoraCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAseguradoraCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
