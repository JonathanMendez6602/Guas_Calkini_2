import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGruaComponent } from './view-grua.component';

describe('ViewGruaComponent', () => {
  let component: ViewGruaComponent;
  let fixture: ComponentFixture<ViewGruaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGruaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGruaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
