import {Injectable} from '@angular/core';
import {CoreService} from './core.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Provider} from '../_models/provider';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProvidersService implements CoreService {
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
        return this.http.post<Provider[]>(environment.api + '/providers/where', query);
    }

    constructor(private http: HttpClient) {
    }
}
