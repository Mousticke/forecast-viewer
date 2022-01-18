import { ICommon } from './ICommon';
import { ICoord } from './ICoord';
import { IMain } from './IMain';
import { ISys } from './ISys';
import { IWeather } from './IWeather';
import { IWind } from './IWind';

export interface ICurrentWeatherCity {
  coord: ICoord;
  weather: IWeather[];
  main: IMain;
  wind: IWind;
  sys: ISys;
  name: string;
  unix_data_time: number;
  metadata: ICommon;
}
