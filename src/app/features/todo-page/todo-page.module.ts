import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoPageRoutingModule } from './todo-page-routing.module';
import { TodoPageComponent } from './todo-page.component';
import { TodoPageApi } from './todo-page.api';
import { TodoPageService } from './todo-page.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    TodoPageRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    SharedModule
  ],
  providers: [
    TodoPageApi,
    TodoPageService
  ]
})
export class TodoPageModule { }
