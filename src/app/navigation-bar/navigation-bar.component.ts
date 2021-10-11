import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit
{

  links = [
    { path: '/home', title: 'Home' },
    { path: '/airthings', title: 'AirThings' },
    { path: '/openweather', title: 'OpenWeather' },
    { path: '/transport', title: 'Transport API' }
  ];


  constructor(private router: Router) { }

  returnToHome()
  {
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void
  {
  }

}
