import { Routes, RouterModule } from '@angular/router';

import { 
    AboutComponent,
    PortafolioComponent,
    ProductoComponent,
    BuscarComponent
 } from "./components/index.paginas";

const APP_ROUTES : Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'buscar/:termino', component: BuscarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
    

];

export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
