import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isLoading: Subject<boolean> = new Subject<boolean>();
  private message: Subject<string> = new Subject<string>();
  private token: string = '';

  constructor() { }

  setIsLoading(isLoad: boolean){
    this.isLoading.next(isLoad);
  }

  getIsLoading(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  setMessage(msg: string){
    this.message.next(msg);
  }

  getMessage(): Observable<string>{
    return this.message.asObservable();
  }

  setToken(token: string){
    this.token = token;
    sessionStorage.setItem('token', token);
  }

  getToken(): string {
    return sessionStorage.getItem('token');
  }

}
