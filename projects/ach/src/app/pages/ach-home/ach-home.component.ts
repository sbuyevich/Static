import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ach-home',
  templateUrl: './ach-home.component.html',
  styleUrls: ['./ach-home.component.scss']
})
export class AchHomeComponent implements OnInit {

  constructor(private  titleService: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(d => this.titleService.setTitle(d.title));    
  }

}
