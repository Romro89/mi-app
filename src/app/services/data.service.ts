import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isLoading: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  setIsLoading(isLoad: boolean){
    this.isLoading.next(isLoad);
  }

  getIsLoading(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

}
