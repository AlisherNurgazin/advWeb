import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }
  tasks = ['First Task'];


  newTask(newTask: string) {
    this.tasks.push(newTask);
  }
  ngOnInit(): void {
  }

}
