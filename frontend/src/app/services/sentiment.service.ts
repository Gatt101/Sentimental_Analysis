import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  constructor(private http: HttpClient) { }
  apiurl='http://localhost:5000/sentiment';


  analyzeSentiment(text: string) {
    return this.http.post(this.apiurl, {text: text});
  }

}
