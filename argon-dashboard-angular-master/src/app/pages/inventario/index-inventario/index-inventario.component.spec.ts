import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexInventarioComponent } from './index-inventario.component';

describe('IndexInventarioComponent', () => {
  let component: IndexInventarioComponent;
  let fixture: ComponentFixture<IndexInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
