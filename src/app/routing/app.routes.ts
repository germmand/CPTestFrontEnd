import { Router } from '@angular/router';

// Components
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const routes: Array<Object> = [{ 
        path: 'Dashboard', 
        component: DashboardComponent 
    }, {
        path: '',
        redirectTo: '/Dashboard',
        pathMatch: 'full'
    }
];