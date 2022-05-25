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

}
