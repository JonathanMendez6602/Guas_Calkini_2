import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChoferComponent } from './view-chofer.component';

describe('ViewChoferComponent', () => {
  let component: ViewChoferComponent;
  let fixture: ComponentFixture<ViewChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
