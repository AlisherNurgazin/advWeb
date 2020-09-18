import {Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add2.component.html',
  styleUrls: ['./add.component.css']
})

export class SearchboxComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Output() newTaskEvent = new EventEmitter<string>();

  addNewTask(value: string) {
    this.newTaskEvent.emit(value);
  }
}
