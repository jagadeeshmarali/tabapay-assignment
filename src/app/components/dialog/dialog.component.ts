import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent {
  @Input() show: boolean = false;
  @Input() nodeName: string = '';
  @Output() showChange = new EventEmitter<boolean>();
  constructor() { }

  close() {
    this.show = false;
    this.showChange.emit(this.show);
  }
}