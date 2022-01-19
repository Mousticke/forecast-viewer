import { environment } from 'src/environments/environment';
import {
  WeatherUnitsSpeed,
  WeatherUnitsTemperature,
} from './constants/WeatherUnits';
import { ICoord } from './interfaces/ICoord';
import { IMain } from './interfaces/IMain';
import { ISys } from './interfaces/ISys';
import { IWeather } from './interfaces/IWeather';
import { ICurrentWeatherCity } from './interfaces/ICurrentWeatherCity';
import { IWind } from './interfaces/IWind';
import { ICommon } from './interfaces/ICommon';

export class CurrentWeatherCity implements ICurrentWeatherCity {
  coord: ICoord;
  weather: IWeather[];
  main: IMain;
  wind: IWind;
  name: string;
  sys: ISys;
  metadata: ICommon;
  unix_data_time: number;

  constructor() {
    this.coord = {
      lon: 0,
      lat: 0,
    };

    this.weather = new Array<IWeather>(0);
    this.weather[0] = {
      id: 0,
      main: '0',
      description: '0',
      icon: '0',
    };

    this.main = {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    };

    this.wind = {
      speed: 0,
      deg: 0,
    };

    this.sys = {
      country_code: '',
      unix_sunrise_time: new Date().getTime(),
      unix_sunset_time: new Date().getTime(),
    };

    this.name = 'Undefined';
    this.unix_data_time = new Date().getTime();

    this.metadata = {
      unix_timezone: 0,
      weather_temperature_unit:
        environment.units === 'metric'
          ? WeatherUnitsTemperature.Metric
          : WeatherUnitsTemperature.Imperial,
      weather_speed_unit:
        environment.units === 'metric'
          ? WeatherUnitsSpeed.Metric
          : WeatherUnitsSpeed.Imperial,
    };
  }

  setCoord(lon: number, lat: number) {
    this.coord = {
      lon: lon,
      lat: lat,
    };
  }

  setWeather(id: number, main: string, description: string, icon: string) {
    this.weather[0] = {
      id: id,
      main: main,
      description: description,
      icon: icon,
    };
  }

  setMain(
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  ) {
    this.main = {
      temp: temp,
      feels_like: feels_like,
      temp_min: temp_min,
      temp_max: temp_max,
      pressure: pressure,
      humidity: humidity,
    };
  }

  setWind(speed: number, deg: number) {
    this.wind = {
      speed: speed,
      deg: deg,
    };
  }

  setSys(
    country_code: string,
    unix_sunrise_time: number,
    unix_sunset_time: number
  ) {
    this.sys = {
      country_code: country_code,
      unix_sunrise_time: unix_sunrise_time,
      unix_sunset_time: unix_sunset_time,
    };
  }

  setName(name: string) {
    this.name = name;
  }

  setDataTime(unixDateTime: number, unixTimezone: number) {
    this.unix_data_time = new Date(unixDateTime * 1000).getTime();
    this.metadata.unix_timezone = unixTimezone;
  }
}
