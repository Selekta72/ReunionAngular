import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {CollaborateurComponent} from './components/collaborateur/collaborateur.component';


const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full'},
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'collaborateur', component: CollaborateurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
