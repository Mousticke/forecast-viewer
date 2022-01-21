import { Component } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { CurrentWeatherCity } from './model/current-weather-city.model';
import { FullWeatherCity } from './model/full-weather-city.model';
import { ICoord } from './model/interfaces/ICoord';
import { ICurrentWeatherCity } from './model/interfaces/ICurrentWeatherCity';
import { WeatherCityService } from './services/weather-city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public weatherCityData: CurrentWeatherCity;
  public weatherCityFullData: FullWeatherCity;

  private searchCityStream = new Subject<string>();
  private searchGeoStream = new Subject<ICoord>();

  constructor(private weatherCityService: WeatherCityService) {
    this.weatherCityData = new CurrentWeatherCity();
    this.weatherCityFullData = new FullWeatherCity();
  }

  ngOnInit() {
    /*this.searchFullCityData(undefined, undefined, ['hourly']);
    this.searchLightCityData();*/

    this.searchComplete(undefined, undefined, '', ['minutely']).subscribe(
      (data) => {
        this.populateAllCityData(data.currentCity, data.fullCity);
      }
    );

    this.searchCityStream.pipe(this.debounceSearchCity()).subscribe({
      next: (data) => {
        this.populateAllCityData(data.currentCity, data.fullCity);
      },
      error: (err) => {
        this.ngOnInit();
      },
    });

    this.searchGeoStream.pipe(this.debounceSearchGeo()).subscribe({
      next: (data) => {
        this.populateAllCityData(data.currentCity, data.fullCity);
      },
      error: (err) => {
        this.ngOnInit();
      },
    });
  }

  cityForm(item: any) {
    this.searchCityStream.next(item.city_location);
  }

  geoForm(item: any) {
    this.searchGeoStream.next({
      lon: item.city_longitude,
      lat: item.city_latitude,
    });
  }

  private debounceSearchCity() {
    return (source: Observable<string>) => {
      return source.pipe(
        debounceTime(500),
        distinctUntilChanged((a: string, b: string) => {
          return b === this.weatherCityData.name;
        }),
        switchMap((cityName: string) => {
          return this.searchComplete(undefined, undefined, cityName, [
            'hourly',
          ]);
        })
      );
    };
  }

  private debounceSearchGeo() {
    return (source: Observable<ICoord>) => {
      return source.pipe(
        debounceTime(500),
        distinctUntilChanged((a: ICoord, b: ICoord) => {
          return (
            this.weatherCityData.coord.lon === b.lon &&
            this.weatherCityData.coord.lat === b.lat
          );
        }),
        switchMap((coord: ICoord) => {
          return this.searchComplete(coord.lon, coord.lat, undefined, [
            'hourly',
          ]);
        })
      );
    };
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

  private populateAllCityData(currentCity: any, fullCity: any) {
    this.populateCurrentCityData(currentCity);
    this.populateCityFullData(fullCity);
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

  /*searchLightCityData(lon?: number, lat?: number, city?: string) {
    this.weatherCityService
      .getLightLocationWeather(lon, lat, city)
      .subscribe((data: any) => {
        this.populateCurrentCityData(data);
      });
  }

  searchFullCityData(lon?: number, lat?: number, exclusion?: Array<string>) {
    this.weatherCityService
      .getLocationWeather(lon, lat, exclusion)
      .subscribe((data: any) => {
        this.populateCityFullData(data);
      });
  }*/
}
