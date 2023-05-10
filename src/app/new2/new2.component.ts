import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrls: ['./new2.component.css']
})
export class New2Component {
  @Input() number!: number;
  
    get text() {
      return `Even - ${this.number}`;
    }
  }
  