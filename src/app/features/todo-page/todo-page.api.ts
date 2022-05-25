import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoInt } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodoPageApi {

  constructor(private http: HttpClient) { }

  getToDos(): Observable<ToDoInt[]> {
		return this.http.get<ToDoInt[]>(`${environment.apiUrl}/todos`);
  }

  createToDo(toDo: ToDoInt) {
    return this.http.post<ToDoInt>(`${environment.apiUrl}/todos` , toDo);
  }

  updateToDo(toDo: ToDoInt) {
    return this.http.put<ToDoInt>(`${environment.apiUrl}/todos/${toDo.id}` , toDo);
  }
  
  deleteToDo(toDo: ToDoInt) {
    return this.http.delete<ToDoInt>(`${environment.apiUrl}/todos/${toDo.id}`);
  }

}
