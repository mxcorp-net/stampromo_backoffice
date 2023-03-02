import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalRef, ModalDirective} from 'ngx-bootstrap';
import {Product} from '../../../_models/product';
import {Family} from '../../../_models/family';
import {FamiliesService} from '../../../services/families.service';
import {Provider} from '../../../_models/provider';
import {ProvidersService} from '../../../services/providers.service';

@Component({
    selector: 'app-products-edit-modal',
    templateUrl: './products-edit-modal.component.html',
    styleUrls: ['./products-edit-modal.component.scss']
})
export class ProductsEditModalComponent implements OnInit {
    product: Product = new Product();
    title: string;
    families: Family[];
    providers: Provider[];

    constructor(
        public bsModalRef: BsModalRef,
        private familiesService: FamiliesService,
        private providersService: ProvidersService) {
    }

    ngOnInit() {
        this.title = this.product.id > 0 ? 'Edit Product' : 'New Product';
        this.familiesService.where({}).subscribe(data => {
            this.families = data;
        });
        this.providersService.where({}).subscribe(data => {
            this.providers = data;
        });

    }
}
