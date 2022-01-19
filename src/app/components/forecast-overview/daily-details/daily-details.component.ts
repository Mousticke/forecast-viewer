import { Component, Input, OnInit } from '@angular/core';
import { FullWeatherCity } from 'src/app/model/full-weather-city.model';
import { ICurrentWeatherCity } from 'src/app/model/interfaces/ICurrentWeatherCity';
import { IFullWeatherCity } from 'src/app/model/interfaces/IFullWeatherCity';

@Component({
  selector: 'app-daily-details',
  templateUrl: './daily-details.component.html',
  styleUrls: ['./daily-details.component.scss'],
})
export class DailyDetailsComponent implements OnInit {
  @Input() fullCity!: IFullWeatherCity;
  @Input() currentCity!: ICurrentWeatherCity;
  constructor() {}

  ngOnInit(): void {}
}
