import { ConfirmReservationComponent } from './../../pages/results-list/confirm-reservation/confirm-reservation.component';
import { DetailsImmobileComponent } from './../../pages/results-list/details-immobile/details-immobile.component';
import { ResultsListComponent } from './../../pages/results-list/results-list.component';
import { HomeComponent } from './../../pages/home/home.component';
import { Routes } from '@angular/router';
import { NavRoutingComponent } from './nav-routing.component';

export const NavigationRouting: Routes = [
    {
        path: '', component: NavRoutingComponent,
        children: [
            { path: 'tela-inicial', component: HomeComponent },
            { path: 'lista-resultados', component: ResultsListComponent },
            { path: 'detalhe-imovel', component: DetailsImmobileComponent },
            { path: 'confirmar-reserva', component: ConfirmReservationComponent }
        ]
    }
]