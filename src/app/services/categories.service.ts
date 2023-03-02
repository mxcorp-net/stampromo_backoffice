import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../_models/category";
import {environment} from "../../environments/environment";
import {CoreService} from "./core.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements CoreService{

  constructor(private http: HttpClient) {
  }

  where(query: {}): Observable<Category[]> {
    return this.http.get<Category[]>(environment.api + '/categories/where', query);
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
