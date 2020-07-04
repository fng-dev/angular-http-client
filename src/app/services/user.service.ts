import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://api.github.com/'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem os usuarios
  get(endpoint: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}${endpoint}`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getFullUrl(endpoint: string): Observable<User[]> {
    return this.httpClient.get<User[]>(endpoint)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getByName(endpoint: string): Observable<User> {
    return this.httpClient.get<User>(`${this.url}${endpoint}`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um carro pelo id
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
