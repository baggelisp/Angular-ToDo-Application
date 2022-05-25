import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToDoInt } from 'src/app/models/interfaces';
import { ToDoModalComponent } from 'src/app/shared/components/to-do-modal/to-do-modal.component';
import { TodoPageService } from './todo-page.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  constructor(public dialog: MatDialog, public service: TodoPageService) { }

  ngOnInit(): void {
    this.service.getToDos();

  }

  openCreateModal() {

  }

  onSearchInputChange(search: string){
    console.log(search)
  }

  cardOnEdit(toDo: ToDoInt | any){
    this.dialog.open(ToDoModalComponent, {
      data:   {...toDo},
      width: '600px',
    });
  }

  cardOnDelete(toDo: ToDoInt | any){
    this.service.deleteToDo(toDo);
  }

  cardOnComplete(toDo: ToDoInt | any) {
    this.service.updateToDo({...toDo, completed: !toDo.completed});
  }
}
