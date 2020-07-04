import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,throwError} from 'rxjs';  
import { catchError } from 'rxjs/operators';  


const httpOptions= {  
  headers: new HttpHeaders ({  
      'Content-Type': 'application/json',
  })  
};

@Injectable()
export class AppService {
  
  constructor(private http: HttpClient) { } 

  getHeaderData(): Observable < any[] > {
    return this.http.get<any[]>('assets/headerData.json').pipe(catchError(this.handleError)); 
  }

    
  private handleError(error: HttpErrorResponse) {  
    if (error.error instanceof ErrorEvent) {  
      console.error('An error occurred:', error.error.message);  
    }      
      return throwError('Server not responding; please try again later.');  
    } 
}