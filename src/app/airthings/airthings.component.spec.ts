import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirthingsComponent } from './airthings.component';

describe('AirthingsComponent', () => {
  let component: AirthingsComponent;
  let fixture: ComponentFixture<AirthingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirthingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirthingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
