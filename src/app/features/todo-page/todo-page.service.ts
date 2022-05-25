import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { ToDoInt } from 'src/app/models/interfaces';
import { TodoPageApi } from './todo-page.api';

@Injectable()
export class TodoPageService {
  public readonly toDos$: Observable<ToDoInt[]>;

  constructor(private store: Store<any>, 
    private api: TodoPageApi,
    private spinner: NgxSpinnerService) { 
    const state$ = store.select('toDosReducer');
    this.toDos$  = state$.pipe(select(state => state['toDos']));
  }

  getToDos() {
    this.api.getToDos().subscribe( (response:ToDoInt[]) => {
      this.spinner.hide();
      this.store.dispatch({ type: `GET_TODOS_SUCCESS`, payload: {results: [...response]}  }); 
    }, error => {
      this.spinner.hide();
      alert("There was an error getting data. Please try again later.");
      this.store.dispatch({ type: `TODOS_CLEAN_STATE`, payload: {}  }); 
    });
  }
}
