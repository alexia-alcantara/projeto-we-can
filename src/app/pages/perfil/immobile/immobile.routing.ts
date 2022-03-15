import { DetailOfImmobileComponent } from './detail-of-immobile/detail-of-immobile.component';
import { ImmobileComponent } from "./immobile.component";
import { Routes } from "@angular/router";

export const ImmobileRoutes: Routes = [
    // { path: 'meus-imoveis', component: ImmobileComponent },
    {
        path: '', component: ImmobileComponent,
        children: [
            { path: 'detalhe-do-imovel', component: DetailOfImmobileComponent }
        ]
    }
]