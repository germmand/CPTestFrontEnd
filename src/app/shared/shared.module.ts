import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatTableModule
    ]
})
export class SharedModule {
}