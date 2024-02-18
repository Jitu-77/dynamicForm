import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-container-a',
  templateUrl: './form-container-a.component.html',
  styleUrls: ['./form-container-a.component.css']
})
export class FormContainerAComponent {
  constructor(private http: HttpClient,private fb: FormBuilder) { }
  title = 'feedBackModule';
  selectedFormId :any = 3
  selectedFormData! : any 
  dynamicForm: FormGroup = this.fb.group({});

  getData() {
    return this.http.get('assets/feedback.json');
  }
  async ngOnInit() {
    await this.getData().subscribe((data :any) => {
      console.log(data);
      // Do something with the JSON data
      this.selectedFormData = data?.formDetails?.find((el:any)=>
      {
        return el?.form_id == this.selectedFormId
      })
      console.log(this.selectedFormData)    
    });
  }
}
