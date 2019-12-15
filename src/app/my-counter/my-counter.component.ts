import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {
  count = 0;

  @Output()
  valueChanged = new EventEmitter();

  increment() {
    this.count++;
    this.valueChanged.emit(this.count);
  }
}
