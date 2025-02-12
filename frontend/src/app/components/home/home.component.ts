import { Component } from '@angular/core';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxBorderBeamComponent,NgxAuroraComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
