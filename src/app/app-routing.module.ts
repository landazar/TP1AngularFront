import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefOrchestreComponent } from './chefOrchestre/chef-orchestre/chef-orchestre.component';

const routes: Routes = [
  {path:"listeChefOrchestre",component:ChefOrchestreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
