import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { accentedCharacters } from 'src/app/model/constants/AccentChar';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  constructor() {}

  cityForm = new FormGroup({
    city_location: new FormControl('', [
      Validators.pattern("[a-zA-Z' ,.s-" + accentedCharacters + ']{1,25}$'),
    ]),
  });

  geoForm = new FormGroup({
    city_longitude: new FormControl(0, [
      Validators.required,
      Validators.pattern('[0-9]+$'),
    ]),
    city_latitude: new FormControl(0, [
      Validators.required,
      Validators.pattern('[0-9]+$'),
    ]),
  });

  ngOnInit(): void {}

  searchCity() {
    console.log(this.cityForm.value);
  }

  searchGeo() {
    console.log(this.geoForm.value);
  }

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
