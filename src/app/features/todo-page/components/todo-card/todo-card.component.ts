import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoInt } from 'src/app/models/interfaces';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  @Input() toDoInput?: ToDoInt; 
  @Output() emitOnEdit = new EventEmitter<ToDoInt>();
  @Output() emitOnDelete = new EventEmitter<ToDoInt>();
  @Output() emitOnComplete = new EventEmitter<ToDoInt>();


  constructor() { }

  ngOnInit(): void {
  }

  onEdit(){
    this.emitOnEdit.emit(this.toDoInput);
  }

  onDelete(){
    this.emitOnDelete.emit(this.toDoInput);
  }

  onComplete(){
    this.emitOnComplete.emit(this.toDoInput);
  }

}
