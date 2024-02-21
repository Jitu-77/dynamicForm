import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'feedBackModule';
  selectedFormId = 2
  formData!: any
  getData() {
    return this.http.get('assets/feedback.json');
  }
  ngOnInit() {
    this.getData().subscribe(data => {
      console.log(data);
      this.formData = data
      // Do something with the JSON data
    });
  }
  submitFormDetails(e:any){
    console.log(e)
  }
}
