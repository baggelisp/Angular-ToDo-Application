import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ToDoModalComponent } from './components/to-do-modal/to-do-modal.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ToDoModalComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    MatIconModule,
    ToDoModalComponent
  ]
})
export class SharedModule { }
