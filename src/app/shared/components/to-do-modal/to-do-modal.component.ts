import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoInt } from 'src/app/models/interfaces';

@Component({
  selector: 'app-to-do-modal',
  templateUrl: './to-do-modal.component.html',
  styleUrls: ['./to-do-modal.component.scss']
})
export class ToDoModalComponent implements OnInit {

  mode: 'edit' | 'create' = 'create'
  newToDo: ToDoInt;
  @Output() emitOnCreate = new EventEmitter<ToDoInt>();

  constructor(@Inject(MAT_DIALOG_DATA) public toDoInput: ToDoInt) { 
    this.newToDo = {
      userId: toDoInput.userId || 1,
      title: toDoInput.title || '',
      completed: toDoInput.completed || false,
    };
    if (toDoInput.id) this.newToDo['id'] = toDoInput.id;
  }

  ngOnInit(): void {
    if (this.toDoInput.id){
      this.mode = 'edit';
    } 
  }

}
