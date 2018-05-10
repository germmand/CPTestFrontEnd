import { NgModule } from '@angular/core';

// Components
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DashboardProductcomponent } from '../components/dashboardProduct/dashboard.product.component';

// Modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Services
import { DashboardService } from '../services/dashboard.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ], 
    exports: [
        DashboardComponent,
        DashboardProductcomponent
    ],
    declarations: [
        DashboardComponent,
        DashboardProductcomponent
    ],
    providers: [
        DashboardService
    ]
})
export class DashboardModule {

}