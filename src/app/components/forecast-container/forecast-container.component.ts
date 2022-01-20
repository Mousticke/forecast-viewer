import { Component, Input, OnInit } from '@angular/core';
import { FullWeatherCity } from 'src/app/model/full-weather-city.model';
import { IFullWeatherCity } from 'src/app/model/interfaces/IFullWeatherCity';

@Component({
  selector: 'app-forecast-container',
  templateUrl: './forecast-container.component.html',
  styleUrls: ['./forecast-container.component.scss'],
})
export class ForecastContainerComponent implements OnInit {
  @Input() fullCity: IFullWeatherCity;
  constructor() {
    this.fullCity = new FullWeatherCity();
  }

  ngOnInit(): void {}

  get JSONStr(): string {
    return JSON.stringify(this.fullCity);
  }
}
