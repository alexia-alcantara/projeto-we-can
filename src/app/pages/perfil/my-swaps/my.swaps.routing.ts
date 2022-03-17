import { SwapDetailsComponent } from './swap-details/swap-details.component';
import { MySwapsComponent } from './my-swaps.component';
import { Routes } from "@angular/router";

export const MySwapsRoutes: Routes = [
    { path: '', component: MySwapsComponent },
    { path: 'detalhe-da-troca', component: SwapDetailsComponent }

]