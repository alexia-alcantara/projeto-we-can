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
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';
import { SwapRealizedComponent } from './swap-realized/swap-realized.component';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
    declarations: [
        MySwapsComponent,
        SwapDetailsComponent,
        SwapRealizedComponent,
    ],
    imports: [
        ButtonModule,
        CardModule,
        CommonModule,
        DropdownModule,
        ImageModule,
        InputTextareaModule,
        FormsModule,
        NgxStarRatingModule,
        ReactiveFormsModule,
        RatingModule,
        RouterModule.forChild(MySwapsRoutes)
    ]
})

export class MySwapsModule { }