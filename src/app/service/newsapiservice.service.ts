import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http: HttpClient) { }

 // ApiKey : string = 'cbb39c8a09dd4fd8a94e6cf38e5e1342';
  newsApiUrl : string = 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=cbb39c8a09dd4fd8a94e6cf38e5e1342';

  techApiUrl : string = "https://newsapi.org/v2/top-headlines?country=ng&category=technology&apiKey=cbb39c8a09dd4fd8a94e6cf38e5e1342"

  businessApiUrl : string = "https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=cbb39c8a09dd4fd8a94e6cf38e5e1342"

  HelthApiUrl : string = "https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=cbb39c8a09dd4fd8a94e6cf38e5e1342";

  topHeading():Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  businessNews(): Observable<any>{
    return this._http.get(this.businessApiUrl);
  }

  healthNews() : Observable<any> {
    return this._http.get(this.HelthApiUrl);
  }
}
