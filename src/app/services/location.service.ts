import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrowserLocation } from '../model/browser-location.model';
import { ICoord } from '../model/interfaces/ICoord';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  getBrowserLocation(): Observable<ICoord> {
    return new Observable<ICoord>((observer) => {
      navigator?.geolocation.getCurrentPosition(
        (position) => {
          observer.next(
            new BrowserLocation(
              position.coords.longitude,
              position.coords.latitude
            )
          );
          observer.complete();
        },
        (error) => {
          observer.next(new BrowserLocation(0, 0));
        }
      );
    });
  }
}
