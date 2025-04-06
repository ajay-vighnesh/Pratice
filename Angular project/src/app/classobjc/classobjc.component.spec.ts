import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassobjcComponent } from './classobjc.component';

describe('ClassobjcComponent', () => {
  let component: ClassobjcComponent;
  let fixture: ComponentFixture<ClassobjcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassobjcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassobjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
