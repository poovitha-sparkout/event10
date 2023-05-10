import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.css']
})
export class New1Component {
  @Input() number!: number;

  get text() {
    return `Odd - ${this.number}`;
  }
}

