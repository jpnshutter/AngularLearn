import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http:HttpClient) {



  }
  getFact(): Observable<any> {
    return this.http.get('https://catfact.ninja/fact')
      .pipe(
        catchError(error => {
          console.error('Error fetching cat fact:', error);
          // Optionally, return a default value for UI handling
          return of({ fact: 'Failed to fetch cat fact (check network!)' });
        })
      );
  }

  postData(){
    return this.http.post('https://catfact.ninja/fact',{name:'jaja'})
  }

  getData(){
    return {name:'mini',age:3}
  }
}
