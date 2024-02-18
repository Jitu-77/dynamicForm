import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormStructure } from '../form.interface';
import { formConfig } from '../form-config';
@Component({
  selector: 'app-form-container-b',
  templateUrl: './form-container-b.component.html',
  styleUrls: ['./form-container-b.component.css']
})
export class FormContainerBComponent {
  formStructure: IFormStructure[] = formConfig;

  dynamicForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {
    let formGroup: Record<string, any> = {};
    console.log(this.formStructure)
    this.formStructure.forEach((control) => {
      console.log(control)
      let controlValidators: Validators[] = [];

      if (control.validations) {
        control.validations.forEach(
          (validation: {
            name: string;
            validator: string;
            message: string;
          }) => {
            if (validation.name === 'required'){
              controlValidators.push(Validators.required);

            }
            if(validation.name === 'pattern'){
              controlValidators.push(Validators.pattern(validation?.validator))
            }
          }
        );
      }

      formGroup[control.name] = [control.value || '', controlValidators];
    });

    console.log(formGroup)
    this.dynamicForm = this.fb.group(formGroup);
    console.log(this.dynamicForm)
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.name);

    if (!formControl) {
      return '';
    }

    for (let validation of control.validations) {
      if (formControl.hasError(validation.name) ) {
        return validation.message;
      }
    }

    return '';
  }

  onSubmit() {
    console.log(this.dynamicForm)
    if (!this.dynamicForm.valid) {
      this.dynamicForm.markAllAsTouched();
      return;
    }
    console.log(this.dynamicForm.value);
  }
}
