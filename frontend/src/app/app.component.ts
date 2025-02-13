import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,NgxAuroraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
