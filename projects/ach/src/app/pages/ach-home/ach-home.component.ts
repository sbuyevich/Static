import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ach-home',
  templateUrl: './ach-home.component.html',
  styleUrls: ['./ach-home.component.scss']
})
export class AchHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(d => console.log(d));
  }

}
