import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrowserLocation } from '../model/browser-location.model';
import { ICoord } from '../model/interfaces/ICoord';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private loaderService: LoaderService) {}

  getBrowserLocation(): Observable<ICoord> {
    return new Observable<ICoord>((observer) => {
      this.loaderService.show();
      navigator?.geolocation.getCurrentPosition(
        (position) => {
          this.loaderService.hide();
          observer.next(
            new BrowserLocation(
              position.coords.longitude,
              position.coords.latitude
            )
          );
          observer.complete();
        },
        (error) => {
          this.loaderService.hide();
          observer.next(new BrowserLocation(0, 0));
        }
      );
    });
  }
}
