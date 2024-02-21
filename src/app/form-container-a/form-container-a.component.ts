import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-container-a',
  templateUrl: './form-container-a.component.html',
  styleUrls: ['./form-container-a.component.css']
})
export class FormContainerAComponent implements  OnChanges {
  constructor(private http: HttpClient,private fb: FormBuilder) { }
  title = 'feedBackModule';
  @Input() selectedFormId :any = 1
  selectedFormData! : any 
  @Input() formData! : any 
  dynamicForm: FormGroup = this.fb.group({});
  formStructure:any[] = []
  getData() {
    return this.http.get('assets/feedback.json');
  }
  async ngOnInit() {
    console.log("triggered from init")
    if(!this.selectedFormData){
      await this.getData().subscribe((data :any) => {
        console.log(data);
        this.selectedFormData = data?.formDetails?.find((el:any)=>
        {
          return el?.form_id == this.selectedFormId
        })
        this.formControlWrapper()
      });
    }
  } 
  async ngOnChanges(changes: SimpleChanges) {
    console.log("triggered from on changes")
    // reset page if items array has changed
    if (changes['items']?.currentValue !== changes['items']?.previousValue) {
      this.selectedFormData = this.formData?.formDetails?.find((el:any)=>
      {
        return el?.form_id == this.selectedFormId
      })
      this.formControlWrapper()
    }
}
  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.param_name);

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
  formControlWrapper(){
    console.log(this.selectedFormData)    
    let formGroup: Record<string, any> = {};
    this.formStructure = this.selectedFormData?.form_details
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
      formGroup[control.param_name] = [control.value || '', controlValidators];
    });
    this.dynamicForm = this.fb.group(formGroup);
    console.log(formGroup)
    console.log(this.dynamicForm)
  }
}
