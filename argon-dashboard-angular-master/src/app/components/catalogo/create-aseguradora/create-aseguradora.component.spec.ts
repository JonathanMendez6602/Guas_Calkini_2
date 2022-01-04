import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAseguradoraComponent } from './create-aseguradora.component';

describe('CreateAseguradoraComponent', () => {
  let component: CreateAseguradoraComponent;
  let fixture: ComponentFixture<CreateAseguradoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAseguradoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAseguradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
