import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirthingsComponent } from './airthings/airthings.component';
import { HomeComponent } from './home/home.component';
import { OpenweatherComponent } from './openweather/openweather.component';
import { TransportComponent } from './transport/transport.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'airthings', component: AirthingsComponent },
  { path: 'openweather', component: OpenweatherComponent },
  { path: 'transport', component: TransportComponent },
  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
