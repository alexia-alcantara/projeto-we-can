import { PerfilComponent } from './perfil.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PerfilRouting } from "./perfil.routing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestSwapComponent } from './request-swap/request-swap.component';

// *PRIMENG*//
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { DetailOfImmobileComponent } from './immobile/detail-of-immobile/detail-of-immobile.component';

@NgModule({
    declarations: [
        PerfilComponent,
        RequestSwapComponent,
        ProfileDataComponent,
    ],
    imports: [
        ButtonModule,
        CommonModule,
        CardModule,
        DropdownModule,
        FormsModule,
        TableModule,
        ReactiveFormsModule,
        SelectButtonModule,
        RouterModule.forChild(PerfilRouting)
    ]
})
export class PerfilRoutingModule { }