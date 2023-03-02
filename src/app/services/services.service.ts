import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Services} from '../_models/services';
import {environment} from '../../environments/environment';
import {CoreService} from './core.service';

@Injectable({
    providedIn: 'root'
})
export class ServicesService implements CoreService {

    constructor(private http: HttpClient) {
    }

    where(query: {}): Observable<Services[]> {
        return this.http.post<Services[]>(environment.api + '/services/where', query);
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
