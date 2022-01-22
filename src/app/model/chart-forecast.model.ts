import { IChartForecastData } from './interfaces/IChartForecastData';

export class ChartForecast implements IChartForecastData {
  dates: number[];
  temp_mins: number[];
  temp_maxs: number[];
  forecasts: number[];
  pops: number[];
  temp_unit: string;

  constructor(
    dates: number[],
    temp_mins: number[],
    temp_maxs: number[],
    forecasts: number[],
    pops: number[],
    temp_unit: string
  ) {
    this.dates = dates;
    this.temp_maxs = temp_maxs;
    this.temp_mins = temp_mins;
    this.forecasts = forecasts;
    this.pops = pops;
    this.temp_unit = temp_unit;
  }
}
