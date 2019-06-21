import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Color } from '../model/colors.response';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table-colors',
  templateUrl: './table-colors.component.html',
  styleUrls: ['./table-colors.component.css']
})

export class TableColorsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'year', 'color', 'pantone'];
  dataColors = new MatTableDataSource<Color>();
  page: number;

  constructor(private _api: ApiService, private _dataService: DataService) {
    this._api.getColors().subscribe(res => {
      this.dataColors.data = res.data;
      this.page = res.page;
      this._dataService.setIsLoading(false);
    }, err => {
      this._dataService.setIsLoading(false);
    });
  }

  ngOnInit() {
  }

}
