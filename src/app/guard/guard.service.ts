import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const access = this._dataService.getToken() && this._dataService.getToken().length > 0;
    if (!access){
      this._router.navigate(['login']);
    }
    return access;
  }

  constructor(private _dataService: DataService, private _router: Router) { }
}
