import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerBComponent } from './form-container-b.component';

describe('FormContainerBComponent', () => {
  let component: FormContainerBComponent;
  let fixture: ComponentFixture<FormContainerBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContainerBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormContainerBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
