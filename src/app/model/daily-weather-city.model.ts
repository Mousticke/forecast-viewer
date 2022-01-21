import { IDaily } from './interfaces/IDaily';
import { IFullFeelLike } from './interfaces/IFullFeelLike';
import { IFullTemp } from './interfaces/IFullTemp';
import { IWeather } from './interfaces/IWeather';

export class DailyCity implements IDaily {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: IFullFeelLike;
  humidity: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  moonset: number;
  moonrise: number;
  temp: IFullTemp;
  uvi: number;
  visibility: number;
  weather: IWeather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;

  constructor() {
    this.clouds = 0;
    this.dew_point = 0;
    this.dt = new Date().getTime();
    this.feels_like = {
      day: 0,
      night: 0,
      eve: 0,
      morn: 0,
    };
    this.humidity = 0;
    this.pop = 0;
    this.pressure = 0;
    this.sunrise = new Date().getTime();
    this.sunset = new Date().getTime();
    this.moonrise = new Date().getTime();
    this.moonset = new Date().getTime();
    this.temp = {
      day: 0,
      night: 0,
      eve: 0,
      morn: 0,
      min: 0,
      max: 0,
    };
    this.uvi = 0;
    this.visibility = 0;
    this.weather = new Array<IWeather>({
      id: 0,
      main: '',
      description: '',
      icon: '01d',
    });
    this.wind_deg = 0;
    this.wind_gust = 0;
    this.wind_speed = 0;
  }
}
