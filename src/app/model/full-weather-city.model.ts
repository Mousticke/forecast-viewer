import { environment } from 'src/environments/environment';
import {
  WeatherUnitsSpeed,
  WeatherUnitsTemperature,
} from './constants/WeatherUnits';
import { IAlert } from './interfaces/IAlert';
import { ICommon } from './interfaces/ICommon';
import { ICurrent } from './interfaces/ICurrent';
import { IDaily } from './interfaces/IDaily';
import { IFullWeatherCity } from './interfaces/IFullWeatherCity';
import { ILightHourly } from './interfaces/ILightHourly';
import { IWeather } from './interfaces/IWeather';

export class FullWeatherCity implements IFullWeatherCity {
  metadata: ICommon;
  alerts: IAlert[];
  current: ICurrent;
  daily: IDaily[];
  hourly: ILightHourly[];

  constructor() {
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

    this.alerts = new Array<IAlert>(0);
    this.current = {
      clouds: 0,
      dew_point: 0,
      dt: 0,
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      sunrise: 0,
      sunset: 0,
      temp: 0,
      uvi: 0,
      visibility: 0,
      weather: new Array<IWeather>(0),
      wind_deg: 0,
      wind_gust: 0,
      wind_speed: 0,
    };

    this.daily = new Array<IDaily>(0);

    this.hourly = new Array<ILightHourly>(0);
  }

  setAlert(alerts: Array<any>) {
    this.alerts = new Array<IAlert>();
    if (alerts) {
      for (let i = 0; i < alerts.length; i++) {
        this.alerts.push({
          description: alerts[i].description,
          end: alerts[i].end,
          event: alerts[i].event,
          sender_name: alerts[i].sender_name,
          start: alerts[i].start,
          tags: alerts[i].tags,
        });
      }
    }
  }

  setCurrent(current: any) {
    const weather = new Array<IWeather>();
    for (let index = 0; index < current.weather.length; index++) {
      weather.push({
        description: current.weather[index].description,
        icon: current.weather[index].icon,
        id: current.weather[index].id,
        main: current.weather[index].main,
      });
    }
    this.current = {
      clouds: current.clouds,
      dew_point: current.dew_point,
      dt: new Date(current.dt * 1000).getTime(),
      feels_like: current.feels_like,
      humidity: current.humidity,
      pressure: current.pressure,
      sunrise: new Date(current.sunrise * 1000).getTime(),
      sunset: new Date(current.sunset * 1000).getTime(),
      temp: current.temp,
      uvi: current.uvi,
      visibility: current.visibility,
      weather: weather,
      wind_deg: current.wind_deg,
      wind_gust: current.wind_gust,
      wind_speed: current.wind_speed,
    };
  }

  setDaily(dailies: Array<any>) {
    this.daily = new Array<IDaily>();
    if (dailies) {
      for (let i = 0; i < dailies.length; i++) {
        const weather = new Array<IWeather>();
        for (let j = 0; j < dailies[i].weather.length; j++) {
          weather.push({
            description: dailies[i].weather[j].description,
            icon: dailies[i].weather[j].icon,
            id: dailies[i].weather[j].id,
            main: dailies[i].weather[j].main,
          });
        }

        this.daily.push({
          clouds: dailies[i].clouds,
          dew_point: dailies[i].dew_point,
          dt: new Date(dailies[i].dt * 1000).getTime(),
          feels_like: {
            day: dailies[i].feels_like.day,
            night: dailies[i].feels_like.night,
            eve: dailies[i].feels_like.eve,
            morn: dailies[i].feels_like.morn,
          },
          humidity: dailies[i].humidity,
          pop: dailies[i].pop,
          pressure: dailies[i].pressure,
          sunrise: new Date(dailies[i].sunrise * 1000).getTime(),
          sunset: new Date(dailies[i].sunset * 1000).getTime(),
          temp: {
            day: dailies[i].temp.day,
            night: dailies[i].temp.night,
            eve: dailies[i].temp.eve,
            morn: dailies[i].temp.morn,
            min: dailies[i].temp.min,
            max: dailies[i].temp.max,
          },
          uvi: dailies[i].uvi,
          visibility: dailies[i].visibility,
          weather: weather,
          wind_deg: dailies[i].wind_deg,
          wind_gust: dailies[i].wind_gust,
          wind_speed: dailies[i].wind_speed,
        });
      }
    }
  }

  setHourly(hourlies: Array<any>) {
    this.hourly = new Array<ILightHourly>();
    if (hourlies) {
      for (let i = 0; i < hourlies.length; i++) {
        const weather = new Array<IWeather>();
        for (let j = 0; j < hourlies[i].weather.length; j++) {
          weather.push({
            description: hourlies[i].weather[j].description,
            icon: hourlies[i].weather[j].icon,
            id: hourlies[i].weather[j].id,
            main: hourlies[i].weather[j].main,
          });
        }

        this.hourly.push({
          clouds: hourlies[i].clouds,
          dew_point: hourlies[i].dew_point,
          dt: new Date(hourlies[i].dt * 1000).getTime(),
          feels_like: hourlies[i].feels_like,
          humidity: hourlies[i].humidity,
          pop: hourlies[i].pop,
          pressure: hourlies[i].pressure,
          temp: hourlies[i].temp,
          uvi: hourlies[i].uvi,
          visibility: hourlies[i].visibility,
          weather: weather,
          wind_deg: hourlies[i].wind_deg,
          wind_gust: hourlies[i].wind_gust,
          wind_speed: hourlies[i].wind_speed,
        });
      }
    }
  }

  setMetaData(unixTimezone: number) {
    this.metadata.unix_timezone = unixTimezone;
  }
}
