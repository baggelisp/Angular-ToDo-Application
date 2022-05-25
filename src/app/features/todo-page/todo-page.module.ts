import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoPageRoutingModule } from './todo-page-routing.module';
import { TodoPageComponent } from './todo-page.component';
import { TodoPageApi } from './todo-page.api';
import { TodoPageService } from './todo-page.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    TodoPageComponent,
    TodoCardComponent
  ],
  imports: [
    CommonModule,
    TodoPageRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    SharedModule,
    MatCheckboxModule
  ],
  providers: [
    TodoPageApi,
    TodoPageService
  ]
})
export class TodoPageModule { }
