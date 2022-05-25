import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    this.dialog.open(ToDoModalComponent, {
      data:   {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      width: '600px',
    });
  }

}
