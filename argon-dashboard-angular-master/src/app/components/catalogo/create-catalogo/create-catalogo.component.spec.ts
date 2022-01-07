import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCatalogoComponent } from './create-catalogo.component';

describe('CreateCatalogoComponent', () => {
  let component: CreateCatalogoComponent;
  let fixture: ComponentFixture<CreateCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
