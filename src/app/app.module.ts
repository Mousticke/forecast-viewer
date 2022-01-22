import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForeCastOverviewComponent } from './components/forecast-overview/forecast-overview.component';
import { ForecastContainerComponent } from './components/forecast-weekly-container/forecast-weekly-container.component';
import { ChartContainerComponent } from './components/chart-container/chart-container.component';
import { CurrentDailyDetailsComponent } from './components/forecast-overview/current-daily-details/current-daily-details.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppImageComponent } from './shared/app-image/app-image.component';
import { WeeklyDailyDetailsComponent } from './components/forecast-weekly-container/weekly-daily-details/weekly-daily-details.component';
import { WeatherCityService } from './services/weather-city.service';
import { AppLoaderComponent } from './shared/app-loader/app-loader.component';
import { NgChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';

export const customElements = [AppImageComponent];

@NgModule({
  declarations: [
    AppComponent,
    ForeCastOverviewComponent,
    ForecastContainerComponent,
    ChartContainerComponent,
    CurrentDailyDetailsComponent,
    WeatherSearchComponent,
    AppImageComponent,
    AppLoaderComponent,
    WeeklyDailyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule,
  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: WeatherCityService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
