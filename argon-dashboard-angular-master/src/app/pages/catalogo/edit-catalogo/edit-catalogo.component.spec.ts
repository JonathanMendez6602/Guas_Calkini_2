import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatalogoComponent } from './edit-catalogo.component';

describe('EditCatalogoComponent', () => {
  let component: EditCatalogoComponent;
  let fixture: ComponentFixture<EditCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
