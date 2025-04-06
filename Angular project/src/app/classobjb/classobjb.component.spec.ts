import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassobjbComponent } from './classobjb.component';

describe('ClassobjbComponent', () => {
  let component: ClassobjbComponent;
  let fixture: ComponentFixture<ClassobjbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassobjbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassobjbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
