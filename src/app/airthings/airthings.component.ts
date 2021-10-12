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
  sensorData: any;

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

    //console.log(device['id'])
    this.displaySensorData(device['id'])
  }


  displaySensorData(id: string)
  {

    // console.log("Before api call: ")
    // console.log(deviceDetails)
    this.airthingsService.getSensorData(this.airthingsService.token, id).
      subscribe(sensorData => this.sensorData = sensorData,
        (err) => console.error(err));
    // console.log("After api call: ")
    //console.log(this.deviceDetails)
  }
}
