import { Component } from '@angular/core';
import { switchMap, concatMap } from 'rxjs/operators';

// Services
import { DashboardService } from '../../services/dashboard.service';

// Models
import { Category } from '../../models/Category';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dashboard-product',
    templateUrl: './dashboard.product.component.html',
    styleUrls: ['./dashboard.product.component.css']
})
export class DashboardProductcomponent {
    private category: Category;

    constructor(
        private dashboardService: DashboardService,
        private activatedRoute: ActivatedRoute) {
        this.category = null;
    }

    ngOnInit() {
        // Tomamos el id y hacemos una llamada a la API para almacenar la respuesta en category.
    }
}