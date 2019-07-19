import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  city;
  appid = '60c30b7dd2443dd0467147971405bd7b';

  constructor(private http: HttpClient){}

     
    getWeatherData(city) {
      
      return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=' + this.appid );
    }

    // searchDta()
    // {
    //   return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&unit=metric&APPID=' + this.appid );
    // }
  }