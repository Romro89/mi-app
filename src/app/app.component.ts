import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loading = false;

  constructor(private _dataService: DataService){
    this._dataService.getIsLoading().subscribe(val => {
      console.log('IS LOADING: ', val);
      this.loading = val;
    });
  }

}
