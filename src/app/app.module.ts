import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForeCastOverviewComponent } from './components/forecast-overview/forecast-overview.component';
import { ForecastContainerComponent } from './components/forecast-weekly-container/forecast-weekly-container.component';
import { ChartContainerComponent } from './components/chart-container/chart-container.component';
import { DailyDetailsComponent } from './components/forecast-overview/daily-details/daily-details.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppImageComponent } from './shared/app-image/app-image.component';
import { ForecastDailyDetailsComponent } from './components/forecast-daily-details/forecast-daily-details.component';

export const customElements = [AppImageComponent];

@NgModule({
  declarations: [
    AppComponent,
    ForeCastOverviewComponent,
    ForecastContainerComponent,
    ChartContainerComponent,
    DailyDetailsComponent,
    WeatherSearchComponent,
    AppImageComponent,
    ForecastDailyDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
