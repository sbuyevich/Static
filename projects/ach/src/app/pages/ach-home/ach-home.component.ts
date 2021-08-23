import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../auth-service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/ach/src/environments/environment';

@Component({
  selector: 'app-ach-home',
  templateUrl: './ach-home.component.html',
  styleUrls: ['./ach-home.component.scss']
})
export class AchHomeComponent implements OnInit {
  isAdmin = false;
  apiResponse?: string;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.data.subscribe(d => this.titleService.setTitle(d.title));
    this.isAdmin = this.authService.hasRole("ach.write");
  }

  apiCallGet() {
    this.http.get(environment.achApi.getUrl).subscribe(data => {
      console.log(data);
      this.apiResponse = JSON.stringify(data);
    });
  }
  apiCallSet() {
    this.http.get(environment.achApi.setUrl).subscribe(data => {
      console.log(data);
      this.apiResponse = JSON.stringify(data);
    });
  }

}
