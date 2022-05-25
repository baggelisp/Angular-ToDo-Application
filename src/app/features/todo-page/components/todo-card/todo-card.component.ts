import { Component, Input, OnInit } from '@angular/core';
import { ToDoInt } from 'src/app/models/interfaces';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  @Input() toDoInput?: ToDoInt; 

  constructor() { }

  ngOnInit(): void {
  }

}
