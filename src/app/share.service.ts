import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  subject : Subject<string> = new Subject();
  observable : Observable<string> =this.subject.asObservable();

  constructor() { }
}
