import { Component } from '@angular/core';
import {NgxAuroraComponent} from "@omnedia/ngx-aurora";
import {NgxFadeComponent} from "@omnedia/ngx-fade";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgxAuroraComponent,
    NgxFadeComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
