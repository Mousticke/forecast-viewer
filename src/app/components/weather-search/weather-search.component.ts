import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { accentedCharacters } from 'src/app/model/constants/AccentChar';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  constructor() {}

  @Output() cityFormEvent = new EventEmitter<any>();
  @Output() geoFormEvent = new EventEmitter<any>();

  cityForm = new FormGroup({
    city_location: new FormControl('', [
      Validators.pattern("[a-zA-Z' ,.s-" + accentedCharacters + ']{1,25}$'),
    ]),
  });

  geoForm = new FormGroup({
    city_longitude: new FormControl(0, [
      Validators.required,
      Validators.pattern('[0-9]+?(.)?([0-9]+)?'),
    ]),
    city_latitude: new FormControl(0, [
      Validators.required,
      Validators.pattern('[0-9]+?(.)?([0-9]+)?'),
    ]),
  });

  public completeForm = {
    cityForm: this.cityForm,
    geoForm: this.geoForm,
  };

  ngOnInit(): void {}

  get city_location() {
    return this.cityForm.get('city_location');
  }

  get geo_longitude() {
    return this.geoForm.get('city_longitude');
  }

  get geo_latitude() {
    return this.geoForm.get('city_latitude');
  }
}
