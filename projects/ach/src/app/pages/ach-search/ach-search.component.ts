import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ach-search',
  templateUrl: './ach-search.component.html',
  styleUrls: ['./ach-search.component.scss']
})
export class AchSearchComponent implements OnInit {

  constructor( private titleService: Title, 
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.data.subscribe(d => this.titleService.setTitle(d.title));
  }

}
