import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
// import {ContactComponent} from "./contact/contact.component";


export const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home' , component: HomeComponent},
    {path: 'about', component: AboutComponent}
];
