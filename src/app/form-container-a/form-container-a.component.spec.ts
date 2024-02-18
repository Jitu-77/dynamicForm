import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerAComponent } from './form-container-a.component';

describe('FormContainerAComponent', () => {
  let component: FormContainerAComponent;
  let fixture: ComponentFixture<FormContainerAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContainerAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormContainerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
