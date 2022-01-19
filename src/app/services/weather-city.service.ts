import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable, switchMap } from 'rxjs';
import { ICurrentWeatherCity } from '../model/interfaces/ICurrentWeatherCity';
import { LocationService } from './location.service';
import { ICoord } from '../model/interfaces/ICoord';
import { IFullWeatherCity } from '../model/interfaces/IFullWeatherCity';

@Injectable({
  providedIn: 'root',
})
export class WeatherCityService {
  constructor(
    private http: HttpClient,
    private browserLocationService: LocationService
  ) {}

  getCurrentLocationWeather(): Observable<ICurrentWeatherCity> {
    const baseUrl = environment.baseUrlOpenWeather;
    const resource: string = 'weather';
    let params = new HttpParams();
    return this.getBrowserLocation(baseUrl, resource, params);
  }

  getLightLocationWeather(
    lon?: number,
    lat?: number,
    city?: string
  ): Observable<ICurrentWeatherCity> {
    const baseUrl = environment.baseUrlOpenWeather;
    const resource: string = 'weather';
    let params = new HttpParams();
    if (lon && lat) {
      params = params
        .append('lat', lat)
        .append('lon', lon)
        .append('appid', environment.apiKey)
        .append('units', environment.units);
      return this.http.get<ICurrentWeatherCity>(`${baseUrl}/${resource}`, {
        params: params,
      });
    } else if (city) {
      params = params
        .append('q', city)
        .append('appid', environment.apiKey)
        .append('units', environment.units);
      return this.http.get<ICurrentWeatherCity>(`${baseUrl}/${resource}`, {
        params: params,
      });
    } else {
      return this.getCurrentLocationWeather();
    }
  }

  getLocationWeather(
    lon?: number,
    lat?: number,
    exclusion?: Array<string>
  ): Observable<IFullWeatherCity> {
    const baseUrl = environment.baseUrlOpenWeather;
    const resource: string = 'onecall';
    let params = new HttpParams();
    let exclusion_str: string = '';
    if (exclusion) {
      exclusion_str = exclusion.join(',');
      params = params.append('exclude', exclusion_str);
    }
    if (lon && lat) {
      params = params
        .append('lat', lat)
        .append('lon', lon)
        .append('appid', environment.apiKey)
        .append('units', environment.units);

      return this.http.get<IFullWeatherCity>(`${baseUrl}/${resource}`, {
        params: params,
      });
    } else {
      return this.getBrowserLocation(baseUrl, resource, params);
    }
  }

  private getBrowserLocation(
    url: string,
    resource: string,
    params: HttpParams
  ): Observable<ICurrentWeatherCity | IFullWeatherCity | any> {
    return this.browserLocationService.getBrowserLocation().pipe(
      map((value: ICoord) => {
        params = params
          .append('lat', value.lat)
          .append('lon', value.lon)
          .append('appid', environment.apiKey)
          .append('units', environment.units);
        return params;
      }),
      switchMap((values) => {
        return this.http.get(`${url}/${resource}`, {
          params: values,
        });
      })
    );
  }
}
