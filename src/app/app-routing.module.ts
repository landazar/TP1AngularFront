import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterOeuvreComponent } from './ajouter-oeuvre/ajouter-oeuvre.component';
import { ChefOrchestreComponent } from './chefOrchestre/chef-orchestre/chef-orchestre.component';
import { SolisteComponent } from './soliste/soliste.component';
import { UpdateSolisteComponent } from './update-soliste/update-soliste.component';
import { FormulaireSolisteComponent } from './formulaire-soliste/formulaire-soliste.component';

const routes: Routes = [
  {path:"ajoutOeuvre", component:AjouterOeuvreComponent},
  {path:"listeChefOrchestre", component:ChefOrchestreComponent},
  {path:"soliste", component:SolisteComponent},
  {path:"formulaireSoliste", component:FormulaireSolisteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
