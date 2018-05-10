import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as Api from '../api/config';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {
    constructor(private httpClient: HttpClient) {

    }

    GetAllProducts(categoryId: number): Observable<Object> {
        return this.httpClient.get(Api.GetFullUrl("categories/" + categoryId));
    }

    GetAllCategories(): Observable<Object> {
        return this.httpClient.get(Api.GetFullUrl("categories"));
    }
}