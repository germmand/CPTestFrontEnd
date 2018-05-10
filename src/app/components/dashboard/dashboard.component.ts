import { Component } from '@angular/core';
import { IGridData } from '../../interfaces/IGridData';

import { Category } from '../../models/Category';
import { DashboardService } from '../../services/dashboard.service';

import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements IGridData<Category> {
    private CategoryData: Category[];

    constructor(
        private dashboardService: DashboardService,
        private router: Router) {
        this.CategoryData = [];
    }

    ngOnInit() {
        this.dashboardService.GetAllCategories().subscribe(res => {
            this.CategoryData = res as Category[];
        }, err => {
            // Colocar un Pop-up o un Tooltip informando el error acá...
            console.log(err);
        });
    }

    GetGridHeader(): string[] {
        return ["Name", "Products", "Actions"];
    }

    GetGridData(): Category[] {
        return this.CategoryData;
    }

    // Row's events.
    //--------------
    OnGetAllProducts(categoryId: number) {
        this.router.navigate(['/Products/' + categoryId]);
    }

    OnDeleteCategory(categoryId: number) {
        alert("Deleted");
    }
}