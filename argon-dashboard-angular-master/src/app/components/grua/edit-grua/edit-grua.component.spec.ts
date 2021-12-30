import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGruaComponent } from './edit-grua.component';

describe('EditGruaComponent', () => {
  let component: EditGruaComponent;
  let fixture: ComponentFixture<EditGruaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGruaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGruaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
