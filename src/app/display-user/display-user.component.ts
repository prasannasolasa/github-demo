import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  @Input() userdetails;
  @Output() outputEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onOutput(name){
    this.outputEvent.emit(name)
  }
}
