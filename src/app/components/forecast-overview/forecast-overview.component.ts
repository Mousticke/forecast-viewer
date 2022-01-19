import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CurrentWeatherCity } from 'src/app/model/current-weather-city.model';
import { FullWeatherCity } from 'src/app/model/full-weather-city.model';
import { ICurrentWeatherCity } from 'src/app/model/interfaces/ICurrentWeatherCity';
import { IFullWeatherCity } from 'src/app/model/interfaces/IFullWeatherCity';

@Component({
  selector: 'app-forecast-overview',
  templateUrl: './forecast-overview.component.html',
  styleUrls: ['./forecast-overview.component.scss'],
})
export class ForeCastOverviewComponent implements OnInit {
  @Input() currentCity: ICurrentWeatherCity;
  @Input() fullCity: IFullWeatherCity;
  showDetails: boolean = false;

  constructor() {
    this.fullCity = new FullWeatherCity();
    this.currentCity = new CurrentWeatherCity();
  }

  ngOnInit(): void {}
}
