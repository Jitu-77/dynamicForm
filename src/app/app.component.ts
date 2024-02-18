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
  getData() {
    return this.http.get('assets/feedback.json');
  }
  ngOnInit() {
    this.getData().subscribe(data => {
      console.log(data);
      // Do something with the JSON data
    });
  }
}
