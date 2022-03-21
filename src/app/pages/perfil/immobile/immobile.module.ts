import { DetailOfImmobileComponent } from './detail-of-immobile/detail-of-immobile.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImmobileRoutes } from './immobile.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImmobileComponent } from './immobile.component';

import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [
        ImmobileComponent,
        DetailOfImmobileComponent
    ],
    imports: [
        ButtonModule,
        BsDatepickerModule,
        CardModule,
        CommonModule,
        CheckboxModule,
        DropdownModule,
        FormsModule,
        SelectButtonModule,
        ReactiveFormsModule,
        TableModule,
        RouterModule.forChild(ImmobileRoutes)
    ]
})

export class ImmobileModule { }