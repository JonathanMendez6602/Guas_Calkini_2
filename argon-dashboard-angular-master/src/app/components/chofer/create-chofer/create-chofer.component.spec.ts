import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChoferComponent } from './create-chofer.component';

describe('CreateChoferComponent', () => {
  let component: CreateChoferComponent;
  let fixture: ComponentFixture<CreateChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
