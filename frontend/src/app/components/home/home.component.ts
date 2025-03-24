import { Component } from '@angular/core';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
import { FormsModule } from '@angular/forms';
import { SentimentService } from '../../services/sentiment.service';
import {HttpClientModule} from "@angular/common/http";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxBorderBeamComponent, NgxAuroraComponent, FormsModule, HttpClientModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sentimentText: string = '';
  sentimentResult: String = '';

  constructor(private sentimentService: SentimentService) {

  }
  analyzeSentiment() {
  this.sentimentService.analyzeSentiment(this.sentimentText).subscribe((data: any) => {
    this.sentimentResult = data;
    console.log(data);
  });
  }
  reset(){
    this.sentimentText = '';
    this.sentimentResult = '';
  }

}
