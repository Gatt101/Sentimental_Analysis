import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';
import {HttpClientModule} from "@angular/common/http";
import {NgxShinyTextComponent} from "@omnedia/ngx-shiny-text";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgxAuroraComponent, HttpClientModule, NgxShinyTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
