import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AirthingsComponent } from './airthings/airthings.component';
import { OpenweatherComponent } from './openweather/openweather.component';
import { TransportComponent } from './transport/transport.component';
import { DeviceListComponent } from './airthings/device-list/device-list.component';
import { AirthingsService } from './shared/services/airthings.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    AirthingsComponent,
    OpenweatherComponent,
    TransportComponent,
    DeviceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    AirthingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
