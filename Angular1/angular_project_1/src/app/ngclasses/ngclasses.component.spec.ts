import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassesComponent } from './ngclasses.component';

describe('NgclassesComponent', () => {
  let component: NgclassesComponent;
  let fixture: ComponentFixture<NgclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgclassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
