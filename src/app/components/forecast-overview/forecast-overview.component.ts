import { Component, Input, OnInit } from '@angular/core';
import { ICurrentWeatherCity } from 'src/app/model/interfaces/ICurrentWeatherCity';
import { IFullWeatherCity } from 'src/app/model/interfaces/IFullWeatherCity';

@Component({
  selector: 'app-forecast-overview',
  inputs: ['currentCity', 'fullCity'],
  templateUrl: './forecast-overview.component.html',
  styleUrls: ['./forecast-overview.component.scss'],
})
export class ForeCastOverviewComponent implements OnInit {
  @Input() currentCity!: ICurrentWeatherCity;
  @Input() fullCity!: IFullWeatherCity;
  showDetails: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.currentCity);
    console.log(this.fullCity);
  }
}
