import { Component, Input, OnInit } from '@angular/core';
import { ICommon } from 'src/app/model/interfaces/ICommon';
import { IDaily } from 'src/app/model/interfaces/IDaily';
import { IForecastDailyDataChanged } from 'src/app/model/interfaces/ITypedChanges';

@Component({
  selector: 'app-forecast-daily-details',
  templateUrl: './forecast-daily-details.component.html',
  styleUrls: ['./forecast-daily-details.component.scss'],
})
export class ForecastDailyDetailsComponent implements OnInit {
  @Input() dailyData!: IDaily;
  @Input() commonMetaData!: ICommon;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: IForecastDailyDataChanged) {
    console.log(changes.dailyData.currentValue);
  }
}
