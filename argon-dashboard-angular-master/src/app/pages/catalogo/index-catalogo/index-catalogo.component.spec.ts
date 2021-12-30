import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCatalogoComponent } from './index-catalogo.component';

describe('IndexCatalogoComponent', () => {
  let component: IndexCatalogoComponent;
  let fixture: ComponentFixture<IndexCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
