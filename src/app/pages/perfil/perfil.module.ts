import { PerfilComponent } from './perfil.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PerfilRouting } from "./perfil.routing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestSwapComponent } from './request-swap/request-swap.component';

// *PRIMENG*//
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { AvaliationsReceivedComponent } from './avaliations-received/avaliations-received.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
    declarations: [
        PerfilComponent,
        RequestSwapComponent,
        ProfileDataComponent,
        AvaliationsReceivedComponent,
    ],
    imports: [
        ButtonModule,
        CommonModule,
        CardModule,
        DialogModule,
        DropdownModule,
        FormsModule,
        NgxStarRatingModule,
        TableModule,
        InputTextareaModule,
        ReactiveFormsModule,
        SelectButtonModule,
        RouterModule.forChild(PerfilRouting)
    ]
})
export class PerfilRoutingModule { }