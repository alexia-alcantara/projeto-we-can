import { AvaliationsReceivedComponent } from './avaliations-received/avaliations-received.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { RequestSwapComponent } from './request-swap/request-swap.component';
import { PerfilComponent } from "./perfil.component";
import { Routes } from "@angular/router";
import { HistoricComponent } from './historic/historic.component';

export const PerfilRouting: Routes = [
    {
        path: '', component: PerfilComponent,
        children: [
            { path: '', redirectTo: 'dados-perfil', pathMatch: 'full' },
            { path: 'dados-perfil', component: ProfileDataComponent },
            { path: 'solicitacoes-troca', component: RequestSwapComponent },
            {
                path: 'meus-imoveis', loadChildren: () => import('../../pages/perfil/immobile/immobile.module').
                    then(m => m.ImmobileModule)
            },
            {
                path: 'minhas-trocas', loadChildren: () => import('../../pages/perfil/my-swaps/my-swaps.module').
                    then(m => m.MySwapsModule)
            },
            { path: 'avaliacoes-recebidas', component: AvaliationsReceivedComponent },
            { path: 'historico', component: HistoricComponent }

        ]
    }
]