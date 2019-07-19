import { Component } from '@angular/core';
import { WeatherService } from  '../service/weather-app.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  values;
  weatherData;
  city='Pretoria';
  name;
  cityData;
  temp_min;

  date = Date.now();
  



 constructor(private service: WeatherService){

    this.service.getWeatherData(this.city).subscribe(data => {

      this.values = data;

      this.weatherData= this.values.list;
      this.cityData=this.values.city;
      this.name=this.cityData.name;

      console.log(data);
    
    });
 }
 searchData(city) {
  this.service.getWeatherData(this.city).subscribe(data => {

    this.values = data;

    this.weatherData = this.values.list;
    this.cityData = this.values.city;
    this.name = this.cityData.name;

    console.log(data);

   });
 }
}
