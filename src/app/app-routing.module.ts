import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterOeuvreComponent } from './ajouter-oeuvre/ajouter-oeuvre.component';


const routes: Routes = [
  { path: 'ajouterOeuvre', component: AjouterOeuvreComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
