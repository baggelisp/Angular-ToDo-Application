import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoInt } from 'src/app/models/interfaces';

@Component({
  selector: 'app-to-do-modal',
  templateUrl: './to-do-modal.component.html',
  styleUrls: ['./to-do-modal.component.scss']
})
export class ToDoModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public toDoInput: ToDoInt) { }

  ngOnInit(): void {
    console.log(this.toDoInput)
  }

}
