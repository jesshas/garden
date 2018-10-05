import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../shared/services/weather/weather.service';
import { config } from '../../config';
import { Weather } from './weather';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
  providers: [WeatherService]
})
export class ForecastComponent implements OnInit, OnDestroy {
  timer: any;
  error: any;
  weather: Weather;

  constructor(
    public weatherService: WeatherService,
  ) {}

  ngOnInit() {
    this.loadWeather();
    this.timer = setInterval(() => {
      this.loadWeather();
    }, 20000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  // weather conditions loader function
  loadWeather() {
    this.weatherService.getWeatherbyCity(config.city)
      .subscribe(
        data => this.weather = new Weather(
         data.name,
          data.weather[0].icon,
          data.weather[0].main,
          data.weather[0].description,
          data.clouds.all,
          data.main.temp
        ),
        error => this.error = error
      );
  }
}
