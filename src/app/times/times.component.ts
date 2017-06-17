import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.sass']
})
export class TimesComponent implements OnInit {
  timeZones = [
    {time: -7, active: false, label: 'PST' },
    {time: -6, active: false, label: 'MST' },
    {time: -5, active: false, label: 'CST' },
    {time: -4, active: true, label: 'EST'}
  ]

  activeButton: number = 3;

  time: Date = new Date();
  zone: number = -4;
  showTime: boolean = true;

  constructor() { }

  ngOnInit() {
    this.initialTimeZone();
    window.setInterval(()=> {
      this.time = new Date();
      this.updateTime();
      // this.time.setUTCHours(this.time.getUTCHours() + this.zone);
    }, 1000);
  }

  newUTCDate() : Date{
    return new Date()
  }

  updateTime() :void {
    this.time.setUTCHours(this.time.getUTCHours() + (this.time.getTimezoneOffset()/60 + this.zone));
  }

  initialTimeZone() :void {
    this.time.setUTCHours(this.time.getUTCHours() + (this.time.getTimezoneOffset()/60 + -4));
  }

  changeTime(hours, index) :void {
    if(!this.showTime) this.showTime = true;
    this.zone = hours;
    this.timeZones[this.activeButton].active = false;
    this.timeZones[index].active = true;
    this.activeButton = index;
  }

  clearTime() :void {
    this.showTime = false;
    this.timeZones[this.activeButton].active = false;
  }

}
