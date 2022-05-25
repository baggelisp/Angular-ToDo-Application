import { ActionReducerMap } from '@ngrx/store';
import { toDosReducer } from '../features/todo-page/todo-page.reducer';

export const reducers: ActionReducerMap<any> = {
    toDosReducer
}