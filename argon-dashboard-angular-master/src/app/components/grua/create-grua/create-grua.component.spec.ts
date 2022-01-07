import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGruaComponent } from './create-grua.component';

describe('CreateGruaComponent', () => {
  let component: CreateGruaComponent;
  let fixture: ComponentFixture<CreateGruaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGruaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGruaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
