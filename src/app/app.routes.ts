import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home/home.component';
import { SobreComponent } from './pages/sobre-page/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos-page/projetos/projetos.component';
import { ContatoComponent } from './pages/contato-page/contato/contato.component';

export const routes: Routes = [
    {path: '', component : HomeComponent, pathMatch:'full'},
    {path:'sobre', component: SobreComponent},
    {path:'projetos', component: ProjetosComponent},
    {path:'contato', component: ContatoComponent}
];
