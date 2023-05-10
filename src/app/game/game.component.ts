import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Output() numberEmitter = new EventEmitter<number>();
  private intervalRef: any;

  onStart() {
    let number = 0;
    this.intervalRef = setInterval(() => {
      number++;
      this.numberEmitter.emit(number);
    }, 1000);
  }

  onStop() {
    clearInterval(this.intervalRef);
  }
}


