import { Component, Input, OnInit } from '@angular/core';

interface Device
{
  name: string
}

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit
{


  @Input() devices: any;


  constructor() { }

  ngOnInit(): void
  {
  }

}
