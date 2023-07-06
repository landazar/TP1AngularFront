import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterOeuvreComponent } from './ajouter-oeuvre/ajouter-oeuvre.component';

const routes: Routes = [
  {path:"ajoutOeuvre", component:AjouterOeuvreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
