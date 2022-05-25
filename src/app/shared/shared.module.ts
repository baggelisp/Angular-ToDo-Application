import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ToDoModalComponent } from './components/to-do-modal/to-do-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToDoModalComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    MatIconModule,
    ToDoModalComponent,
    SearchInputComponent
  ]
})
export class SharedModule { }
