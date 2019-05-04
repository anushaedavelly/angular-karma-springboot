import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Employee } from '../domain/employee.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://localhost:8080';

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees').pipe(catchError(this.handlleError));
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>('http://localhost:8080/newEmployee', JSON.stringify(employee), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handlleError));
  }

  private handlleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client side error', errorResponse.error.message);
    } else {
      console.error('Server side error', errorResponse);
    }
    return throwError('There is a problem with the service.We are notified and working ');
  }
}
