import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit
{


  @Input() deviceInput: any;

  device =
    {
      "id": "2820004795",
      "deviceType": "HUB",
      "sensors": [],
      "segment":
      {
        "id": "588b330d-8b92-400c-b543-b9d4a506e175",
        "name": "Hub 1",
        "started": "2021-06-03T12:00:01",
        "active": true
      },
      "location":
      {
        "id": "7a02984d-11f8-4108-9a22-26983fb9e011",
        "name": "111 Piccadilly"
      }
    }



  constructor() { }

  ngOnInit(): void
  {
  }

}
