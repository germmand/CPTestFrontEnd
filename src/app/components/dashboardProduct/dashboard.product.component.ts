import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';

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
        this.activatedRoute.paramMap.pipe(
            // Acá habría que hacer validaciones.
            // En caso de que el usuario modifique la URL y introduzca una categoría no válida.
            switchMap(params => this.dashboardService.GetAllProducts(Number(params.get("id"))))
        ).subscribe((category: Category) => {
            // Category contiene los productos ya cargados.
            this.category = category;
        });
    }
}