import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAseguradoraComponent } from './edit-aseguradora.component';

describe('EditAseguradoraComponent', () => {
  let component: EditAseguradoraComponent;
  let fixture: ComponentFixture<EditAseguradoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAseguradoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAseguradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
