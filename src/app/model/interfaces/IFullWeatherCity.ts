import { IAlert } from './IAlert';
import { ICommon } from './ICommon';
import { ICurrent } from './ICurrent';
import { IDaily } from './IDaily';
import { ILightHourly } from './ILightHourly';

export interface IFullWeatherCity {
  alerts: IAlert[];
  current: ICurrent;
  daily: IDaily[];
  hourly: ILightHourly[];
  metadata: ICommon;
}
