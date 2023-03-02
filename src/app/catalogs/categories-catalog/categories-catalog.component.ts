import { Component, OnInit } from '@angular/core';
import {DatatableColumn, DatatableSettings, DatatableSource} from '../../_components/datatable/datatable.component';
import {CategoriesService} from '../../services/categories.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-categories-catalog',
  templateUrl: './categories-catalog.component.html',
  styleUrls: ['./categories-catalog.component.scss']
})
export class CategoriesCatalogComponent implements OnInit {
// dataSource: DatatableSource = new DatatableSource();
  dataSource: DatatableSource = <DatatableSource>{
    Limit: 50,
    Columns: [
      <DatatableColumn>{name: 'Id'},
      <DatatableColumn>{name: 'Name'}
    ]
  };
  dataSettings: DatatableSettings = <DatatableSettings>{
    ActiveSearch: true
  };

  constructor(private http: HttpClient) {
    this.dataSource.Service = new CategoriesService(http);
  }

  ngOnInit() {
  }

}
