import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAseguradoraComponent } from './index-aseguradora.component';

describe('IndexAseguradoraComponent', () => {
  let component: IndexAseguradoraComponent;
  let fixture: ComponentFixture<IndexAseguradoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAseguradoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAseguradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
