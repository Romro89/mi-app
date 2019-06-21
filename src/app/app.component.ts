import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loading = false;

  constructor(private _dataService: DataService, private _snackBar: MatSnackBar){
    this._dataService.getIsLoading().subscribe(val => {
      console.log('IS LOADING: ', val);
      this.loading = val;
    });

    this._dataService.getMessage().subscribe(msg => {
      this._snackBar.open(msg, 'Ok', {
        duration: 3000
      });
    })

  }

  userLogged() {
    return this._dataService.getToken() && this._dataService.getToken().length > 0;
  }

  logout() {
    sessionStorage.removeItem('token');
  }

}
