import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForeCastOverviewComponent } from './components/forecast-overview/forecast-overview.component';
import { ForecastContainerComponent } from './components/forecast-weekly-container/forecast-weekly-container.component';
import { ChartContainerComponent } from './components/chart-container/chart-container.component';
import { CurrentDailyDetailsComponent } from './components/forecast-overview/current-daily-details/current-daily-details.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppImageComponent } from './shared/app-image/app-image.component';
import { WeeklyDailyDetailsComponent } from './components/forecast-weekly-container/weekly-daily-details/weekly-daily-details.component';

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
    WeeklyDailyDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
