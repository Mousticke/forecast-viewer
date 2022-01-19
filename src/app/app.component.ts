import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable, switchMap } from 'rxjs';
import { CurrentWeatherCity } from './model/current-weather-city.model';
import { FullWeatherCity } from './model/full-weather-city.model';
import { ICurrentWeatherCity } from './model/interfaces/ICurrentWeatherCity';
import { IFullWeatherCity } from './model/interfaces/IFullWeatherCity';
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
    this.searchFullCityData(undefined, undefined, ['hourly']);
    this.searchLightCityData();
  }

  cityForm(item: any) {
    this.searchComplete(undefined, undefined, item.city_location, [
      'hourly',
    ]).subscribe((data) => {
      this.populateCurrentCityData(data.currentCity);
      this.populateCityFullData(data.fullCity);
    });
  }

  geoForm(item: any) {
    this.searchComplete(item.city_longitude, item.city_latitude, undefined, [
      'hourly',
    ]).subscribe((data) => {
      this.populateCurrentCityData(data.currentCity);
      this.populateCityFullData(data.fullCity);
    });
  }

  searchLightCityData(lon?: number, lat?: number, city?: string) {
    this.weatherCityService
      .getLightLocationWeather(lon, lat, city)
      .subscribe((data: any) => {
        this.populateCurrentCityData(data);
      });
  }

  searchFullCityData(lon?: number, lat?: number, exclusion?: Array<string>) {
    console.log(lon);
    this.weatherCityService
      .getLocationWeather(lon, lat, exclusion)
      .subscribe((data: any) => {
        this.populateCityFullData(data);
      });
  }

  private searchComplete(
    lon?: number,
    lat?: number,
    city?: string,
    exclusion?: Array<string>
  ): Observable<any> {
    return this.weatherCityService.getLightLocationWeather(lon, lat, city).pipe(
      switchMap((currentCity: ICurrentWeatherCity) => {
        return this.weatherCityService
          .getLocationWeather(
            currentCity.coord.lon,
            currentCity.coord.lat,
            exclusion
          )
          .pipe(
            map((fullCity: any) => {
              return {
                currentCity,
                fullCity,
              };
            })
          );
      })
    );
  }

  private populateCurrentCityData(currentCity: any) {
    this.weatherCityData.setCoord(currentCity.coord.lon, currentCity.coord.lat);
    this.weatherCityData.setWeather(
      currentCity.weather[0].id,
      currentCity.weather[0].main,
      currentCity.weather[0].description,
      currentCity.weather[0].icon
    );
    this.weatherCityData.setMain(
      currentCity.main.temp,
      currentCity.main.feels_like,
      currentCity.main.temp_min,
      currentCity.main.temp_max,
      currentCity.main.pressure,
      currentCity.main.humidity
    );
    this.weatherCityData.setWind(currentCity.wind.speed, currentCity.wind.deg);
    this.weatherCityData.setName(currentCity.name);
    this.weatherCityData.setSys(
      currentCity.sys.country,
      currentCity.sys.sunrise,
      currentCity.sys.sunset
    );
    this.weatherCityData.setDataTime(currentCity.dt, currentCity.timezone);
  }

  private populateCityFullData(fullCity: any) {
    this.weatherCityFullData.setAlert(fullCity.alerts);
    this.weatherCityFullData.setCurrent(fullCity.current);
    this.weatherCityFullData.setDaily(fullCity.daily);
    this.weatherCityFullData.setHourly(fullCity.hourly);
    this.weatherCityFullData.setMetaData(fullCity.timezone_offset);
  }
}
