import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImmobileRoutes } from './immobile.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ImmobileRoutes)
    ]
})

export class ImmobileModule { }