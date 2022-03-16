import { ProfileDataComponent } from './profile-data/profile-data.component';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { DetailOfImmobileComponent } from './immobile/detail-of-immobile/detail-of-immobile.component';
import { ImmobileComponent } from './immobile/immobile.component';
import { RequestSwapComponent } from './request-swap/request-swap.component';
import { PerfilComponent } from "./perfil.component";
import { Routes } from "@angular/router";

export const PerfilRouting: Routes = [
    {
        path: '', component: PerfilComponent,
        children: [
            { path: 'dados-perfil', component: ProfileDataComponent },
            { path: 'solicitacoes-troca', component: RequestSwapComponent },
            {
                path: 'meus-imoveis', loadChildren: () => import('../../pages/perfil/immobile/immobile.module').
                    then(m => m.ImmobileModule)
            },
            {
                path: 'minhas-trocas', loadChildren: () => import('../../pages/perfil/my-swaps/my-swaps.module').
                    then(m => m.MySwapsModule)
            }

        ]
    }
]