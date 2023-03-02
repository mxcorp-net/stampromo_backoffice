import {Component, OnInit} from '@angular/core';
import {DatatableColumn, DatatableSettings, DatatableSource} from "../../_components/datatable/datatable.component";
import {HttpClient} from "@angular/common/http";
import {ServicesService} from "../../services/services.service";

@Component({
    selector: 'app-services-catalog',
    templateUrl: './services-catalog.component.html',
    styleUrls: ['./services-catalog.component.scss']
})
export class ServicesCatalogComponent implements OnInit {

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
        this.dataSource.Service = new ServicesService(http);
    }

    ngOnInit() {
    }

}
