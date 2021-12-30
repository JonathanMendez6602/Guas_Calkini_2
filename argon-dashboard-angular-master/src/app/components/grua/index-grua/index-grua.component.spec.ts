import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGruaComponent } from './index-grua.component';

describe('IndexGruaComponent', () => {
  let component: IndexGruaComponent;
  let fixture: ComponentFixture<IndexGruaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexGruaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexGruaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
