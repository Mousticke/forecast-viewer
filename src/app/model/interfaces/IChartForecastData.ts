export interface IChartForecastData {
  dates: Array<number>;
  temp_mins: Array<number>;
  temp_maxs: Array<number>;
  forecasts: Array<number>;
  pops: Array<number>;
  temp_unit: string;
}
