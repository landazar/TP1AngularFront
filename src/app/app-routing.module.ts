import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefOrchestreComponent } from './chefOrchestre/chef-orchestre/chef-orchestre.component';
import { SolisteComponent } from './soliste/soliste.component';
import { FormulaireSolisteComponent } from './formulaire-soliste/formulaire-soliste.component';
import { UpdateSolisteComponent } from './update-soliste/update-soliste.component';

const routes: Routes = [
  {path:"listeChefOrchestre",component:ChefOrchestreComponent},
  {path:"soliste", component:SolisteComponent},
  {path:"ajoutSoliste", component:FormulaireSolisteComponent},
  {path:"updateSoliste/:id", component:UpdateSolisteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
