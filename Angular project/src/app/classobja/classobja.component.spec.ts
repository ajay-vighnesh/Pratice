import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassobjaComponent } from './classobja.component';

describe('ClassobjaComponent', () => {
  let component: ClassobjaComponent;
  let fixture: ComponentFixture<ClassobjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassobjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassobjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
