import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  dataFromPortfolio():Observable<any>{
    return this.http.get('./assets/data/data.json');

  }

  constructor(private http:HttpClient) { }
}
