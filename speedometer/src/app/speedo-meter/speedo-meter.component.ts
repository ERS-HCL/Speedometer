import { Component} from '@angular/core';

@Component({
  selector: 'speedo-meter-app',
  templateUrl: './speedo-meter.component.html',
  styleUrls: [ './speedo-meter.component.css' ]
})
export class SpeedoMeterComponent {
  private speedScore:number = 0; //min : 0; max: 100
  private readingSpeed:number;
  private niddleSpeed:number;
  constructor() { }

  updateSpeed(){
    this.readingSpeed = Math.round(this.speedScore * 180/100)-45;
    this.niddleSpeed = Math.round(this.speedScore * 180/100)-90;
  }

  getSpeed(speed){
    this.speedScore = speed;
    this.updateSpeed();
  }
}