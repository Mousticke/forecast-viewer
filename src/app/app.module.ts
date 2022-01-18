import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForeCastOverviewComponent } from './components/forecast-overview/forecast-overview.component';
import { ForecastContainerComponent } from './components/forecast-container/forecast-container.component';
import { ChartContainerComponent } from './components/chart-container/chart-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ForeCastOverviewComponent,
    ForecastContainerComponent,
    ChartContainerComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
