import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit
{


  @Input() deviceDetails: any;
  @Input() sensorData: any;
  constructor() { }

  ngOnInit(): void
  {
  }


  /**
   * Function that checks if the device has this type of sensor data available,
   * 
   * @param data 
   */
  checkData(data: any): boolean
  {
    //console.log(data)
    if (data == undefined)
    {
      return false;
    }
    return true;
  }

}
