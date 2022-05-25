import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ToDoInt } from 'src/app/models/interfaces';
import { ToDoModalComponent } from 'src/app/shared/components/to-do-modal/to-do-modal.component';
import { TodoPageService } from './todo-page.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  destroy: Subject<boolean> = new Subject<boolean>();
  
  constructor(public dialog: MatDialog, public service: TodoPageService) { }

  ngOnInit(): void {
    this.service.getToDos();

  }

  openCreateModal() {
    const dialogRef = this.dialog.open(ToDoModalComponent, {
      data:   {},
      width: '600px',
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroy)).subscribe(result => {
      if (result) this.service.createToDo(result);

    });
  }

  onSearchInputChange(search: string){
    console.log(search)
  }

  cardOnEdit(toDo: ToDoInt | any){
    const dialogRef =this.dialog.open(ToDoModalComponent, {
      data:   {...toDo},
      width: '600px',
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroy)).subscribe((result:ToDoInt) => {
      if (result) this.service.updateToDo(result);
    });
  }

  cardOnDelete(toDo: ToDoInt | any){
    this.service.deleteToDo(toDo);
  }

  cardOnComplete(toDo: ToDoInt | any) {
    this.service.updateToDo({...toDo, completed: !toDo.completed});
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
