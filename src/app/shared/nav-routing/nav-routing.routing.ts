import { DetailOfImmobileComponent } from './../../pages/perfil/immobile/detail-of-immobile/detail-of-immobile.component';
import { PerfilComponent } from './../../pages/perfil/perfil.component';
import { ReservationCompletedComponent } from './../../pages/results-list/confirm-reservation/reservation-completed/reservation-completed.component';
import { SolicitacaoAnfitriaoComponent } from './../../pages/results-list/confirm-reservation/solicitacao-anfitriao/solicitacao-anfitriao.component';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { ConfirmReservationComponent } from './../../pages/results-list/confirm-reservation/confirm-reservation.component';
import { DetailsImmobileComponent } from './../../pages/results-list/details-immobile/details-immobile.component';
import { ResultsListComponent } from './../../pages/results-list/results-list.component';
import { HomeComponent } from './../../pages/home/home.component';
import { Routes } from '@angular/router';
import { NavRoutingComponent } from './nav-routing.component';
import { PaymentComponent } from 'src/app/pages/results-list/confirm-reservation/payment/payment.component';
import { ProfileDataComponent } from 'src/app/pages/perfil/profile-data/profile-data.component';

export const NavigationRouting: Routes = [
    {
        path: '', component: NavbarComponent,
        children: [
            { path: 'tela-inicial', component: HomeComponent },
            { path: 'lista-resultados', component: ResultsListComponent },
            { path: 'detalhe-imovel', component: DetailsImmobileComponent },
            { path: 'confirmar-reserva', component: ConfirmReservationComponent },
            { path: 'pagamento', component: PaymentComponent },
            { path: 'solicitacao-anfitriao', component: SolicitacaoAnfitriaoComponent },
            { path: 'reserva-concluida', component: ReservationCompletedComponent },
            {
                path: 'perfil', loadChildren: () => import('../../pages/perfil/perfil.module').
                    then(m => m.PerfilRoutingModule)
            },


        ]
    }
]