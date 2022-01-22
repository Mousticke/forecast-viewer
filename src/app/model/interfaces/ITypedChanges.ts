import { SimpleChange, SimpleChanges } from '@angular/core';
import { IDaily } from './IDaily';
import { IFullWeatherCity } from './IFullWeatherCity';

interface TypedChange<T> extends SimpleChange {
  previousValue: T;
  currentValue: T;
}

export interface IForecastDailyDataChanged extends SimpleChanges {
  dailyData: TypedChange<IDaily>;
}

export interface IFullCityDataChanged extends SimpleChanges {
  fullCityData: TypedChange<IFullWeatherCity>;
}
