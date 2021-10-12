import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit
{


  @Input() deviceInput: any;
  @Input() sensorData: any;
  constructor() { }

  ngOnInit(): void
  {
  }

}
