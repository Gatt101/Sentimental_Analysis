import { Component } from '@angular/core';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxBorderBeamComponent,NgxAuroraComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sentimentText: string = '';
  
  analyzeSentiment() {
    // TODO: Implement sentiment analysis logic
  }
}
