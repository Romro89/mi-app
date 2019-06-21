import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading =  false;
  formLogin: FormGroup;

  constructor(private _snackBar: MatSnackBar, private _api: ApiService, private _fb: FormBuilder, private _dataService: DataService, private _router: Router) {
    this.formLogin = this._fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this._dataService.getIsLoading().subscribe(val =>{
      this.loading = val;
    });

    this.formLogin.get('password').valueChanges.subscribe(val => {
      console.log(val);
    });

  }

  ngOnInit() {
  }

  login(){

    console.log('USERNAME: ', this.formLogin.get('username').value);
    console.log('PASSWORD: ', this.formLogin.get('password').value);

    this._dataService.setIsLoading(true);

      // TO DO http
      this._api.login(this.formLogin.get('username').value, this.formLogin.get('password').value).subscribe(res => {
        this._dataService.setToken(res.token);
        console.log('recibí respuesta');
        this._router.navigate(['colors']);
      }, err => {
        console.log(err);
        this._dataService.setMessage(err.error.error);
        this._snackBar.open(err.error.error, 'Ok', {
          duration: 3000
        });
        this._dataService.setMessage(err.error.error);
        this._dataService.setIsLoading(false);
      }, () => {
        console.log('Ya terminé');
        this._dataService.setIsLoading(false);
      });
  }

}
