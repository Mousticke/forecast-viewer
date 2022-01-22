import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Observable } from 'rxjs';
import { IChartForecastData } from 'src/app/model/interfaces/IChartForecastData';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.scss'],
})
export class ChartContainerComponent implements OnInit {
  @Input() chartForecastDataObs!: Observable<IChartForecastData>;
  private temp_unit: string = '°C';
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public chartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Temp. Max',
        backgroundColor: 'transparent',
        borderColor: 'hsl(0deg 100% 63%)',
        pointBackgroundColor: 'hsl(0deg 100% 63%)',
        pointBorderColor: 'hsl(0deg 100% 63%)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'hsl(0deg 100% 63%)',
        fill: 'origin',
        type: 'line',
      },
      {
        data: [],
        label: 'Temp. Min',
        backgroundColor: 'transparent',
        borderColor: 'hsl(199deg 100% 50%)',
        pointBackgroundColor: 'hsl(199deg 100% 50%)',
        pointBorderColor: 'hsl(199deg 100% 50%)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'hsl(199deg 100% 50%)',
        fill: 'origin',
        type: 'line',
      },
      {
        data: [],
        label: 'Temp. Day',
        backgroundColor: 'transparent',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
        type: 'line',
      },
      {
        data: [],
        yAxisID: 'y-axis-pop',
        label: 'Precipitation',
        backgroundColor: 'rgba(0, 255, 100, 0.35)',
        hoverBackgroundColor: 'rgba(0, 255, 100, 0.55)',
        borderColor: 'hsl(147deg 100% 50%)',
        hoverBorderColor: 'rgba(0, 255, 100, 0.55)',
        hoverBorderWidth: 3,
        borderWidth: 1,
        minBarLength: 1,
        maxBarThickness: 50,
        type: 'bar',
      },
    ],
    labels: [],
  };

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      x: {},
      'y-axis-0': {
        position: 'left',
        title: {
          text: `Temperature (${this.temp_unit})`,
          align: 'end',
          display: true,
        },
      },
      'y-axis-pop': {
        title: {
          text: 'Precipitation (%)',
          align: 'end',
          display: true,
        },
        position: 'right',
        grid: {
          display: false,
        },
        ticks: {},
        min: 0,
        max: 100,
      },
    },
  };

  constructor(public datepipe: DatePipe) {}

  ngOnInit(): void {
    this.chartForecastDataObs.subscribe((data: IChartForecastData) => {
      this.chartData.datasets[0].data = data.temp_maxs;
      this.chartData.datasets[1].data = data.temp_mins;
      this.chartData.datasets[2].data = data.forecasts;
      this.chartData.datasets[3].data = data.pops.map((element) => {
        return element * 100;
      });
      this.chartData.labels = data.dates.map((element) => {
        return this.datepipe.transform(element, 'EEE d, hh:mm a');
      });
      this.temp_unit = data.temp_unit;
      this.chart?.update();
    });
  }
}
