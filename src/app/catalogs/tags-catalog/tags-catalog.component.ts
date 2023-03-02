import { Component, OnInit } from '@angular/core';
import {DatatableColumn, DatatableSettings, DatatableSource} from "../../_components/datatable/datatable.component";
import {HttpClient} from "@angular/common/http";
import {TagsService} from "../../services/tags.service";

@Component({
  selector: 'app-tags-catalog',
  templateUrl: './tags-catalog.component.html',
  styleUrls: ['./tags-catalog.component.scss']
})
export class TagsCatalogComponent implements OnInit {

  // dataSource: DatatableSource = new DatatableSource();
  dataSource: DatatableSource = <DatatableSource>{
    Limit: 50,
    Columns: [
      <DatatableColumn>{name: 'Id'},
      <DatatableColumn>{name: 'Word'}
    ]
  };
  dataSettings: DatatableSettings = <DatatableSettings>{
    ActiveSearch: true
  };

  constructor(private http: HttpClient) {
    this.dataSource.Service = new TagsService(http);
  }

  ngOnInit() {
  }

}
