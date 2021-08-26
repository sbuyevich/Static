import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'projects/ach/src/app/auth-service';

@Component({
  selector: 'app-ach-dashboard',
  templateUrl: './ach-dashboard.component.html',
  styleUrls: ['./ach-dashboard.component.scss']
})

export class AchDashboardComponent implements OnInit {

  isAdmin = false;
  apiResponse?: string;

  constructor(
    private titleService: Title, 
    private route: ActivatedRoute,
    private http: HttpClient, 
    private authService: AuthService) {
   
  }
  ngOnInit(): void {
    this.route.data.subscribe(d => this.titleService.setTitle(d.title));
    this.isAdmin = this.authService.hasRole("ach.write");
  }

  apiCallGet() {
    this.http.get('https://localhost:5001/Ach/Get').subscribe(data => {
      console.log(data);
      this.apiResponse = JSON.stringify(data);
    });   
  }
  apiCallSet() {
    this.http.get('https://localhost:5001/Ach/Set').subscribe(data => {
      console.log(data);
      this.apiResponse = JSON.stringify(data);
    });
  }

}
