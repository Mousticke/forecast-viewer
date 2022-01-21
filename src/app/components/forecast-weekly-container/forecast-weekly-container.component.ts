import { Component, Input, OnInit } from '@angular/core';
import { DailyCity } from 'src/app/model/daily-weather-city.model';
import { FullWeatherCity } from 'src/app/model/full-weather-city.model';
import { IDaily } from 'src/app/model/interfaces/IDaily';
import { IFullWeatherCity } from 'src/app/model/interfaces/IFullWeatherCity';

@Component({
  selector: 'app-forecast-weekly-container',
  templateUrl: './forecast-weekly-container.component.html',
  styleUrls: ['./forecast-weekly-container.component.scss'],
})
export class ForecastContainerComponent implements OnInit {
  @Input() fullCity: IFullWeatherCity;

  clickedDailyData: IDaily;
  showDetails: boolean = false;

  private storedIndex: number = -1;

  constructor() {
    this.fullCity = new FullWeatherCity();
    this.clickedDailyData = new DailyCity();
  }

  ngOnInit(): void {}

  setDailyIndex(index: number) {
    if (index >= 0 && index !== this.storedIndex) {
      this.clickedDailyData = this.fullCity?.daily[index];
      this.showDetails = true;
      this.storedIndex = index;
    } else {
      this.clickedDailyData = new DailyCity();
      this.showDetails = false;
      this.storedIndex = -1;
    }
  }
}
