import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForeCastOverviewComponent } from './components/forecast-overview/forecast-overview.component';
import { ForecastContainerComponent } from './components/forecast-container/forecast-container.component';
import { ChartContainerComponent } from './components/chart-container/chart-container.component';
import { DailyDetailsComponent } from './components/forecast-overview/daily-details/daily-details.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ForeCastOverviewComponent,
    ForecastContainerComponent,
    ChartContainerComponent,
    DailyDetailsComponent,
    WeatherSearchComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
