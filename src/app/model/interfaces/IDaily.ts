import { IFullFeelLike } from './IFullFeelLike';
import { IFullTemp } from './IFullTemp';
import { IWeather } from './IWeather';

export interface IDaily {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: IFullFeelLike;
  humidity: number;
  pop: number;
  pressure: number;
  moonrise: number;
  moonset: number;
  sunrise: number;
  sunset: number;
  temp: IFullTemp;
  uvi: number;
  visibility: number;
  weather: Array<IWeather>;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}
