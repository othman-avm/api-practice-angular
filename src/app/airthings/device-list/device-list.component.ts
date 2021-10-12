import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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


  @Output() selectedDevice = new EventEmitter();
  @Output() deviceDetails = new EventEmitter();
  constructor() { }

  ngOnInit(): void
  {
  }

}
