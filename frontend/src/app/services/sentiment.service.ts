import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  constructor(private http: HttpClient) { }
  apiurl= `${environment.apiUrl}/analyze_sentiment`;


  analyzeSentiment(text: string) {
    return this.http.post(this.apiurl, {text: text});
  }

}
