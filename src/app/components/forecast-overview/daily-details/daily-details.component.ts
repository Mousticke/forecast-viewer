import { Component, Input, OnInit } from '@angular/core';
import { IFullWeatherCity } from 'src/app/model/interfaces/IFullWeatherCity';

@Component({
  selector: 'app-daily-details',
  templateUrl: './daily-details.component.html',
  styleUrls: ['./daily-details.component.scss'],
})
export class DailyDetailsComponent implements OnInit {
  @Input() fullCity!: IFullWeatherCity;
  constructor() {}

  ngOnInit(): void {}
}
