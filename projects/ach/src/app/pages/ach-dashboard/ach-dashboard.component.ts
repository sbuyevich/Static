import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ach-dashboard',
  templateUrl: './ach-dashboard.component.html',
  styleUrls: ['./ach-dashboard.component.scss']
})


export class AchDashboardComponent {

  constructor(private http: HttpClient) {
  }

  apiCallGet() {
    this.http.get('https://localhost:5001/Ach/Get').subscribe(data => {
      console.log(data);
    });
    // this.http.get('https://localhost:5001/Ach/Get').subscribe(data => {
    //   console.log(data);
    // });
  }
  apiCallSet() {
    // this.http.get('https://localhost:5001/WeatherForecast/set').subscribe(data => {
    //   console.log(data);
    // });
  }

}
