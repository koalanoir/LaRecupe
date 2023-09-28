import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendreComponent } from './vendre/vendre.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { RechercheComponent } from './recherche/recherche.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'vendre', component: VendreComponent },
  { path: 'messagerie', component: MessagerieComponent },
  { path: 'recherche', component: RechercheComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
