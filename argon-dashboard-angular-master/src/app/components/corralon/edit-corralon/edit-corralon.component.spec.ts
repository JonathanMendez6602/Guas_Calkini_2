import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCorralonComponent } from './edit-corralon.component';

describe('EditCorralonComponent', () => {
  let component: EditCorralonComponent;
  let fixture: ComponentFixture<EditCorralonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCorralonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCorralonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
