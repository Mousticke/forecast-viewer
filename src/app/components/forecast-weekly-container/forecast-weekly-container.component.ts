import { Component, Input, OnInit } from '@angular/core';
import { DailyCity } from 'src/app/model/daily-weather-city.model';
import { IDaily } from 'src/app/model/interfaces/IDaily';
import { IFullWeatherCity } from 'src/app/model/interfaces/IFullWeatherCity';
import { IFullCityDataChanged } from 'src/app/model/interfaces/ITypedChanges';

@Component({
  selector: 'app-forecast-weekly-container',
  templateUrl: './forecast-weekly-container.component.html',
  styleUrls: ['./forecast-weekly-container.component.scss'],
})
export class ForecastContainerComponent implements OnInit {
  @Input() fullCity!: IFullWeatherCity;

  private storedIndex: number = -1;
  clickedDailyData: IDaily;
  showDetails: boolean = false;

  constructor() {
    this.clickedDailyData = new DailyCity();
  }

  ngOnInit(): void {}

  ngOnChanges(changes: IFullCityDataChanged) {
    if (
      changes['fullCity'].previousValue !== undefined &&
      this.storedIndex !== -1
    ) {
      this.clickedDailyData = this.fullCity?.daily[this.storedIndex];
      this.showDetails = true;
      this.storedIndex = this.storedIndex;
    }
  }

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
