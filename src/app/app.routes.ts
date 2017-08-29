import { Routes, RouterModule } from '@angular/router';

import { 
    AboutComponent,
    PortafolioComponent,
    ProductoComponent
 } from "./components/index.paginas";

const APP_ROUTES : Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: ProductoComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}
    

];

export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
