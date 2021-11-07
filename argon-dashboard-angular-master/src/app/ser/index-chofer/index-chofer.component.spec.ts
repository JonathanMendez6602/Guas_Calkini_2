import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexChoferComponent } from './index-chofer.component';

describe('IndexChoferComponent', () => {
  let component: IndexChoferComponent;
  let fixture: ComponentFixture<IndexChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexChoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
