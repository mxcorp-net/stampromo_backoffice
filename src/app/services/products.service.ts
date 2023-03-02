import {Injectable} from '@angular/core';
import {CoreService} from './core.service';
import {Product} from '../_models/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsService implements CoreService {
    constructor(private http: HttpClient) {
    }

    where(query: {}): Observable<Product[]> {
        return this.http.post<Product[]>(environment.api + '/products/where', query);
    }

    add(query: {}): Observable<any> {
        return undefined;
    }

    delete(query: {}): Observable<any> {
        return undefined;
    }

    find(query: {}): Observable<any> {
        return undefined;
    }

    update(query: {}): Observable<any> {
        return undefined;
    }
}
