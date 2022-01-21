import { Component, Input, OnInit } from '@angular/core';
import { IFullWeatherCity } from 'src/app/model/interfaces/IFullWeatherCity';

@Component({
  selector: 'app-daily-details',
  templateUrl: './current-daily-details.component.html',
  styleUrls: ['./current-daily-details.component.scss'],
})
export class CurrentDailyDetailsComponent implements OnInit {
  @Input() fullCity!: IFullWeatherCity;
  constructor() {}

  ngOnInit(): void {}
}
