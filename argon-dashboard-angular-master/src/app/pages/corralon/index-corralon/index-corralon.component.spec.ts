import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCorralonComponent } from './index-corralon.component';

describe('IndexCorralonComponent', () => {
  let component: IndexCorralonComponent;
  let fixture: ComponentFixture<IndexCorralonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCorralonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCorralonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
