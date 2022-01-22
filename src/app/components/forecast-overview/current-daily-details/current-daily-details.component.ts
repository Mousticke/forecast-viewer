import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ChartForecast } from 'src/app/model/chart-forecast.model';
import { IChartForecastData } from 'src/app/model/interfaces/IChartForecastData';
import { IFullWeatherCity } from 'src/app/model/interfaces/IFullWeatherCity';
import { ILightHourly } from 'src/app/model/interfaces/ILightHourly';

@Component({
  selector: 'app-daily-details',
  templateUrl: './current-daily-details.component.html',
  styleUrls: ['./current-daily-details.component.scss'],
})
export class CurrentDailyDetailsComponent implements OnInit {
  @Input() fullCity!: IFullWeatherCity;
  public chartHourStream = new Subject<IChartForecastData>();
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.populateChart(this.fullCity);
  }

  populateChart(data: IFullWeatherCity) {
    let temp_mins: number[] = new Array<number>(0);
    let temp_maxs: number[] = new Array<number>(0);
    let forecasts: number[] = new Array<number>(0);
    let pops: number[] = new Array<number>(0);
    let dates: number[] = new Array<number>(0);
    data.hourly.slice(0, 23).forEach((hour: ILightHourly, index: number) => {
      if (index <= 23) {
        temp_maxs.push(data.daily[0].temp.max);
        temp_mins.push(data.daily[0].temp.min);
      }
      forecasts.push(hour.temp);
      pops.push(hour.pop);
      dates.push(hour.dt);
    });

    this.chartHourStream.next(
      new ChartForecast(
        dates,
        temp_mins,
        temp_maxs,
        forecasts,
        pops,
        data.metadata.weather_temperature_unit
      )
    );
  }
}
