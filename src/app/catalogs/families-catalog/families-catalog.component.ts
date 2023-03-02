import {Component, OnInit} from '@angular/core';
import {DatatableColumn, DatatableSettings, DatatableSource} from '../../_components/datatable/datatable.component';
import {FamiliesService} from '../../services/families.service';
import {HttpClient} from '@angular/common/http';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FamiliesEditModalComponent} from './families-edit-modal/families-edit-modal.component';
import {Family} from '../../_models/family';

@Component({
    selector: 'app-families-catalog',
    templateUrl: './families-catalog.component.html',
    styleUrls: ['./families-catalog.component.scss']
})
export class FamiliesCatalogComponent implements OnInit {
    dataSource: DatatableSource = <DatatableSource>{
        Limit: 50,
        Columns: [
            <DatatableColumn>{name: 'Name'},
            <DatatableColumn>{name: 'Description'},
            <DatatableColumn>{name: 'ProductsCount', label: 'Products'}
        ]
    };
    dataSettings: DatatableSettings = <DatatableSettings>{
        ActiveSearch: true
    };
    private bsModalRef: BsModalRef;

    constructor(
        private http: HttpClient,
        private modalService: BsModalService
    ) {
        this.dataSource.Service = new FamiliesService(http);
    }

    ngOnInit() {
    }

    editFamily(event: Family) {
        const initialState = {
            family: event
        };
        this.bsModalRef = this.modalService.show(FamiliesEditModalComponent, {
            class: 'modal-lg modal-dialog-centered', ignoreBackdropClick: true,
            initialState
        });
    }

    newFamily(event: any) {
        this.bsModalRef = this.modalService.show(FamiliesEditModalComponent, {
            class: 'modal-lg modal-dialog-centered', ignoreBackdropClick: true
        });
    }
}
