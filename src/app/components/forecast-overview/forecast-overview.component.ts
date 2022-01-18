import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-overview',
  templateUrl: './forecast-overview.component.html',
  styleUrls: ['./forecast-overview.component.scss'],
})
export class ForeCastOverviewComponent implements OnInit {
  showDetails: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
