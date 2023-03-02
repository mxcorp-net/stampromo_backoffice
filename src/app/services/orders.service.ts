import {Injectable} from '@angular/core';
import {CoreService} from './core.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OrdersService implements CoreService {
    private url: string = environment.api;

    constructor(private http: HttpClient) {
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

    where(query: {}): Observable<any> {
        return undefined;
    }
}
