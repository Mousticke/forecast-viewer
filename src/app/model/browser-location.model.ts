import { ICoord } from './interfaces/ICoord';

export class BrowserLocation implements ICoord {
  lon: number;
  lat: number;

  constructor(lon: number, lat: number) {
    this.lon = lon;
    this.lat = lat;
  }
}
