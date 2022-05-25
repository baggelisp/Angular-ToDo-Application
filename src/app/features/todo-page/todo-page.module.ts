import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoPageRoutingModule } from './todo-page-routing.module';
import { TodoPageComponent } from './todo-page.component';
import { TodoPageApi } from './todo-page.api';
import { TodoPageService } from './todo-page.service';


@NgModule({
  declarations: [
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    TodoPageRoutingModule
  ],
  providers: [
    TodoPageApi,
    TodoPageService
  ]
})
export class TodoPageModule { }
