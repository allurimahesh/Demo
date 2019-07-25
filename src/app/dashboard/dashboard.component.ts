import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss',
    '../../assets/icon/SVG-animated/svg-weather.css',
    '../../../node_modules/c3/c3.min.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor() {}

ngOnInit() {}
}
