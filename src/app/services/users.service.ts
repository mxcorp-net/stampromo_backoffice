import {Injectable} from '@angular/core';
import {User} from '../_models/user';
import {HttpClient} from '@angular/common/http';
import {CoreService} from './core.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService implements CoreService {
    constructor(private http: HttpClient) {
    }

    where(query: {}): Observable<User[]> {
        return undefined;
    }

    add(query: {}): Observable<User[]> {
        return undefined;
    }

    delete(query: {}): Observable<User> {
        return undefined;
    }

    find(query: {}): Observable<User> {
        return undefined;
    }

    update(query: {}): Observable<User> {
        return undefined;
    }
}
