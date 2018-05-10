import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Routes
import { routes } from '../routing/app.routes';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {
            enableTracing: true // Para motivos de desarrollo, en producción debe ser falso.
        })
    ],
    exports: [
        BrowserAnimationsModule,
        RouterModule
    ]
})
export class CoreModule {
}