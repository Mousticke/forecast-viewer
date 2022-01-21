import { SimpleChange, SimpleChanges } from '@angular/core';
import { IDaily } from './IDaily';

interface TypedChange<T> extends SimpleChange {
  previousValue: T;
  currentValue: T;
}

export interface IForecastDailyDataChanged extends SimpleChanges {
  dailyData: TypedChange<IDaily>;
}
