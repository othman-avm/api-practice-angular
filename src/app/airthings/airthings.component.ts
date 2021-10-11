import { Component, OnInit } from '@angular/core';
import { AirthingsService } from '../shared/services/airthings.service';

@Component({
  selector: 'app-airthings',
  templateUrl: './airthings.component.html',
  styleUrls: ['./airthings.component.css']
})
export class AirthingsComponent implements OnInit
{

  token = '';

  devices = {};
  selectedDevice = null;

  constructor(private airthingsService: AirthingsService) { }

  ngOnInit(): void
  {
    this.token = this.airthingsService.token;
    this.airthingsService.getDeviceList(this.token)
      .subscribe(devices => this.devices = devices);
  }

  selectDevice(device: any)
  {
    //console.log(device);
    this.selectedDevice = device;
  }
}
