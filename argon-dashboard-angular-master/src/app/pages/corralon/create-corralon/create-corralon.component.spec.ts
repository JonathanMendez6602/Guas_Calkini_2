import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCorralonComponent } from './create-corralon.component';

describe('CreateCorralonComponent', () => {
  let component: CreateCorralonComponent;
  let fixture: ComponentFixture<CreateCorralonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCorralonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCorralonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
