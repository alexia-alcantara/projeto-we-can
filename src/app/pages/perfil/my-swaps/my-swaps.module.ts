import { MySwapsComponent } from './my-swaps.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { MySwapsRoutes } from './my.swaps.routing';
import { SwapDetailsComponent } from './swap-details/swap-details.component';

@NgModule({
    declarations: [
        MySwapsComponent,
        SwapDetailsComponent,
    ],
    imports: [
        ButtonModule,
        CardModule,
        CommonModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(MySwapsRoutes)
    ]
})

export class MySwapsModule { }