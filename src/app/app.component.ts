import { Component } from '@angular/core';
import { CurrentWeatherCity } from './model/current-weather-city.model';
import { FullWeatherCity } from './model/full-weather-city.model';
import { WeatherCityService } from './services/weather-city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public weatherCityData: CurrentWeatherCity;
  public weatherCityFullData: FullWeatherCity;
  constructor(private weatherCityService: WeatherCityService) {
    this.weatherCityData = new CurrentWeatherCity();
    this.weatherCityFullData = new FullWeatherCity();
  }

  ngOnInit() {
    this.weatherCityService
      .getLocationWeather(undefined, undefined, [''])
      .subscribe((data: any) => {
        this.weatherCityFullData.setAlert(data.alerts);
        this.weatherCityFullData.setCurrent(data.current);
        this.weatherCityFullData.setDaily(data.daily);
        this.weatherCityFullData.setHourly(data.hourly);
        this.weatherCityFullData.setMetaData(data.timezone_offset);
      });

    this.weatherCityService
      .getCurrentLocationWeather()
      .subscribe((data: any) => {
        this.weatherCityData.setCoord(data.coord.lon, data.coord.lat);
        this.weatherCityData.setWeather(
          data.weather[0].id,
          data.weather[0].main,
          data.weather[0].description,
          data.weather[0].icon
        );
        this.weatherCityData.setMain(
          data.main.temp,
          data.main.feels_like,
          data.main.temp_min,
          data.main.temp_max,
          data.main.pressure,
          data.main.humidity
        );
        this.weatherCityData.setWind(data.wind.speed, data.wind.deg);
        this.weatherCityData.setName(data.name);
        this.weatherCityData.setSys(
          data.sys.country,
          data.sys.sunrise,
          data.sys.sunset
        );
        this.weatherCityData.setDataTime(data.dt, data.timezone);
      });
  }
}
