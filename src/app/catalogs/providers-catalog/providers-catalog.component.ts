import {Component, OnInit} from '@angular/core';
import {DatatableColumn, DatatableSettings, DatatableSource} from "../../_components/datatable/datatable.component";
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../../services/products.service";

@Component({
    selector: 'app-providers-catalog',
    templateUrl: './providers-catalog.component.html',
    styleUrls: ['./providers-catalog.component.scss']
})
export class ProvidersCatalogComponent implements OnInit {

    // dataSource: DatatableSource = new DatatableSource();
    dataSource: DatatableSource = <DatatableSource>{
        Limit: 50,
        Columns: [
            <DatatableColumn>{name: 'Id'},
            <DatatableColumn>{name: 'Name'},
            <DatatableColumn>{name: 'Description'}
        ]
    };
    dataSettings: DatatableSettings = <DatatableSettings>{
        ActiveSearch: true
    };

    constructor(private http: HttpClient) {
        this.dataSource.Service = new ProductsService(http);
    }

    ngOnInit() {
    }

}
