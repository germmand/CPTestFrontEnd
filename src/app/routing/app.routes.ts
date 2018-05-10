import { Router } from '@angular/router';

// Components
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DashboardProductcomponent } from '../components/dashboardProduct/dashboard.product.component';

export const routes: Array<Object> = [{ 
        path: 'Dashboard', 
        component: DashboardComponent 
    }, {
        path: 'Products/:id',
        component: DashboardProductcomponent
    }, {
        path: '',
        redirectTo: '/Dashboard',
        pathMatch: 'full'
    }
];