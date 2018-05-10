import { Component } from '@angular/core';
import { IGridData } from '../../interfaces/IGridData';

import { Category } from '../../models/Category';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements IGridData<Category> {
    constructor() {

    }

    ngOnInit() {
        
    }

    GetGridHeader(): string[] {
        return ["Name", "Products", "Actions"];
    }

    GetGridData(): Category[] {
        return [{
            CategoryId: 1,
            CategoryName: "Electronics"
        }];
    }

    // Row's events.
    //--------------
    OnGetAllProducts(categoryId: number) {
        alert("Listed");
    }

    OnDeleteCategory(categoryId: number) {
        alert("Deleted");
    }
}