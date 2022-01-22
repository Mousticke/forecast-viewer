import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader__wrapper">
      <img src="assets/03d.svg" alt="weather loader" />
    </div>
  `,
  styleUrls: ['./app-loader.component.scss'],
})
export class AppLoaderComponent implements OnInit {
  ngOnInit() {}
}
